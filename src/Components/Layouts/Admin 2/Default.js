import React from 'react'
import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const Default = () => {
    return (
        <>
            <section className='body'>
                <Header />
                <div className="inner-wrapper">
                    <Aside />
                    <Main />
                </div>
            </section>
        </>
    );
}

export default Default;