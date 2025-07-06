import React from 'react';
import { motion } from 'framer-motion';
import { certifications, techSkills, internshipDetails } from '../constants/assets';
import './Skills.css';

function Skills() {
  return (
    <div className="px-4 py-8 pt-24 bg-black">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wide">
        My Expertise & Work Showcase
      </h2>

      {/* Key Technologies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <h3 className="text-2xl font-bold text-gray-300 col-span-full tracking-wide">
          Key Technologies:
        </h3>

        {techSkills.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden relative p-6 flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-700 overflow-hidden">
              <img
                src={item.img}
                alt={item.technology}
                className="w-20 h-20 object-contain rounded-full"
              />
            </div>

            <div className="text-center mt-4">
              <h4 className="text-2xl font-semibold text-blue-200">{item.technology}</h4>
              <p className="text-gray-400 mt-2 text-md">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications Section */}
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

      {/* Internship Section */}
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

      {/* Redirect text to projects section */}
      <h1 className="mt-12 text-3xl font-bold text-white text-center mb-6 tracking-wide">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Curious how I use these skills? Take a look at my projects!
        </span>
      </h1>

      {/* Explore Projects Button */}
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
