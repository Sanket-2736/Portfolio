import React from 'react';
import { bootstrapProject, gamesProject, recentProjects } from '../constants/assets';
import './Projects.css';

function Projects() {
  return (
    <div className="bg-[#010103] min-h-screen mt-10 flex flex-col items-center py-16">
      <h1 className="text-4xl font-bold text-white mb-10">Uncover My Projects</h1>

      {/* Make the recent projects section larger */}
      <div className="max-w-7xl w-full mb-10"> {/* Increased max width for recent projects */}
        <h2 className="text-3xl text-blue-400 mb-5">Recent Projects</h2>

        {/* Recent Projects grid with larger cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8"> {/* Limited to 2 columns for larger cards */}
          {recentProjects.map((item, index) => (
            <div key={index} className="card w-full bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img 
                src={item.image} 
                alt={item.desc} 
                className="w-full h-64 object-cover rounded-md mb-4" 
              />
              <h3 className="text-3xl font-semibold text-white mb-2">{item.name}</h3> {/* Larger font size */}
              <h4 className="text-xl text-blue-400 mb-2">{item.TechStack}</h4>
              <p className="text-gray-300 mb-4">{item.desc}</p>
              <a 
                href={item.href === 'Underdevelopment' ? '#' : item.href} 
                className="inline-block text-center py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition duration-300"
              >
                {item.href === 'Underdevelopment' ? 'Available Soon!' : 'Visit Website'}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* JavaScript Projects Section */}
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl text-blue-400 mb-5">
          <span className="text-white">JavaScript</span> Projects:
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gamesProject.map((item, index) => (
            <div key={index} className="card w-full bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="title text-2xl font-semibold text-white mb-2">{item.title}</h3>
              <div className="w-full h-32 flex items-center justify-center mb-4">
                <video 
                  src={item.videoSrc} 
                  className="w-full h-full object-cover rounded-md" 
                  autoPlay 
                  muted 
                  loop 
                />
              </div>
              <p className="desc text-gray-300 mb-4">{item.desc}</p>
              <a 
                href={item.github} 
                className="button-82-pushable inline-block text-center py-2 px-4 rounded-md transition duration-300"
                role="button"
              >
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text text-white">
                  Visit Github?
                </span>
              </a>                            
            </div>
          ))}
        </div>
      </div>

      {/* Bootstrap Projects Section */}
      <div className="max-w-5xl w-full mt-10">
        <h2 className="text-3xl text-blue-400 mb-5">
          <span className="text-white">Bootstrap</span> Projects:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bootstrapProject.map((item, index) => (
            <div key={index} className="card w-full bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="w-full h-32 flex items-center justify-center mb-4">
                <video 
                  src={item.video} 
                  className="w-full h-full object-cover rounded-md" 
                  autoPlay 
                  muted 
                  loop 
                />
              </div>
              <h3 className="title text-2xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="desc text-gray-300 mb-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;