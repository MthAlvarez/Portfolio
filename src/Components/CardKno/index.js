import React from "react";
import './style.css'

const CardKno = (props) => {
    return(
        <div className="back-kno">
            <div className="d-flex justify-content-center mt-3">
                <img className="card-image mt-5" src={props.image} alt={props.title} />
            </div>
            <div className="card-bottom-container">
                <h2>{props.linguage}</h2>
            </div>
        </div>
    )
}

export default CardKno;