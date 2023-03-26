import React, { useEffect, useState } from "react"
import axios from "axios"
import Navigation from "./navigation/Navigation"
import ApiManager from "./Api/ApiManager"
import { UserContext } from "./Context"
import { AuthenticatedUser } from "./Auth/AuthenticatedUser"

const Main = () => {

  const [autenticatedUser, setAutenticatedUser] = useState([])

  const getAuthenticatedUser = async () => {

    //setAutenticatedUser(await AuthenticatedUser())
    console.log(await AuthenticatedUser())

  }

  useEffect(() => {
    ApiManager.get('auth/user')
      .then((response) => {
        setAutenticatedUser(response.data)
      }).catch((error) => {
        setAutenticatedUser([])
      });
  }, []);

  return (
    <UserContext.Provider value={{ autenticatedUser, setAutenticatedUser }}>
      <Navigation />
    </UserContext.Provider>
  )
}
export default Main
