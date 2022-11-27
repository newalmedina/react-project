import React from 'react'
import Aside from './Aside'
import Header from './Header'



const Default = (props) => {

    return (
        <>
            <section className='body'>
                <Header />
                <div className="inner-wrapper">
                    <Aside />
                    {props.children}
                </div>
            </section>
        </>
    );
}

export default Default;