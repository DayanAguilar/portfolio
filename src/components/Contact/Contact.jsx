import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css'; // Asegúrate de importar el CSS separado

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const { name, email, subject, message } = formData;
    if (name && email && subject && message) {
      const mailtoLink = `mailto:hello@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;
      window.location.href = mailtoLink;
      setIsSubmitted(true);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-section">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-text">
          I'd love to hear from you! Whether you have a project in mind, want to collaborate, 
          or just want to say hello, feel free to reach out using the form below or through 
          any of the contact methods listed.
        </p>
      </div>

      <div className="content-grid">
        <div className="form-section">
          <h2 className="section-title">Send a Message</h2>
          <div className="contact-form">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-input" placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" placeholder="your.email@example.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="form-input" placeholder="What is this about?" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} className="form-textarea" rows="5" placeholder="Tell me about your project or inquiry..." />
            </div>

            <button 
              onClick={handleSubmit}
              className={`submit-button ${isSubmitted ? 'submitted' : ''}`}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={18} style={{ marginRight: '0.5rem' }} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={18} style={{ marginRight: '0.5rem' }} />
                  Send Message
                </>
              )}
            </button>
          </div>
        </div>

        <div className="info-section">
          <h2 className="section-title">Contact Information</h2>
          <div className="contact-card">
            <div className="contact-item">
              <Mail size={20} className="contact-icon" />
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">dayan.aguilar.alcocer@gmail.com</div>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={20} className="contact-icon" />
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">+(591) 73761933</div>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={20} className="contact-icon" />
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-value">Cochabamba, BO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
