import React, { useState, useEffect, useContext } from "react"

import axios from "axios"
import { UserContext } from "../../Context"

const IsAutenticated = () => {
    const { autenticatedUser, setAutenticatedUser } = useContext(UserContext)
    //const { autenticatedUser, setAutenticatedUser } = useState([])

    const apiUrl = localStorage.getItem("apiurl")
    const token = localStorage.getItem("token")

    if (token) {
        const config = {
            headers:
            {
                Authorization: `${token}`,
                Accept: 'application/json',
            }
        }

        axios.get(apiUrl + 'auth/user', config)
            .then((response) => {
                setAutenticatedUser(response.data)
            }).catch((error) => {
                console.log(error)
            });
    } else {
        setAutenticatedUser([])
    }
    return autenticatedUser
}

export default IsAutenticated;