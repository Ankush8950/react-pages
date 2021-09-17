import React from 'react'
import "./Cards.css"

const Cards = (props) => {
    return (
        <>
            <div className="container_cards">
                <div className="Cards_elem">
                   <div className="circle">
                       {props.img}  
                   </div>
                  <div className="contant">
                    <h2>{props.title}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                  </div>
                </div>
            </div>  
        </>
    )
}

export default Cards;
