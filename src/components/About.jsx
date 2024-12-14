import React from 'react';
import gridImg from '../../public/assets/grid1.png';
import gridImg3 from '../../public/assets/grid2.png';
import gridImg2 from '../constants/TechStack.png';
import './About.css'

function About() {
  return (
    <section className="c-space my-20">
      {/* Section Heading */}
      <h2 className="relative text-4xl font-bold text-center text-white mb-12 before:absolute before:content-[''] before:bg-blue-400 before:w-24 before:h-1 before:bottom-[-8px] before:left-1/2 before:transform before:-translate-x-1/2 before:transition-all before:duration-500 hover:before:w-32">
        About Me
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-5">
        I have been passionate about technology from a young age, and my journey in coding began with simple projects that evolved into more complex applications. I specialize in Frontend development using React and Backend development with Node.js. My fascination with algorithms drives me to continuously improve my coding skills. 
        <br /><br />
        In addition to coding, I enjoy collaborating on projects that challenge my creativity and push me to learn new technologies. When I'm not coding, you can find me exploring new tech trends or diving into open-source projects. I'm always excited to connect with like-minded individuals and contribute to meaningful projects!
      </p>
      <div className="grid gap-10 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {/* Column 1 */}
        <div className="col-span-1 flex flex-col items-center xl:items-start text-center xl:text-left glowing-card">
          <div className="grid-container">
            <img
              src={gridImg}
              alt="Img1"
              className="w-full sm:h-[276px] h-fit object-contain rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
          <p className="grid-headtext font-bold text-3xl text-white mt-4 custom-text-gradient">
            Hi, I'm <span className="text-blue-400">Sanket</span>
          </p>
          <p className="grid-subtext text-gray-300 mt-2 leading-relaxed max-w-md">
            As a fresher, I have honed my skills in Frontend, Backend, and Data Structures & Algorithms, with a focused and dedicated approach.
          </p>
        </div>

        {/* Column 2 */}
        <div className="col-span-1 flex flex-col items-center xl:items-start text-center xl:text-left glowing-card">
          <div className="grid-container">
            <img
              src={gridImg2}
              alt="Img2"
              className="w-full sm:h-[276px] h-fit object-contain rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
          <p className="grid-headtext font-bold text-2xl text-white mt-4">
            Tech Stack
          </p>
          <p className="grid-subtext text-gray-300 mt-2 leading-relaxed max-w-md">
            I have a strong foundation in DSA using Java, and I'm currently enhancing my development skills using the MERN stack for full-stack development.
          </p>
        </div>

        {/* Column 3 */}
        <div className="col-span-1 flex flex-col items-center xl:items-start text-center xl:text-left glowing-card">
          <div className="grid-container">
            <img
              src={gridImg3}
              alt="Img3"
              className="w-full sm:h-[276px] h-fit object-contain rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
          <p className="grid-headtext font-bold text-2xl text-white mt-4">
            Projects
          </p>
          <p className="grid-subtext text-gray-300 mt-2 leading-relaxed max-w-md">
            I've built projects using React, including games like Whac-A-Mole, Candy Crush, and Space Invaders using JavaScript.
          </p>
        </div>

        {/* Column 4 */}
        <div className="col-span-1 flex flex-col items-center xl:items-start text-center xl:text-left glowing-card">
          <div className="grid-container">
            <img
              src={gridImg2}
              alt="Img4"
              className="w-full sm:h-[276px] h-fit object-contain rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
          <p className="grid-headtext font-bold text-2xl text-white mt-4">
            Recent Focus
          </p>
          <p className="grid-subtext text-gray-300 mt-2 leading-relaxed max-w-md">
            My recent work involves responsive designs using Bootstrap and building dynamic web applications with React and Node.js.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
