import React, { useState, useEffect, useContext } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import Error from '../Includes/Error';
import Success from '../Includes/Success'
import Swal from 'sweetalert2';
import { UserContext } from '../../Context';

const PermissionForm = ({ role }) => {

    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)
    const token = localStorage.getItem("token")
    const apiUrl = localStorage.getItem("apiurl")
    const [selectedPermission, setSelectedPermission] = useState([])
    const [permissionList, setPermissionList] = useState([])


    const submitPermissionForm = async (e) => {
        e.preventDefault()

        if (selectedPermission.length == 0) {
            Swal.fire({

                icon: "error",
                title: "Debes seleccionar almenos un permiso para poder continuar",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            })

            return false;
        }

        let data = {
            permission_ids: selectedPermission
        }

        const config = {
            headers:
            {
                Authorization: `${token}`,
                Accept: 'application/json',
            }
        }

        await axios.patch(apiUrl + 'roles/update-permissions/' + role.id,
            data,
            config)
            .then((response) => {
                console.log(response.data)
                Success("Registro guardado Correctamente")
                IsAutenticated()
            }).catch((error) => {
                console.log(error)
                Error('Ha ocurrido un error')
            })

    }

    const getPermissions = () => {

        const config = {
            headers:
            {
                Authorization: `${token}`,
                Accept: 'application/json',

            }
        }
        axios
            .get(apiUrl + 'roles/get-permissions/' + role.id,
                config)
            .then((response) => {
                setPermissionList(response.data)
                setSelectedPermission(role.selected_permissions)

            }).catch((error) => {
            })


    }

    const selectPermission = (id) => {
        var resultado = [];

        if (selectedPermission.includes(id)) {

            resultado = selectedPermission.filter(item => item !== id);

        } else {
            resultado = [...selectedPermission, id];

        }

        setSelectedPermission(resultado)
        console.log(selectedPermission.length)
    }

    const IsAutenticated = () => {
        if (token) {
            const config = {
                headers:
                {
                    Authorization: `${token}`,
                    Accept: 'application/json',
                }
            }

            axios.get(apiUrl + 'auth/user', config)
                .then((response) => {
                    setAutenticatedUser(response.data)

                    return true
                }).catch((error) => {
                    console.log(error)
                    return false
                });
        }
    }
    useEffect(() => {
        getPermissions()
    }, [role])
    return (
        <>


            <form id="PermissionForm"
                onSubmit={submitPermissionForm}
                noValidate="novalidate" >
                <div className="card-body">
                    {
                        permissionList.map((permission) =>
                            permission.parent_id &&
                            <div key={permission.permissions_id}>
                                <span className='me-2' onClick={() => selectPermission(permission.permissions_id)}>

                                    {selectedPermission.includes(permission.permissions_id) ?
                                        <input

                                            defaultChecked

                                            type="checkbox"
                                            value={permission.permissions_id} />
                                        :
                                        <input
                                            type="checkbox"
                                            value={permission.permissions_id} />
                                    }
                                </span>

                                {permission.permission_display_name}
                                <br />
                            </div>

                        )
                    }

                </div>
                <div className="card-footer ">
                    <div className='d-flex justify-content-between '>
                        <Link className="btn btn-default" to='/admin/roles'>Cancelar</Link>
                        <button
                            type="submit"
                            className="btn btn-success"

                        >Guardar</button>

                    </div>
                </div>
            </form>

        </>
    )
}

export default PermissionForm