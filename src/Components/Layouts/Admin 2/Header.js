import React from 'react'

const Header = () => {
    return (
        <>
            {/* start: header */}
            <header className="header">
                <div className="logo-container">
                    <a href="../4.0.0" className="logo">
                        <img src={process.env.PUBLIC_URL + "/assets/front/img/logo.png"} width={75} height={35} alt="Porto Admin" />
                    </a>
                    <div className="d-md-none toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html" data-fire-event="sidebar-left-opened">
                        <i className="fas fa-bars" aria-label="Toggle sidebar" />
                    </div>
                </div>
                {/* start: search & user box */}
                <div className="header-right">
                    <div id="userbox" className="userbox">
                        <a href="#" data-bs-toggle="dropdown">
                            <figure className="profile-picture">
                                <img src={process.env.PUBLIC_URL + "/assets/front/img/!logged-user.jpg"} alt="Joseph Doe" className="rounded-circle" data-lock-picture="img/!logged-user.jpg" />
                            </figure>
                            <div className="profile-info" data-lock-name="John Doe" data-lock-email="johndoe@okler.com">
                                <span className="name">John Doe Junior</span>
                                <span className="role">Administrator</span>
                            </div>
                            <i className="fa custom-caret" />
                        </a>
                        <div className="dropdown-menu">
                            <ul className="list-unstyled mb-2">
                                <li className="divider" />
                                <li>
                                    <a role="menuitem" tabIndex={-1} href="pages-user-profile.html"><i className="bx bx-user-circle" /> My Profile</a>
                                </li>
                                <li>
                                    <a role="menuitem" tabIndex={-1} href="#" data-lock-screen="true"><i className="bx bx-lock" /> Lock Screen</a>
                                </li>
                                <li>
                                    <a role="menuitem" tabIndex={-1} href="pages-signin.html"><i className="bx bx-power-off" /> Logout</a>
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