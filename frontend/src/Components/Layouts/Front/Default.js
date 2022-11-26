import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Main from './Main';



const Default = () => {
    localStorage.setItem('layout', 'Front');
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default Default;