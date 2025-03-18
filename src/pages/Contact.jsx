import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    // Client Information
    name: "",
    email: "",
    message: "",

    // Project Details
    deadline: "",
    budget: "",

    // Shoot Details
    numberOfShots: "",
    productDescription: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    // Add access key to formData
    formData.access_key = "5de73001-e48a-4e5a-a1ae-e30c43b73bad";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null,
        });
        setFormData({
          // Client Information
          name: "",
          email: "",
          message: "",

          // Project Details
          deadline: "",
          budget: "",

          // Shoot Details
          numberOfShots: "",
          productDescription: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error:
          "Failed to send message. Please try again or contact directly via email.",
      });
    }

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
    <>
      <div className="marquee">
        <div className="marquee__inner">
          <span>let's work together</span>
          <span>let's work together</span>
          <span>let's work together</span>
          <span>let's work together</span>
          <span>let's work together</span>
          <span>let's work together</span>
          <span>let's work together</span>
          <span>let's work together</span>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-description">
          I’d love to hear from you! Feel free to fill out the intake form, or
          reach out to me directly at lizasvirshchyk@gmail.com. I’ll get back to
          you within 2 business days. Looking forward to learning more about
          your project and how I can help bring it to life!
        </div>
        <form onSubmit={handleSubmit} className="form-section">
          {/* Client Information Section */}
          <section className="form-section">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                  <small className="contact-small"> (required)</small>
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
                  Email
                  <small className="contact-small"> (required)</small>
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

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
                <small className="contact-small"> (required)</small>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="form-textarea"
              />
            </div>
          </section>

          {/* Project Details Section */}
          <section className="form-section">
            <h2 className="section-title">Project Details</h2>

            <div className="form-group">
              <label htmlFor="deadline" className="form-label">
                Timeline
              </label>
              <input
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="form-input"
                placeholder="When do you need these images delivered?"
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
                <option value="500-1000">$500 - $1000</option>
                <option value="1000-2500">$1,000 - $2,500</option>
                <option value="2500-5000">$2,500 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000plus">$10,000+</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="numberOfShots" className="form-label">
                Number of Shots Needed
              </label>
              <input
                id="numberOfShots"
                name="numberOfShots"
                value={formData.numberOfShots}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="productDescription" className="form-label">
                Your Brand
              </label>
              <textarea
                id="productDescription"
                name="productDescription"
                value={formData.productDescription}
                onChange={handleChange}
                rows="4"
                className="form-textarea"
                placeholder="Please tell me a bit more about your product and brand"
              />
            </div>
          </section>

          <button
            type="submit"
            className="submit-button"
            disabled={status.submitting}
          >
            {status.submitting ? "Sending..." : "Submit Inquiry"}
          </button>

          {status.submitted && (
            <div className="success-message">
              Thank you for your inquiry! I'll get back to you soon.
            </div>
          )}

          {status.error && <div className="error-message">{status.error}</div>}
        </form>
      </div>
    </>
  );
};

export default Contact;
