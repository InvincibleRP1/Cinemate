import { useContext } from "react";
import { ContainerArea } from "../../components/container/container";
import { FooterArea } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";

import "../home/home.css";
import { MoviesDataContext } from "../../contexts/dataContext";

export const HomePage = () => {
  const { categories } = useContext(MoviesDataContext);
  return (
    <div>
      <Navbar></Navbar>
      <ContainerArea></ContainerArea>

      <div className="category-section">
        <ul className="category-list">
          {categories?.map((category) => {
            const { _id, categoryName, image, description} = category;

            return (
              <li className="category-item" key={_id}>
            <div className="category-heading">{categoryName}</div>
            <img
              src={image}
              alt="category"
              className="category-image"
            />
            <p className="category-text">
            {description}
            </p>
          </li>
            )
          })}
        </ul>
      </div>

      <FooterArea></FooterArea>
    </div>
  );
};
