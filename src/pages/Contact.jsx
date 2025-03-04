import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    // Client Information
    name: "",
    email: "",
    company: "",
    phone: "",

    // Project Details
    projectType: "product", // Default value
    deadline: "",
    budget: "",

    // Shoot Details
    numberOfProducts: "",
    locationPreference: "studio", // Default value
    productDescription: "",

    // Additional Information
    referenceImages: "",
    additionalNotes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="form-section">
        {/* Client Information Section */}
        <section className="form-section">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>
        </section>

        {/* Project Details Section */}
        <section className="form-section">
          <h2 className="section-title">Project Details</h2>

          <div className="form-grid">
            {/* <div className="form-group">
              <label htmlFor="projectType" className="form-label">
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="product">Product Photography</option>
                <option value="food">Food Photography</option>
                <option value="jewelry">Jewelry Photography</option>
                <option value="fashion">Fashion Photography</option>
                <option value="other">Other</option>
              </select>
            </div> */}

            <div className="form-group">
              <label htmlFor="deadline" className="form-label">
                Desired Completion Date
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="budget" className="form-label">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select a range</option>
                <option value="under1000">Under $1,000</option>
                <option value="1000-2500">$1,000 - $2,500</option>
                <option value="2500-5000">$2,500 - $5,000</option>
                <option value="5000plus">$5,000+</option>
              </select>
            </div>

            {/* <div className="form-group">
              <label htmlFor="locationPreference" className="form-label">
                Location Preference
              </label>
              <select
                id="locationPreference"
                name="locationPreference"
                value={formData.locationPreference}
                onChange={handleChange}
                className="form-select"
              >
                <option value="studio">Studio</option>
                <option value="onLocation">On Location</option>
                <option value="flexible">Flexible</option>
              </select>
            </div> */}
          </div>
        </section>

        {/* Shoot Details */}
        <section className="form-section">
          <div className="form-group">
            <label htmlFor="numberOfProducts" className="form-label">
              Number of Products/Shots Needed
            </label>
            <input
              id="numberOfProducts"
              name="numberOfProducts"
              value={formData.numberOfProducts}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="productDescription" className="form-label">
              Product/Project Description *
            </label>
            <textarea
              id="productDescription"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
              required
              rows="4"
              className="form-textarea"
              placeholder="Please describe your products and specific requirements..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="referenceImages" className="form-label">
              Reference Images (URLs)
            </label>
            <textarea
              id="referenceImages"
              name="referenceImages"
              value={formData.referenceImages}
              onChange={handleChange}
              rows="2"
              className="form-textarea"
              placeholder="Please provide links to any reference images..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="additionalNotes" className="form-label">
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              rows="3"
              className="form-textarea"
              placeholder="Any additional information you'd like to share..."
            />
          </div>
        </section>

        <button type="submit" className="submit-button">
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};

export default Contact;
