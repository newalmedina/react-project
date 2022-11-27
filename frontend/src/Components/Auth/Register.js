import { Link } from "react-router-dom";

import FrontLayout from '../Layouts/Front/Default'
const Register = () => {
    return (
        <>
            <FrontLayout>
                <div className="center-sign">
                    <a href="/" className="logo float-left">
                        <img src={process.env.PUBLIC_URL + "/assets/admin/img/logo.png"} height={70} alt="Porto Admin" />
                    </a>
                    <div className="panel card-sign">
                        <div className="card-title-sign mt-3 text-end">
                            <h2 className="title text-uppercase font-weight-bold m-0"><i className="bx bx-user-circle me-1 text-6 position-relative top-5" /> Registrarse</h2>
                        </div>
                        <div className="card-body">
                            <form action="index.html" method="post">
                                <div className="form-group mb-3">
                                    <label>email</label>
                                    <div className="input-group">
                                        <input name="email" type="email" className="form-control form-control-lg" />
                                        <span className="input-group-text">
                                            <i className="bx bx-user text-4" />
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="clearfix">
                                        <label className="float-left">Password</label>
                                    </div>
                                    <div className="input-group">
                                        <input name="pwd" type="password" className="form-control form-control-lg" />
                                        <span className="input-group-text">
                                            <i className="bx bx-lock text-4" />
                                        </span>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-sm-12 text-end">
                                        <button type="submit" className="btn btn-primary mt-2">Registrar</button>
                                    </div>
                                </div>

                                <p className="text-center">¿Ya tienes cuenta? <Link to='/'>Inicia Sessión!</Link></p>
                            </form>
                        </div>
                    </div>
                    <p className="text-center text-muted mt-3 mb-3">© Copyright 2021. All Rights Reserved.</p>
                </div>
            </FrontLayout>
        </>
    );
}

export default Register;