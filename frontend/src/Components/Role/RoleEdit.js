import React, { useState, useEffect, useContext } from 'react'
import Swal from 'sweetalert2'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { generate } from '@wcj/generate-password';

import { useParams } from 'react-router-dom';
import MainHeader from "../Layouts/Admin/MainHeader"
import AdminLayout from '../Layouts/Admin/Default'
import { UserContext } from "../../Context"
import Error403 from '../ErrorPages/Error403'
import RoleForm from './RoleForm';
import PermissionForm from './PermissionForm';

const RoleEdit = () => {
    const { role_id } = useParams()

    const is_autenticated = localStorage.getItem("is_autenticated")
    const token = localStorage.getItem("token")
    const apiUrl = localStorage.getItem("apiurl")

    const [roleData, setRoleData] = useState({
        id: null,
        display_name: null,
        description: null,
        active: 0,
    })




    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)
    const navigate = useNavigate()


    const getRole = () => {
        if (token && role_id) {
            const config = {
                headers:
                {
                    Authorization: `${token}`,
                    Accept: 'application/json',
                }
            }

            axios.get(apiUrl + 'roles/' + role_id, config)
                .then((response) => {
                    setRoleData(
                        {
                            id: response.data.id,
                            display_name: response.data.display_name,
                            description: response.data.description,
                            active: response.data.active,
                            selected_permissions: response.data.selected_permission,

                        }
                    )

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
        getRole()
    }, [roleData.id, role_id])

    return (
        <>
            {autenticatedUser.id && !autenticatedUser.permissions.includes('admin-roles') &&
                <Error403 />
            }
            {autenticatedUser.id && autenticatedUser.permissions.includes('admin-roles') &&
                <AdminLayout>
                    <section role="main" className="content-body">
                        <MainHeader >
                            {role_id ?
                                "Editar role"
                                :
                                "Nuevo role"
                            }
                        </MainHeader>
                        {/* start: page */}
                        <div className="row">


                            <div

                                className='col-12 ' >
                                <section className="card form-wizard" id="w2">
                                    <div className="tabs">
                                        <ul className="nav nav-tabs nav-justify wizard-steps wizard-steps-style-2">
                                            <li className="nav-item ">
                                                <a href="#tab_1" data-bs-toggle="tab" className="nav-link text-center">
                                                    <span className="badge badge-primary">1</span>
                                                    Información Básica
                                                </a>
                                            </li>
                                            {role_id &&
                                                <li className="nav-item">
                                                    <a href="#tab_2" data-bs-toggle="tab" className="nav-link text-center">
                                                        <span className="badge badge-primary">2</span>
                                                        Permisos
                                                    </a>
                                                </li>
                                            }

                                        </ul>
                                        <div className="tab-content">
                                            <div id="tab_1" className="tab-pane p-3 active">
                                                <RoleForm role={roleData} />
                                            </div>
                                            {role_id &&
                                                <div id="tab_2" className="tab-pane p-3">
                                                    <PermissionForm role={roleData} />
                                                </div>
                                            }
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

export default RoleEdit