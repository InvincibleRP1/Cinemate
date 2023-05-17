import { useContext } from "react";
import { Navbar } from "../../components/navbar/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-solid-svg-icons"; 

import "../Shelf/shelf.css";
import { MoviesDataContext } from "../../contexts/dataContext";

export const ShelfPage = () => {
  const { categories, isLoading, state, dispatch, filteredProducts } =
    useContext(MoviesDataContext);

  // console.log(products);

  const handlePriceRange = (e) => {

    dispatch({type: "price-range", value: e.target.value})
  }

  const handleCurrentCategory = (currCategory) => {
    
    if(state.currentCategory.includes(currCategory))
    {
      dispatch({type: "remove-current-category", value: currCategory})
    }
    else {
      dispatch({type: "assign-current-category", value: currCategory})
    }
  }
  

  const handleSortingType = (e) => {
    
    dispatch({type: "assign-sorting-value", value: e.target.value})
  }

  const handleRatingsValue = (e) => {
  
    dispatch({type: "assign-ratings-value", value: e.target.value})
  }

  const applyNoFilters = () => {
    dispatch({type: "clear-filters"})
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
                <input type="range" name="" id="" 
                min="150"
                max="900"
                onChange={handlePriceRange}
                value={state.priceValue}/>
              </div>
            </div>

            <div className="category-filters">
              <h3>Category</h3>
              <div className="list-area">
                <div className="categories">
                  {categories?.map((category) => {
                    const {categoryName, _id} = category;
                    return (
                      <div key = {_id}>
                        <label htmlFor="">
                          <input type="checkbox"name="category" id=""
                          onChange={() => handleCurrentCategory(categoryName)}/>
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
                    <input type="radio" name="rating" id="" value="4" onChange={handleRatingsValue}/>4 stars and above
                  </label>

                  <label htmlFor="">
                    <input type="radio" name="rating" id="" value="3" onChange={handleRatingsValue}/>3 stars and above
                  </label>

                  <label htmlFor="">
                    <input type="radio" name="rating" id="" 
                    value="2" onChange={handleRatingsValue}/>2 stars and above
                  </label>

                  <label htmlFor="">
                    <input type="radio" name="rating" id="" 
                    value="1"
                    onChange={handleRatingsValue}
                    />1 star and above
                  </label>
                </div>
              </div>
            </div>

            <div className="sorting-filters">
              <h3>Sort By: </h3>
              <div className="list-area">
                <div className="sorting">
                  <label htmlFor="">
                    <input type="radio" name="sort" id="" 
                    value="lowToHigh"
                    onChange={handleSortingType}
                    />
                    Price - Low to High
                  </label>

                  <label htmlFor="">
                    <input type="radio" name="sort" id="" value="highToLow"
                    onChange={handleSortingType}
                    />
                    Price - High to Low
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isLoading && <p className="loading-sign">Loading data. Please Wait!</p>}

        {!isLoading && <div className="products-showcase">
          <div className="products">
            <p>Showing All Products: {filteredProducts.length}</p>
            <ul className="product-list">
              {filteredProducts?.map((product) => {
                const { _id, title, releaseYear, price, image, rating } = product;

                return (
                  <div key={_id}>
                    <li className="product-item" >

                    <span className="wishlist-btn"><FontAwesomeIcon icon={faHeart}/></span>
                      <div className="product-heading">
                        {title}
                      </div>
                      
                      
                      
                      <img
                        src={image}
                        alt="category"
                        className="product-image"
                      />
                      <p className="category-text">
                        Released In: {releaseYear}
                      </p>
                      <p className="category-text">
                        Price: ₹ {price}
                      </p>

                      <p className="category-text">
                        Rating: {rating}
                      </p>
                      <button className="cart-btn">Add To Cart</button>

                     
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>}
      </div>
    </>
  );
};
