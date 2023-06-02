import "../Shelf/shelf.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Filters = ({ state, categories, dispatch }) => {
  const handlePriceRange = (e) => {
    dispatch({ type: "price-range", value: e.target.value });
  };

  const handleCurrentCategory = (currCategory) => {
    if (state.currentCategories.includes(currCategory)) {
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

  const ratings = [1,2,3,4,5];


  return (
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
              max="1300"
              onChange={handlePriceRange}
              value={state?.priceValue}
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
                        checked={state?.currentCategories.includes(
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
            
            {ratings.map((rating) => (
              <b>{rating}
              {" "}
              <span>
                <FontAwesomeIcon icon={faStar}
                className="rating-sign-icon"
                />
              </span>
              </b>
            ))}
            </div>

            <input
              type="range"
              name=""
              id=""
              min="1"
              max="5"
              onChange={handleRatingsValue}
              value={state?.ratingsValue}
            />

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
                  checked={state?.sortValue ==="lowToHigh"}
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
                  checked={state?.sortValue ==="highToLow"}
                />
                Price - High to Low
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};
