import React from 'react'
import Serviceapi from "../Service/Serviceapi";
import Cards from "./Cards";
import Copyright from '../Copyright/Copyright';
import "./Service.css"

const Service = () => {
    return (
        <>
           <div className="service_page">
                <div className="heading_div">
                    <h1 className="heading_center">Service page</h1>
                </div>
                <div className="service_api">
                    {
                        Serviceapi.map((val)=>{
                            return <Cards
                                key={val.id}
                                img={val.img}
                                title={val.title}
                                prag={val.prag}
                             />
                        })
                    }
                </div>
               <div className="copy_right_div">
                   <Copyright />
               </div>
            </div>  
        </>
    )
}

export default Service;
