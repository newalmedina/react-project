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
import RoleIndex from '../components/Role/RoleIndex';
import RoleEdit from '../components/Role/RoleEdit';
import CategoryIndex from '../components/Category/CategotyIndex';
import CategoryEdit from '../components/Category/CategoryEdit';
import ProductIndex from '../components/Product/ProductIndex';
import ProductEdit from '../components/Product/ProductEdit';

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
                <Route path="/admin/users/edit/:user_id" element={<UserEdit />} />
                <Route path="/admin/users/create" element={<UserEdit />} />

                <Route path="/admin/roles" element={<RoleIndex />} />
                <Route path="/admin/roles/edit/:role_id" element={<RoleEdit />} />
                <Route path="/admin/roles/create" element={<RoleEdit />} />

                <Route path="/admin/categories" element={<CategoryIndex />} />
                <Route path="/admin/categories/edit/:category_id" element={<CategoryEdit />} />
                <Route path="/admin/categories/create" element={<CategoryEdit />} />

                <Route path="/admin/products" element={<ProductIndex />} />
                <Route path="/admin/products/edit/:product_id" element={<ProductEdit />} />
                <Route path="/admin/products/create" element={<ProductEdit />} />

            </Routes>
        </BrowserRouter>
    )


}

