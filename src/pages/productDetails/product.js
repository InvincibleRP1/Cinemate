import { useParams } from "react-router-dom";


import { Navbar } from "../../components/navbar/navbar";
import { useContext } from "react";
import { MoviesDataContext } from "../../contexts/dataContext";

import "../productDetails/product.css";
import { CartContext } from "../../contexts/cartContext";
import { WishlistContext } from "../../contexts/wishlistContext";
import { AuthContext } from "../../contexts/authContext";
import { ProductDelivery } from "./productDelivery";

export const ProductPage = () => {
  const { token } = useContext(AuthContext);
  const { products } = useContext(MoviesDataContext);

  const { handleAddToCart, itemExistsInCart } = useContext(CartContext);

  const { handleAddToWishlist, isAddedToWishlist } =
    useContext(WishlistContext);

  const { productId } = useParams();

  const individualProduct = products.filter(
    (product) => product._id === productId
  );

  console.log(individualProduct);

  return (
    <div>
      <Navbar></Navbar>
      <div className="product-details">
        {individualProduct?.map((product) => {
          const {
            audience,
            availableStocks,
            cast,
            category,
            deliveryTime,
            director,
            genre,
            image,
            price,
            sellingPrice,
            releaseYear,
            rating,
            title,
            runtime,
            subtitles,
          } = product;

          const isAddedToCart = itemExistsInCart(product);

          const isPresentInWishlist = isAddedToWishlist(product);

          return (
            <div className="product-items">
              <img src={image} alt={title} className="product-item-image" />

              <div className="product-details">
                <p className="product-item-title">{title}</p>

                <ul className="product-specs">
                  <li className="product-specs-item">{releaseYear}</li>
                  <li className="product-specs-item">
                    Rated: <span>{audience}</span>
                  </li>
                  <li className="product-specs-item">{category}</li>
                  <li className="product-specs-item">
                    {" "}
                    Format:{" "}
                    {availableStocks.map((stock) => (
                      <span>
                        {" "}
                        {"  "}
                        {stock}{" "}
                      </span>
                    ))}
                  </li>
                </ul>

                <ul className="product-cast">
                  <u>Cast: </u>
                  {cast.map((castMembers) => (
                    <li> {castMembers}</li>
                  ))}
                </ul>

                <ul className="product-cast">
                  <u>Director:</u>
                  <li>{director}</li>
                </ul>

                <ul className="product-cast">
                  <u>Genre: </u>
                  <li>{genre}</li>
                </ul>

                <ul className="product-cast">
                  <u>Runtime: </u>
                  <li>{runtime} mins</li>
                </ul>

                <ul className="product-cast subtitles">
                  <u>Subtitles: </u>
                  {subtitles.map((subtitle) => (
                    <li className="subs"> {subtitle} </li>
                  ))}
                </ul>
              </div>

              <div className="delivery-section">
                <ProductDelivery 
                isAddedToCart={isAddedToCart}
                isPresentInWishlist={isPresentInWishlist}
                deliveryTime={deliveryTime}
                token={token}
                price={price}
                sellingPrice={sellingPrice}
                rating={rating}
                product={product}
                handleAddToCart={handleAddToCart}
                handleAddToWishlist={handleAddToWishlist}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
