import { useState, useEffect } from "react";
import CategoryLink from "../components/CategoryLink";

import img1 from "../assets/mainImages/1.jpg";
import img2 from "../assets/mainImages/2.JPG";
// simport img3 from "../assets/mainImages/2.JPG";
// import img4 from "../assets/mainImages/2.JPG";
import jewelryImg from "../assets/mainImages/jewelry.JPG";
import foodImg from "../assets/mainImages/food.webp";
import outdoorsImg from "../assets/mainImages/outdoors.jpg";
import stillImg from "../assets/mainImages/still3.jpg";

const images = [img1, img2];

const Home = () => {
  const [currIndex, setCurrIndex] = useState(0);

  console.log(currIndex);

  useEffect(() => {
    const switchImage = () => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(switchImage, 1500);
    console.log(currIndex, "curr");

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      <div className="main-container m-1">
        <img src={images[currIndex]} alt="Product Photography" />
        <div>
          <h1>Photographer&stylist based in San Francisco Bay Area</h1>
          <button>get in touch</button>
        </div>
      </div>
      <div className="main-container m-2"></div>
      <div className="main-container m-3">
        <CategoryLink
          to="/portfolio"
          label="Still life"
          src={stillImg}
          imgAlt="Still Life Photography"
        />
        <CategoryLink
          to="/portfolio"
          label="Jewelry"
          src={jewelryImg}
          imgAlt="Jewelry Photography"
        />
        <CategoryLink
          to="/portfolio"
          label="Food&Beverage"
          src={foodImg}
          imgAlt="Food and Beverage Photography"
        />
        <CategoryLink
          to="/portfolio"
          label="Outdoors"
          src={outdoorsImg}
          imgAlt="Outdoors Photography"
        />
      </div>
    </div>
  );
};

export default Home;
