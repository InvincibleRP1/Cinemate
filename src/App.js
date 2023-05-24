import { Routes, Route } from 'react-router-dom'

import "./App.css";
import { HomePage } from './pages/home/home';
import { ShelfPage } from './pages/Shelf/shelfPage';
import { APITest } from './pages/apiTest';
import { SignInPage } from './pages/auth/signin';
import { SignUpPage } from './pages/auth/signup';
import { CartPage } from './pages/cart/cart';
import { WishlistPage } from './pages/wishlist/wishlist';
import { ProductPage } from './pages/productDetails/product';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/shelf' element={<ShelfPage/>}/>
        <Route path="/test" element={<APITest />}/>
        <Route path="/signin" element={<SignInPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/wishlist' element={<WishlistPage />}/>
        <Route path='/shelf/:productId' element={<ProductPage />}/>
      </Routes>
    </div>
  );
}

export default App;
