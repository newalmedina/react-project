import React from 'react'

const Header = () => {
    return (
        <>
            <header id="header" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyStartAt': 54, 'stickySetTop': '-54px', 'stickyChangeLogo': false}" >
                <div className="header-body header-body-bottom-border-fixed box-shadow-none border-top-0" style={{ top: 0 }}>
                    <div className="header-container container">
                        <div className="header-row">
                            <div className="header-column w-100">
                                <div className="header-row justify-content-between">
                                    <div className="header-logo z-index-2 col-lg-2 px-0">
                                        <a href="demo-auto-services.html">
                                            <img alt="Porto" width={123} height={48} data-sticky-width={82} data-sticky-height={40} data-sticky-top={84} src={process.env.PUBLIC_URL + "/assets/front/img/demos/cleaning-services/logo.png"} />
                                        </a>
                                    </div>
                                    <div className="header-nav header-nav-links justify-content-end pe-lg-4 me-lg-3">
                                        <div className="header-nav-main header-nav-main-arrows header-nav-main-dropdown-no-borders header-nav-main-effect-3 header-nav-main-sub-effect-1">
                                            <nav className="collapse">
                                                <ul className="nav nav-pills" id="mainNav">
                                                    <li><a href="demo-auto-services.html" className="nav-link active current-page-active">Home</a></li>
                                                    <li><a href="demo-auto-services-about-us.html" className="nav-link">Login</a></li>
                                                    <li><a href="demo-auto-services-about-us.html" className="nav-link">Registrarse</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="d-flex col-auto pe-0 ps-0 ps-xl-3">
                                        <div className="header-nav-features ps-0 ms-1">
                                            <div className="header-nav-feature header-nav-features-search d-inline-flex position-relative top-3 border border-top-0 border-bottom-0 custom-remove-mobile-border-left px-4 me-2">
                                                <a href="#" className="header-nav-features-toggle text-decoration-none" data-focus="headerSearch">
                                                    <i className="icons icon-magnifier header-nav-top-icon text-5 font-weight-bold position-relative top-3" />
                                                </a>
                                                <div className="header-nav-features-dropdown header-nav-features-dropdown-mobile-fixed border-radius-0" id="headerTopSearchDropdown">
                                                    <form role="search" action="page-search-results.html" method="get">
                                                        <div className="simple-search input-group">
                                                            <input className="form-control text-1 rounded" id="headerSearch" name="q" type="search" defaultValue placeholder="Search..." />
                                                            <button className="btn" type="submit">
                                                                <i className="icons icon-magnifier header-nav-top-icon" />
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="header-nav-feature header-nav-features-cart header-nav-features-cart-big d-inline-flex top-2 ms-2">
                                                <a href="#" className="header-nav-features-toggle">
                                                    <img src={process.env.PUBLIC_URL + "/assets/front/img/icons/icon-cart-big.svg"} height={30} className="header-nav-top-icon-img" />
                                                    <span className="cart-info">
                                                        <span className="cart-qty">1</span>
                                                    </span>
                                                </a>
                                                <div className="header-nav-features-dropdown" id="headerTopCartDropdown">
                                                    <ol className="mini-products-list">
                                                        <li className="item">
                                                            <a href="#" title="Product Short Name" className="product-image"><img src="img/demos/auto-services/products/product-1.jpg" alt="Product Short Name" /></a>
                                                            <div className="product-details">
                                                                <p className="product-name">
                                                                    <a href="#">Product Short Name </a>
                                                                </p>
                                                                <p className="qty-price">
                                                                    1X <span className="price">$49</span>
                                                                </p>
                                                                <a href="#" title="Remove This Item" className="btn-remove"><i className="fas fa-times" /></a>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                    <div className="totals">
                                                        <span className="label">Total:</span>
                                                        <span className="price-total"><span className="price">$49</span></span>
                                                    </div>
                                                    <div className="actions">
                                                        <a className="btn btn-dark" href="#">View Cart</a>
                                                        <a className="btn btn-primary" href="#">Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="btn header-btn-collapse-nav ms-4" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">
                                        <i className="fas fa-bars" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header