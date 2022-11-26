const ForgetPassword = () => {
    return (
        <>
            <div role="main" className="main">
                <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 align-self-center p-static order-2 text-center">
                                <h1 className="font-weight-bold text-dark">Olvidastes Contraseña</h1>
                            </div>
                            <div className="col-md-12 align-self-center order-1">
                                <ul className="breadcrumb d-block text-center">
                                    <li><a href="#">Home</a></li>
                                    <li className="active">Olvidastes Contraseña</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container py-4">
                    <div className="row justify-content-center mt-5 mb-5">
                        <div className="col-12 col-md-12 col-lg-5 mb-5 mb-lg-0 mb-5 card border-radius-2 bg-color-light border-2 p-3">
                            <form method="POST" action="http://react-project.test/login">
                                <input type="hidden" name="_token" defaultValue="9ALmBWE0ZGc4CQh2Uvi13Wn0HI8eUiSjUAw0vXeM" />                <div className="row">
                                    <div className="form-group col">
                                        <label htmlFor="email" className="col-md-12 col-form-label text-start">Email</label>
                                        <div className="col-md-12">
                                            <input id="email" type="email" className="form-control " name="email" required autofocus />
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-between">

                                    <div className="form-group col-md-auto">
                                        <a className="text-decoration-none text-color-dark text-color-hover-primary font-weight-semibold text-2" href="http://react-project.test/password/reset">
                                            Recuerdas tu contraseña</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col">
                                        <button type="submit" className="btn btn-secondary btn-modern w-100 text-uppercase rounded-0 font-weight-bold text-3 py-3" data-loading-text="Loading...">  Recuperar Contraseña</button>
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

export default ForgetPassword;