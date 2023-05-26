import { useContext } from "react";
import { NavLink } from "react-router-dom";


import { AuthContext } from "../../contexts/authContext";
import { Navbar } from "../../components/navbar/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "../cart/cart.css";
import { CartContext } from "../../contexts/cartContext";
import { WishlistContext } from "../../contexts/wishlistContext";
// import { MoviesDataContext } from "../../contexts/dataContext";

export const CartPage = () => {
  const { currentUser } = useContext(AuthContext);

  const { cartItemsPrice, removeFromCart, handleCartQuantity } =
    useContext(CartContext);

  const { isAddedToWishlist, handleAddToWishlist } = useContext(WishlistContext);

  //   const { state } = useContext(MoviesDataContext);

  const itemsInCart = currentUser?.cart;

  const moveToWishlist = (product) => {
    const itemExistsInWishlist = isAddedToWishlist(product);

    if(!itemExistsInWishlist)
    {
      handleAddToWishlist(product);
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <p className="cart-heading">My Cart ({itemsInCart?.length})</p>

      {itemsInCart.length === 0 && <p className="cart-heading">No items in cart</p>}
      <div className="cart-container">
        <div className="cart-card">
          {itemsInCart?.map((product) => {
            const { _id, title, price, image, category, qty } = product;

            const itemExistsInWishlist = isAddedToWishlist(product);

            return (
              <div className="cart-items" key={_id}>
                <img src={image} alt={title} className="cart-item-image" />

                <div className="cart-item-details">
                  <b>{title}</b>
                  <p>
                    <b>Category: </b>
                    {category}
                  </p>
                  <p>
                    <b>Price: </b>₹ {price}
                  </p>
                  <div className="cart-quantity-section">
                    <p>Quantity: </p>
                    <button onClick={() => handleCartQuantity("INC", _id)}>
                      +
                    </button>
                    <p>{qty}</p>
                    <button
                      onClick={() => handleCartQuantity("DEC", _id)}
                      disabled={qty < 2 ? true : false}
                    >
                      -
                    </button>
                  </div>

                  <div>
                    {itemExistsInWishlist ? (
                      <NavLink className="cart-action-btns wishlist-add"
                      to="/wishlist"
                      >
                        Added in Wishlist
                      </NavLink>
                    ) : (
                      <button className="cart-action-btns wishlist-move"
                      onClick = {() => moveToWishlist(product)}
                      >
                        Move to Wishlist
                      </button>
                    )}
                  </div>
                </div>

                <FontAwesomeIcon
                  icon={faTrash}
                  className="trash-btns"
                  onClick={() => removeFromCart(_id)}
                />
              </div>
            );
          })}
        </div>

        {/* Price Details Area */}

        {
          itemsInCart.length > 0 && <div className="cart-amount-area">
          <div className="cart-total">
            <p className="cart-price-heading">Price Details:</p>
            <ul>
              <li>
                <p>Price Details: ({itemsInCart?.length} items)</p>

                <p>₹ {cartItemsPrice}</p>
              </li>

              <li>
                <p>Discount :</p>

                <p>- to be added</p>
              </li>

              <li>
                <p>Delivery Charges :</p>

                <p>- Free Delivery!</p>
              </li>

              <hr />

              <li>
                <p>Total Price :</p>

                <p>to be added</p>
              </li>

              <hr />

              <button className="checkout-btn">Checkout</button>
            </ul>
          </div>
        </div>}
      </div>
    </div>
  );
};
