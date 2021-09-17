import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FcMenu } from "react-icons/fc";
import "./Navbar.css"


const Navbar = () => {
    const [hamburger, sethamburger] = useState(false);
    return (          
    <>
      <div className="nav_bar ">
        <div className="left_Nav_bar">
          <NavLink className="Navbar_brand" to="/">
            REACT LANDING PAGE
          </NavLink>
        </div>
        <div className="right_Nav_bar">
          <div
            className={
              hamburger ? "right-element mobile-menu-link" : "right-element"
            }>
            <ul className="list">
              <li>
                <NavLink exact activeClassName="active_class" to="/">
                  Feature
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active_class" to="/About">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active_class" to="/Service">
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active_class" to="/Gallery">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active_class" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="ham_burger">
            <NavLink to="#" onClick={() => sethamburger(!hamburger)}>
              <FcMenu />
            </NavLink>
          </div>
        </div>
      </div>
        </>
    )
}

export default Navbar;
