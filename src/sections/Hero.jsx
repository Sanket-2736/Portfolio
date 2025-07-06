import React from 'react';
import About from '../components/About';
import resumePDF from '../constants/Resume.pdf';
import RoadMap from './RoadMap';
import HeroImg from '../constants/Sanket_Img.jpg';

import leetcodeImg from '../constants/leetcode.png';
import hackerrankImg from '../constants/hackerrank.webp';

import { Download, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <>
      <section
        className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center relative overflow-hidden p-8 md:p-12"
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
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
          
          {/* Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left z-10 relative flex flex-col items-start max-w-2xl"
          >
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Sanket</span>
              <motion.span 
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="ml-3 inline-block"
              >
                👋
              </motion.span>
            </p>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300 mb-8">
              Passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">DSA Enthusiast</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Full Stack Developer</span>
            </p>

            <p className="text-gray-300 mb-8 text-sm sm:text-base">
              I build efficient solutions and elegant web applications with a focus on performance and user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={resumePDF}
                download="Sanket-Resume.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all hover:from-cyan-600 hover:to-blue-700"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image & Socials */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mt-12 lg:mt-0 flex flex-col items-center"
          >
            <div className="relative group mb-6">
              <img
                src={HeroImg}
                alt="Sanket"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-white/10 shadow-2xl object-cover group-hover:border-cyan-400/30 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow [border-image:linear-gradient(to_bottom_right,cyan,blue,purple)_1] -z-10 group-hover:[border-image:linear-gradient(to_bottom_right,cyan,blue,purple)_30]"></div>
              
              {/* Floating Labels */}
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-600 to-blue-600 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white font-medium shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                DSA Expert
              </motion.div>
              <motion.div 
                className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-indigo-600 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white font-medium shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                Full Stack
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center w-full">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/sanket-belekar-79210228a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 border border-gray-700/50 text-white font-medium rounded-lg hover:bg-gray-700/30 backdrop-blur-sm transition-all mb-4 w-full max-w-xs"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </motion.a>

              <div className="flex gap-4 w-full justify-center">
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Sanket-2736"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/80 p-3 rounded-lg hover:bg-gray-700/80 transition-all backdrop-blur-sm"
                  aria-label="GitHub"
                >
                  <Github className="text-white w-6 h-6" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.hackerrank.com/profile/sanketbelekar29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/80 p-3 rounded-lg hover:bg-gray-700/80 transition-all backdrop-blur-sm"
                  aria-label="HackerRank"
                >
                  <img src={hackerrankImg} alt="HackerRank" className="w-6 h-6" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://leetcode.com/u/sanket2736/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/80 p-3 rounded-lg hover:bg-gray-700/80 transition-all backdrop-blur-sm"
                  aria-label="LeetCode"
                >
                  <img src={leetcodeImg} alt="LeetCode" className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <About />
      <RoadMap />
    </>
  );
}

export default Hero;
