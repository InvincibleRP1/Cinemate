export const initialState = {
  products: [],
  categories: [],
  cart: [],
  wishlist: [],
  sortValue: "",
  priceValue: "",
  currentCategory: "",
  errorData: "",
};

export const moviesReducer = (state, action) => {
  switch (action.type) {
    case "initial-load-products":
      return { ...state, products: action.products };

    case "initial-load-categories":
      return { ...state, categories: action.categories };

    case "error-occured":
      return { ...state, errorData: action.message };

    default:
      return state;
  }
};
