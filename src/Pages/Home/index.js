import React from 'react';
import './style.css'
import { Button } from 'react-bootstrap';
import Curriculo from '../../assets/Curriculo.pdf'

const Home = () =>{
    return(
        <>
        <main className='home'>
            <div className='container'>

                <div className='text-about-apresentation-initial d-flex justify-content-center'>
                    <h1 className='about'>About</h1>
                </div>

                <div className='text-about-apresentation-initial d-flex justify-content-center'>
                    <div className='limit-width'>
                    <p>I'm Matheus Maia Alvarez, I'm 17 years old and I live in Carapicuíba/SP</p>
                    </div>
                </div>

                <div className='text-about-apresentation d-flex justify-content-center'>  
                    <div id="linha-vertical"></div>
                </div>

                <div className='text-about-apresentation d-flex justify-content-center'>  
                    <p>
                        I take a technical course on Systems Development at Senai in the afternoon
                        and at night I take the third year of high school.
                    </p>
                </div>

                <div className='d-flex justify-content-center'>
                    <h2 className='History'>History</h2>
                </div>
                
                <div className='text-about-apresentation d-flex justify-content-center'>
                    <p>
                        I started the Systems Development technical course in 2021 and I will finish it in December 2022. 
                        I signed up for the course to start my career as a developer and chose SENAI to be part 
                        of this journey because it has excellent teachers who have excellent didactics, 
                        in addition to their facilities.
                    </p>
                </div>

                <div className='text-about-apresentation d-flex justify-content-center'>  
                    <div id="linha-vertical"></div>
                </div>

                <div className='text-about-apresentation d-flex justify-content-center'>
                    <p>
                        I am looking for internship opportunities in environments that 
                        sharpen my creativity and knowledge, including challenges that 
                        demand the use of new tools/software
                    </p>
                </div>

                <div className='mb-3 d-flex justify-content-center'>
                    
                <a href={Curriculo} download="Curriculo-MatheusMaia.pdf"><Button className='btn-purple-cv'>Download CV</Button></a>
                </div>

            </div>
        </main>


        </>
    );
}

export default Home;