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
import { useForm } from "react-hook-form"
import UserForm from './UserForm';

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
        password_confirmation: null,
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        reset,
    } = useForm()


    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)
    const navigate = useNavigate()


    const getUser = async () => {
        if (token) {
            const config = {
                headers:
                {
                    Authorization: `${token}`,
                    Accept: 'application/json',
                }
            }

            await axios.get(apiUrl + 'users/' + user_id, config)
                .then((response) => {
                    setUserData(
                        {
                            id: response.data.id,
                            email: response.data.email,
                            first_name: response.data.first_name,
                            last_name: response.data.last_name,
                            password: null,
                            password_confirmation: null
                        }
                    )

                }).catch((error) => {
                    console.log(error)
                    return false
                })
        }
    }

    const IsAutenticated = () => {

        const config = {
            headers:
            {
                Authorization: `${token}`,
                Accept: 'application/json',
            }
        }

        if (token) {
            axios.get(apiUrl + 'auth/user', config)
                .then((response) => {

                    setAutenticatedUser(response.data)
                    return true
                }).catch((error) => {
                    console.log(error)
                    return false
                })
        }
    }


    const generatePassword = (event) => {

        const pwd = generate({ length: 10, lowerCase: true, upperCase: true, numeric: true })

        setValue('password', pwd, { shouldDirty: true })
        setValue('password_confirmation', pwd, { shouldDirty: true })
    }




    const validateOptions = {
        email: {
            required: "Email obligatorio",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email  invalido"
            }
        },
        first_name: {
            required: "Nombre obligatorio",
        },
        last_name: {
            required: "Apellidos obligatorio",
        },
        password: {
            minLength: {
                value: 6,
                message: "La contraseña debe tener un mínimo de 6 caracteres"
            }
        },
        password_confirmation: {
            validate: (value) => {
                const { password } = getValues()
                return password === value || "Las contraseñas no coinciden"
            }
        },
        photo: {

        },
    }


    useEffect(() => {
        if (!is_autenticated) {
            navigate("/")
        }
        getUser()


    }, [userData.id])

    return (
        <>
            {autenticatedUser.id && !autenticatedUser.permissions.includes('admin-users-profile') &&
                <Error403 />
            }
            {autenticatedUser.id && autenticatedUser.permissions.includes('admin-users-profile') &&
                <AdminLayout>
                    <section role="main" className="content-body">
                        <MainHeader >
                            My perfil
                        </MainHeader>
                        {/* start: page */}
                        <div className="row">
                            <div className="col-12 col-md-3">
                                <section className="card">
                                    <div className="card-body">
                                        <div className="thumb-info mb-3">
                                            <div id="fileOutput">
                                                {autenticatedUser.photo ?
                                                    <img src={autenticatedUser.photo} className="rounded img-fluid" alt="Newal Medina" />

                                                    :
                                                    <img src={process.env.PUBLIC_URL + "/assets/admin/img/!logged-user.jpg"} className="rounded img-fluid" alt="Newal Medina" />

                                                }
                                            </div>
                                            <div className="thumb-info-title">
                                                <span className="thumb-info-inner">{autenticatedUser.full_name}</span>
                                                <span className="thumb-info-type"> {autenticatedUser.role}</span>
                                            </div>
                                        </div>
                                        <div id="remove" className="text-danger" style={{ display: 'none', cursor: 'pointer', textAlign: 'center' }}><i className="fa fa-times" aria-hidden="true" /> Quitar imagen </div>
                                        <hr className="dotted short" />
                                        <h5 className="mb-2 mt-3">  Acerca de</h5>
                                        <p className="text-2">
                                            Miembro desde el  {autenticatedUser.created_at}
                                        </p>
                                    </div>
                                </section>
                            </div>
                            <div className="col-12 col-md-9">
                                <section className="card form-wizard" id="w2">
                                    <div className="tabs">
                                        <ul className="nav nav-tabs nav-justify wizard-steps wizard-steps-style-2">
                                            <li className="nav-item ">
                                                <a href="#tab_1" data-bs-toggle="tab" className="nav-link text-center">
                                                    <span className="badge badge-primary">1</span>
                                                    Información personal
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#tab_2" data-bs-toggle="tab" className="nav-link text-center">
                                                    <span className="badge badge-primary">2</span>
                                                    Roles
                                                </a>
                                            </li>

                                        </ul>
                                        <div className="tab-content">
                                            <div id="tab_1" className="tab-pane p-3 active">

                                                <UserForm user={userData} />
                                            </div>
                                            <div id="tab_2" className="tab-pane p-3">
                                                dsadsadsa
                                            </div>
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