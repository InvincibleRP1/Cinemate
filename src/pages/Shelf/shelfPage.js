import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Navbar } from "../../components/navbar/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "../Shelf/shelf.css";
import { MoviesDataContext } from "../../contexts/dataContext";
// import { AuthContext } from "../../contexts/authContext";
import { CartContext } from "../../contexts/cartContext";

import { WishlistContext } from "../../contexts/wishlistContext";

export const ShelfPage = () => {
  const { categories, isLoading, state, dispatch, filteredProducts } =
    useContext(MoviesDataContext);

  const { handleAddToCart, itemExistsInCart } = useContext(CartContext);

  const { handleAddToWishlist, isAddedToWishlist, handleDeleteFromWishlist } =
    useContext(WishlistContext);

  // console.log(products);

  const handlePriceRange = (e) => {
    dispatch({ type: "price-range", value: e.target.value });
  };

  const handleCurrentCategory = (currCategory) => {
    if (state.currentCategory.includes(currCategory)) {
      dispatch({ type: "remove-current-category", value: currCategory });
    } else {
      dispatch({ type: "assign-current-category", value: currCategory });
    }
  };

  const handleSortingType = (e) => {
    dispatch({ type: "assign-sorting-value", value: e.target.value });
  };

  const handleRatingsValue = (e) => {
    dispatch({ type: "assign-ratings-value", value: e.target.value });
  };

  const applyNoFilters = () => {
    dispatch({ type: "clear-filters" });
  };

  // console.log(currentUser?.cart);

  const navigate = useNavigate();

  const showProductDetail = (productId) => {
    navigate(`/shelf/${productId}`);
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="shelf-container">
        <div className="side-filter">
          <div className="filter-area">
            <div className="filter-heading">
              <h3>Filters</h3>
              <p onClick={applyNoFilters}>Clear</p>
            </div>

            <div className="price-filters">
              <h3>Price (In Rs.)</h3>
              <div className="list-area">
                <div className="prices">
                  <b>150</b>
                  <b>550</b>
                  <b>900</b>
                </div>
                <input
                  type="range"
                  name=""
                  id=""
                  min="150"
                  max="900"
                  onChange={handlePriceRange}
                  value={state.priceValue}
                />
              </div>
            </div>

            <div className="category-filters">
              <h3>Category</h3>
              <div className="list-area">
                <div className="categories">
                  {categories?.map((category) => {
                    const { categoryName, _id } = category;
                    return (
                      <div key={_id}>
                        <label htmlFor="">
                          <input
                            type="checkbox"
                            name="category"
                            id=""
                            checked={state.currentCategory.includes(
                              categoryName
                            )}
                            onChange={() => handleCurrentCategory(categoryName)}
                          />
                          {categoryName}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="rating-filters">
              <h3>Ratings</h3>
              <div className="list-area">
                <div className="ratings">
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="rating"
                      id=""
                      value="4"
                      onChange={handleRatingsValue}
                    />
                    4 stars and above
                  </label>

                  <label htmlFor="">
                    <input
                      type="radio"
                      name="rating"
                      id=""
                      value="3"
                      onChange={handleRatingsValue}
                    />
                    3 stars and above
                  </label>

                  <label htmlFor="">
                    <input
                      type="radio"
                      name="rating"
                      id=""
                      value="2"
                      onChange={handleRatingsValue}
                    />
                    2 stars and above
                  </label>

                  <label htmlFor="">
                    <input
                      type="radio"
                      name="rating"
                      id=""
                      value="1"
                      onChange={handleRatingsValue}
                    />
                    1 star and above
                  </label>
                </div>
              </div>
            </div>

            <div className="sorting-filters">
              <h3>Sort By: </h3>
              <div className="list-area">
                <div className="sorting">
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="sort"
                      id=""
                      value="lowToHigh"
                      onChange={handleSortingType}
                    />
                    Price - Low to High
                  </label>

                  <label htmlFor="">
                    <input
                      type="radio"
                      name="sort"
                      id=""
                      value="highToLow"
                      onChange={handleSortingType}
                    />
                    Price - High to Low
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isLoading && (
          <p className="loading-sign">Loading data. Please Wait!</p>
        )}

        {!isLoading && (
          <div className="products-showcase">
            <p>Showing All Products: {filteredProducts.length}</p>
            <div className="products">
              <ul className="product-list">
                {filteredProducts?.map((product) => {
                  const { _id, title, releaseYear, price, image, rating } =
                    product;

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
                        <p className="category-text">
                          Released In: {releaseYear}
                        </p>
                        <p className="category-text">₹ {price}</p>

                        <p className="category-text">Rating: {rating}</p>
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
