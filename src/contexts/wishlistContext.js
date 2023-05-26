import { createContext, useContext } from "react";

import { toast } from "react-toastify";

import { AuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";

export const WishlistContext = createContext("");

export const WishlistHandler = ({ children }) => {
  const { currentUser, token, setCurrentUser } = useContext(AuthContext);

  const navigate = useNavigate();


  const isAddedToWishlist = (product) => {
    return currentUser?.wishlist.some((productItem) => productItem._id === product._id);
  }

  const handleAddToWishlist = async (productToBeAddedToWishlist) => {

    const itemExistsInWishlist = isAddedToWishlist(productToBeAddedToWishlist);

    console.log(itemExistsInWishlist);

    try {
      if (token && !itemExistsInWishlist) {
        const res = await fetch("/api/user/wishlist", {
          method: "POST",
          headers: {
            authorization: token,
          },
          body: JSON.stringify({ product: productToBeAddedToWishlist }),
        });

        const { wishlist } = await res.json();

        let updatedCurrentUser = { ...currentUser, wishlist };
        setCurrentUser(updatedCurrentUser);
        toast.success("Item added to Wishlist");
      }
      else {
        navigate("/signin");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteFromWishlist = async(productToBeRemoved) => {

    const itemExistsInWishlist = isAddedToWishlist(productToBeRemoved);

    const productID = productToBeRemoved._id;

    try {
      if(token && itemExistsInWishlist)
      {
        const res = await fetch(`/api/user/wishlist/${productID}`, {
          method: "DELETE",
          headers: {
            authorization: token,
          }
        });

        const {wishlist} = await res.json();

        let updatedCurrentUser = { ...currentUser, wishlist };
        setCurrentUser(updatedCurrentUser);

        toast.error("Item removed from Wishlist");

      }
    } catch (error) {
        console.log(error.message);      
    }
  }


  return (
    <WishlistContext.Provider
      value={{
        handleAddToWishlist,
        isAddedToWishlist,
        handleDeleteFromWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
