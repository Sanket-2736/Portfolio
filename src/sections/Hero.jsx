import React from 'react';
import About from '../components/About';
import resumePDF from '../constants/Resume.pdf';
import RoadMap from './RoadMap';
import HeroImg from '../constants/Sanket_Img.jpg';
import leetcodeImg from '../constants/leetcode.png';
import hackerrankImg from '../constants/hackerrank.webp';
import { Download, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <section
        className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center relative overflow-hidden px-4 sm:px-8 md:px-12 py-20"
        style={{
          background: 'radial-gradient(ellipse at bottom, #0f172a 0%, #020617 100%)',
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Stars */}
          {[...Array(150)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(40px)',
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 overflow-hidden opacity-50">
          <div className="absolute -bottom-1/3 -left-1/3 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 via-transparent to-transparent rounded-full filter blur-[100px]"></div>
          <div className="absolute -top-1/3 -right-1/3 w-[800px] h-[800px] bg-gradient-to-l from-purple-600/10 via-transparent to-transparent rounded-full filter blur-[100px]"></div>
        </div>

        {/* Main content */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 z-10">
          
          {/* Text content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left z-10 relative flex flex-col items-start max-w-2xl"
          >
            <motion.p 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sanket</span>
              <motion.span 
                animate={{ 
                  rotate: [0, 15, 0, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  times: [0, 0.2, 0.4, 0.6, 1]
                }}
                className="ml-3 inline-block"
              >
                👋
              </motion.span>
            </motion.p>

            <TypeAnimation
              sequence={[
                'GGSOC 2025 Contributor',
                2000,
                'Full Stack Developer',
                2000,
                'DSA Enthusiast',
                2000,
                'Open Source Contributor',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-300 mb-4"
            />

            <motion.p 
              className="text-gray-300 mb-8 text-base sm:text-lg max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I specialize in building high-performance web applications with modern technologies. 
              With a strong foundation in data structures and algorithms, I create efficient solutions 
              that scale.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                href={resumePDF}
                download="Sanket-Resume.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Download className="w-5 h-5 transition-transform group-hover:translate-y-[-2px]" />
                Download Resume
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>

              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link to="/contact" className="w-5 h-5 transition-transform group-hover:translate-y-[-2px]" />
                Contact Me
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            </motion.div>

            {/* Tech Stack Badges */}
            <motion.div 
              className="flex flex-wrap gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'DSA'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-xs sm:text-sm rounded-full bg-gray-800/50 text-gray-200 border border-gray-700/50 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: index % 2 === 0 ? 'rgba(6, 182, 212, 0.2)' : 'rgba(124, 58, 237, 0.2)'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image & Socials */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-12 lg:mt-0 flex flex-col items-center"
          >
            <div className="relative group mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <img
                  src={HeroImg}
                  alt="Sanket Belekar"
                  className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-white/10 shadow-2xl object-cover group-hover:border-cyan-400/30 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-full border-4 border-transparent [border-image:linear-gradient(to_bottom_right,cyan,blue,purple)_1] -z-10 group-hover:[border-image:linear-gradient(to_bottom_right,cyan,blue,purple)_30] animate-spin-slow"></div>
                
                {/* Floating Labels */}
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-600 to-blue-600 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white font-medium shadow-lg flex items-center gap-1"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  DSA Expert
                </motion.div>
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-indigo-600 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white font-medium shadow-lg flex items-center gap-1"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  Full Stack
                </motion.div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center w-full">
              <motion.a
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(14, 165, 233, 0.2)'
                }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/sanket-belekar-79210228a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 border border-gray-700/50 text-white font-medium rounded-lg hover:bg-gray-700/30 backdrop-blur-sm transition-all duration-300 mb-4 w-full max-w-xs group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Linkedin className="w-5 h-5 text-cyan-400 transition-transform group-hover:scale-110" />
                <span>Connect on LinkedIn</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>

              <motion.div 
                className="flex gap-4 w-full justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <motion.a
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 5px 15px -3px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Sanket-2736"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/80 p-3 rounded-lg hover:bg-gray-700/80 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <Github className="text-white w-6 h-6" />
                </motion.a>

                <motion.a
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 5px 15px -3px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.hackerrank.com/profile/sanketbelekar29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/80 p-3 rounded-lg hover:bg-gray-700/80 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                  aria-label="HackerRank"
                >
                  <img src={hackerrankImg} alt="HackerRank" className="w-6 h-6" />
                </motion.a>

                <motion.a
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 5px 15px -3px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="https://leetcode.com/u/sanket2736/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/80 p-3 rounded-lg hover:bg-gray-700/80 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                  aria-label="LeetCode"
                >
                  <img src={leetcodeImg} alt="LeetCode" className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="text-gray-400 text-sm mb-2">Scroll down</div>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-gray-400 rounded-full mt-1"
              animate={{ 
                y: [0, 6, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </section>

      <About />
      <RoadMap />
    </>
  );
}

export default Hero;
