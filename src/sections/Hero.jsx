import React from 'react';
import homeImg from '../constants/CSE3.png';
import About from '../components/About';
import resumePDF from '../constants/Resume.pdf'; // Ensure this path is correct

function Hero() {
  return (
    <>
      <section className="min-h-screen w-full flex flex-col justify-center items-center relative bg-gradient-to-r from-blue-900 via-purple-800 to-gray-900 p-12 mt-16">
        {/* Text Section */}
        <div className="text-center mb-10 z-10 relative">
          <p className="sm:text-5xl text-3xl font-bold text-white drop-shadow-md mb-3 animate-fadeIn flex items-center justify-center">
            Hi, I'm <span className="text-blue-300 gradient font-extrabold">Sanket</span>
            <span className="ml-2 waving-hand">👋🏻</span>
          </p>
          <p className="text-lg sm:text-2xl font-medium text-gray-300 drop-shadow-sm mb-8 animate-fadeIn delay-500">
            DSA Enthusiast & Developer
          </p>
          <a href={resumePDF} download='Sanket-Resume.pdf' className="button-85 px-8 py-4 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg focus:ring-4 focus:ring-blue-300">
            Download Resume
          </a> 
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center items-center mb-10 z-0">
          <img
            src={homeImg}
            alt="Hacker Room"
            className="rounded-2xl shadow-2xl object-cover max-w-full sm:w-2/3 w-full h-auto transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Call-to-Action Button Section */}
        <div className="flex flex-col sm:flex-row gap-4 z-10">
          {/* Work Together Button */}
          <button className="button-85 px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg focus:ring-4 focus:ring-blue-300">
            Let's Work Together!
          </button>          
        </div>
      </section>
      <About />
    </>
  );
}

export default Hero;
