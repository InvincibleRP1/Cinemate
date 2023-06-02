import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";


import { Navbar } from "../../components/navbar/navbar";
import { AuthContext } from "../../contexts/authContext";
import "../wishlist/wishlist.css";
import { CartContext } from "../../contexts/cartContext";
import { WishlistContext } from "../../contexts/wishlistContext";
import { useNavigate } from "react-router-dom";

export const WishlistPage = () => {
  const { currentUser, token } = useContext(AuthContext);

  const { itemExistsInCart, handleAddToCart, handleCartQuantity } =
    useContext(CartContext);

  const { handleDeleteFromWishlist } = useContext(WishlistContext);

  const WishlistData = currentUser?.wishlist;

  const navigate = useNavigate();

  const seeProductDetail = (productId) => {
    navigate(`/shelf/${productId}`);
  }


  return (
    <div>
      <Navbar></Navbar>
      <div className="wishlist-area">
        {WishlistData?.length < 1 && (
          <p className="empty-wishlist-text">No items in wishlist!</p>
        )}
        <ul className="wishlist-card">
          {WishlistData?.map((product) => {
            const { _id, title, image, category, price, sellingPrice, rating } = product;

            const isInCart = itemExistsInCart(product);

            return (
              <li key={title}>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="trash-btn action-btn"
                  onClick={() => handleDeleteFromWishlist(product)}
                />

                <img src={image} alt={title} className="wishlist-image"
                onClick={() => seeProductDetail(_id)}
                />
                <h3>{title}</h3>
                <p>
                  <span style={{color: "maroon"}}>{category}</span>
                </p>
                <p>
                  <span>₹ {sellingPrice}</span> <span className="original-price">₹ {price}</span>
                </p>
                <p>
                  <span>{rating}{" "}
                  <FontAwesomeIcon icon={faStar} className="rating-sign-icon"/>
                  </span>
                </p>

                <div className="wishlist-btn-area">
                  {
                    <button
                      className="move-to-cart-btn action-btn"
                      onClick={
                        isInCart
                          ? () => handleCartQuantity("INC", product._id)
                          : () => handleAddToCart(product)
                      }
                    >
                      Move To Cart
                    </button>
                  }
                </div>
              </li>
            );
          })}
        </ul>
      </div>
     
    </div>
  );
};
