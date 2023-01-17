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
import ProductForm from './ProductForm';
import ProductImages from './ProductImages';

const ProductEdit = () => {
    const { product_id } = useParams()

    const is_autenticated = localStorage.getItem("is_autenticated")
    const token = localStorage.getItem("token")
    const apiUrl = localStorage.getItem("apiurl")

    const [productData, setProductData] = useState({
        id: null,
        name: null,
        description: null,
        images: [],
        active: 0,
    })

    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)
    const navigate = useNavigate()

    const getProduct = () => {
        if (token && product_id) {
            const config = {
                headers:
                {
                    Authorization: `${token}`,
                    Accept: 'application/json',
                }
            }

            axios.get(apiUrl + 'products/' + product_id, config)
                .then((response) => {
                    setProductData(
                        {
                            id: response.data.id,
                            name: response.data.name,
                            price: response.data.price,
                            description: response.data.description,
                            active: response.data.active,
                            category: response.data.category_id,
                            images: response.data.images,

                        }
                    )

                }).catch((error) => {
                    console.log(error)
                    return false
                })
        }
    }

    useEffect(() => {
        if (!is_autenticated) {
            navigate("/")
        }
        getProduct()
    }, [productData.id, product_id])

    return (
        <>
            {autenticatedUser.id && !autenticatedUser.permissions.includes('admin-products') &&
                <Error403 />
            }
            {autenticatedUser.id && autenticatedUser.permissions.includes('admin-products') &&
                <AdminLayout>
                    <section role="main" className="content-body">
                        <MainHeader >
                            {product_id ?
                                "Editar producto"
                                :
                                "Nuevo producto"
                            }
                        </MainHeader>
                        {/* start: page */}
                        <div className="row">


                            <div

                                className='col-12 ' >
                                <section className="card form-wizard" id="w2">
                                    <div className="tabs">
                                        <ul className="nav nav-tabs nav-justify wizard-steps wizard-steps-style-2">
                                            <li className="nav-item ">
                                                <a href="#tab_1" data-bs-toggle="tab" className="nav-link text-center">
                                                    <span className="badge badge-primary">1</span>
                                                    Información Básica
                                                </a>
                                            </li>
                                            {product_id &&
                                                <li className="nav-item">
                                                    <a href="#tab_2" data-bs-toggle="tab" className="nav-link text-center">
                                                        <span className="badge badge-primary">2</span>
                                                        Imágenes
                                                    </a>
                                                </li>
                                            }

                                        </ul>
                                        <div className="tab-content">
                                            <div id="tab_1" className="tab-pane p-3 active">
                                                <ProductForm product={productData} getProduct={getProduct} />
                                            </div>
                                            {product_id &&
                                                <div id="tab_2" className="tab-pane p-3">
                                                    <ProductImages product={productData} getProduct={getProduct} />

                                                </div>
                                            }
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

export default ProductEdit