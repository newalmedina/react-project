import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { generate } from '@wcj/generate-password';

import { useForm } from "react-hook-form"
import Error from '../Includes/Error';
import Success from '../Includes/Success'
import Swal from 'sweetalert2';

const RoleForm = ({ user }) => {


    const token = localStorage.getItem("token")
    const apiUrl = localStorage.getItem("apiurl")

    const [userRole, setUserRole] = useState([])
    const [rolesList, setRolesList] = useState([])


    const submitRoleForm = async (e) => {
        e.preventDefault()

        if (userRole.length == 0) {
            Swal.fire({

                icon: "error",
                title: "Debes seleccionar almenos un rol para poder continuar",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            })

            return false;
        }
        let data = {
            role_ids: userRole
        }

        const config = {
            headers:
            {
                Authorization: `${token}`,
                Accept: 'application/json',
            }
        }

        await axios.patch(apiUrl + 'users/update-role/' + user.id,
            data,
            config)
            .then((response) => {
                console.log(response.data)
                Success("Registro guardado Correctamente")
            }).catch((error) => {
                console.log(error)
                Error('Ha ocurrido un error')
            })

    }

    const getRoles = () => {

        const config = {
            headers:
            {
                Authorization: `${token}`,
                Accept: 'application/json',

            }
        }
        axios
            .get(apiUrl + 'roles/get-actives',
                config)
            .then((response) => {
                setRolesList(response.data)
                setUserRole(user.role_ids)
                console.log(userRole)
            }).catch((error) => {
            })


    }


    const selectRole = (id) => {
        var resultado = [];

        if (userRole.includes(id)) {

            resultado = userRole.filter(item => item !== id);

        } else {
            resultado = [...userRole, id];

        }

        setUserRole(resultado)
    }

    useEffect(() => {
        setUserRole(user.role_ids)
        if (rolesList.length == 0) {
            getRoles()

        }
    }, [user.id])
    return (
        <>


            <form id="roleForm"
                onSubmit={submitRoleForm}
                noValidate="novalidate" >

                <div className="card-body">
                    <div className="row">
                        {
                            rolesList.map((role) =>
                                <div className={userRole && userRole.includes(role.id) ? "col-sm-4 card-success" : "col-sm-4"}
                                    key={role.id}
                                    onClick={() => selectRole(role.id)}
                                >

                                    <section className="card  mb-4   card-default @endif">
                                        <header className="card-header text-center">
                                            <h2 className="card-title">{role.display_name}</h2>
                                        </header>
                                        <div className="card-body">
                                            <div className="row d-flex text-center">
                                                <div className="col-12 col-md-12 mb-2"> <i className="fas fa-user-plus fa-4x"></i></div>
                                                <div className="col-12 col-md-12">{role.description}</div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                            )
                        }

                    </div>

                </div>
                <div className="card-footer ">
                    <div className='d-flex justify-content-between '>
                        <Link className="btn btn-default" to='/admin/users'>Cancelar</Link>
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

export default RoleForm