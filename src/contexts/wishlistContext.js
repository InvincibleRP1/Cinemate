import { createContext, useContext } from "react";
import { AuthContext } from "./authContext";

export const WishlistContext = createContext("");

export const WishlistHandler = ({ children }) => {
  const { currentUser, token, setCurrentUser } = useContext(AuthContext);


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
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        handleAddToWishlist,
        isAddedToWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
