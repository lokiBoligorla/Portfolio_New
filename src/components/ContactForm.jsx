import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import "./ContactForm.css";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "a261dae9-2d7d-4c46-912f-f56d8a190393");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      setMessage("Message sent successfully! ✅");
      e.target.reset();
    } else {
      setMessage("Failed to send message ❌. Try again!");
    }

    setLoading(false);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <>
      <section className="contact-section">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">I'd love to hear from you! 👋</p>

        <div className="contact-container">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            {message && <p className="contact-message">{message}</p>}
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <div>
              <FaEnvelope className="contact-icon" /> <span>lokeshboligorla77@gmail.com</span>
            </div>
            <div>
              <FaPhone className="contact-icon" /> <span>+91 8247834425</span>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/lokesh-boligorla-b2a2722a6/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/lokiBoligorla?tab=repositories" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 Lokesh Boligorla. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default ContactForm;
