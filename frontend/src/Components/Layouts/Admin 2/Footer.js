const Footer = () => {
    return (
        <>
            <footer id="footer" className="border-0 mt-0">
                <div className="container py-5">
                    <div className="row py-3">
                        <div className="col-md-4 mb-5 mb-md-0">
                            <div className="feature-box flex-column flex-xl-row align-items-center align-items-lg-start text-center text-lg-start">
                                <div className="feature-box-icon bg-transparent mb-4 mb-xl-0 p-0">
                                    <img width={45} src={process.env.PUBLIC_URL + "/assets/front/img/demos/auto-services/icons/icon-location.svg"} data-icon data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light position-relative bottom-3'}" className="svg-fill-color-light position-relative bottom-3" style={{ opacity: 1, width: 45, filter: 'invert(1)' }} />
                                </div>
                                <div className="feature-box-info line-height-1 ps-2">
                                    <span className="d-block font-weight-bold text-color-light text-5 mb-2">Address</span>
                                    <p className="text-color-light text-4 line-height-4 font-weight-light mb-0">123 Street Name, Los Angeles, CA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 mb-md-0">
                            <div className="feature-box flex-column flex-xl-row align-items-center align-items-lg-start text-center text-lg-start">
                                <div className="feature-box-icon bg-transparent mb-4 mb-xl-0 p-0">
                                    <i className="icons icon-phone text-9 text-color-light position-relative top-4" />
                                </div>
                                <div className="feature-box-info line-height-1 ps-2">
                                    <span className="d-block font-weight-bold text-color-light text-5 pb-1 mb-1">Call Us Now</span>
                                    <a href="tel:1234567890" className="text-color-light text-4 line-height-7 text-decoration-none">+123 4567 890</a>
                                    <span className="text-color-light text-4 px-2">/</span>
                                    <a href="tel:1234567890" className="text-color-light text-4 line-height-7 text-decoration-none">+123 4567 890</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-box flex-column flex-xl-row align-items-center align-items-lg-start text-center text-lg-start">
                                <div className="feature-box-icon bg-transparent mb-4 mb-xl-0 p-0">
                                    <img width={45} src={process.env.PUBLIC_URL + "/assets/front/img/demos/auto-services/icons/car-winch.svg"} data-icon data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light position-relative bottom-3'}" className="svg-fill-color-light position-relative bottom-3" style={{ opacity: 1, width: 45, filter: 'invert(1)' }} />
                                </div>
                                <div className="feature-box-info line-height-1 ps-xl-3">
                                    <span className="d-block font-weight-bold text-color-light text-5 pb-1 mb-1">24/7 Assistance</span>
                                    <a href="tel:1234567890" className="text-color-light text-4 line-height-7 text-decoration-none">+123 4567 890</a>
                                    <span className="text-color-light text-4 px-2">/</span>
                                    <a href="tel:1234567890" className="text-color-light text-4 line-height-7 text-decoration-none">+123 4567 890</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="bg-light opacity-2 my-0" />
                <div className="container pb-5">
                    <div className="row text-center text-md-start py-4 my-5">
                        <div className="col-md-6 col-lg-3 align-self-center text-center text-md-start text-lg-center mb-5 mb-lg-0">
                            <a href="demo-auto-services.html" className="text-decoration-none">
                                <img src={process.env.PUBLIC_URL + "/assets/front/img/demos/auto-services/logo-light.png"} className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                            <h5 className="text-transform-none font-weight-bold text-color-light text-4-5 mb-4">About Us</h5>
                            <ul className="list list-unstyled">
                                <li className="pb-1 mb-2">
                                    <span className="d-block font-weight-semibold line-height-1 text-color-grey text-3-5">ADDRESS</span>
                                    <a href="demo-auto-services-contact.html#get-direction" className="text-color-light custom-text-underline-1 font-weight-medium text-3-5">GET DIRECTIONS</a>
                                </li>
                                <li className="pb-1 mb-2">
                                    <span className="d-block font-weight-semibold line-height-1 text-color-grey text-3-5 mb-1">PHONE</span>
                                    <ul className="list list-unstyled font-weight-light text-3-5 mb-0">
                                        <li className="text-color-light line-height-3 mb-0">
                                            Sales: <a href="tel:+1234567890" className="text-decoration-none text-color-light text-color-hover-default">+123 4567 890</a>
                                        </li>
                                        <li className="text-color-light line-height-3 mb-0">
                                            Services: <a href="tel:+1234567890" className="text-decoration-none text-color-light text-color-hover-default">+123 4567 890</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="pb-1 mb-2">
                                    <span className="d-block font-weight-semibold line-height-1 text-color-grey text-3-5">EMAIL</span>
                                    <a href="mailto:mail@example.com" className="text-decoration-none font-weight-light text-3-5 text-color-light text-color-hover-default">mail@example.com</a>
                                </li>
                            </ul>
                            <ul className="social-icons social-icons-medium">
                                <li className="social-icons-instagram">
                                    <a href="http://www.instagram.com/" className="no-footer-css" target="_blank" title="Instagram"><i className="fab fa-instagram" /></a>
                                </li>
                                <li className="social-icons-twitter mx-2">
                                    <a href="http://www.twitter.com/" className="no-footer-css" target="_blank" title="Twitter"><i className="fab fa-twitter" /></a>
                                </li>
                                <li className="social-icons-facebook">
                                    <a href="http://www.facebook.com/" className="no-footer-css" target="_blank" title="Facebook"><i className="fab fa-facebook-f" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-2 mb-5 mb-md-0">
                            <h5 className="text-transform-none font-weight-bold text-color-light text-4-5 mb-4">Auto Services</h5>
                            <ul className="list list-unstyled mb-0">
                                <li className="mb-0"><a href="demo-auto-services-services-detail.html">Brake Repair</a></li>
                                <li className="mb-0"><a href="demo-auto-services-services-detail.html">Check Engine</a></li>
                                <li className="mb-0"><a href="demo-auto-services-services-detail.html">Suspension Repair</a></li>
                                <li className="mb-0"><a href="demo-auto-services-services-detail.html">Transmission Repair</a></li>
                                <li className="mb-0"><a href="demo-auto-services-services-detail.html">A/C Repair</a></li>
                                <li className="mb-0"><a href="demo-auto-services-services-detail.html">Oil Change</a></li>
                                <li className="mb-0"><a href="demo-auto-services-services-detail.html">Electrical Diagnostics</a></li>
                                <li className="mb-0"><a href="demo-auto-services-services-detail.html">Tune Up</a></li>
                                <li className="mb-0"><a href="demo-auto-services-services-detail.html">Fuel System Repair</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 offset-lg-1">
                            <h5 className="text-transform-none font-weight-bold text-color-light text-4-5 mb-4">Opening Hours</h5>
                            <ul className="list list-unstyled list-inline custom-list-style-1 mb-0">
                                <li>Mon - Fri: 8:30 am to 5:00 pm</li>
                                <li>Saturday: 9:30 am to 1:00 pm</li>
                                <li>Sunday: Closed</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright bg-light py-4">
                    <div className="container py-2">
                        <div className="row">
                            <div className="col">
                                <p className="text-center text-3 mb-0">Porto Auto Services © 2021. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );
};

export default Footer;
