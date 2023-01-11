import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { generate } from '@wcj/generate-password';

import { useForm } from "react-hook-form"
import Error from '../Includes/Error';
import Success from '../Includes/Success'
import Swal from 'sweetalert2';

const CategoryForm = ({ category }) => {


    const token = localStorage.getItem("token")
    const apiUrl = localStorage.getItem("apiurl")
    const [categoryData, setCategoryData] = useState()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        reset,
    } = useForm({
        defaultValues: {
            name: null,
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

        if (category.id) {
            await axios
                .patch(apiUrl + 'categories/' + category.id,
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
                .post(apiUrl + 'categories',
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
        name: {
            required: "Nombre obligatorio"

        }
    });

    useEffect(() => {
        setCategoryData({
            // id: category.id,
            name: category.name,
            description: category.description,
            active: category.active,
        })
        reset(categoryData)
    }, [category])
    return (
        <>


            <form id="CategoryForm"
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
                                        name="name"
                                        id="name"
                                        type="text"
                                        className="form-control form-control-lg"
                                        {...register('name', validateOptions.name)} />
                                </div>
                                {errors.name && (
                                    <small className="text-danger">{errors.name.message}</small>
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
                        <Link className="btn btn-default" to='/admin/categories'>Cancelar</Link>
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

export default CategoryForm