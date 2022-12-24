import React, { useContext } from 'react'
import { UserContext } from "../../../Context"

const Aside = () => {

    const { autenticatedUser } = useContext(UserContext)
    return (
        <>
            {/* start: sidebar */}
            <aside id="sidebar-left" className="sidebar-left">
                <div className="sidebar-header">
                    <div className="sidebar-title">
                        Navigation
                    </div>
                    <div className="sidebar-toggle d-none d-md-block" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
                        <i className="fas fa-bars" aria-label="Toggle sidebar" />
                    </div>
                </div>
                <div className="nano">
                    <div className="nano-content">
                        <nav id="menu" className="nav-main" role="navigation">
                            <ul className="nav nav-main">
                                <li className="nav-expanded nav-active">
                                    <a className="nav-link" href="layouts-default.html">
                                        <i className="bx bx-home-alt" aria-hidden="true" />
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                                {autenticatedUser.permissions.includes('admin-users') &&
                                    <li li className="nav-expanded">
                                        <a className="nav-link" href="layouts-default.html">
                                            <i className="fas fa-user" aria-hidden="true"></i>
                                            <span>Usuarios</span>
                                        </a>
                                    </li>
                                }
                                {autenticatedUser.permissions.includes('admin-categories') &&
                                    <li li className="nav-expanded">
                                        <a className="nav-link" href="layouts-default.html">
                                            <i className="fas fa-list" aria-hidden="true"></i>
                                            <span>Categorias</span>
                                        </a>
                                    </li>
                                }

                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>
            {/* end: sidebar */}
        </>
    );
}

export default Aside;