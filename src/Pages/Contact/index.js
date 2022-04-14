import React from 'react';
import Forms from '../../Components/Form';
import Mapa from '../../Components/Mapa';

import './style.css'

const Contact = () =>{
    return(
        <>
            <div className='back-contact'>
                <div className='container'>
                    <h1 className='pt-5 text-contact'>Want to get in touch?</h1>
                </div>

                <div className='container'>
                    <p className='mt-5'>
                        Do you have any questions or are you interested in working with me?
                        Just fill in the fields below.
                    </p>
                </div>

                <div className='container'>
                    <Forms />
                </div>

                <div className='container'>
                    <Mapa />
                </div>
            </div>
        </>
    );
}

export default Contact;