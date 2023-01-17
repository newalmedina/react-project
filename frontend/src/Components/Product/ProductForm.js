import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { generate } from '@wcj/generate-password';

import { useForm } from "react-hook-form"
import Error from '../Includes/Error';
import Success from '../Includes/Success'
import Swal from 'sweetalert2';

const ProductForm = ({ product, getProduct }) => {


    const token = localStorage.getItem("token")
    const apiUrl = localStorage.getItem("apiurl")
    const [productData, setProductData] = useState()
    const [categoriesData, setCategoriesData] = useState([])
    const navigate = useNavigate()
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
            active: 1,
            price: null
        }
    })

    const submitForm = async (data) => {

        const config = {
            headers:
            {
                Authorization: `${token}`,
                Accept: 'application/json',

            }
        }

        if (product.id) {
            await axios
                .patch(apiUrl + 'products/' + product.id,
                    data,
                    config)
                .then((response) => {

                    Success("Registro actualizado Correctamente")

                }).catch((error) => {
                    console.log(error)
                    Error('Ha ocurrido un error')
                })
        } else {

            await axios
                .post(apiUrl + 'products',
                    data,
                    config)
                .then((response) => {
                    console.log(response)

                    navigate("/admin/products/edit/" + response.data.id)
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
        },
        category_id: {
            required: "Seleccione categoría obligatorio"
        },
        price: {
            required: "Precio obligatorio"
        }
    });

    const getCategoriesList = () => {
        if (token) {
            const config = {
                headers:
                {
                    Authorization: `${token}`,
                    Accept: 'application/json',
                }
            }

            axios.get(apiUrl + 'categories/get-actives', config)
                .then((response) => {

                    setCategoriesData(
                        response.data
                    )

                }).catch((error) => {
                    console.log(error)
                    return false
                })
        }
    }

    useEffect(() => {
        setProductData({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            active: product.active,
            category_id: product.category_id,
        })
        getCategoriesList()
        reset(productData)
        setValue("category_id", product.category_id)
    }, [product])
    return (
        <>


            <form id="productForm"
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
                        <div className="col-sm-6">
                            <div className="form-group mb-3">
                                <label>Precio</label>
                                <div className="input-group">
                                    <input
                                        name="price"
                                        id="price"
                                        type="text"
                                        className="form-control form-control-lg"
                                        {...register('price', validateOptions.price)} />
                                </div>
                                {errors.price && (
                                    <small className="text-danger">{errors.price.message}</small>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group mb-3">
                                <label>Categoría</label>
                                <div className="input-group">
                                    <select
                                        name="name"
                                        id="name"
                                        className="form-control form-control-lg"
                                        {...register('category_id', validateOptions.category_id)}
                                    >
                                        <option value="" >Seleccione categoría</option>
                                        {
                                            categoriesData.map((category) =>
                                                <option value={category.id} key={category.id}>
                                                    {category.name}
                                                </option>

                                            )
                                        }

                                    </select>
                                </div>
                                {errors.category_id && (
                                    <small className="text-danger">{errors.category_id.message}</small>
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
                        <Link className="btn btn-default" to='/admin/products'>Cancelar</Link>
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

export default ProductForm