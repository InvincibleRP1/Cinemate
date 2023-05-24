import { useContext } from "react";

import { Navbar } from "../../components/navbar/navbar";
import { AuthContext } from "../../contexts/authContext";
import "../wishlist/wishlist.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../contexts/cartContext";
import { NavLink } from "react-router-dom";
import { WishlistContext } from "../../contexts/wishlistContext";

export const WishlistPage = () => {
  const { currentUser, token } = useContext(AuthContext);

  const { itemExistsInCart, handleAddToCart, handleCartQuantity} = useContext(CartContext);

  const {handleDeleteFromWishlist} = useContext(WishlistContext);

  const WishlistData = currentUser?.wishlist;

  return (
    <div>
      <Navbar></Navbar>
      <div className="wishlist-area">
      {WishlistData.length < 1 && <p className="empty-wishlist-text">No items in wishlist!</p>}
        <ul className="wishlist-card">

          {WishlistData.map((product) => {
            const { title, image, category, price, rating } = product;

            const isInCart = itemExistsInCart(product);

            return (
              <li>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="trash-btn action-btn"
                  onClick={() => handleDeleteFromWishlist(product)}
                />

                <img src={image} alt={title} className="wishlist-image" />
                <h3>{title}</h3>
                <p>
                  Category: <span>{category}</span>
                </p>
                <p>
                  Price: <span>₹ {price}</span>
                </p>
                <p>
                  Rating: <span>{rating}</span>
                </p>

                <div className="wishlist-btn-area">
                  {isInCart ? (
                    <NavLink className="cart-determine-btn" to="/cart">
                      Added To Cart
                    </NavLink>
                  ) : (
                    <button className="move-to-cart-btn action-btn" 
                    onClick={isInCart ? () => handleCartQuantity("INC", product) :
                
                    () => handleAddToCart(product)
                    }
                    
                    >
                      Move To Cart
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
