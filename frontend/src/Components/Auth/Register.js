const Register = () => {
    return (
        <>
            <div role="main" className="main">
                <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 align-self-center p-static order-2 text-center">
                                <h1 className="font-weight-bold text-dark">Registrarse</h1>
                            </div>
                            <div className="col-md-12 align-self-center order-1">
                                <ul className="breadcrumb d-block text-center">
                                    <li><a href="#">Home</a></li>
                                    <li className="active">Registrarse</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container py-4">
                    <div className="row justify-content-center mt-5 mb-5">
                        <div className="col-12 col-md-12 col-lg-12 mb-5 mb-lg-0 mb-5 card border-radius-2 bg-color-light border-2 p-3">
                            <form method="POST" action="http://react-project.test/login">

                                <div className="row">
                                    <div className="form-group col-md-6 col-12">
                                        <label htmlFor="first_name" className="col-md-12 col-form-label text-start">Nombre</label>
                                        <div className="col-md-12">
                                            <input id="first_name" type="first_name" className="form-control " name="first_name" required autoComplete="current-password" />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6 col-12">
                                        <label htmlFor="last_name" className="col-md-12 col-form-label text-start">Apellidos</label>
                                        <div className="col-md-12">
                                            <input id="last_name" type="last_name" className="form-control " name="last_name" required autoComplete="current-password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6 col-12">
                                        <label htmlFor="password" className="col-md-12 col-form-label text-start">Contraseña</label>
                                        <div className="col-md-12">
                                            <input id="password" type="password" className="form-control " name="password" required autoComplete="current-password" />
                                        </div>
                                    </div>

                                </div>
                                <div className="row justify-content-between">

                                    <div className="form-group col-md-auto">
                                        <a className="text-decoration-none text-color-dark text-color-hover-primary font-weight-semibold text-2" href="http://react-project.test/password/reset">
                                            ¿Ya estas registrado?</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col">
                                        <button type="submit" className="btn btn-secondary btn-modern w-100 text-uppercase rounded-0 font-weight-bold text-3 py-3" data-loading-text="Loading...">  Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Register;