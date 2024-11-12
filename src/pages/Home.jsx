import img1 from "../assets/mainImages/1.jpg";
import img2 from "../assets/mainImages/2.JPG";

const Home = () => {
  return (
    <div className="main">
      <div className="main-container m-1">
        <img src={img1} alt="mainImg" />
        <div>
          <img src={img2} alt="mainImg" />
          <h1>Photographer based in San Francisco Bay Area</h1>
        </div>
      </div>
      <div className="main-container m-2"></div>
      <div className="main-container m-3"></div>
    </div>
  );
};

export default Home;
