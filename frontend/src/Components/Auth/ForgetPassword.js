import React, { useState, useEffect, useContext } from 'react'
import axios from "axios";
import { UserContext } from "../../Context"
import { useForm } from "react-hook-form"
import FrontLayout from '../Layouts/Front/Default'
import { Link, useNavigate } from 'react-router-dom';
const ForgetPassword = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm();

    const navigate = useNavigate();
    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)
    const [errorMessage, setErrorMessage] = useState("");

    const [successMessage, setSuccessMessage] = useState("");

    var apiUrl = localStorage.getItem("apiurl")
    const is_autenticated = localStorage.getItem("is_autenticated")

    const submitForm = async (data) => {
        setErrorMessage("")
        setSuccessMessage("")

        await axios
            .post(apiUrl + 'auth/forget-password', data)
            .then((response) => {
                setSuccessMessage(response.data.message)
            }).catch((error) => {
                if (error.response.status === 404) {
                    setErrorMessage(error.response.data.message)
                } else {
                    setErrorMessage("Se a producido un error")
                }
            });

    }

    const validateOptions = {
        email: {
            required: "Email obligatorio",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email  invalido"
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
                                        successMessage &&
                                        <div className="alert alert-success">
                                            {successMessage}
                                        </div>
                                    }
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

                                        <div className="col-sm-12 text-end">
                                            <button type="submit" className="btn btn-primary mt-2">Enviar</button>
                                        </div>
                                    </div>

                                    <p className="text-center">¿Recuerdas tu contraseña? <Link to='/'>Inicia sessión!</Link></p>
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

export default ForgetPassword;