import { useContext } from "react";

import { AuthContext } from "../../contexts/authContext";
import { Navbar } from "../../components/navbar/navbar";
import "../cart/cart.css";
import { CartContext } from "../../contexts/cartContext";
// import { MoviesDataContext } from "../../contexts/dataContext";

export const CartPage = () => {
  const { currentUser } = useContext(AuthContext);

  const { cartItemsPrice, removeFromCart, handleCartQuantity } = useContext(CartContext);

//   const { state } = useContext(MoviesDataContext);

  const itemsInCart = currentUser?.cart;

  return (
    <div>
      <Navbar></Navbar>
      <p className="cart-heading">My Cart ({itemsInCart?.length})</p>
      <div className="cart-container">
        <div className="cart-card">
          {itemsInCart?.map((product) => {
            const { _id, title, price, image, category, qty } = product;

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
                    <button
                    onClick={() => handleCartQuantity("INC", _id)}
                    >+</button>
                    <p>{qty}</p>
                    <button 
                    onClick={() => handleCartQuantity("DEC", _id)}
                    disabled={qty < 2 ? true : false}>-</button>
                  </div>

                  <div >
                    <button className="cart-action-btns"
                    onClick={() => removeFromCart(_id)}
                    >Remove</button>
                    <button className="cart-action-btns wishlist-add">Move to Wishlist</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Price Details Area */}

        <div className="cart-amount-area">
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
        </div>
      </div>
    </div>
  );
};
