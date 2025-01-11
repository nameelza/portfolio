import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import img1 from "../assets/mainImages/1.jpg";
import img2 from "../assets/mainImages/2.JPG";
import img3 from "../assets/mainImages/2.JPG";
import img4 from "../assets/mainImages/2.JPG";
import jewelryImg from "../assets/mainImages/jewelry.JPG";
import foodImg from "../assets/mainImages/food.webp";
import outdoorsImg from "../assets/mainImages/outdoors.jpg";
import stillImg from "../assets/mainImages/still3.jpg";

const Home = () => {
  const images = [img1, img2];

  const [currIndex, setCurrIndex] = useState(0);

  console.log(currIndex);

  useEffect(() => {
    const switchImage = () => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const interval = setInterval(switchImage, 1500);
    console.log(currIndex, "curr");

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="main">
      <div className="main-container m-1">
        <img src={images[currIndex]} alt="mainImg" />
        <div>
          <h1>Photographer&stylist based in San Francisco Bay Area</h1>
          <button>get in touch</button>
        </div>
      </div>
      <div className="main-container m-2"></div>
      <div className="main-container m-3">
        <NavLink to="/portfolio" className="sub-category">
          <span>Still life</span>
          <img src={stillImg} alt="mainImg" />
        </NavLink>
        <NavLink to="/portfolio" className="sub-category">
          <span>Jewelry</span>
          <img src={jewelryImg} alt="mainImg" />
        </NavLink>
        <NavLink to="/portfolio" className="sub-category">
          <span>Food&Beverage</span>
          <img src={foodImg} alt="mainImg" />
        </NavLink>
        <NavLink to="/portfolio" className="sub-category">
          <span>Outdoors</span>
          <img src={outdoorsImg} alt="mainImg" id="outdoors-img" />
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
