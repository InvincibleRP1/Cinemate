import { useContext, useState } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { toast } from "react-toastify";

import '../checkout/checkout.css';
import { MoviesDataContext } from "../../contexts/dataContext";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { CartContext } from "../../contexts/cartContext";

export const CheckoutPage = () => {

    const {state} = useContext(MoviesDataContext);

    const {currentUser, setCurrentUser} = useContext(AuthContext);

    const itemsInCart = currentUser?.cart;

    const { cartItemsDiscount, cartItemsPrice} = useContext(CartContext);

    const [deliveryAddress, setDeliveryAddress] = useState('');

    const navigate = useNavigate();

    const addressValue = (addressId) =>{
        const newDeliveryAddress = state.address.find((address) => address._id === addressId);

        setDeliveryAddress(newDeliveryAddress);
    }

    const handlePlacedOrder = () => {
        toast.success("Order Placed!");
        const newCartValue = [];
        setCurrentUser({...currentUser, cart: newCartValue});

        navigate("/")
    }

    const {
        _id,
        name,
        phone,
        pincode,
        city,
        addressDetails,
        stateOfAddress,
      } = deliveryAddress;
 
    return (
        <>
        <Navbar />
        <h3 className="heading-text">Checkout</h3>

        <div className="checkout-area">

       
            <div className="address-area">
            <h4 className="heading-text">
              <u>Saved Addresses:</u> </h4>
            {state.address.length === 0 && <p>No addresses present!</p>}
              {state?.address?.map((details, index) => {
                const {
                  _id,
                  name,
                  phone,
                  pincode,
                  city,
                  addressDetails,
                  stateOfAddress,
                } = details;

                return (
                    <div className="address-details">
                    <input type="radio" name="address"
                    onClick={()=> addressValue(_id)}
                    key={_id}
                    />

                  <label className="address-lists" key={`address-${_id}-${index}`}>
                    <li id="name">{name}</li>
                    <li>
                      <span>Phone:</span> {phone}
                    </li>

                    <li>
                      <span>Pincode:</span> {pincode}
                    </li>

                    <li>
                      <span>City:</span> {city}
                    </li>

                    <li>
                      <span>Address:</span> {addressDetails}
                    </li>

                    <li>
                      <span>State:</span> {stateOfAddress}
                    </li>
                  
                  </label>
                  
                    </div>
                    
                );
              })}

       <NavLink className="address-btn"
       to="/user"
       >Modify Addresses</NavLink>
                
            </div>


            <div className="order-summary-area">
            
                {
          itemsInCart.length > 0 && <div className="cart-amount-area">
          <div className="cart-total">
            <p className="cart-price-heading"><u>Order Summary:</u></p>

            {itemsInCart.map(({title, qty,sellingPrice}) => (
                    <li className="cart-list">
                      <b>{title}</b> 
                    
                    <b>(₹{sellingPrice} x {qty})</b>
                    </li>
                ))}
            <ul>
              <hr />
              <li>
                <p> <u>Price Details: ({itemsInCart.length} items)</u>
                </p>

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

              <li className="delivery-address">
                <p> <u>Delivery Address:</u> </p>
              <ul className="delivery-list">
                <li>{name}</li>
                <li>{phone},</li>
                <li>{pincode},</li>
                <li>{addressDetails},</li>
                <li>{stateOfAddress}</li>
              </ul>
              
              </li>
              <hr />
              <button className="address-btn"
              onClick={handlePlacedOrder}
              >Place Order</button>
            </ul>
          </div>
        </div>}
            </div>
        </div>
        </>
    )
}