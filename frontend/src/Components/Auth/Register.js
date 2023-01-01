import React, { useState, useEffect, useContext } from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom';
import '../../register.css'
import FrontLayout from '../Layouts/Front/Default'

import axios from "axios";
import { UserContext } from "../../Context"
import { useForm } from "react-hook-form"

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm();

    const navigate = useNavigate();
    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)
    const [error, setError] = useState("");
    const [errorColor, setErrorColor] = useState("");

    var apiUrl = localStorage.getItem("apiurl")
    const is_autenticated = localStorage.getItem("is_autenticated")

    const submitForm = async (data) => {
        setError("")
        setErrorColor("")
        await axios
            .post(apiUrl + 'auth/signup', data)
            .then((response) => {
                localStorage.setItem("token", response.data.access_token)
                localStorage.setItem("is_autenticated", true)
                IsAutenticated(response.data.access_token)
            }).catch((error) => {
                console.log(error)
                if (error.response.status === 422) {
                    setError("Usuario ya existe en la base de datos")
                }
            });

    }

    const IsAutenticated = (token = null) => {
        var apiUrl = localStorage.getItem("apiurl")

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
                });
        }
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
            required: "Contraseña obligatoria",
            minLength: {
                value: 6,
                message: "La contraseña debe tener un mínimo de 6 caracteres"
            }
        },
        password_confirmation: {
            required: "Contraseña obligatoria",
            validate: (value) => {
                const { password } = getValues();
                return password === value || "Las contraseñas no coinciden";
            }
        }
    }

    useEffect(() => {
        if (is_autenticated) {
            navigate("/admin");
        }
    }, [autenticatedUser]);


    return (
        <>
            {!autenticatedUser.id &&
                <FrontLayout>
                    <div className="center-sign">
                        <a href="/" className="logo float-left">
                            <img src={process.env.PUBLIC_URL + "/assets/admin/img/logo.png"} height={70} alt="Porto Admin" />
                        </a>
                        <div className="panel card-sign" >
                            <div className="card-title-sign mt-3 text-end">
                                <h2 className="title text-uppercase font-weight-bold m-0"><i className="bx bx-user-circle me-1 text-6 position-relative top-5" /> Registrarse</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(submitForm)}>
                                    {
                                        error &&
                                        <div className="alert alert-danger">
                                            {error}
                                        </div>
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
                                    <div className="row">

                                        <div className="col-sm-12 text-end">
                                            <button type="submit" className="btn btn-primary mt-2">Registrar</button>
                                        </div>
                                    </div>

                                    <p className="text-center">¿Ya tienes cuenta? <Link to='/'>Inicia Sessión!</Link></p>
                                </form>
                            </div>
                        </div>
                        <p className="text-center text-muted mt-3 mb-3">© Copyright 2021. All Rights Reserved.</p>
                    </div>
                </FrontLayout>
            }
        </>
    );
}

export default Register;