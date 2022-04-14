import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

import './style.css'

const Initial = () =>{
    return(
        <>
        <main className='initial'>
            <div className='initial-background'>
                <div className='initial-info'>
                    <h1 className='text-name'>Matheus Maia Alvarez</h1>
                    <p className='textP'>My name is Matheus Maia Alvarez, I'm 17 years old.</p>
                    <p className='textP'>I take a technical course on systems development at Senai</p>
                    <Link to="/about">
                    <Button className='btn-purple'>Get Start</Button>
                    </Link>
                </div>
            </div>
        </main>
        </>
    );
}

export default Initial;