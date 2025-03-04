import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const getImages = (category) => {
  let images;
  if (category === "stillLife") {
    images = require.context(
      "../assets/stillLife",
      false,
      /\.(png|jpe?g|svg|jpeg|webp)$/i
    );
  } else if (category === "jewelry") {
    images = require.context(
      "../assets/jewelry",
      false,
      /\.(png|jpe?g|svg|jpeg|webp)$/i
    );
  } else if (category === "food") {
    images = require.context(
      "../assets/food",
      false,
      /\.(png|jpe?g|svg|jpeg|webp)$/i
    );
  } else if (category === "outdoors") {
    images = require.context(
      "../assets/outdoors",
      false,
      /\.(png|jpe?g|svg|jpeg|webp)$/i
    );
  } else {
    images = require.context(
      "../assets/images",
      false,
      /\.(png|jpe?g|svg|jpeg|webp)$/i
    );
  }

  return images.keys().map(images);
};

const getRelativeImageHeight = (imageUrl, targetWidth) => {
  const width = 300; // Placeholder for actual width
  const height = 200; // Placeholder for actual height
  const widthQuotient = targetWidth / width;
  const relativeHeight = widthQuotient * height;
  return relativeHeight;
};

function generateImageColumns(images, columnCount) {
  const columnHeights = Array(columnCount).fill(0);
  const columns = Array.from({ length: columnCount }, () => []);

  images.forEach((image) => {
    const smallestHeight = Math.min(...columnHeights);
    const indexOfSmallestHeight = columnHeights.indexOf(smallestHeight);
    columns[indexOfSmallestHeight].push(image);

    const height = getRelativeImageHeight(image, 300);
    columnHeights[indexOfSmallestHeight] += height;
  });

  return columns;
}

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const imageList = getImages(category);

  const columnCount = 4;
  const imageColumns = generateImageColumns(imageList, columnCount);

  return (
    <div className="portfolio-container">
      {imageColumns.map((columnImages, columnIndex) => (
        <div className="column" key={columnIndex}>
          {columnImages.map((image, imageIndex) => (
            <ImageWithAnimation
              key={imageIndex}
              image={image}
              columnIndex={columnIndex}
              imageIndex={imageIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

// ImageWithAnimation component handles the onLoad event and ensures the image is loaded before animating
const ImageWithAnimation = ({ image, columnIndex, imageIndex }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate thumbnail URL by adding a suffix before the extension
  const getThumbnailUrl = (imageUrl) => {
    const lastDotIndex = imageUrl.lastIndexOf(".");
    return `${imageUrl.substring(0, lastDotIndex)}-thumb${imageUrl.substring(
      lastDotIndex
    )}`;
  };

  // Create thumbnail version of the image
  const thumbnailUrl = getThumbnailUrl(image);

  const handleImageLoad = () => {
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  };

  return (
    <div className={`img-placeholder ${isLoaded ? "loaded" : ""}`}>
      {/* Thumbnail image (loads first) */}
      <img
        src={thumbnailUrl}
        alt=""
        className="img thumbnail"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          filter: "blur(10px)",
          transform: "scale(1.1)",
          opacity: isLoaded ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}
      />

      {/* Full-size image with animation */}
      <motion.img
        src={image}
        alt={`image-${columnIndex}-${imageIndex}`}
        className="img"
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onLoad={handleImageLoad}
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </div>
  );
};

export default Portfolio;
