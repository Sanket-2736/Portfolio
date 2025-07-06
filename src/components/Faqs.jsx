import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../constants/assets';

function Faqs() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const questionVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const answerVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const chevronVariants = {
    up: { rotate: 180 },
    down: { rotate: 0 }
  };

  return (
    <motion.div 
      className="mt-10 w-full max-w-4xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 
        className="text-3xl font-semibold text-blue-400 mb-5"
        variants={questionVariants}
      >
        Frequently Asked Questions
      </motion.h2>
      
      {questions.map((item, index) => (
        <motion.div 
          key={index} 
          className="border-b border-gray-700 py-4"
          variants={questionVariants}
        >
          <motion.button
            onClick={() => toggleAnswer(index)}
            className="w-full flex justify-between items-center text-left text-lg font-medium text-white focus:outline-none"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {item.question}
            <motion.i 
              className="fas text-blue-400"
              variants={chevronVariants}
              animate={activeQuestion === index ? "up" : "down"}
              transition={{ duration: 0.3 }}
            >
              {activeQuestion === index ? '▲' : '▼'}
            </motion.i>
          </motion.button>

          <AnimatePresence>
            {activeQuestion === index && (
              <motion.div
                className="mt-2 overflow-hidden"
                variants={answerVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <p className="text-gray-300">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Faqs;