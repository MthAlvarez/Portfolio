import React from 'react';
import Card  from '../../Components/Card'
import DSMovie from '../../assets/projects/DSMovie.png'
import Bitcoin from '../../assets/projects/Bitcoin.png'
import Geek from '../../assets/projects/Geek-Stack.png'
import Mesla from '../../assets/projects/Mesla.png'
import Flix from '../../assets/projects/MyFlixzin.png'
import Paint from '../../assets/projects/Paint.png'
import Snake from '../../assets/projects/Snake.png'

const Portfolio = () =>{
    return(
        <div className='container mt-3'>
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <Card 
                        title='Teste' 
                        desc='The application consists of a web page with a list of some movies. The page...' 
                        image={DSMovie}
                        link="https://matheus-maia-alvarez-dsmovie.netlify.app/"
                    />
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <Card 
                        title='Teste' 
                        desc='First app developed in React Native. The application aims to bring...' 
                        image={Bitcoin}
                        link="https://github.com/MatheusAlvarez/Bitcoin-Native"
                    />
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <Card 
                        title='Teste'
                        desc='Geek-Stack is a project developed in Squad by the technical course'  
                        image={Geek}
                        link="https://matheusalvarez.github.io/Geek-Steak/"
                    />
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <Card 
                        title='Teste'
                        desc="Mesla-Clone-UI is a clone of the tesla website developed in React, through..." 
                        image={Mesla}
                        link="https://mesla-clone.netlify.app"
                    />
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <Card 
                        title='Teste'
                        desc="MyFlixzin is a project developed in HTML and CSS through the technical course..." 
                        image={Flix}
                        link="https://matheusalvarez.github.io/MyFlixzin/"
                    />
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <Card 
                        title='Teste' 
                        desc="Paint is a project developed in C# inspired by the paint application with b..." 
                        image={Paint}
                        link="https://github.com/MatheusAlvarez/Paint/blob/main/Paint/Paint.exe"
                    />
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <Card 
                        title='Teste'
                        desc="This project is about a Game developed in C# inspired by the game Snake and i deve..."  
                        image={Snake}
                        link="https://github.com/MatheusAlvarez/Snake-Game-CSharp/blob/main/Snake/bin/Debug/Snake.exe"
                    />
                </div>
            </div>
        </div>
        
    );
}

export default Portfolio;