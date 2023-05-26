import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTruck,
  faCreditCard,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";

import { Navbar } from "../../components/navbar/navbar";
import { useContext } from "react";
import { MoviesDataContext } from "../../contexts/dataContext";

import "../productDetails/product.css";
import { CartContext } from "../../contexts/cartContext";
import { WishlistContext } from "../../contexts/wishlistContext";
import { AuthContext } from "../../contexts/authContext";

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
            releaseYear,
            rating,
            title,
            runtime,
            subtitles
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
                <p>
                  {" "}
                  <span>Price: ₹</span>
                  {price}
                </p>

                <p>
                  <span>Delivery within: </span> {deliveryTime} days
                </p>

                <p>
                  {" "}
                  <span> Rating: </span>
                  {rating}
                  <FontAwesomeIcon icon={faStar} id="star-icon" />
                </p>

                <hr />

                <p className="delivery-details">
                  {" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="delivery-icons"
                    />{" "}
                  </span>
                  Fast Delivery
                </p>

                <p className="delivery-details">
                  {" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCreditCard}
                      className="delivery-icons"
                    />{" "}
                  </span>
                  Pay On Delivery
                </p>

                <p className="delivery-details">
                  {" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faFilm}
                      className="delivery-icons"
                    />{" "}
                  </span>
                  Best Quality Cinema
                </p>

                <hr />

                <div style={{ display: token ? "" : "none" }}>
                  {isAddedToCart ? (
                    <NavLink className="delivery-btns route-btn" to="/cart">
                      Go To Cart
                    </NavLink>
                  ) : (
                    <button
                      className="delivery-btns"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add To Cart
                    </button>
                  )}

                  {isPresentInWishlist ? (
                    <NavLink to="/wishlist" className="delivery-btns route-btn">
                      Go to Wishlist
                    </NavLink>
                  ) : (
                    <button
                      className="delivery-btns"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      Add To Wishlist
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
