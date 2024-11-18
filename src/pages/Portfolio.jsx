import { useState, useEffect } from "react";

const images = require.context(
  "../assets/images",
  false,
  /\.(png|jpe?g|svg|jpeg|webp)$/i
);
const imageList = images.keys().map((image) => images(image));

const Portfolio = () => {
  const columnCount = 4;
  const imageColumns = generateImageColumns(imageList, columnCount);

  const [loaded, setLoaded] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll(".img-placeholder");
      revealElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && !loaded.includes(index)) {
          setLoaded((prev) => [...prev, index]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loaded]);

  return (
    <div className="portfolio-container">
      {imageColumns.map((columnImages, columnIndex) => (
        <div className="column" key={columnIndex}>
          {columnImages.map((image, imageIndex) => (
            <div
              key={imageIndex}
              className={`img-placeholder ${
                loaded.includes(imageIndex) ? "loaded" : ""
              }`}
              style={{ transitionDelay: `${imageIndex * 100}ms` }}
            >
              <img
                src={image}
                loading="lazy"
                alt={`image-${columnIndex}-${imageIndex}`}
                className="img"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const getRelativeImageHeight = (imageUrl, targetWidth) => {
  // Mock height calculation
  // Here you would normally calculate image dimensions
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

export default Portfolio;
