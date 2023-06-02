/* eslint-disable */
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";

import "../navbar/navbar.css";
import { useContext, useState } from "react";


import { MoviesDataContext } from "../../contexts/dataContext";
import { AuthContext } from "../../contexts/authContext";

export const Navbar = () => {
  const { state, dispatch, filteredProducts } = useContext(MoviesDataContext);

  const [searchBarStatus, setSearchBarStatus] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const currentLocation = location.pathname;


  const { token, handleSignOut, currentUser } = useContext(AuthContext);

  const handleSearchedValue = (e) => {
    if (state.searchedValue.trim().length > 1) {
      setSearchBarStatus(true);
    }

    else if(state.searchedValue.trim().length === 1) 
    {
      setSearchBarStatus(false);
    }

    dispatch({ type: "search-value", value: e.target.value });
  };

  const showProduct = (productId) => {
    navigate(`/shelf/${productId}`)
  }

  const closeSearchResult = () => {
    setSearchBarStatus(false);
    dispatch({ type: "search-value", value: "" });
  }



  return (
    <>
      <div className="navigation-bar">
        <div className="navigation">
          <NavLink className="logo" to="/">
            <img
              src="https://ik.imagekit.io/qsdtqu5hp/cinemate-logo-removebg-preview.png?updatedAt=1685091987270"
              alt="logo"
            />
          </NavLink>

          <div className="search-bar">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              className="search-area"
              placeholder="Search"
              onChange={handleSearchedValue}
              value={state.searchedValue}
            />
          </div>

          <li className="right-nav">
            <NavLink className="navbar-links" to="/shelf">
              Shelf
            </NavLink>
            <NavLink className="navbar-links" to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>

            {(token && currentUser?.cart?.length !== 0) && <div className="cart-quantity-badge">
            {currentUser?.cart?.length}
            </div>}

            <NavLink className="navbar-links" to="/wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </NavLink>

            {(token && currentUser?.wishlist?.length !==0) && <div className="wishlist-quantity-badge">
            {currentUser?.wishlist?.length}
            </div>}

            <NavLink className="navbar-links" to="/user">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>

            {!token ? (
              <NavLink className="navbar-links" to="/signin">
                Sign In
              </NavLink>
            ) : (
              <button onClick={handleSignOut} className="logout-btn">
                Sign Out
              </button>
            )}

            {token && <p className="navbar-links user-name">Hi, {currentUser?.firstName}</p>}
          </li>
        </div>

        {(searchBarStatus && currentLocation !== "/shelf") && <div className="search-result">

        <span onClick={closeSearchResult}> <u>Close</u></span>

        {filteredProducts?.length === 0 && <p>No such results found!</p>}

          {filteredProducts?.map((product) => {

            const {_id, title, image, sellingPrice} = product;

            return (
              <div className="search-products-list" key={_id}
              onClick={() => showProduct(_id)}
              >

              <img src={image} alt="" className="searched-image"/>

                <p>{title}</p>
                <p>₹ {sellingPrice}</p>

              

              </div>
            )
          })}


           
        </div>
        }
      </div>
    </>
  );
};
