import { NavLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping, faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../navbar/navbar.css";
import { useContext, useEffect, useState } from "react";
import { MoviesDataContext } from "../../contexts/dataContext";
import { AuthContext } from "../../contexts/authContext";

export const Navbar = () => {

  const [searchInput, setSearchInput] = useState("");

  const { state, dispatch } = useContext(MoviesDataContext);

  const navigate = useNavigate();

  const { token,  handleSignOut } = useContext(AuthContext);

  // const handleSearchedValue = (e) => {
   
  // }

  useEffect(() => {
    dispatch({type: "search-value", value: searchInput});

    if(searchInput.length > 0)
    {
    navigate("/shelf");
    }
  }, [searchInput]);




  return (
    <>
    
        <div className="navigation-bar">
        <div className="navigation">
        <NavLink className="logo" to="/">Logo</NavLink>

    
      <div className="search-bar">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" 
        className="search-area"
        placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} />
      </div>
     
      
        <li className="right-nav">
          
          <NavLink className="navbar-links" to="/shelf">Shelf</NavLink>
          <NavLink className="navbar-links">
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
          <NavLink className="navbar-links">
            <FontAwesomeIcon icon={faHeart} />
          </NavLink>
          {!token ? <NavLink className="navbar-links" to="/signin">Sign In</NavLink> : <button onClick={handleSignOut}className="logout-btn">Sign Out</button>}

          <NavLink to="/test">API Test</NavLink>
        </li>
      </div>
        </div>
      
    </>
  );
};
