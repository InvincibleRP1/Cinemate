import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../contexts/authContext";
import { Navbar } from "../../components/navbar/navbar";
import "../cart/cart.css";
import { CartContext } from "../../contexts/cartContext";
import { WishlistContext } from "../../contexts/wishlistContext";

export const CartPage = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const { cartItemsPrice, removeFromCart, handleCartQuantity, cartItemsDiscount } =
    useContext(CartContext);

  const { isAddedToWishlist, handleAddToWishlist } = useContext(WishlistContext);

  const itemsInCart = currentUser?.cart;

  const moveToWishlist = (product) => {
    const itemExistsInWishlist = isAddedToWishlist(product);

    if(!itemExistsInWishlist)
    {
      handleAddToWishlist(product);
    }
  }

  const seeProductDetail = (productId) => {
    navigate(`/shelf/${productId}`);
  }

  return (
    <div>
      <Navbar></Navbar>
      <p className="cart-heading">My Cart ({itemsInCart?.length})</p>

      {itemsInCart.length === 0 && 
      <div>
        <p className="cart-heading">No items in cart</p>
      <img src="https://ik.imagekit.io/qsdtqu5hp/95f54e2fc2a83d5cd7bb9b3efc26dae2.jpg?updatedAt=1685786879525" alt="" className="empty-cart-img"/>
      </div>
      
      }

      <div className="cart-container">
        <div className="cart-card">
          {itemsInCart?.map((product) => {
            const { _id, title, sellingPrice, price, image, category, qty } = product;

            const itemExistsInWishlist = isAddedToWishlist(product);

            return (
              <div className="cart-items" key={_id}>
                <img src={image} alt={title} className="cart-item-image"
                onClick={() => seeProductDetail(_id)}
                />

                <div className="cart-item-details">
                  <b>{title}</b>
              
                  <p>
                    ₹ {sellingPrice} <span className="original-price">₹{price}</span>
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

                <p><span className="discounted-price">  {cartItemsDiscount} ₹ </span></p>
              </li>

              <li>
                <p>Delivery Charges :</p>

                <p className="discounted-price">Free Delivery</p>
              </li>

              <hr />

              <li className="total-amt">
                <p>Total Price :</p>

                <p>₹ {cartItemsPrice + cartItemsDiscount}</p>
              </li>

              <hr />

              <NavLink className="checkout-btn"
              to="/checkout"
              >Checkout</NavLink>
            </ul>
          </div>
        </div>}
      </div>
    </div>
  );
};
