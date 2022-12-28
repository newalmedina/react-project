const MainHeader = (props) => {
    return (
        <>
            <header className="page-header">
                <h2>{props.children}</h2>
                <div className="right-wrapper text-end">
                    <ol className="breadcrumbs">
                        <li>
                            <a href="index.html">
                                <i className="bx bx-home-alt" />
                            </a>
                        </li>
                        <li><span>{props.children}</span></li>
                    </ol>
                    <a className="sidebar-right-toggle" data-open="sidebar-right"><i className="fas fa-chevron-left" /></a>
                </div>
            </header>
        </>
    );
}

export default MainHeader;