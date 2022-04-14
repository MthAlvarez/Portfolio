import React from 'react';
import './style.css'
import eng from '../../assets/engrenagem.gif'

const Certificates = () =>{
    return(
        <>
            <div className='text-about-apresentation-initial d-flex justify-content-center'>
                <h1 className='about about2'>Certificates</h1>
            </div>

            <div className='text-about-apresentation-initial d-flex justify-content-center'>
                <img src={eng} alt="" />
            </div>

            <div className='text-about-apresentation-initial d-flex justify-content-center'>
                <h2>Still building page</h2>
            </div>
        </>
    );
}

export default Certificates;