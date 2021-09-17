import React from 'react'
import "./Card.css"

const  Card = (props) => {
    return (
        <>
            <div className="card_container">
                <div className="Carde_elem">
                    <img src={props.imgdata} className="img_control" alt="cardimg" />
                       <h2>{props.title}</h2>
                </div>
           </div>  
        </>
    )
}

export default Card;
