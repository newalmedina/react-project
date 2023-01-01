import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register"
import ResetPassword from "../components/Auth/ResetPassword"
import ForgetPassword from "../components/Auth/ForgetPassword"
import Dashboard from "../components/Dashboard/DashboardIndex"
import Profile from '../components/Profile/profile';
import UserIndex from '../components/User/UserIndex';
import UserEdit from '../components/User/UserEdit';

export default () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<div className='text-center'><h1>404</h1> <h2>Page not found</h2></div>}></Route>

                {/* Rutas Front Sin autenticación */}
                <Route path="/" element={<Login />} exact />
                <Route path="/register" element={<Register />} exact />
                <Route path="/forget-password" element={<ForgetPassword />} exact />
                <Route path="/reset-password/:user_id/:token" element={<ResetPassword />} exact />

                {/* Rutas Administración con autenticación */}
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/profile" element={<Profile />} />
                <Route path="/admin/users" element={<UserIndex />} />
                <Route path="/admin/users/:user_id" element={<UserEdit />} />
            </Routes>
        </BrowserRouter>
    )


}

