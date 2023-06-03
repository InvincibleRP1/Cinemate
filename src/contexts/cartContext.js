import { createContext, useContext } from "react";

import { toast } from "react-toastify";

import { AuthContext } from "./authContext";
import { useLocation, useNavigate } from "react-router-dom";


export const CartContext = createContext("");

export const CartHandler = ({ children }) => {
  const { currentUser, token, setCurrentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();


  const itemExistsInCart = (product) => {
    return currentUser?.cart.some(
      (productToBeAdded) => productToBeAdded._id === product._id
    );
  };

  const handleAddToCart = async (productToBeAdded) => {
    try {
      if (token) {
        const res = await fetch("/api/user/cart", {
          method: "POST",
          headers: {
            authorization: token,
          },
          body: JSON.stringify({ product:  productToBeAdded  }),
        });
        const { cart } = await res.json();

        // Update currentUser's cart property with the new cart items

        let updatedCurrentUser = { ...currentUser, cart };
        setCurrentUser(updatedCurrentUser);
        toast.success("Item Added To Cart")
      }
      else {
        navigate("/signin");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const cartItemsPrice = currentUser?.cart.reduce(
    (acc, { price , qty }) => (acc += price * qty),
    0
  );

  const cartItemsDiscount = currentUser?.cart.reduce(
    (acc, { sellingPrice , price, qty }) => (acc += (sellingPrice * qty) - (price * qty)),
    0
  );

  const removeFromCart = async (productId) => {
    console.log(productId)
    try {
      if (token) {
        const res = await fetch(`/api/user/cart/${productId}`, {
          method: "DELETE",
          headers: {
            authorization: token,
          },
        });


        const { cart } = await res.json();

        console.log("cart value: ", cart);


        let updatedCurrentUser = { ...currentUser, cart };
        setCurrentUser(updatedCurrentUser);
        toast.error("Item removed from Cart");

      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Increasing, Decreasing Quantity of cart Items:

  const handleCartQuantity = async (task, productId) => {
    try {
      
        const res = await fetch(`/api/user/cart/${productId}`, {
          method: "POST",
          headers: {
            authorization: token,
          },
          body: JSON.stringify({ action: { type: task === "INC" ?"increment" : "decrement"} }),
        });

        if(location.pathname !== "/cart")
        {
          toast.success("Quantity of the item increased in Cart!");
        }
        

        const { cart } = await res.json();

        let updatedCurrentUser = { ...currentUser, cart };
        setCurrentUser(updatedCurrentUser);
      
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        itemExistsInCart,
        removeFromCart,
        handleCartQuantity,
        cartItemsPrice,
        cartItemsDiscount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
