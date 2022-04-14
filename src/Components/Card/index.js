import React from "react";
import'./style.css'


const Cards = (props) => {
    return(
        <div>
            <img className="dsmovie-movie-card-image" src={props.image} alt={props.title} />
            <div className="dsmovie-card-bottom-container">
                <p>{props.desc}</p>

                <a href={props.link} target="_blank" rel="noreferrer">
                    <div className="btn btn-primary dsmovie-btn">Visualizar</div>
                </a>
            </div>
        </div>
    )
}

export default Cards;