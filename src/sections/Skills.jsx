import React from 'react';
import { certifications, techSkills } from '../constants/assets';
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
          <div
            key={index}
            className="bg-gray-900 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden relative p-6 flex flex-col items-center">
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
          </div>
      ))}

      </div>

      {/* Certifications Section */}
      <div className="my-12">
        <h3 className="text-2xl font-bold text-gray-300 text-center mb-6 tracking-wide">
          My Recent Certifications:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((item, index) => {
            return (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
                <img src={item.image} alt={item.name} className="w-full h-58 object-cover" />
                <div className="p-4">
                  <p className="text-lg font-semibold text-white">Course Name: {item.name}</p>
                  <p className="text-gray-400">Platform: {item.platform}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Redirect text to projects section */}
      <h1 className="mt-12 text-3xl font-bold text-white text-center mb-6 tracking-wide">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Curious how I use these skills? Take a look at my projects!
        </span>
      </h1>

      {/* Button styling with pseudo effect */}
      <div className="text-center">
        <a href='/projects'
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
