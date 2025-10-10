import React from "react";

function NextJSProjectCard({ project }) {
  return (
    <div className="bg-[#0d0d0f] border border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:border-blue-500 transition duration-300">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-52 object-cover rounded-t-lg"
      />

      <div className="p-5 flex flex-col justify-between min-h-[300px]">
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            {project.name}
          </h3>
          <p className="text-gray-300 text-sm mb-3">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="text-gray-400 text-sm list-disc pl-4 mb-4">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center mt-3 text-sm">
          <div>
            <p className="text-gray-400">Status: <span className="text-blue-300">{project.status}</span></p>
            <p className="text-gray-400">Duration: <span className="text-blue-300">{project.duration}</span></p>
            <p className="text-gray-400">Role: <span className="text-blue-300">{project.role}</span></p>
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200"
            >
              GitHub
            </a>
            {project.live !== "Underdevelopment" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-200"
              >
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextJSProjectCard;
