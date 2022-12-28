import React, { useState, useEffect, useContext } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

import FrontLayout from '../Layouts/Front/Default'
import { UserContext } from "../../Context"
import { useForm } from "react-hook-form"
const Login = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)

    var apiUrl = localStorage.getItem("apiurl")
    const is_autenticated = localStorage.getItem("is_autenticated")

    const [error, setError] = useState("");
    const [errorColor, setErrorColor] = useState("");

    useEffect(() => {

        console.log(autenticatedUser)
        if (is_autenticated) {
            navigate("/admin");
        }
    }, [autenticatedUser]);

    const submitForm = async (data) => {

        setError("")
        setErrorColor("")
        await axios
            .post(apiUrl + 'auth/login', data)
            .then((response) => {
                localStorage.setItem("token", response.data.access_token)
                localStorage.setItem("is_autenticated", true)
                IsAutenticated(response.data.access_token)
            }).catch((error) => {
                console.log(error)
                if (error.response.status === 401) {
                    setError("Usuario no existe")
                    setErrorColor("alert alert-danger")
                }
                if (error.response.status === 403) {
                    setErrorColor("alert alert-warning")
                    setError("Usuario inactivo contacta con la administración")
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
        password: { required: "Contraseña obligatoria" }
    }


    return (
        <>
            {!autenticatedUser.id &&
                <FrontLayout>
                    <div className="center-sign">
                        <a href="/" className="logo float-left">
                            <img src={process.env.PUBLIC_URL + "/assets/admin/img/logo.png"} height={70} alt="Porto Admin" />
                        </a>
                        <div className="panel card-sign">
                            <div className="card-title-sign mt-3 text-end">
                                <h2 className="title text-uppercase font-weight-bold m-0"><i className="bx bx-user-circle me-1 text-6 position-relative top-5" /> Iniciar Sessión</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(submitForm)}>
                                    {
                                        error &&
                                        <div className={errorColor}>
                                            {error}
                                        </div>
                                    }
                                    <div className="form-group mb-3">
                                        <label>email</label>
                                        <div className="input-group">
                                            <input name="email"
                                                type="text"
                                                className="form-control form-control-lg"
                                                {...register('email', validateOptions.email)}
                                            />
                                            <span className="input-group-text">
                                                <i className="bx bx-user text-4" />
                                            </span>
                                        </div>
                                        {errors.email && (
                                            <small className="text-danger">{errors.email.message}</small>
                                        )}
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="clearfix">
                                            <label className="float-left">Password</label>
                                            <Link to='/forget-password' className="float-end">¿Olvidastes Contraseña?</Link>
                                        </div>
                                        <div className="input-group">
                                            <input name="password"
                                                type="password"
                                                className="form-control form-control-lg"
                                                {...register('password', validateOptions.password)}
                                            />
                                            <span className="input-group-text">
                                                <i className="bx bx-lock text-4" />
                                            </span>
                                        </div>
                                        {errors.password && (
                                            <small className="text-danger">{errors.password.message}</small>
                                        )}
                                    </div>
                                    <div className="row">

                                        <div className="col-sm-12 text-end">
                                            <button type="submit" className="btn btn-primary mt-2">Iniciar Sessión</button>
                                        </div>
                                    </div>

                                    <p className="text-center">¿No tienes cuenta aún? <Link to='/register'>Registrate!</Link></p>
                                </form>
                            </div>
                        </div>
                        <p className="text-center text-muted mt-3 mb-3">© Copyright 2021. All Rights Reserved.</p>
                    </div>
                </FrontLayout >
            }


        </>
    );
}

export default Login;