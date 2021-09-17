import React from 'react'
import web from "../image/com-10.jpg"
import "./About.css"

const About = () => {
    return (
        <>
            <div className="about-page">
                <div className="img_div">
                    <img src={web} className="img_fluid" alt="About-img" />
                </div>
                <div className="container_div">
                    <h1>ABOUT US</h1>
                    <div className="under_line"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="check_box">
                        <h2>Why Choose Us?  </h2>
                        <div className="box">
                            lorem ipsum dolor<br/>
                            Tempor incididunt<br/>
                            Lorem ipsum dolor<br/>
                            Incididunt ut labore<br/>
                        </div>
                    </div>
                    </div>
                </div> 
        </>
    )
}

export default About
