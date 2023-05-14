import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons"; 

import '../navbar/navbar.css'

export const Navbar = () => {

    return (
        <>
             
            <div className="navigation">

            <NavLink className="logo">Logo</NavLink>

            <input type="text" className="search-area" placeholder="Search"/>

            <li className="right-nav">
            <NavLink className="navbar-links">Explore</NavLink>
            <NavLink className="navbar-links"><FontAwesomeIcon icon={faCartShopping} /></NavLink>
            <NavLink className="navbar-links"><FontAwesomeIcon icon={faHeart} /></NavLink>
            <NavLink className="navbar-links">Sign In</NavLink>
            </li>
           
            </div>
            
        </>
    )
}