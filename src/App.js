import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { HomePage } from "./pages/home/home";
import { ShelfPage } from "./pages/Shelf/shelfPage";
import { APITest } from "./pages/apiTest";
import { SignInPage } from "./pages/auth/signin";
import { SignUpPage } from "./pages/auth/signup";
import { CartPage } from "./pages/cart/cart";
import { WishlistPage } from "./pages/wishlist/wishlist";
import { ProductPage } from "./pages/productDetails/product";
import { PrivateRoute } from "./components/privateRoute/privateRoute";
import { UserProfile } from "./pages/userProfile/user";
import { CheckoutPage } from "./pages/checkout/checkout";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-left"
        autoClose="600"
        hideProgressBar={true}
        theme="colored"
        limit="1"
        style={{ top: "4.5em", right: "0em" }}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shelf" element={<ShelfPage />} />
        <Route path="/test" element={<APITest />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <WishlistPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />

        <Route path="/shelf/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
