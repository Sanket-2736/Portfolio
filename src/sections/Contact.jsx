import React, { useState } from "react";
import Faqs from "../components/Faqs";

function Contact() {
  const [status, setStatus] = useState(""); // To show success or error message
  const [activeQuestion, setActiveQuestion] = useState(null); // To track which answer is visible

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8fc7727e-7a4f-4254-80f8-a30516f499f4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setStatus("Success! Your message has been sent.");
      } else {
        setStatus(`Error: ${res.message || "Please try again later."}`);
      }
    } catch (error) {
      setStatus("Error! Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-[#010103] text-white flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold mb-10">Get in Touch</h1>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row lg:justify-between lg:gap-16">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-400 mb-5">Reach Out to Me!</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className={`mt-4 text-lg ${status.startsWith("Success") ? "text-green-400" : "text-red-400"}`}>
              {status}
            </p>
          )}
        </div>

        {/* Google Maps */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <h2 className="text-3xl font-semibold text-blue-400 mb-5">My Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908.7663880704122!2d73.82927305252034!3d19.90680147977169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd958762a52b91%3A0xcc8c23ef10d1a7d5!2sBalwant%20Plaza!5e0!3m2!1sen!2sin!4v1729672367687!5m2!1sen!2sin"
              width="100%"
              height="450"
              className="border-0 rounded-md shadow-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <Faqs/>
    </div>
  );
}

export default Contact;
