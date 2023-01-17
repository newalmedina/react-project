import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from "axios"
import Success from '../Includes/Success'
import Swal from 'sweetalert2'

const ProductImages = ({ product, getProduct }) => {


    const token = localStorage.getItem("token")
    const apiUrl = localStorage.getItem("apiurl")
    const [imageList, setImageList] = useState([])
    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach(file => {
            sendImage(file)
        })
    }, [product.id])

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop })

    const sendImage = async (file) => {

        const formData = new FormData()
        formData.append("file", file)
        const config = {
            headers:
            {
                Authorization: `${token}`,
                'content-type': 'multipart/form-data',

            }
        }
        await axios
            .post(apiUrl + 'products/store-image/' + product.id,
                formData,
                config)
            .then((response) => {
                getImages()
                console.log(response)
            }).catch((error) => {
                Error('Ha ocurrido un error')

            })
    }

    const deleteImage = (id) => {
        Swal.fire({
            title: '<small>¿Seguro que quieres eliminar este registro?</small>',
            showDenyButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                if (token) {
                    const config = {
                        headers:
                        {
                            Authorization: `${token}`,
                            Accept: 'application/json',
                        }
                    }

                    axios.delete(apiUrl + 'products/delete-image/' + id, config)
                        .then((response) => {
                            getImages()
                            Success("Imagen eliminado correctamente")
                        }).catch((error) => {
                            return false
                        })
                }
            }
        })

    }

    const getImages = () => {
        if (token && product.id) {
            const config = {
                headers:
                {
                    Authorization: `${token}`,
                    Accept: 'application/json',
                }
            }

            axios.get(apiUrl + 'products/images/' + product.id, config)
                .then((response) => {
                    setImageList(response.data)

                }).catch((error) => {
                    return false
                })
        }
    }
    useEffect(() => {
        getImages()
    }, [product.id])
    return (
        <section className="container ">
            <div {...getRootProps({ className: 'dropzone d-flex justify-content-center   align-items-center' })}>
                <input {...getInputProps()} />
                <p>seleccione o arrastre archivos</p>
            </div>
            <aside className='row mt-5'>
                {
                    imageList.map((image) =>
                        <div className="col-sm-4 text-center" key={image.id}>
                            <button onClick={() => deleteImage(image.id)} className="btn btn-danger btn-xs mb-2" color="error"><i className="fas fa-trash" aria-hidden="true"></i></button>
                            <img src={image.name} className="img-thumbnail" alt={image.name} style={{ width: "100%", minHeigth: "300px" }} />
                        </div>
                    )
                }
            </aside>
        </section>
    );
}

export default ProductImages