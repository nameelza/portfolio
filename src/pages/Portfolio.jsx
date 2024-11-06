const images = require.context("../assets/images");
const imageList = images
  .keys()
  .map((image) => images(image))
  .sort(() => 0.5 - Math.random());

const Portfolio = () => {
  console.log("images", images);
  console.log("imageList", imageList);
  imageList.map((image, index) => console.log(image, index));
  return (
    <div className="portfolio-container">
      {imageList.map((image, index) => (
        <div className="img-placeholder">
          <img key={index} src={image} alt={`image-${index}`} className="img" />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
