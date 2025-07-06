import React from 'react';
import { motion } from 'framer-motion';

function VideoProject({ title, desc, video, href, TechStack }) {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 10 
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#9333ea", // purple-700
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.div 
      className="card w-full bg-gray-800 p-8 rounded-lg shadow-lg"
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
    >
      <div className="image-container relative">
        <motion.video 
          src={video} 
          className="w-full h-64 object-cover rounded-md mb-4" 
          controls
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <div className="overlay">
          <motion.h3 
            className="text-3xl font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          <motion.h4 
            className="text-xl text-blue-400 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {TechStack}
          </motion.h4>
          <motion.p 
            className="text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            {desc}
          </motion.p>
          <motion.a 
            href={href === 'Underdevelopment' ? '#' : href} 
            className="inline-block text-center py-3 px-6 bg-purple-600 text-white rounded-md"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {href === 'Underdevelopment' ? 'Available Soon!' : 'Visit Website'}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default VideoProject;