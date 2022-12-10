import { useContext } from 'react'

import axios from "axios"


import { UserContext } from "../../Context"

const IsAutenticated = (token = null) => {
    var apiUrl = localStorage.getItem("apiurl")


    const { setAutenticatedUser } = useContext(UserContext)

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

                console.log(response)
                setAutenticatedUser(response.data)
                return true
            }).catch((error) => {
                console.log(error)
                return false
            });
    }
}

export default IsAutenticated;