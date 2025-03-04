import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import CategoryLink from "../components/CategoryLink";

import img1 from "../assets/mainImages/1.jpg";
import img2 from "../assets/mainImages/2.JPG";
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
        <motion.img
          src={images[currIndex]}
          alt="Product Photography"
          className="main-image"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        />
        <motion.div
          className="main-text"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <h1>Photographer&stylist based in San Francisco Bay Area</h1>
          <NavLink to="/contact" className="button">
            Get in touch
          </NavLink>
        </motion.div>
      </div>
      <div className="main-container m-2"></div>
      <motion.div
        className="main-container m-3"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        <CategoryLink
          to="/portfolio?category=stillLife"
          label="Still life"
          src={stillImg}
          imgAlt="Still Life Photography"
        />
        <CategoryLink
          to="/portfolio?category=jewelry"
          label="Jewelry"
          src={jewelryImg}
          imgAlt="Jewelry Photography"
        />
        <CategoryLink
          to="/portfolio?category=food"
          label="Food&Beverage"
          src={foodImg}
          imgAlt="Food and Beverage Photography"
        />
        <CategoryLink
          to="/portfolio?category=outdoors"
          label="Outdoors"
          src={outdoorsImg}
          imgAlt="Outdoors Photography"
        />
      </motion.div>
    </div>
  );
};

export default Home;
