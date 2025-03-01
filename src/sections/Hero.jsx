import React from 'react';
import homeImg from '../constants/CSE3.png';
import About from '../components/About';
import resumePDF from '../constants/Resume.pdf';
import RoadMap from './RoadMap';

function Hero() {
  return (
    <>
      <section
        className="min-h-screen w-full flex flex-col justify-center items-center relative backdrop-blur-sm bg-gradient-to-r from-blue-900 via-purple-800 to-gray-900 p-12 mt-16"
        style={{
          backgroundImage: `url(${homeImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

        {/* Content Section */}
        <div className="text-center mb-10 z-10 relative">
          <p className="sm:text-5xl text-3xl font-bold text-white drop-shadow-md mb-3 animate-fadeIn flex items-center justify-center">
            Hi, I'm <span className="text-blue-300 font-extrabold ml-5">Sanket</span>
            <span className="ml-2 waving-hand">👋🏻</span>
          </p>
          <p className="text-lg sm:text-2xl font-medium text-yellow-500 drop-shadow-sm mb-8 animate-fadeIn delay-500">
            DSA Enthusiast & Developer
          </p>
          <a
            href={resumePDF}
            download="Sanket-Resume.pdf"
            className="button-85 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg focus:ring-4 focus:ring-blue-300"
          >
            Download Resume
          </a>
        </div>

        {/* Call-to-Action Button Section */}
        <div className="flex flex-col sm:flex-row gap-4 z-10">
          <a
            href="https://www.linkedin.com/in/sanket-belekar-79210228a/"
            className="button-85 px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg focus:ring-4 focus:ring-blue-300"
          >
            Let's Work Together!
          </a>
        </div>
      </section>

      <About />
      <RoadMap />
    </>
  );
}

export default Hero;
