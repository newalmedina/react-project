import React, { useState, useEffect, useContext } from 'react'
import Swal from 'sweetalert2'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

import MainHeader from "../Layouts/Admin/MainHeader"
import AdminLayout from '../Layouts/Admin/Default'
import { UserContext } from "../../Context"
import Error403 from '../ErrorPages/Error403'
import { useForm } from "react-hook-form"
import Success from '../Includes/Success'
import Error from '../Includes/Error'

const Profile = () => {


    const is_autenticated = localStorage.getItem("is_autenticated")
    const token = localStorage.getItem("token")
    const apiUrl = localStorage.getItem("apiurl")
    const [file, setFile] = useState("")

    const [userData, setUserData] = useState({
        id: null,
        email: null,
        first_name: null,
        last_name: null,
        photo: null,
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
        reset,
    } = useForm()


    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)
    const navigate = useNavigate()

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

    const getUser = () => {
        if (token) {
            const config = {
                headers:
                {
                    Authorization: `${token}`,
                    Accept: 'application/json',
                }
            }

            axios.get(apiUrl + 'get-user-profile', config)
                .then((response) => {
                    setUserData(
                        {
                            id: response.data.id,
                            email: response.data.email,
                            first_name: response.data.first_name,
                            last_name: response.data.last_name
                        }

                    )

                }).catch((error) => {
                    console.log(error)
                    return false
                })
        }
    }

    const addFile = e => {
        setFile(e.target.files[0])
    }

    const submitForm = async (data) => {
        data = {
            ...data,
            photo: file
        }
        const formData = new FormData()
        formData.append("photo", file)
        formData.set("email", data.email)
        formData.set("first_name", data.first_name)
        formData.set("last_name", data.last_name)
        formData.set("password", data.password)
        formData.set("password_confirmation", data.password_confirmation)
        formData.append('_method', 'patch')

        const config = {
            headers:
            {
                Authorization: `${token}`,
                'content-type': 'multipart/form-data',

            }
        }
        await axios
            .post(apiUrl + 'user-profile-update/' + data.id,
                formData,
                config)
            .then((response) => {
                console.log(response)
                Success("Registro guardado Correctamente")
                IsAutenticated()
            }).catch((error) => {
                // console.log(error)
                setFile(null)
                Error('Ha ocurrido un error')

            })
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

        reset(userData)

        console.log(userData)
    }, [userData.id])

    return (
        <>
            {autenticatedUser.id && !autenticatedUser.permissions.includes('admin-users-profile') &&
                <Error403 />
            }
            {autenticatedUser.id && autenticatedUser.active && autenticatedUser.permissions.includes('admin-users-profile') &&
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
                                <section className="card">
                                    <header className="card-header">
                                        <h2 className="card-title">Información personal</h2>
                                    </header>
                                    <form id="userForm"
                                        onSubmit={handleSubmit(submitForm)}
                                        noValidate="novalidate" >

                                        <div className="card-body">
                                            <p>Aquí puede modificar sus datos, así como cambiar su usuario y contraseña de acceso a la herrramienta.</p>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group mb-3">
                                                        <label>Nombre</label>
                                                        <div className="input-group">
                                                            <input
                                                                name="first_name"
                                                                id="first_name"
                                                                type="text"
                                                                className="form-control form-control-lg"
                                                                {...register('first_name', validateOptions.first_name)} />
                                                        </div>
                                                        {errors.first_name && (
                                                            <small className="text-danger">{errors.first_name.message}</small>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group mb-3">
                                                        <label>Apellidos</label>
                                                        <div className="input-group">
                                                            <input
                                                                name="last_name"
                                                                id="last_name"
                                                                type="text"
                                                                className="form-control form-control-lg"
                                                                {...register('last_name', validateOptions.last_name)} />
                                                        </div>
                                                        {errors.last_name && (
                                                            <small className="text-danger">{errors.last_name.message}</small>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label htmlFor="photo"> Imagen de perfil</label>
                                                        <input type="file"
                                                            className="form-control btn-info"
                                                            name="photo "
                                                            accept="image/png, image/gif, image/jpeg"
                                                            onChange={(e) => addFile(e)} />

                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="mb-3">Datos de accesso</h4>
                                            <div className="form-group mb-3">
                                                <label>email</label>
                                                <div className="input-group">
                                                    <input
                                                        name="email"
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        {...register('email', validateOptions.email)} />
                                                    <span className="input-group-text">
                                                        <i className="bx bx-user text-4" />
                                                    </span>
                                                </div>
                                                {errors.email && (
                                                    <small className="text-danger">{errors.email.message}</small>
                                                )}
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group mb-3">
                                                        <div className="clearfix">
                                                            <label className="float-left">Password</label>
                                                        </div>
                                                        <div className="input-group">
                                                            <input
                                                                name="password"
                                                                id="password"
                                                                type="password"
                                                                autoComplete="new-password"
                                                                className="form-control form-control-lg"
                                                                {...register('password', validateOptions.password)} />
                                                            <span className="input-group-text">
                                                                <i className="bx bx-lock text-4" />
                                                            </span>
                                                        </div>
                                                        {errors.password && (
                                                            <small className="text-danger">{errors.password.message}</small>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group mb-3">
                                                        <div className="clearfix">
                                                            <label className="float-left">Repetir password</label>
                                                        </div>
                                                        <div className="input-group">
                                                            <input
                                                                name="password_confirmation"
                                                                id="password_confirmation"
                                                                type="password"
                                                                autoComplete="new-password"
                                                                className="form-control form-control-lg"
                                                                {...register('password_confirmation', validateOptions.password_confirmation)} />
                                                            <span className="input-group-text">
                                                                <i className="bx bx-lock text-4" />
                                                            </span>
                                                        </div>
                                                        {errors.password_confirmation && (
                                                            <small className="text-danger">{errors.password_confirmation.message}</small>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer text-end">
                                            <button type="submit" className="btn btn-success">Guardar</button>
                                        </div>
                                        <input type="hidden" name="proengsoft_jsvalidation" /></form>
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

export default Profile