import React from 'react';
import { bootstrapProject, djangoProjects, gamesProject, MERNProjects } from '../constants/assets';
import './Projects.css';
import MERNProjectCard from './MERNProjectCard'; // updated detailed card
import JavaScriptProjects from '../components/ProjectCard';
import ProjectCard from '../components/ProjectCard';
import BootstrapProjectCard from '../components/BootstrapProjectCard';
import DjangoProjectCard from '../components/DjangoProjectCard';

function Projects() {
  return (
    <div className="bg-[#010103] min-h-screen mt-10 flex flex-col items-center py-16">
      <h1 className="text-4xl font-bold text-white mb-10">Uncover My Projects</h1>

      {/* MERN Stack Projects */}
      <div className="max-w-7xl w-full mb-10">
        <h2 className="text-3xl text-blue-400 mb-5">MERN Stack Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {MERNProjects.map((item, index) => (
            <MERNProjectCard key={index} project={item} />
          ))}
        </div>
      </div>

      {/* Django-AI Projects */}
      <div className="max-w-7xl w-full mb-10">
        <h2 className="text-3xl text-blue-400 mb-5">Django-AI Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {djangoProjects.map((item, index) => (
            <DjangoProjectCard project={item} key={index}/>
          ))}
        </div>
      </div>

      {/* Bootstrap Projects */}
      <div className="max-w-7xl w-full mb-10">
        <h2 className="text-3xl text-blue-400 mb-5">BootStrap Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {bootstrapProject.map((item, index) => (
            <BootstrapProjectCard item={item} key={index}/>
          ))}
        </div>
      </div>

      {/* JavaScript Projects */}
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl text-blue-400 mb-5">
          <span className="text-white">JavaScript</span> Projects:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            gamesProject.map((item, index) => (
               <ProjectCard item={item} key={index}/>
            ))
          }
        </div>
      </div>

    </div>
  );
}

export default Projects;
