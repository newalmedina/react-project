import { Link } from "react-router-dom";

import FrontLayout from '../Layouts/Front/Default'
const ForgetPassword = () => {
    return (
        <>
            <FrontLayout>
                <div className="center-sign">
                    <a href="/" className="logo float-left">
                        <img src={process.env.PUBLIC_URL + "/assets/admin/img/logo.png"} height={70} alt="Porto Admin" />
                    </a>
                    <div className="panel card-sign">
                        <div className="card-title-sign mt-3 text-end">
                            <h2 className="title text-uppercase font-weight-bold m-0"><i className="bx bx-user-circle me-1 text-6 position-relative top-5" />Recordar Contraseña</h2>
                        </div>
                        <div className="card-body">
                            <form action="index.html" method="post">
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <div className="input-group">
                                        <input name="usemailername" type="text" className="form-control form-control-lg" />
                                        <span className="input-group-text">
                                            <i className="bx bx-user text-4" />
                                        </span>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-sm-12 text-end">
                                        <button type="submit" className="btn btn-primary mt-2">Enviar</button>
                                    </div>
                                </div>

                                <p className="text-center">¿Recuerdas tu contraseña? <Link to='/'>Inicia sessión!</Link></p>
                            </form>
                        </div>
                    </div>
                    <p className="text-center text-muted mt-3 mb-3">© Copyright 2021. All Rights Reserved.</p>
                </div>
            </FrontLayout>
        </>
    );
}

export default ForgetPassword;