import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faFilter } from "@fortawesome/free-solid-svg-icons";

import { Navbar } from "../../components/navbar/navbar";
import "../Shelf/shelf.css";
import { MoviesDataContext } from "../../contexts/dataContext";
// import { AuthContext } from "../../contexts/authContext";
import { CartContext } from "../../contexts/cartContext";
import { WishlistContext } from "../../contexts/wishlistContext";
import { Filters } from "./filters";
import { Loader } from "../../components/loader/loader";

export const ShelfPage = () => {
  const {
    categories,
    isLoading,
    state,
    dispatch,
    filteredProducts,
    ProductsAfterDiscount,
  } = useContext(MoviesDataContext);

  const { handleAddToCart, itemExistsInCart } = useContext(CartContext);

  const [showFilters, setShowFilters] = useState(true);

  const { handleAddToWishlist, isAddedToWishlist, handleDeleteFromWishlist } =
    useContext(WishlistContext);

  const navigate = useNavigate();

  const showProductDetail = (productId) => {
    navigate(`/shelf/${productId}`);
  };



  return (
    <>
      <Navbar></Navbar>



      <div className="shelf-container">
        {showFilters && <Filters state={state} categories={categories} dispatch={dispatch}
        />}

        {isLoading && (
          <Loader />
        )}

        {!isLoading && (
          <div className="products-showcase">


  
            <FontAwesomeIcon icon={faFilter} className="filter-icon"
          onClick={() => setShowFilters((val) => !val)}
          />
        

            <p>Showing All Products: {filteredProducts.length}</p>
            <div className="products">
              <ul className="product-list">
                {filteredProducts?.map((product) => {
                  const {
                    _id,
                    title,
                    releaseYear,
                    sellingPrice,
                    price,
                    image,
                    rating,
                    genre
                  } = product;

                  const itemPresentInCart = itemExistsInCart(product);

                  const itemPresentInWishlist = isAddedToWishlist(product);

                  return (
                    <div key={_id}>
                      <li className="product-item">
                        {!itemPresentInWishlist ? (
                          <span
                            className={"add-to-wishlist-btn"}
                            onClick={() => handleAddToWishlist(product)}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </span>
                        ) : (
                          <span
                            className={"remove-from-wishlist-btn"}
                            onClick={() => handleDeleteFromWishlist(product)}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </span>
                        )}

                        <div className="product-heading">{title}</div>

                        <img
                          src={image}
                          alt="category"
                          className="product-image"
                          onClick={() => showProductDetail(_id)}
                        />

                        <p className="category-text rating-sign">
                          <FontAwesomeIcon
                            icon={faStar}
                            className="rating-sign-icon"
                          />{" "}
                          {rating}
                        </p>

                        <p className="category-text">{genre}</p>

                        <p className="category-text">₹ {sellingPrice} 
                        {" "}
                        <span className="category-text original-price">
                          ₹ {price}
                        </span>
                        </p>

                        

                        {itemPresentInCart ? (
                          <NavLink className="cart-btn" to="/cart">
                            Go To Cart
                          </NavLink>
                        ) : (
                          <button
                            className="cart-btn"
                            onClick={() => handleAddToCart(product)}
                          >
                            Add To Cart
                          </button>
                        )}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
