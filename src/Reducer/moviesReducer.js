import { v4 as uuid } from "uuid";

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
  address: [
    {
      _id: "add1",
      name: "Rahul Pandey",
      phone: +918181818181,
      pincode: 712323,
      city: "Patna",
      addressDetails: "4/B, Rajnagar Street",
      stateOfAddress: "Bihar",
    },
  ],
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
      return { ...state, searchedValue: action.value };

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

    // Adding new Address

    case "add-new-address":
      return {...state, address: [...state.address, {...action.payload, _id: uuid()}]}

    // Delete address

    // Update an existing address
  case "edit-address":
  return { ...state, address: action.payload };


    case "delete-address":
      return {...state, address: action.payload}

    default:
      return state;
  }
};
