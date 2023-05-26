/* eslint-disable */
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping, faHeart, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";

import "../navbar/navbar.css";
import { useContext, useEffect } from "react";
import { MoviesDataContext } from "../../contexts/dataContext";
import { AuthContext } from "../../contexts/authContext";

export const Navbar = () => {

  // const [searchInput, setSearchInput] = useState("");

  const { state, dispatch } = useContext(MoviesDataContext);

  const navigate = useNavigate();
  const location = useLocation();

  const { token,  handleSignOut } = useContext(AuthContext);

  const handleSearchedValue = (e) => {
    dispatch({type: "search-value", value: e.target.value});
  }

 



  return (
    <>
    
        <div className="navigation-bar">
        <div className="navigation">
        <NavLink className="logo" to="/">

          <img src="https://ik.imagekit.io/qsdtqu5hp/cinemate-logo-removebg-preview.png?updatedAt=1685091987270" alt="logo" />
        </NavLink>

    
      <div className="search-bar">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" 
        className="search-area"
        placeholder="Search" onChange={handleSearchedValue} 
        value={state.searchedValue}
        />
      </div>
     
      
        <li className="right-nav">
          
          <NavLink className="navbar-links" to="/shelf">Shelf</NavLink>
          <NavLink className="navbar-links" to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
          <NavLink className="navbar-links" to="/wishlist">
            <FontAwesomeIcon icon={faHeart} />
          </NavLink>

          <NavLink className="navbar-links" to="/user">
            <FontAwesomeIcon icon={faUser} />
          </NavLink>

          {!token ? <NavLink className="navbar-links" to="/signin">Sign In</NavLink> : <button onClick={handleSignOut}className="logout-btn">Sign Out</button>}

          <NavLink to="/test">API Test</NavLink>
        </li>
      </div>
        </div>
      
    </>
  );
};
