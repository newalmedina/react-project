import React, { useState, useEffect } from "react"
import axios from "axios"
import Routers from './router/Index'
import { UserContext } from "./Context"

function App() {

  localStorage.setItem("apiurl", "http://react-project.test/api/")

  const [autenticatedUser, setAutenticatedUser] = useState([])
  const is_autenticated = localStorage.getItem("is_autenticated")



  const IsAutenticated = (token = null) => {
    var apiUrl = localStorage.getItem("apiurl")

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

          setAutenticatedUser(response.data)
          return true
        }).catch((error) => {
          console.log(error)
          return false
        });
    }
  }

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setAutenticatedUser({ id: "id" })
    }

    if (is_autenticated) {
      IsAutenticated(localStorage.getItem("token"));
      console.log(localStorage.getItem("token"));
    }
  }, [is_autenticated]);

  return (
    <>
      <UserContext.Provider value={{ autenticatedUser, setAutenticatedUser }}>
        <Routers />
      </UserContext.Provider>
    </>
  );
}

export default App;
