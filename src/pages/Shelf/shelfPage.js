import { Navbar } from "../../components/navbar/navbar";

import "../Shelf/shelf.css";

export const ShelfPage = () => {
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
                  <label htmlFor="">
                    <input type="checkbox" name="category" id="" />
                    Hollywood
                  </label>

                  <label htmlFor="">
                    <input type="checkbox" name="category" id="" />
                    Bollywood
                  </label>

                  <label htmlFor="">
                    <input type="checkbox" name="category" id="" />
                    Regional
                  </label>
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
              <li className="product-item">
                <div className="product-heading">Product</div>
                <img
                  src="https://ik.imagekit.io/qsdtqu5hp/cinemate-images/holly-logo.jpg?updatedAt=1684079038065"
                  alt="category"
                  className="product-image"
                />
                <p className="category-text">
                  Get the latest blockbusters and cult classics from Hollywood.
                </p>
                <button>Buy</button>
              </li>

              <li className="product-item">
                <div className="product-heading">Product</div>
                <img
                  src="https://ik.imagekit.io/qsdtqu5hp/cinemate-images/holly-logo.jpg?updatedAt=1684079038065"
                  alt="category"
                  className="product-image"
                />
                <p className="category-text">
                  Get the latest blockbusters and cult classics from Hollywood.
                </p>
                <button>Buy</button>
              </li>

              <li className="product-item">
                <div className="product-heading">Product</div>
                <img
                  src="https://ik.imagekit.io/qsdtqu5hp/cinemate-images/holly-logo.jpg?updatedAt=1684079038065"
                  alt="category"
                  className="product-image"
                />
                <p className="category-text">
                  Get the latest blockbusters and cult classics from Hollywood.
                </p>
                <button>Buy</button>
              </li>

              <li className="product-item">
                <div className="product-heading">Product</div>
                <img
                  src="https://ik.imagekit.io/qsdtqu5hp/cinemate-images/holly-logo.jpg?updatedAt=1684079038065"
                  alt="category"
                  className="product-image"
                />
                <p className="category-text">
                  Get the latest blockbusters and cult classics from Hollywood.
                </p>
                <button>Buy</button>
              </li>

              <li className="product-item">
                <div className="product-heading">Product</div>
                <img
                  src="https://ik.imagekit.io/qsdtqu5hp/cinemate-images/holly-logo.jpg?updatedAt=1684079038065"
                  alt="category"
                  className="product-image"
                />
                <p className="category-text">
                  Get the latest blockbusters and cult classics from Hollywood.
                </p>
                <button>Buy</button>
              </li>

              <li className="product-item">
                <div className="product-heading">Product</div>
                <img
                  src="https://ik.imagekit.io/qsdtqu5hp/cinemate-images/holly-logo.jpg?updatedAt=1684079038065"
                  alt="category"
                  className="product-image"
                />
                <p className="category-text">
                  Get the latest blockbusters and cult classics from Hollywood.
                </p>
                <button>Buy</button>
              </li>

              <li className="product-item">
                <div className="product-heading">Product</div>
                <img
                  src="https://ik.imagekit.io/qsdtqu5hp/cinemate-images/holly-logo.jpg?updatedAt=1684079038065"
                  alt="category"
                  className="product-image"
                />
                <p className="category-text">
                  Get the latest blockbusters and cult classics from Hollywood.
                </p>
                <button>Buy</button>
              </li>

              <li className="product-item">
                <div className="product-heading">Product</div>
                <img
                  src="https://ik.imagekit.io/qsdtqu5hp/cinemate-images/holly-logo.jpg?updatedAt=1684079038065"
                  alt="category"
                  className="product-image"
                />
                <p className="category-text">
                  Get the latest blockbusters and cult classics from Hollywood.
                </p>
                <button>Buy</button>
              </li>

              <li className="product-item">
                <div className="product-heading">Product</div>
                <img
                  src="https://ik.imagekit.io/qsdtqu5hp/cinemate-images/holly-logo.jpg?updatedAt=1684079038065"
                  alt="category"
                  className="product-image"
                />
                <p className="category-text">
                  Get the latest blockbusters and cult classics from Hollywood.
                </p>
                <button>Buy</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
