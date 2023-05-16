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

  return (
    <MoviesDataContext.Provider
      value={{
        products: state.products,
        categories: state.categories,
        isLoading,
        isError,
      }}
    >
      {children}
    </MoviesDataContext.Provider>
  );
};
