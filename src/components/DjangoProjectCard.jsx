import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

function DjangoProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const toggleDetails = () => setExpanded(prev => !prev);

  return (
    <motion.div
      className="w-full max-w-md mx-auto sm:max-w-full bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-2xl shadow-2xl overflow-hidden relative border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-md"></div>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden h-56 sm:h-64">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">{project.name}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack.split(',').map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-800/80 text-blue-300 backdrop-blur-sm border border-gray-700/50"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.trim()}
                  </motion.span>
                ))}
              </div>
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-yellow-900/60 text-yellow-300 border border-yellow-800/50">
              <Sparkles className="w-3 h-3" />
              Django
            </span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6">
        {/* Description */}
        <motion.p 
          className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {project.desc.length > 130 && !expanded
            ? project.desc.slice(0, 130) + '...'
            : project.desc}
        </motion.p>

        {/* Toggle Button */}
        <motion.button
          onClick={toggleDetails}
          className="flex items-center gap-1.5 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors mb-4 w-full justify-center sm:justify-start"
          whileHover={{ x: 3 }}
        >
          {expanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show More
            </>
          )}
        </motion.button>

        {/* Expandable Section */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              className="space-y-4 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-800/40 p-3 rounded-lg">
                  <h5 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Duration</h5>
                  <p className="text-white font-medium">{project.duration}</p>
                </div>
                <div className="bg-gray-800/40 p-3 rounded-lg">
                  <h5 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Status</h5>
                  <p className="text-white font-medium">{project.status}</p>
                </div>
              </div>

              <div className="bg-gray-800/40 p-3 rounded-lg">
                <h5 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Role</h5>
                <p className="text-white font-medium">{project.role}</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-sm bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                )}
                <motion.a
                  href={project.href === 'Underdevelopment' ? '#' : project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 text-sm px-4 py-3 rounded-lg transition-all ${
                    project.href === 'Underdevelopment'
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white'
                  }`}
                  whileHover={{ 
                    scale: project.href === 'Underdevelopment' ? 1 : 1.03 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  {project.href === 'Underdevelopment' ? 'Coming Soon' : 'Live Demo'}
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default DjangoProjectCard;
