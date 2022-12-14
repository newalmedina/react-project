import React, { useContext } from 'react'
import { UserContext } from "../../../Context"

import { Link } from 'react-router-dom';


import axios from "axios"

const Header = () => {

    const { autenticatedUser } = useContext(UserContext)
    const logOuth = () => {

        var apiUrl = localStorage.getItem("apiurl")
        var token = localStorage.getItem("token")

        const config = {
            headers:
            {
                Authorization: `${token}`,
                Accept: 'application/json',
            }
        }

        if (token) {
            axios.get(apiUrl + 'auth/logout', config)
                .then((response) => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("is_autenticated")
                    window.location.reload(false)
                }).catch((error) => {
                    console.log(error)
                    return false
                });
        }
    }

    return (
        <>
            {/* start: header */}
            <header className="header">
                <div className="logo-container">
                    <a href="../4.0.0" className="logo">
                        <img src={process.env.PUBLIC_URL + "/assets/admin/img/logo.png"} width={75} height={35} alt="Porto Admin" />
                    </a>
                    <div className="d-md-none toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html" data-fire-event="sidebar-left-opened">
                        <i className="fas fa-bars" aria-label="Toggle sidebar" />
                    </div>
                </div>
                {/* start: search & user box */}
                <div className="header-right">
                    <div id="userbox" className="userbox">
                        <a href="" data-bs-toggle="dropdown">
                            <figure className="profile-picture">
                                {autenticatedUser.photo ?
                                    <img src={autenticatedUser.photo} alt="Joseph Doe" className="rounded-circle" />
                                    :
                                    <span className="profile-picture profile-picture-as-text">{autenticatedUser.initial_names}</span>
                                }
                            </figure>
                            <div className="profile-info " data-lock-name="John Doe" data-lock-email="johndoe@okler.com">
                                <span className="name">{autenticatedUser.full_name}</span>
                                <span className="role">
                                    {autenticatedUser.role}
                                    <br />
                                    <small>( Miembro desde: {autenticatedUser.created_at})</small>
                                </span>
                            </div>
                            <i className="fa custom-caret" />
                        </a>
                        <div className="dropdown-menu">
                            <ul className="list-unstyled mb-2">
                                <li className="divider" />
                                <li>
                                    <Link to='/admin/profile'><i className="bx bx-user-circle" /> My Profile</Link>
                                </li>
                                <li>
                                    <a role="menuitem" tabIndex={-1} href="#" data-lock-screen="true"><i className="bx bx-lock" /> Lock Screen</a>
                                </li>
                                <li>
                                    <a role="menuitem" tabIndex={-1} href="#" onClick={logOuth}><i className="bx bx-power-off" /> Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* end: search & user box */}
            </header>
            {/* end: header */}
        </>

    )
}

export default Header