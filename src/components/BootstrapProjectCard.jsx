import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Github, X } from 'lucide-react';

function BootstrapProjectCard({ item }) {
  const [expanded, setExpanded] = useState(false);
  const [showVideoOverlay, setShowVideoOverlay] = useState(false);

  const toggleDescription = () => setExpanded((prev) => !prev);
  const openVideoOverlay = () => setShowVideoOverlay(true);
  const closeVideoOverlay = () => setShowVideoOverlay(false);

  return (
    <>
      <motion.div
        className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.6 }}
      >
        {/* Glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-md"></div>
        </div>

        {/* Video Section */}
        <div
          className="aspect-video relative overflow-hidden rounded-t-2xl cursor-pointer"
          onClick={openVideoOverlay}
        >
          <video
            src={item.video}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            autoPlay
            muted
            loop
          />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <h3 className="text-white text-xl font-semibold drop-shadow-md">{item.title}</h3>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 space-y-4">
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "Bootstrap", "JS"].map((tech, index) => (
              <span
                key={index}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-800/80 text-blue-300 border border-gray-700/50"
              >
                {tech}
              </span>
            ))}
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-700/60 text-gray-300 border border-gray-600/50">
              Duration: 1–2 weeks
            </span>
          </div>

          {/* Toggle Description */}
          <motion.button
            onClick={toggleDescription}
            className="flex items-center gap-1.5 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
            whileHover={{ x: 3 }}
          >
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Hide Description
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                View Description
              </>
            )}
          </motion.button>

          <AnimatePresence>
            {expanded && (
              <motion.p
                className="text-gray-300 text-sm leading-relaxed"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                {item.desc}
              </motion.p>
            )}
          </AnimatePresence>

          {/* GitHub Link */}
          <motion.a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github className="w-4 h-4" />
            View Code
          </motion.a>
        </div>
      </motion.div>

      {/* Fullscreen Video Overlay */}
      <AnimatePresence>
        {showVideoOverlay && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-5xl aspect-video">
              <button
                onClick={closeVideoOverlay}
                className="absolute top-3 right-3 z-50 text-white bg-black/60 hover:bg-black/80 rounded-full p-1"
              >
                <X className="w-6 h-6" />
              </button>
              <video
                src={item.video}
                className="w-full h-full object-contain rounded-lg"
                controls
                autoPlay
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default BootstrapProjectCard;
