import React from 'react';
import CardKno from '../../Components/CardKno';
import ReactJS from '../../assets/logos/reactjs.png'
import html from '../../assets/logos/html.png'
import css from '../../assets/logos/css.png'
import JS from '../../assets/logos/js.png'
import git from '../../assets/logos/git.png'
import csharp from '../../assets/logos/csharp.png'
import python from '../../assets/logos/python.png'
import code from '../../assets/logos/code.png'
import bot from '../../assets/logos/bootstrap.svg'
import sql from '../../assets/logos/mysql.png'

const Knowledge = () =>{
    return(
        <>
            <div className='text-about-apresentation-initial d-flex justify-content-center'>
                <h1 className='about'>Knwldg</h1>
            </div>

            <div className='container mt-5'>
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <CardKno
                            linguage='ReactJS'  
                            image={ReactJS}
                        />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <CardKno
                            linguage='HTML'  
                            image={html}
                        />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <CardKno
                            linguage='CSS'  
                            image={css}
                        />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <CardKno
                            linguage='JS'  
                            image={JS}
                        />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <CardKno
                            linguage='GIT'  
                            image={git}
                        />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <CardKno
                            linguage='C#'  
                            image={csharp}
                        />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <CardKno
                            linguage='React Native'  
                            image={ReactJS}
                        />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <CardKno
                            linguage='Python'  
                            image={python}
                        />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <CardKno
                            linguage='Visual Code'  
                            image={code}
                        />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <CardKno
                            linguage='Bootstrap'  
                            image={bot}
                        />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <CardKno
                            linguage='MySQL'  
                            image={sql}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Knowledge;