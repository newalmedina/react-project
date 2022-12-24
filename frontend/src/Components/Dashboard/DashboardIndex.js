import React, { useState, useEffect, useContext } from 'react'

import { useNavigate } from 'react-router-dom';

import MainHeader from "../Layouts/Admin/MainHeader";
import AdminLayout from '../Layouts/Admin/Default'
import { UserContext } from "../../Context"
import Error403 from '../ErrorPages/Error403';

const DashboardIndex = () => {
    const is_autenticated = localStorage.getItem("is_autenticated")

    const { autenticatedUser } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (!is_autenticated) {
            navigate("/");
        }
    }, [autenticatedUser]);

    return (
        <>
            {autenticatedUser.id && !autenticatedUser.permissions.includes('admin-dashboard') &&
                <Error403 />
            }
            {autenticatedUser.id && autenticatedUser.permissions.includes('admin-dashboard') &&
                <AdminLayout>
                    <section role="main" className="content-body">
                        <MainHeader />
                        {/* start: page */}

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row mb-3">
                                    <div className="col-12 col-md-4">
                                        <section className="card card-featured-left card-featured-primary mb-3">
                                            <div className="card-body">
                                                <div className="widget-summary">
                                                    <div className="widget-summary-col widget-summary-col-icon">
                                                        <div className="summary-icon bg-primary">
                                                            <i className="fas fa-life-ring" />
                                                        </div>
                                                    </div>
                                                    <div className="widget-summary-col">
                                                        <div className="summary">
                                                            <h4 className="title">Support Questions</h4>
                                                            <div className="info">
                                                                <strong className="amount">1281</strong>
                                                                <span className="text-primary">(14 unread)</span>
                                                            </div>
                                                        </div>
                                                        <div className="summary-footer">
                                                            <a className="text-muted text-uppercase" href="#">(view all)</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <section className="card card-featured-left card-featured-primary mb-3">
                                            <div className="card-body">
                                                <div className="widget-summary">
                                                    <div className="widget-summary-col widget-summary-col-icon">
                                                        <div className="summary-icon bg-primary">
                                                            <i className="fas fa-life-ring" />
                                                        </div>
                                                    </div>
                                                    <div className="widget-summary-col">
                                                        <div className="summary">
                                                            <h4 className="title">Support Questions</h4>
                                                            <div className="info">
                                                                <strong className="amount">1281</strong>
                                                                <span className="text-primary">(14 unread)</span>
                                                            </div>
                                                        </div>
                                                        <div className="summary-footer">
                                                            <a className="text-muted text-uppercase" href="#">(view all)</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <section className="card card-featured-left card-featured-primary mb-3">
                                            <div className="card-body">
                                                <div className="widget-summary">
                                                    <div className="widget-summary-col widget-summary-col-icon">
                                                        <div className="summary-icon bg-primary">
                                                            <i className="fas fa-life-ring" />
                                                        </div>
                                                    </div>
                                                    <div className="widget-summary-col">
                                                        <div className="summary">
                                                            <h4 className="title">Support Questions</h4>
                                                            <div className="info">
                                                                <strong className="amount">1281</strong>
                                                                <span className="text-primary">(14 unread)</span>
                                                            </div>
                                                        </div>
                                                        <div className="summary-footer">
                                                            <a className="text-muted text-uppercase" href="#">(view all)</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end: page */}
                    </section>
                </AdminLayout>
            }

        </>
    );
}

export default DashboardIndex;