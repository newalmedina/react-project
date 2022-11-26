import MainHeader from "./MainHeader";

const Main = () => {
    return (
        <>

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


        </>
    );
}

export default Main;