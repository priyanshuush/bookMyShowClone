// ContactUsPopup.js
import React, { useState } from 'react';
import './ContactUsPopup.css'; // Import the CSS file for styling

const ContactUsPopup = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic for form submission here
    console.log('Form submitted:', formData);
    // Close the popup after submission
    handleClose();
  };

  return (
    <div className="contact-us-popup-container">
      <div className="contact-us-popup-content bg-white p-10 rounded-lg shadow-md w-96 md:w-112 lg:w-128">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 font-serif">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
        <button className="close-btn absolute top-6 right-6 text-red-500" onClick={handleClose}>
          &#10006;
        </button>
      </div>
    </div>
  );
};

export default ContactUsPopup;
