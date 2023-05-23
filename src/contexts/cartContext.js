import { createContext, useContext } from "react";
import { AuthContext } from "./authContext";

// import { MoviesDataContext } from "./dataContext";

export const CartContext = createContext("");

export const CartHandler = ({ children }) => {
  const { currentUser, token, setCurrentUser } = useContext(AuthContext);

  // const { state, dispatch } = useContext(MoviesDataContext);

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
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const cartItemsPrice = currentUser?.cart.reduce(
    (acc, { price , qty }) => (acc += price * qty),
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
        cartItemsPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
