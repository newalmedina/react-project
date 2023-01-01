import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { generate } from '@wcj/generate-password';

import { useParams } from 'react-router-dom';
import { UserContext } from "../../Context"
import { set, useForm } from "react-hook-form"
import Error from '../Includes/Error';
import Success from '../Includes/Success'

const UserForm = ({ user }) => {

    const navigate = useNavigate();
    const { user_id } = useParams()

    const is_autenticated = localStorage.getItem("is_autenticated")
    const token = localStorage.getItem("token")
    const apiUrl = localStorage.getItem("apiurl")

    const [userData, setUserData] = useState()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        reset,
    } = useForm({
        defaultValues: {
            first_name: null,
            last_name: null,
            email: null
        }
    })

    const generatePassword = (event) => {

        const pwd = generate({ length: 10, lowerCase: true, upperCase: true, numeric: true })

        setValue('password', pwd, { shouldDirty: true })
        setValue('password_confirmation', pwd, { shouldDirty: true })
    }


    const submitForm = async (data) => {
        console.log(data)
        const config = {
            headers:
            {
                Authorization: `${token}`,
                Accept: 'application/json',

            }
        }

        if (user.id) {
            await axios
                .patch(apiUrl + 'users/' + data.id,
                    data,
                    config)
                .then((response) => {
                    console.log(response)
                    Success("Registro guardado Correctamente")
                }).catch((error) => {
                    console.log(error)
                    Error('Ha ocurrido un error')
                })
        } else {
            await axios
                .post(apiUrl + 'users',
                    data,
                    config)
                .then((response) => {
                    console.log(response)
                    Success("Registro guardado Correctamente")
                    navigate("/admin/users/edit/" + response.data.id)
                }).catch((error) => {
                    console.log(error)
                    Error('Ha ocurrido un error')

                })
        }

    }

    const [validateOptions, setValidateOptions] = useState({
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
    });



    useEffect(() => {
        setUserData({
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            password: null,
            password_confirmation: null,
        })
        console.log(apiUrl)
        reset(userData)
    }, [user])
    return (
        <>


            <form id="userForm"
                onSubmit={handleSubmit(submitForm)}
                noValidate="novalidate" >

                <div className="card-body">
                    {user_id &&
                        <p>Aquí puede modificar sus datos, así como cambiar su usuario y contraseña de acceso a la herrramienta.</p>
                    }
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
                    <h4 className="mb-3">Datos de accesso</h4>
                    <div className="form-group mb-3">
                        <label>email</label>
                        <div className="input-group">
                            <input
                                name="email"
                                type="text"
                                className="form-control form-control-lg"
                                defaultValue="12321321"
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
                        <div className="col-sm-12">
                            <div className="form-group mb-3">
                                <button
                                    type='button'
                                    onClick={(e) => generatePassword()}
                                    className='btn btn-primary'>Generar Contraseña</button>

                            </div>
                        </div>
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
                                        type="text"
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
                                        type="text"
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
                        <div className="col-sm-12">
                            <div className="form-group mb-3">
                                {!user_id &&
                                    <p className='text-danger'>Si no introduces el campo contraseña se generará uno por defecto.</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer ">
                    <div className='d-flex justify-content-between '>
                        <Link className="btn btn-default" to='/admin/users'>Cancelar</Link>
                        <button type="submit" className="btn btn-success">Guardar</button>

                    </div>
                </div>
            </form>

        </>
    )
}

export default UserForm