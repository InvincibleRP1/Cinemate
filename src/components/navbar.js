import { NavLink } from "react-router-dom";

import '../components/navbar.css'

export const Navbar = () => {

    return (
        <>
             
            <div className="navigation">

            <NavLink className="logo">Logo</NavLink>

            <input type="text" className="search-area" placeholder="Search"/>

            <li className="right-nav">
            <NavLink className="navbar-links">Products</NavLink>
            <NavLink className="navbar-links">Cart</NavLink>
            <NavLink className="navbar-links">Wishlist</NavLink>
            <NavLink className="navbar-links">Sign In</NavLink>
            </li>
           
            </div>
            
        </>
    )
}