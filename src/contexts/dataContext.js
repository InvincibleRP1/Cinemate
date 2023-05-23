import { createContext, useEffect, useReducer, useState } from "react";

import { initialState, moviesReducer } from "../Reducer/moviesReducer";


export const MoviesDataContext = createContext();

export const MoviesDataHandler = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);



  const handleAPI = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/products");
      const {products} = await response.json();

      dispatch({ type: "initial-load-products", products: products })
      // console.log(products);

      const res = await fetch("/api/categories");
      const {categories} = await res.json();
      dispatch({ type: "initial-load-categories", categories: categories });

    //   console.log(categories)

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      dispatch({ type: "error-occured", message: error.message });
    }
  };

  useEffect(() => {
    handleAPI();
  }, []);

  const handleFilteredProducts = () =>
  {
    let duplicatedProducts = [...state.products];
    
    // Price Range

    if(state.priceValue) {
      duplicatedProducts = duplicatedProducts.filter(({price}) => state.priceValue >= price);
    }

    // Search Value

    if(state.searchedValue!== "")
    {
      duplicatedProducts = duplicatedProducts.filter(({title}) => title.toLowerCase().includes(state.searchedValue.toLowerCase()))
    }

   // Sorting

    if(state.sortValue === "lowToHigh") {
      duplicatedProducts = duplicatedProducts.sort((a, b) => a.price - b.price);
    }

    if(state.sortValue === "highToLow") {
      duplicatedProducts = duplicatedProducts.sort((a, b) => b.price - a.price);
    }

    // Selected Categories

    if(state.currentCategory.length > 0) 
    {
      duplicatedProducts = duplicatedProducts.filter(({category}) => state.currentCategory.includes(category))
    }
    
   // Ratings Value

    if(state.ratingsValue) {
      duplicatedProducts = duplicatedProducts.filter(({rating}) => rating >= state.ratingsValue)
    }

    // console.log(duplicatedProducts);
    return duplicatedProducts;
  }

  const filteredProducts = handleFilteredProducts();

  //console.log(state.currentCategory)



  return (
    <MoviesDataContext.Provider
      value={{
        products: state.products,
        categories: state.categories,
        isLoading,
        isError,
        state,
        dispatch,
        filteredProducts,
      
      }}
    >
      {children}
    </MoviesDataContext.Provider>
  );
};
