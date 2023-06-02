import { useContext } from "react";
import { ContainerArea } from "../../components/container/container";
import { FooterArea } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";

import "../home/home.css";
import { MoviesDataContext } from "../../contexts/dataContext";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { categories, state, dispatch } = useContext(MoviesDataContext);

  const navigate = useNavigate();

  const handleCategory = (categoryName) => {
    dispatch({type: "assign-current-category", value: categoryName});

    navigate("/shelf");
  } 

  return (
    <div>
      <Navbar></Navbar>
      <ContainerArea></ContainerArea>

      <div className="category-section">
        <ul className="category-list">
          {categories?.map((category) => {
            const { _id, categoryName, image, description} = category;

            return (
              <li className="category-item" key={_id}
              onClick={() => handleCategory(categoryName)}
              >
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
