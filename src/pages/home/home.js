import { ContainerArea } from "../../components/container/container";
import { Navbar } from "../../components/navbar/navbar";

import "../home/home.css";

export const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ContainerArea></ContainerArea>

      <div className="category-section">
        <ul className="category-list">
          <li className="category-item">
            <div className="category-heading">Category</div>
            <img
              src="https://ik.imagekit.io/qsdtqu5hp/cinemate-images/holly-logo.jpg?updatedAt=1684079038065"
              alt="category"
              className="category-image"
            />
            <p className="category-text">
            Get the latest blockbusters and cult classics from Hollywood.
            </p>
          </li>

          <li className="category-item">
            <div className="category-heading">Category</div>
            <img
              src="https://ik.imagekit.io/qsdtqu5hp/cinemate-images/holly-logo.jpg?updatedAt=1684079038065"
              alt="category"
              className="category-image"
            />
            <p className="category-text">
            Get the latest blockbusters and cult classics from Hollywood.
            </p>
          </li>

          <li className="category-item">
            <div className="category-heading">Category</div>
            <img
              src="https://ik.imagekit.io/qsdtqu5hp/cinemate-images/holly-logo.jpg?updatedAt=1684079038065"
              alt="category"
              className="category-image"
            />
            <p className="category-text">
            Get the latest blockbusters and cult classics from Hollywood.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
