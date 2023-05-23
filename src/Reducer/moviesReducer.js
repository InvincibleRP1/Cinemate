export const initialState = {
  products: [],
  categories: [],
  // cart: [],
  // wishlist: [],
  sortValue: "",
  priceValue: "",
  ratingsValue: "",
  searchedValue: "",
  currentCategory: "",
  errorData: "",
};

export const moviesReducer = (state, action) => {
  switch (action.type) {

    // Initial Data load

    case "initial-load-products":
      return { ...state, products: action.products };

    case "initial-load-categories":
      return { ...state, categories: action.categories };

    case "error-occured":
      return { ...state, errorData: action.message };

    // Price Range

    case "price-range":
      return { ...state, priceValue: action.value };

    // Search Data

    case "search-value":
      return {...state, searchedValue: action.value}

    // Adding selected categories
    case "assign-current-category":
      return {
        ...state,
        currentCategory: [...state.currentCategory, action.value],
      };

    //Removing unselected categories
    case "remove-current-category":
      return {
        ...state,
        currentCategory: state.currentCategory.filter(
          (category) => category !== action.value
        ),
      };

    // Adding sort method
    case "assign-sorting-value":
      return { ...state, sortValue: action.value };

    
    // Adding ratings
    case "assign-ratings-value":
      return { ...state, ratingsValue: action.value };

    // Clearing filters
    case "clear-filters":
      return {
        ...state,
        sortValue: "",
        priceValue: "",
        ratingsValue: "",
        currentCategory: [],
      };

      // Adding Items to cart

      // case "add-to-cart":
      //   return {...state, cart: action.payload}

      // // Removing Items from cart

      // case "remove-from-cart":
      //   return {...state, cart: action.payload}

    default:
      return state;
  }
};
