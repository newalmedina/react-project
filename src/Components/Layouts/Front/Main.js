const Main = () => {
    return (
        <>
            <div role="main" className="main">
                <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 align-self-center p-static order-2 text-center">
                                <h1 className="font-weight-bold text-dark">Products</h1>
                            </div>
                            <div className="col-md-12 align-self-center order-1">
                                <ul className="breadcrumb d-block text-center">
                                    <li><a href="#">Home</a></li>
                                    <li className="active">Products</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="shop container py-4 my-5">
                    <div className="products row row-gutter-sm mb-4">

                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="product mb-0">
                                <div className="product-thumb-info mb-3">
                                    <div className="product-thumb-info-badges-wrapper">
                                        <span className="badge badge-ecommerce badge-danger">27% OFF</span>
                                    </div>
                                    <div className="addtocart-btn-wrapper">
                                        <a href="#" className="text-decoration-none addtocart-btn" title="Add to Cart">
                                            <i className="icons icon-bag" />
                                        </a>
                                    </div>
                                    <a href="#" className="quick-view text-uppercase font-weight-semibold text-2">
                                        QUICK VIEW
                                    </a>
                                    <a href="#">
                                        <div className="product-thumb-info-image bg-light">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/front/img/demos/auto-services/products/product-1.jpg"} />
                                        </div>
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
                                        <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
                                    </div>
                                </div>
                                <div title="Rated 5 out of 5">
                                    <input type="text" className="d-none" defaultValue={5} data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}" />
                                </div>
                                <p className="price text-5 mb-3">
                                    <span className="sale text-color-dark font-weight-medium">49,00</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="product mb-0">
                                <div className="product-thumb-info mb-3">
                                    <div className="product-thumb-info-badges-wrapper">
                                        <span className="badge badge-ecommerce badge-danger">27% OFF</span>
                                    </div>
                                    <div className="addtocart-btn-wrapper">
                                        <a href="#" className="text-decoration-none addtocart-btn" title="Add to Cart">
                                            <i className="icons icon-bag" />
                                        </a>
                                    </div>
                                    <a href="#" className="quick-view text-uppercase font-weight-semibold text-2">
                                        QUICK VIEW
                                    </a>
                                    <a href="#">
                                        <div className="product-thumb-info-image bg-light">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/front/img/demos/auto-services/products/product-1.jpg"} />
                                        </div>
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
                                        <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
                                    </div>
                                </div>
                                <div title="Rated 5 out of 5">
                                    <input type="text" className="d-none" defaultValue={5} data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}" />
                                </div>
                                <p className="price text-5 mb-3">
                                    <span className="sale text-color-dark font-weight-medium">49,00</span>
                                    <span className="amount">59,00</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="product mb-0">
                                <div className="product-thumb-info mb-3">
                                    <div className="product-thumb-info-badges-wrapper">
                                        <span className="badge badge-ecommerce badge-danger">27% OFF</span>
                                    </div>
                                    <div className="addtocart-btn-wrapper">
                                        <a href="#" className="text-decoration-none addtocart-btn" title="Add to Cart">
                                            <i className="icons icon-bag" />
                                        </a>
                                    </div>
                                    <a href="#" className="quick-view text-uppercase font-weight-semibold text-2">
                                        QUICK VIEW
                                    </a>
                                    <a href="#">
                                        <div className="product-thumb-info-image bg-light">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/front/img/demos/auto-services/products/product-1.jpg"} />
                                        </div>
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
                                        <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
                                    </div>
                                </div>
                                <div title="Rated 5 out of 5">
                                    <input type="text" className="d-none" defaultValue={5} data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}" />
                                </div>
                                <p className="price text-5 mb-3">
                                    <span className="sale text-color-dark font-weight-medium">49,00</span>
                                    <span className="amount">59,00</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="product mb-0">
                                <div className="product-thumb-info mb-3">
                                    <div className="product-thumb-info-badges-wrapper">
                                        <span className="badge badge-ecommerce badge-danger">27% OFF</span>
                                    </div>
                                    <div className="addtocart-btn-wrapper">
                                        <a href="#" className="text-decoration-none addtocart-btn" title="Add to Cart">
                                            <i className="icons icon-bag" />
                                        </a>
                                    </div>
                                    <a href="#" className="quick-view text-uppercase font-weight-semibold text-2">
                                        QUICK VIEW
                                    </a>
                                    <a href="#">
                                        <div className="product-thumb-info-image bg-light">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/front/img/demos/auto-services/products/product-1.jpg"} />
                                        </div>
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
                                        <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
                                    </div>
                                </div>
                                <div title="Rated 5 out of 5">
                                    <input type="text" className="d-none" defaultValue={5} data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}" />
                                </div>
                                <p className="price text-5 mb-3">
                                    <span className="sale text-color-dark font-weight-medium">49,00</span>
                                    <span className="amount">59,00</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="product mb-0">
                                <div className="product-thumb-info mb-3">
                                    <div className="product-thumb-info-badges-wrapper">
                                        <span className="badge badge-ecommerce badge-danger">27% OFF</span>
                                    </div>
                                    <div className="addtocart-btn-wrapper">
                                        <a href="#" className="text-decoration-none addtocart-btn" title="Add to Cart">
                                            <i className="icons icon-bag" />
                                        </a>
                                    </div>
                                    <a href="#" className="quick-view text-uppercase font-weight-semibold text-2">
                                        QUICK VIEW
                                    </a>
                                    <a href="#">
                                        <div className="product-thumb-info-image bg-light">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/front/img/demos/auto-services/products/product-1.jpg"} />
                                        </div>
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
                                        <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
                                    </div>
                                </div>
                                <div title="Rated 5 out of 5">
                                    <input type="text" className="d-none" defaultValue={5} data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}" />
                                </div>
                                <p className="price text-5 mb-3">
                                    <span className="sale text-color-dark font-weight-medium">49,00</span>
                                    <span className="amount">59,00</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="product mb-0">
                                <div className="product-thumb-info mb-3">
                                    <div className="product-thumb-info-badges-wrapper">
                                        <span className="badge badge-ecommerce badge-danger">27% OFF</span>
                                    </div>
                                    <div className="addtocart-btn-wrapper">
                                        <a href="#" className="text-decoration-none addtocart-btn" title="Add to Cart">
                                            <i className="icons icon-bag" />
                                        </a>
                                    </div>
                                    <a href="#" className="quick-view text-uppercase font-weight-semibold text-2">
                                        QUICK VIEW
                                    </a>
                                    <a href="#">
                                        <div className="product-thumb-info-image bg-light">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/front/img/demos/auto-services/products/product-1.jpg"} />
                                        </div>
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
                                        <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
                                    </div>
                                </div>
                                <div title="Rated 5 out of 5">
                                    <input type="text" className="d-none" defaultValue={5} data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}" />
                                </div>
                                <p className="price text-5 mb-3">
                                    <span className="sale text-color-dark font-weight-medium">49,00</span>
                                    <span className="amount">59,00</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="product mb-0">
                                <div className="product-thumb-info mb-3">
                                    <div className="product-thumb-info-badges-wrapper">
                                        <span className="badge badge-ecommerce badge-danger">27% OFF</span>
                                    </div>
                                    <div className="addtocart-btn-wrapper">
                                        <a href="#" className="text-decoration-none addtocart-btn" title="Add to Cart">
                                            <i className="icons icon-bag" />
                                        </a>
                                    </div>
                                    <a href="#" className="quick-view text-uppercase font-weight-semibold text-2">
                                        QUICK VIEW
                                    </a>
                                    <a href="#">
                                        <div className="product-thumb-info-image bg-light">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/front/img/demos/auto-services/products/product-1.jpg"} />
                                        </div>
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
                                        <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
                                    </div>
                                </div>
                                <div title="Rated 5 out of 5">
                                    <input type="text" className="d-none" defaultValue={5} data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}" />
                                </div>
                                <p className="price text-5 mb-3">
                                    <span className="sale text-color-dark font-weight-medium">49,00</span>
                                    <span className="amount">59,00</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="product mb-0">
                                <div className="product-thumb-info mb-3">
                                    <div className="product-thumb-info-badges-wrapper">
                                        <span className="badge badge-ecommerce badge-danger">27% OFF</span>
                                    </div>
                                    <div className="addtocart-btn-wrapper">
                                        <a href="#" className="text-decoration-none addtocart-btn" title="Add to Cart">
                                            <i className="icons icon-bag" />
                                        </a>
                                    </div>
                                    <a href="#" className="quick-view text-uppercase font-weight-semibold text-2">
                                        QUICK VIEW
                                    </a>
                                    <a href="#">
                                        <div className="product-thumb-info-image bg-light">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/front/img/demos/auto-services/products/product-1.jpg"} />
                                        </div>
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <a href="#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
                                        <h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
                                    </div>
                                </div>
                                <div title="Rated 5 out of 5">
                                    <input type="text" className="d-none" defaultValue={5} data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}" />
                                </div>
                                <p className="price text-5 mb-3">
                                    <span className="sale text-color-dark font-weight-medium">49,00</span>
                                    <span className="amount">59,00</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Main;