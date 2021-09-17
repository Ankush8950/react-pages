import React,{ useState } from 'react'
import "../Contact/Contact.css";
// import Copyright from '../copyright/copyright';
// import PhoneInput from 'react-phone-number-input';
// import 'react-phone-number-input/style.css'

const  Contact = () =>{
    // const [value,setValue] = useState();
    const [data,setData] = useState({
        fullname:" ",
        Email:" ",
        Mobile:" ",
        msg:" "
    });

    const inputEvent=(e)=>{
        e.preventDefault();
        const {name,value} =e.target;
        setData((prevalue)=>{
            return{
                ...prevalue,
                [name]:value,
            }
        })

    }

    const fromSubmit=()=>{
        alert(

        `this is my name${data.fullname}. email ${data.Email} . mobile ${data.Mobile} .message ${data.msg} `
        )
    }


    return (
        <>
          <div className="contact_page">
            <div className="form_page">
                <form className="form" onSubmit={fromSubmit}>
                <div className="int-form">
                <label htmlFor="fname" className="form-label">full name</label><br />
                    <input type="text"
                    name="fullname"
                    value={data.fname}
                    onChange={inputEvent}
                    autoComplete="off"
                     placeholder="Enter your name" />
                </div>

               <div className="int-form">
               <label htmlFor="email" className="form-label" > email address</label> <br />
                    <input type="Email" 
                     name="Email"
                     value={data.Email}
                    onChange={inputEvent}
                    autoComplete="off"
                    placeholder="Enter your email" /> 
               </div>
                
                <div className="int-form">
                <label htmlFor="mobile" className="form-label">mobile number</label> <br />
                    <input type="number"
                     name="Mobile"
                     value={data.Mobile}
                     onChange={inputEvent}
                    autoComplete="off"
                     placeholder="Mobile number"
                      /> 
                </div>
                <div className="int-form">
                    <label htmlFor="message" className="form-control" >Message</label><br />
                    <textarea type="text" 
                     name="msg"
                     value={data.msg}
                     onChange={inputEvent}
                     rows="5"
                     cols="50"   
                    autoComplete="off"
                     placeholder="Message"
                    /> 
                </div>
                   <button className="btn" type="submit" >Submit</button>
                </form>
            </div>
          </div>
        </>
    )
}

export default Contact;
