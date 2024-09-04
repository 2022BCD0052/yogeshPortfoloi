"use client"
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RxCross2 } from 'react-icons/rx';
import Card from './Card';



interface ContactFormProps {
  onClose: () => void;
}

const ContactForm = ({ onClose }:{onClose:any}) => {


  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form
  const validateForm = () => {
    let formIsValid = true;
    const newErrors = { fullName: '', email: '', phoneNumber: '', message: '' };

    // Check if the phone number is a 10-digit number
    if (!/^\d{10}$/.test(formValues.phoneNumber)) {
      formIsValid = false;
      newErrors.phoneNumber = 'Phone number must be 10 digits.';
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      formIsValid = false;
      newErrors.email = 'Please enter a valid email address.';
    }

    // Validate message length
    if (formValues.message.length < 30) {
      formIsValid = false;
      newErrors.message = 'Message must be at least 30 characters.';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", formValues.fullName);
    formData.append("email", formValues.email);
    formData.append("phoneNumber", formValues.phoneNumber);
    formData.append("message", formValues.message);
    formData.append("access_key", process.env.REACT_APP_ACCESS_KEY || "");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch(process.env.REACT_APP_API_URL || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.success) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
      console.error("Fetch error:", error);
    }
  };

  return (
        <div className="fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 t">
          <Card className="z-50 bg-gray-800/90 shadow-3xl shadow-slate-900 border-neutral-900">
            <div
              className="rounded-full flex items-center justify-between absolute top-1 right-1 border p-1"
              onClick={onClose}
            >
              <RxCross2 className="size-6 text-white/20" />
            </div>
            <p className="text-lg mb-6 text-gray-400 z-50">
              Reach out manually to:{" "}
              <a
                href="mailto:hello@slothui.com"
                className="text-blue-500 font-bold font-serif hover:underline"
              >
                hello@slothui.com
              </a>
            </p>
    
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="fullName" className="text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formValues.fullName}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your full name..."
                  />
                  {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email address..."
                  />
                  {errors.email && <span className="text-red-500">{errors.email}</span>}
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="phoneNumber" className="text-gray-400">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your phone number..."
                  />
                  {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 resize-none"
                    placeholder="Message"
                  />
                  {errors.message && <span className="text-red-500">{errors.message}</span>}
                </div>
                <button
                  type="submit"
                  className="bg-white text-black font-bold py-2 px-4 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Contact Me
                </button>
              </form>
            </div>
          </Card>
    
          {/* Toast Container */}
          <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
        </div>
      );
};

export default ContactForm;
