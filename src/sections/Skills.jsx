import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { certifications, techSkills, internshipDetails } from '../constants/assets';
import './Skills.css';

const skillCategories = ['Languages', 'Frameworks', 'Libraries', 'Databases'];

function Skills() {
  const [activeCategory, setActiveCategory] = useState('Languages');
  const filteredSkills = techSkills.filter(skill => skill.category === activeCategory);

  return (
    <div className="px-4 py-8 pt-24 bg-black">
      {/* Enhanced Skills Section */}
      <section className="relative overflow-hidden py-12">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -bottom-1/3 -left-1/3 w-full h-full bg-gradient-to-r from-blue-600/20 to-transparent rounded-full filter blur-3xl"></div>
          <div className="absolute -top-1/3 -right-1/3 w-full h-full bg-gradient-to-l from-purple-600/20 to-transparent rounded-full filter blur-3xl"></div>
        </div>

        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Technical</span> Expertise
        </motion.h2>

        {/* Enhanced Tabs for Skill Categories */}
        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          {skillCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 text-lg font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 backdrop-blur-sm border border-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
          {filteredSkills.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-900/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.03] overflow-hidden relative p-6 flex flex-col items-center border border-gray-800 group"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
            >
              {/* Skill Icon with animated border */}
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-md group-hover:opacity-80 transition-opacity"></div>
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-700 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.technology}
                    className="w-16 h-16 object-contain transition-transform group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="text-center w-full">
                <h4 className="text-2xl font-semibold text-white mb-3">{item.technology}</h4>
                
                {/* Animated Level Indicator */}
                <motion.div 
                  className="relative mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full relative"
                      style={{ width: `${item.levelValue}%` }}
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <motion.div
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium cursor-default"
                    initial={{ background: "linear-gradient(45deg, #3b82f6, #06b6d4)" }}
                    whileHover={{
                      scale: 1.1,
                      background: "linear-gradient(45deg, #06b6d4, #3b82f6)",
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white">{item.level}</span>
                    <span className="ml-2 text-blue-200 text-xs">
                      {item.levelValue}%
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      <div className="my-12">
        <h3 className="text-2xl font-bold text-gray-300 text-center mb-6 tracking-wide">
          My Recent Certifications:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
            >
              <img src={item.image} alt={item.name} className="w-full h-58 object-cover" />
              <div className="p-4">
                <p className="text-lg font-semibold text-white">Course Name: {item.name}</p>
                <p className="text-gray-400">Platform: {item.platform}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="my-12">
        <h3 className="text-2xl font-bold text-gray-300 text-center mb-6 tracking-wide">
          My Internship Experience:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {internshipDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
            >
              <div className="p-4">
                {item.certificateImage && (
                  <img
                    src={item.certificateImage}
                    alt={`${item.company} Internship Certificate`}
                    className="w-full h-auto mt-3 rounded-md border border-gray-600 shadow-md"
                  />
                )}
                <h4 className="text-xl font-semibold text-white mb-2">
                  {item.role} at {item.company}
                </h4>
                <p className="text-gray-400 mb-1">{item.duration}</p>
                <p className="text-blue-300 font-medium mb-2">Project: {item.project}</p>
                <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.techStack.map((tech, i) => (
                    <span key={i} className="bg-blue-700 text-white text-xs font-medium px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <h1 className="mt-12 text-3xl font-bold text-white text-center mb-6 tracking-wide">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Curious how I use these skills? Take a look at my projects!
        </span>
      </h1>

      <div className="text-center">
        <a
          href="/projects"
          className="button-85 px-6 py-3 font-semibold text-lg text-white rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg active:scale-95"
          role="button"
        >
          Explore Projects
        </a>
      </div>
    </div>
  );
}

export default Skills;