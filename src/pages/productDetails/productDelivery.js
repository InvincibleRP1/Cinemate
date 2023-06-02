import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faStar,
  faTruck,
  faCreditCard,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";

import '../productDetails/product.css';

export const ProductDelivery = ({price, sellingPrice, deliveryTime, rating, isAddedToCart, token, isPresentInWishlist, product, handleAddToCart, handleAddToWishlist}) => {

    return (
        <div>
            <p>
                  {" "}
                  <span>Price: {" "}₹</span>
                  {" "}
                  {sellingPrice}

                  {" "}<span className="original-price"> ₹ {price}</span>
                </p>

                <p>
                  <span>Delivery within: </span>{deliveryTime} days
                </p>

                <p>
                  {" "}
                  <span> Rating: </span>
                  {rating}
                  <FontAwesomeIcon icon={faStar} id="star-icon" />
                </p>

                <hr />

                <p className="delivery-details">
                  {" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="delivery-icons"
                    />{" "}
                  </span>
                  Fast Delivery
                </p>

                <p className="delivery-details">
                  {" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCreditCard}
                      className="delivery-icons"
                    />{" "}
                  </span>
                  Pay On Delivery
                </p>

                <p className="delivery-details">
                  {" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faFilm}
                      className="delivery-icons"
                    />{" "}
                  </span>
                  Best Quality Cinema
                </p>

                <hr />

                <div style={{ display: token ? "" : "none" }}>
                  {isAddedToCart ? (
                    <NavLink className="delivery-btns route-btn" to="/cart">
                      Go To Cart
                    </NavLink>
                  ) : (
                    <button
                      className="delivery-btns"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add To Cart
                    </button>
                  )}

                  {isPresentInWishlist ? (
                    <NavLink to="/wishlist" className="delivery-btns route-btn">
                      Go to Wishlist
                    </NavLink>
                  ) : (
                    <button
                      className="delivery-btns"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      Add To Wishlist
                    </button>
                  )}
                </div>
        </div>
    )
}