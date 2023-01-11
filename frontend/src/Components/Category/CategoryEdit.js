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
import CategoryForm from './CategoryForm';

const CategoryEdit = () => {
    const { category_id } = useParams()

    const is_autenticated = localStorage.getItem("is_autenticated")
    const token = localStorage.getItem("token")
    const apiUrl = localStorage.getItem("apiurl")

    const [categoryData, setCategoryData] = useState({
        id: null,
        name: null,
        description: null,
        active: 0,
    })




    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)
    const navigate = useNavigate()


    const getRole = () => {
        if (token && category_id) {
            const config = {
                headers:
                {
                    Authorization: `${token}`,
                    Accept: 'application/json',
                }
            }

            axios.get(apiUrl + 'categories/' + category_id, config)
                .then((response) => {
                    setCategoryData(
                        {
                            id: response.data.id,
                            name: response.data.name,
                            description: response.data.description,
                            active: response.data.active,

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
        getRole()
    }, [categoryData.id])

    return (
        <>
            {autenticatedUser.id && !autenticatedUser.permissions.includes('admin-categories') &&
                <Error403 />
            }
            {autenticatedUser.id && autenticatedUser.permissions.includes('admin-categories') &&
                <AdminLayout>
                    <section role="main" className="content-body">
                        <MainHeader >
                            {category_id ?
                                "Editar categoría"
                                :
                                "Nuevo categoría"
                            }
                        </MainHeader>
                        {/* start: page */}
                        <div className="row">
                            <div
                                className='col-12 ' >
                                <section className="card" id="w2">
                                    <div className="card-header">
                                        <h2 className="card-title">Información básica</h2>
                                    </div>
                                    <div className="card-body">
                                        <CategoryForm category={categoryData} />
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

export default CategoryEdit