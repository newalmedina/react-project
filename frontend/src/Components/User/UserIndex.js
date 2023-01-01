import React, { useState, useEffect, useContext } from 'react'
import Swal from 'sweetalert2'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

import MainHeader from "../Layouts/Admin/MainHeader"
import AdminLayout from '../Layouts/Admin/Default'
import { UserContext } from "../../Context"
import Error403 from '../ErrorPages/Error403'

import { DataGrid, GridRowParams, GridColDef, GridValueGetterParams, GridRowHeightParams } from '@mui/x-data-grid';

const UserIndex = () => {
    const navigate = useNavigate()

    const is_autenticated = localStorage.getItem("is_autenticated")
    const token = localStorage.getItem("token")
    const apiUrl = localStorage.getItem("apiurl")

    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)

    const [data, setData] = useState([]);

    const [columnDefs] = useState([

        {
            field: 'active',
            headerName: 'Activo',
            width: 100,
            sortable: false,
            disableClickEventBubbling: false,

            renderCell: (params) => {                // don't select this row after clicking
                const changeState = (e) => {
                    if (token) {
                        const config = {
                            headers:
                            {
                                Authorization: `${token}`,
                                Accept: 'application/json',
                            }
                        }

                        axios.get(apiUrl + 'users/change-state/' + params.id, config)
                            .then((response) => {
                                getUsers()
                            }).catch((error) => {
                                Swal.fire({
                                    position: "top-end",
                                    toast: true,
                                    icon: 'error',
                                    title: 'Ha ocurrido un error',
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true
                                })
                                return false
                            })
                    }
                }
                const is_active = params.row.active
                const is_active_icon = params.row.active ? 'fas fa-eye' : 'fas fa-eye-slash'
                const btn_color = params.row.active ? 'btn btn-success btn-sm me-1' : 'btn btn-danger btn-sm me-1'

                return (

                    <>
                        <button className={btn_color} onClick={changeState}>
                            <i className={is_active_icon}></i>
                        </button>
                    </>

                );
            },
        },
        { field: 'full_name', headerName: 'Nombre', minWidth: '600' },
        { field: 'email', headerName: 'Email', minWidth: '400' },
        {
            field: 'action',
            headerName: 'Acciones',
            width: 150,
            sortable: false,
            disableClickEventBubbling: false,

            renderCell: (params) => {                // don't select this row after clicking
                const deleteUser = (e) => {
                    e.stopPropagation();
                    Swal.fire({
                        title: '<small>¿Seguro que quieres eliminar este registro?</small>',
                        showDenyButton: true,
                        confirmButtonText: 'Eliminar',
                        denyButtonText: `Cancelar`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            if (token) {
                                const config = {
                                    headers:
                                    {
                                        Authorization: `${token}`,
                                        Accept: 'application/json',
                                    }
                                }

                                axios.delete(apiUrl + 'users/' + params.id, config)
                                    .then((response) => {
                                        getUsers()
                                        Swal.fire({
                                            position: "top-end",
                                            toast: true,
                                            icon: 'success',
                                            title: 'Registro eliminado correctamente',
                                            showConfirmButton: false,
                                            timer: 3000,
                                            timerProgressBar: true
                                        })

                                    }).catch((error) => {
                                        Swal.fire({
                                            position: "top-end",
                                            toast: true,
                                            icon: 'error',
                                            title: 'Ha ocurrido un error',
                                            showConfirmButton: false,
                                            timer: 3000,
                                            timerProgressBar: true
                                        })
                                        return false
                                    })
                            }
                        }
                    })

                }
                const editUser = (e) => {
                    e.stopPropagation();
                    navigate("/admin/users/" + params.id)

                }

                return (

                    <>
                        <button className='btn btn-info btn-sm me-1' color="warning" size="small" onClick={editUser}>
                            <i className="fas fa-edit" aria-hidden="true"></i>
                        </button>
                        <button className='btn btn-danger btn-sm' color="error" size="small" onClick={deleteUser}>
                            <i className="fas fa-trash" aria-hidden="true"></i>
                        </button>
                    </>

                );
            },
        }

        /*{
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>
                `<button></button>`,
        },*/
    ])

    const getUsers = () => {
        if (token) {
            const config = {
                headers:
                {
                    Authorization: `${token}`,
                    Accept: 'application/json',
                }
            }

            axios.get(apiUrl + 'users', config)
                .then((response) => {
                    setData(response.data)
                }).catch((error) => {
                    console.log(error)
                    return false
                })
        }
    }



    useEffect(() => {
        if (!is_autenticated) {
            navigate("/")
        }
        getUsers()

    }, [])

    return (
        <>
            {autenticatedUser.id && !autenticatedUser.permissions.includes('admin-users') &&
                <Error403 />
            }
            {autenticatedUser.id && autenticatedUser.permissions.includes('admin-users') &&
                <AdminLayout>
                    <section role="main" className="content-body">
                        <MainHeader >
                            Gestión Usuarios
                        </MainHeader>
                        {/* start: page */}
                        <div className="row">
                            <div className="col-sm-12">
                                <section className="card">
                                    <div className="card-header">
                                        <h2 className="card-title">Listado Usuarios</h2>
                                    </div>
                                    <div className="card-body">

                                        <div style={{ height: "100%", width: '100%' }} className="ag-theme-alpine">
                                            <DataGrid
                                                autoHeight
                                                autoWidth
                                                rows={data}
                                                columns={columnDefs}
                                                pageSize={25}
                                                rowsPerPageOptions={[5, 10, 20]}
                                                //checkboxSelection
                                                //  disableSelectionOnClick
                                                experimentalFeatures={{ newEditingApi: true }}

                                            />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        {/* end: page */}
                    </section>
                </AdminLayout>
            }

        </>
    )
}

export default UserIndex