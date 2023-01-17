import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { generate } from '@wcj/generate-password';

import { useForm } from "react-hook-form"
import Error from '../Includes/Error';
import Success from '../Includes/Success'
import Swal from 'sweetalert2';

const RoleForm = ({ role }) => {


    const token = localStorage.getItem("token")
    const apiUrl = localStorage.getItem("apiurl")
    const [roleData, setRoleData] = useState()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        reset,
    } = useForm({
        defaultValues: {
            display_name: null,
            description: null,
            active: 1
        }
    })

    const submitForm = async (data) => {
        console.log(data)
        const config = {
            headers:
            {
                Authorization: `${token}`,
                Accept: 'application/json',

            }
        }

        if (role.id) {
            await axios
                .patch(apiUrl + 'roles/' + role.id,
                    data,
                    config)
                .then((response) => {

                    Success("Registro guardado Correctamente")
                }).catch((error) => {
                    console.log(error)
                    Error('Ha ocurrido un error')
                })
        } else {
            await axios
                .post(apiUrl + 'roles',
                    data,
                    config)
                .then((response) => {
                    console.log(response)
                    Success("Registro guardado Correctamente")
                }).catch((error) => {
                    console.log(error)
                    Error('Ha ocurrido un error')

                })
        }

    }

    const [validateOptions, setValidateOptions] = useState({
        active: {
            required: "El estado activo es obligatorio"
        },
        display_name: {
            required: "Nombre obligatorio"

        }
    });

    useEffect(() => {
        setRoleData({
            // id: role.id,
            display_name: role.display_name,
            description: role.description,
            active: role.active,
        })
        reset(roleData)
    }, [role])
    return (
        <>


            <form id="roleForm"
                onSubmit={handleSubmit(submitForm)}
                noValidate="novalidate" >
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group mb-3">
                                <label>Activo</label>
                                <div className="input-group">
                                    <span className='me-3'>
                                        <input value="1"    {...register("active", validateOptions.active)} type="radio" style={{ width: ' 20px', height: ' 20px' }} />Si
                                    </span>
                                    <span className='me-3'>
                                        <input value="0"  {...register("active", validateOptions.active)} type="radio" style={{ width: ' 20px', height: ' 20px' }} />No
                                    </span>
                                </div>
                                {errors.active && (
                                    <small className="text-danger">{errors.active.message}</small>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group mb-3">
                                <label>Nombre</label>
                                <div className="input-group">
                                    <input
                                        name="display_name"
                                        id="display_name"
                                        type="text"
                                        className="form-control form-control-lg"
                                        {...register('display_name', validateOptions.display_name)} />
                                </div>
                                {errors.display_name && (
                                    <small className="text-danger">{errors.display_name.message}</small>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group mb-3">
                                <label>Descripción</label>
                                <div className="input-group">
                                    <textarea
                                        className="form-control form-control-lg"
                                        cols="20"
                                        rows="3"
                                        {...register('description')}
                                    ></textarea>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer ">
                    <div className='d-flex justify-content-between '>
                        <Link className="btn btn-default" to='/admin/roles'>Cancelar</Link>
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