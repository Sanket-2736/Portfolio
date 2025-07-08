import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Faqs from "../components/Faqs";

function Contact() {
  const [status, setStatus] = useState("");
  const [activeQuestion, setActiveQuestion] = useState(null);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.03, backgroundColor: "#2563eb" },
    tap: { scale: 0.98 }
  };

  const statusVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      className="min-h-screen w-full flex flex-col items-center py-16 px-4 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
      }}
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
              animation: `twinkle ${Math.random() * 5 + 5}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 overflow-hidden opacity-70">
        <div className="absolute -bottom-1/3 -left-1/3 w-full h-full bg-gradient-to-r from-blue-600/20 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute -top-1/3 -right-1/3 w-full h-full bg-gradient-to-l from-purple-600/20 to-transparent rounded-full filter blur-3xl"></div>
      </div>

      {/* Main content */}
      <motion.div 
        className="container mx-auto z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl font-bold mb-10 text-center"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h1>

        <div className="w-full max-w-7xl flex flex-col lg:flex-row lg:justify-between lg:gap-16">
          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-1/2 bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-800"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-3xl font-semibold text-blue-400 mb-5"
              variants={itemVariants}
            >
              Reach Out to Me!
            </motion.h2>
            
            <form onSubmit={onSubmit}>
              <motion.div className="mb-4" variants={itemVariants}>
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-800/50 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-700"
                  required
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #60a5fa" }}
                />
              </motion.div>

              <motion.div className="mb-4" variants={itemVariants}>
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-800/50 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-700"
                  required
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #60a5fa" }}
                />
              </motion.div>

              <motion.div className="mb-4" variants={itemVariants}>
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-3 bg-gray-800/50 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-700"
                  required
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #60a5fa" }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-md text-white font-semibold"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Send Message
              </motion.button>
            </form>

            <AnimatePresence>
              {status && (
                <motion.p 
                  className={`mt-4 text-lg ${status.startsWith("Success") ? "text-green-400" : "text-red-400"}`}
                  variants={statusVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  key={status}
                >
                  {status}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Google Maps */}
          <motion.div 
            className="w-full lg:w-1/2 mt-10 lg:mt-0"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-3xl font-semibold text-blue-400 mb-5"
              variants={itemVariants}
            >
              My Location
            </motion.h2>
            <motion.div 
              className="aspect-w-16 aspect-h-9 bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 shadow-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908.7663880704122!2d73.82927305252034!3d19.90680147977169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd958762a52b91%3A0xcc8c23ef10d1a7d5!2sBalwant%20Plaza!5e0!3m2!1sen!2sin!4v1729672367687!5m2!1sen!2sin"
                width="100%"
                height="450"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 w-full max-w-7xl">
          <Faqs/>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;