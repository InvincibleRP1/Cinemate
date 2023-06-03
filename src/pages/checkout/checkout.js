import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Navbar } from "../../components/navbar/navbar";
import { toast } from "react-toastify";
import { loadScript } from "../../utils/payment";
import "../checkout/checkout.css";
import { MoviesDataContext } from "../../contexts/dataContext";
import { AuthContext } from "../../contexts/authContext";
import { CartContext } from "../../contexts/cartContext";
import { AddressDetails } from "./addressDetails";

export const CheckoutPage = () => {
  const { state } = useContext(MoviesDataContext);

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const itemsInCart = currentUser?.cart;

  const { cartItemsDiscount, cartItemsPrice } = useContext(CartContext);

  const [deliveryAddress, setDeliveryAddress] = useState("");

  const navigate = useNavigate();

  const totalCartPrice = cartItemsPrice + cartItemsDiscount;

  const addressValue = (addressId) => {
    const newDeliveryAddress = state.address.find(
      (address) => address._id === addressId
    );

    setDeliveryAddress(newDeliveryAddress);
  };

  const displayRazorpay = async () => {
    if (deliveryAddress === "") {
      toast.warning("Select Address!");
    } else {
      const response = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!response) {
        alert("Razorpay SDK failed to load, check your internet connection");
        return;
      }
      const options = {
        key: "rzp_test_nBpP7sUIXBJzBq",
        amount: totalCartPrice * 100,
        currency: "INR",
        name: "Cinemate",
        description: "Thank You For Shopping!",
        handler: function () {
          navigate("/");
          const newCartValue = [];
          setCurrentUser({ ...currentUser, cart: newCartValue });
          toast.success("Order Placed!");
        },
        theme: {
          color: "#c21717",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  };

  const { _id, name, phone, pincode, city, addressDetails, stateOfAddress } =
    deliveryAddress;

  return (
    <>
      <Navbar />
      <h3 className="heading-text">Checkout</h3>

      <div className="checkout-area">
        <div className="address-area">
          <h4 className="heading-text">
            <u>Saved Addresses:</u>{" "}
          </h4>
          {state.address.length === 0 && <p>No addresses present!</p>}

          <AddressDetails state={state} addressValue={addressValue} />

          <NavLink className="address-btn" to="/user">
            Modify Addresses
          </NavLink>
        </div>

        <div className="order-summary-area">
          {itemsInCart.length > 0 && (
            <div className="cart-amount-area">
              <div className="cart-total">
                <p className="cart-price-heading">
                  <u>Order Summary:</u>
                </p>

                {itemsInCart.map(({ title, qty, sellingPrice }) => (
                  <li className="cart-list">
                    <b>{title}</b>

                    <b>
                      (₹{sellingPrice} x {qty})
                    </b>
                  </li>
                ))}
                <ul>
                  <hr />
                  <li>
                    <p>
                      {" "}
                      <u>Price Details: ({itemsInCart.length} items)</u>
                    </p>

                    <p>₹ {cartItemsPrice}</p>
                  </li>

                  <li>
                    <p>Discount :</p>

                    <p>
                      <span className="discounted-price">
                        {" "}
                        {cartItemsDiscount} ₹{" "}
                      </span>
                    </p>
                  </li>

                  <li>
                    <p>Delivery Charges :</p>
                    <p className="discounted-price">Free Delivery</p>
                  </li>

                  <hr />

                  <li className="total-amt">
                    <p>Total Price :</p>

                    <p>₹ {totalCartPrice}</p>
                  </li>

                  <hr />

                  <li className="delivery-address">
                    <p>
                      {" "}
                      <u>Delivery Address:</u>{" "}
                    </p>
                    <ul className="delivery-list">
                      <li>{name}</li>
                      <li>{phone},</li>
                      <li>{pincode},</li>
                      <li>{addressDetails},</li>
                      <li>{stateOfAddress}</li>
                    </ul>
                  </li>
                  <hr />
                  <button className="address-btn" onClick={displayRazorpay}>
                    Place Order
                  </button>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
