import "../container/container.css";

export const ContainerArea = () => {
  return (
    <>
      <div className="container">
        <div className="container-text">
          Where <span>cinema</span> meets <span>convenience</span>
        </div>

        <p className="container-details">Movie shopping made simple!</p>

        {/* <button className='container-btn'>Buy Movies</button> */}

        <img
          src="https://ik.imagekit.io/qsdtqu5hp/Home_cinema-amico.png?updatedAt=1685046067300"
          alt="cinemate-home"
          className="container-image"
        />
      </div>
    </>
  );
};
