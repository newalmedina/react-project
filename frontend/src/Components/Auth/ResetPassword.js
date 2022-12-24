import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { UserContext } from "../../Context"
import { useForm } from "react-hook-form"
import FrontLayout from '../Layouts/Front/Default'
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const { user_id } = useParams()
    const { token } = useParams()
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({
        defaultValues: {
            user_id: user_id,
            token: token,
        }
    });

    const navigate = useNavigate();

    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)

    const [tokenExist, setTokenExist] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    var apiUrl = localStorage.getItem("apiurl")
    const is_autenticated = localStorage.getItem("is_autenticated")

    const getToken = async () => {
        await axios
            .get(apiUrl + `auth/get-forget-password-token/${user_id}/${token}`)
            .then((response) => {
                console.log(response)
                setTokenExist(response.data.token)
            }).catch((error) => {
                setTokenExist("")
                navigate("/")
            });
    }

    const submitForm = async (data) => {
        setErrorMessage("")
        setSuccessMessage("")
        console.log(data)
        await axios
            .post(apiUrl + 'auth/restore-password', data)
            .then((response) => {
                console.log(response)
                setSuccessMessage(response.data.message)
            }).catch((error) => {
                setErrorMessage("Se a producido un error")
            });

    }

    const validateOptions = {
        email: {
            required: "Email obligatorio",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email  invalido"
            }
        },
        user_id: {
            required: "Usuario obligatorio",
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
        getToken()
    }, [tokenExist]);

    return (
        <>
            {tokenExist != null &&
                <FrontLayout>
                    <div className="center-sign">
                        <a href="/" className="logo float-left">
                            <img src={process.env.PUBLIC_URL + "/assets/admin/img/logo.png"} height={70} alt="Porto Admin" />
                        </a>
                        <div className="panel card-sign">
                            <div className="card-title-sign mt-3 text-end">
                                <h2 className="title text-uppercase font-weight-bold m-0"><i className="bx bx-user-circle me-1 text-6 position-relative top-5" />Recordar Contraseña</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(submitForm)}>
                                    {
                                        errorMessage &&
                                        <div className="alert alert-danger">
                                            {errorMessage}
                                        </div>
                                    }
                                    {
                                        successMessage ?
                                            <>
                                                <div className="alert alert-success">
                                                    {successMessage}
                                                </div>
                                                <div className="row">

                                                    <div className="col-sm-12">
                                                        <p className="text-center"><Link to='/'>Inicia sessión!</Link></p>

                                                    </div>
                                                </div>
                                            </>

                                            :
                                            <>
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
                                                        <button type="submit" className="btn btn-primary mt-2">Enviar</button>
                                                    </div>
                                                </div>

                                                <p className="text-center">¿Recuerdas tu contraseña? <Link to='/'>Inicia sessión!</Link></p>

                                            </>

                                    }
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

export default ResetPassword;