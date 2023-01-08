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
import UserForm from './UserForm';
import RoleForm from './RoleForm';

const UserEdit = () => {
    const { user_id } = useParams()

    const is_autenticated = localStorage.getItem("is_autenticated")
    const token = localStorage.getItem("token")
    const apiUrl = localStorage.getItem("apiurl")
    const [file, setFile] = useState("")

    const [userData, setUserData] = useState({
        id: null,
        email: null,
        first_name: null,
        last_name: null,
        password: null,
        active: 0,
        password_confirmation: null,
    })




    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)
    const navigate = useNavigate()


    const getUser = () => {
        if (token && user_id) {
            const config = {
                headers:
                {
                    Authorization: `${token}`,
                    Accept: 'application/json',
                }
            }

            axios.get(apiUrl + 'users/' + user_id, config)
                .then((response) => {
                    setUserData(
                        {
                            id: response.data.id,
                            email: response.data.email,
                            first_name: response.data.first_name,
                            last_name: response.data.last_name,
                            active: response.data.active,
                            password: null,
                            password_confirmation: null,
                            role: response.data.role,
                            role_ids: response.data.role_ids,
                            created_at: response.data.created_at,
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

        getUser()

    }, [userData.id, user_id])

    return (
        <>
            {autenticatedUser.id && !autenticatedUser.permissions.includes('admin-users-profile') &&
                <Error403 />
            }
            {autenticatedUser.id && autenticatedUser.permissions.includes('admin-users-profile') &&
                <AdminLayout>
                    <section role="main" className="content-body">
                        <MainHeader >
                            {user_id ?
                                "Editar usuario"
                                :
                                "Nuevo Usuario"
                            }
                        </MainHeader>
                        {/* start: page */}
                        <div className="row">
                            {user_id &&
                                <div className="col-12 col-md-3">
                                    <section className="card">
                                        <div className="card-body">
                                            <div className="thumb-info mb-3">
                                                <div id="fileOutput">
                                                    {userData.photo ?
                                                        <img src={userData.photo} className="rounded img-fluid" alt="Newal Medina" />

                                                        :
                                                        <img src={process.env.PUBLIC_URL + "/assets/admin/img/!logged-user.jpg"} className="rounded img-fluid" alt="Newal Medina" />

                                                    }
                                                </div>
                                                <div className="thumb-info-title">
                                                    <span className="thumb-info-inner">{userData.first_name} {userData.last_name}</span>
                                                    <span className="thumb-info-type"> {userData.role}</span>
                                                </div>
                                            </div>
                                            <div id="remove" className="text-danger" style={{ display: 'none', cursor: 'pointer', textAlign: 'center' }}><i className="fa fa-times" aria-hidden="true" /> Quitar imagen </div>
                                            <hr className="dotted short" />
                                            <h5 className="mb-2 mt-3">  Acerca de</h5>
                                            <p className="text-2">
                                                Miembro desde el  {userData.created_at}
                                            </p>
                                        </div>
                                    </section>
                                </div>
                            }

                            <div

                                className={user_id ? 'col-12 col-md-9' : 'col-12 '}>
                                <section className="card form-wizard" id="w2">
                                    <div className="tabs">
                                        <ul className="nav nav-tabs nav-justify wizard-steps wizard-steps-style-2">
                                            <li className="nav-item ">
                                                <a href="#tab_1" data-bs-toggle="tab" className="nav-link text-center">
                                                    <span className="badge badge-primary">1</span>
                                                    Información personal
                                                </a>
                                            </li>
                                            {user_id &&
                                                <li className="nav-item">
                                                    <a href="#tab_2" data-bs-toggle="tab" className="nav-link text-center">
                                                        <span className="badge badge-primary">2</span>
                                                        Roles
                                                    </a>
                                                </li>
                                            }

                                        </ul>
                                        <div className="tab-content">
                                            <div id="tab_1" className="tab-pane p-3 active">
                                                <UserForm user={userData} />
                                            </div>
                                            {user_id &&
                                                <div id="tab_2" className="tab-pane p-3">
                                                    <RoleForm user={userData} />
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

export default UserEdit