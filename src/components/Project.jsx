import React from 'react'

function VideoProject({ title, desc, video, href, TechStack }) {
  return (
    <div className="card w-full bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="image-container relative">
        <video 
          src={video} 
          className="w-full h-64 object-cover rounded-md mb-4" 
          controls
        />
        <div className="overlay">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <h4 className="text-xl text-blue-400 mb-2">{TechStack}</h4>
          <p className="text-gray-300 mb-4">{desc}</p>
          <a 
            href={href === 'Underdevelopment' ? '#' : href} 
            className="inline-block text-center py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition duration-300"
          >
            {href === 'Underdevelopment' ? 'Available Soon!' : 'Visit Website'}
          </a>
        </div>
      </div>
    </div>
  )
}

export default VideoProject
