import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

import "../navbar/navbar.css";
import { useContext } from "react";
import { MoviesDataContext } from "../../contexts/dataContext";

export const Navbar = () => {

  const { dispatch } = useContext(MoviesDataContext);

  const handleSearchedValue = (e) => {
    dispatch({type: "search-value", value: e.target.value})
  }

  return (
    <>
    
        <div className="navigation-bar">
        <div className="navigation">
        <NavLink className="logo" to="/">Logo</NavLink>

        <input type="text" className="search-area" placeholder="Search" onChange={handleSearchedValue}/>

        <li className="right-nav">
          
          <NavLink className="navbar-links" to="/shelf">Shelf</NavLink>
          <NavLink className="navbar-links">
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
          <NavLink className="navbar-links">
            <FontAwesomeIcon icon={faHeart} />
          </NavLink>
          <NavLink className="navbar-links">Sign In</NavLink>
        </li>
      </div>
        </div>
      
    </>
  );
};
