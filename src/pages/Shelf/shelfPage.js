import { useContext } from "react";
import { Navbar } from "../../components/navbar/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-solid-svg-icons"; 

import "../Shelf/shelf.css";
import { MoviesDataContext } from "../../contexts/dataContext";

export const ShelfPage = () => {
  const { products, categories, isLoading, isError } =
    useContext(MoviesDataContext);

  console.log(products);

  return (
    <>
      <Navbar></Navbar>

      <div className="shelf-container">
        <div className="side-filter">
          <div className="filter-area">
            <div className="filter-heading">
              <h3>Filters</h3>
              <p>Clear</p>
            </div>

            <div className="price-filters">
              <h3>Price (In Rs.)</h3>
              <div className="list-area">
                <div className="prices">
                  <b>150</b>
                  <b>350</b>
                  <b>900</b>
                </div>
                <input type="range" name="" id="" />
              </div>
            </div>

            <div className="category-filters">
              <h3>Category</h3>
              <div className="list-area">
                <div className="categories">
                  {categories?.map((category) => {
                    return (
                      <div>
                        <label htmlFor="">
                          <input type="checkbox" name={category.title} id="" />
                          {category.categoryName}
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
                    <input type="radio" name="rating" id="" />4 stars and above
                  </label>

                  <label htmlFor="">
                    <input type="radio" name="rating" id="" />3 stars and above
                  </label>

                  <label htmlFor="">
                    <input type="radio" name="rating" id="" />2 stars and above
                  </label>

                  <label htmlFor="">
                    <input type="radio" name="rating" id="" />1 star and above
                  </label>
                </div>
              </div>
            </div>

            <div className="sorting-filters">
              <h3>Sort By: </h3>
              <div className="list-area">
                <div className="sorting">
                  <label htmlFor="">
                    <input type="radio" name="rating" id="" />
                    Price - Low to High
                  </label>

                  <label htmlFor="">
                    <input type="radio" name="rating" id="" />
                    Price - High to Low
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="products-showcase">
          <div className="products">
            <ul className="product-list">
              {products?.map((product) => {
                const { _id, title, releaseYear, price, image } = product;

                return (
                  <div>
                    <li className="product-item" key={_id}>

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
                      <button className="cart-btn">Add To Cart</button>

                     
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
