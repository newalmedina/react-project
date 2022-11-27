import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register"
import ForgetPassword from "../components/Auth/ForgetPassword"
import Dashboard from "../components/Dashboard/DashboardIndex"

export default () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<div className='text-center'><h1>404</h1> <h2>Page not found</h2></div>}></Route>

                {/* Rutas Front Sin autenticación */}
                <Route path="/" element={<Login />} exact />
                <Route path="/register" element={<Register />} exact />
                <Route path="/forget-password" element={<ForgetPassword />} exact />

                {/* Rutas Administración con autenticación */}
                <Route path="/admin" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )


}

