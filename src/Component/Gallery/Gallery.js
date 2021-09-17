import React from 'react'
import "./Gallery.css"
import Galleryapi from "./Galleryapi";
import Card from './Card';
import Copyright from '../Copyright/Copyright';

const Gallery = () => {
    return (
        <>
           <div className="gallery_div">
                 <div className="gallery_heading">
                    <h1 className="heading_center">Gallery</h1>
                    <div className="under-line"></div>
                 </div>
                <div className="Gallery_elem">
                    {
                        Galleryapi.map((val)=>{
                            return <Card 
                                key={val.id}
                                title={val.title}
                                imgdata={val.imgdata}
                             />
                        })
                    }           
                </div>
                <Copyright />
           </div>   
        </>
    )
}

export default Gallery;
