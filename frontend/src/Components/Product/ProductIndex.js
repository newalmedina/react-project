import React, { useState, useEffect, useContext } from 'react'
import Swal from 'sweetalert2'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

import MainHeader from "../Layouts/Admin/MainHeader"
import AdminLayout from '../Layouts/Admin/Default'
import { UserContext } from "../../Context"
import Error403 from '../ErrorPages/Error403'

import { DataGrid, GridRowParams, GridColDef, GridValueGetterParams, GridRowHeightParams } from '@mui/x-data-grid';
import Success from '../Includes/Success'
import Error from '../Includes/Error'

const ProductIndex = () => {
    const navigate = useNavigate()

    const is_autenticated = localStorage.getItem("is_autenticated")
    const token = localStorage.getItem("token")
    const apiUrl = localStorage.getItem("apiurl")

    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)

    const [data, setData] = useState([]);
    const [selectedRowsData, setselectedRowsData] = useState([]);

    const onRowsSelectionHandler = (ids) => {
        setselectedRowsData(ids.map((id) => data.find((row) => row.id === id)))
    };


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

                        axios.get(apiUrl + 'products/change-state/' + params.id, config)
                            .then((response) => {
                                getProducts()
                            }).catch((error) => {
                                Error("error al acceder al listado")
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
        { field: 'name', headerName: 'Nombre', minWidth: '350' },
        { field: 'category', headerName: 'Categoría', minWidth: '150' },
        { field: 'description', headerName: 'Descripción', minWidth: '450' },
        {
            field: 'action',
            headerName: 'Acciones',
            width: 150,
            sortable: false,
            disableClickEventBubbling: false,

            renderCell: (params) => {                // don't select this row after clicking
                const deleteProduct = (e) => {
                    e.stopPropagation()
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

                                axios.delete(apiUrl + 'products/' + params.id, config)
                                    .then((response) => {
                                        getProducts()
                                        Success("Registro eliminado correctamente")

                                    }).catch((error) => {
                                        Error("Error al intentar eliminar")
                                        return false
                                    })
                            }
                        }
                    })

                }
                const editProduct = (e) => {
                    e.stopPropagation();
                    navigate("/admin/products/edit/" + params.id)

                }

                return (

                    <>
                        <button className='btn btn-info btn-sm me-1' color="warning" size="small" onClick={editProduct}>
                            <i className="fas fa-edit" aria-hidden="true"></i>
                        </button>

                        <button className='btn btn-danger btn-sm' color="error" size="small" onClick={deleteProduct}>
                            <i className="fas fa-trash" aria-hidden="true"></i>
                        </button>
                    </>

                );
            },
        }
    ])

    const getProducts = () => {
        if (token) {
            const config = {
                headers:
                {
                    Authorization: `${token}`,
                    Accept: 'application/json',
                }
            }

            axios.get(apiUrl + 'products', config)
                .then((response) => {
                    setData(response.data)
                }).catch((error) => {
                    console.log(error)
                    Error('Ha ocurrido un error')
                    return false
                })
        }
    }

    useEffect(() => {
        if (!is_autenticated) {
            navigate("/")
        }
        getProducts()

    }, [])

    return (
        <>
            {autenticatedUser.id && !autenticatedUser.active && !autenticatedUser.permissions.includes('admin-products') &&
                <Error403 />
            }
            {autenticatedUser.id && autenticatedUser.active && autenticatedUser.permissions.includes('admin-products') &&
                <AdminLayout>
                    <section role="main" className="content-body">
                        <MainHeader >
                            Gestión Productos
                        </MainHeader>
                        {/* start: page */}
                        <div className="row">
                            <div className="col-sm-12">
                                <section className="card">
                                    <div className="card-header">
                                        <h2 className="card-title">Listado Productos</h2>
                                    </div>
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-sm-12 d-flex justify-content-end pb-4'>

                                                <Link className="btn btn-success" to='/admin/products/create'> <i className="fas fa-plus"></i> Nuevo Producto</Link>
                                            </div>
                                        </div>

                                        <div style={{ height: "100%", width: '100%' }} className="ag-theme-alpine">
                                            <DataGrid
                                                autoHeight
                                                autoWidth
                                                rows={data}
                                                onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
                                                columns={columnDefs}
                                                pageSize={25}
                                                rowsPerPageOptions={[5, 10, 20]}

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

export default ProductIndex