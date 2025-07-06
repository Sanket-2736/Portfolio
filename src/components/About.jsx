import React from 'react';
import { Code, Laptop, Briefcase, Search } from 'lucide-react'; // Importing icons
import './About.css';

function About() {
  return (
    <section className="c-space my-20">
      {/* Section Heading */}
      <h2 className="relative text-4xl font-bold text-center text-white mb-12 before:absolute before:content-[''] before:bg-blue-400 before:w-24 before:h-1 before:bottom-[-8px] before:left-1/2 before:transform before:-translate-x-1/2 before:transition-all before:duration-500 hover:before:w-32">
        About Me
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-5">
        🚀 I have been passionate about technology from a young age, and my journey in coding began with simple projects that evolved into more complex applications. I specialize in Frontend development using React and Backend development with Node.js. My fascination with algorithms drives me to continuously improve my coding skills.
        <br /><br />
        🤝 In addition to coding, I enjoy collaborating on projects that challenge my creativity and push me to learn new technologies. When I'm not coding, you can find me exploring new tech trends or diving into open-source projects. I'm always excited to connect with like-minded individuals and contribute to meaningful projects!
      </p>
      <div className="grid my-28 gap-10 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center">
        {/* Column 1 */}
        <div className="col-span-1 flex flex-col items-center text-center glowing-card transition-transform duration-300 hover:scale-105">
          <div className="icon-container">
            <Code className="text-blue-400 h-20 w-20 mb-4 transition-transform duration-300 hover:rotate-12" />
          </div>
          <p className="grid-headtext font-bold text-3xl text-white mt-4 custom-text-gradient">
            Hi, I'm <span className="text-blue-400">Sanket</span> 👋
          </p>
          <p className="grid-subtext text-gray-300 mt-2 leading-relaxed max-w-md">
            As a fresher, I’ve built strong skills in C, C++, Python, and Java (Advanced), with hands-on experience in Spring Boot and the MERN stack for full-stack development.
          </p>



        </div>

        {/* Column 2 */}
        <div className="col-span-1 flex flex-col items-center text-center glowing-card-even transition-transform duration-300 hover:scale-105">
          <div className="icon-container">
            <Laptop className="text-blue-400 h-20 w-20 mb-4 transition-transform duration-300 hover:rotate-12" />
          </div>
          <p className="grid-headtext font-bold text-2xl text-white mt-4">
            Tech Stack 💻
          </p>
          <p className="grid-subtext text-gray-300 mt-2 leading-relaxed max-w-md">
            I have a strong foundation in DSA using Java, and I'm currently enhancing my development skills using the MERN stack and SPRINGBOOT for full-stack development.
          </p>
        </div>

        {/* Column 3 */}
        <div className="col-span-1 flex flex-col items-center text-center glowing-card transition-transform duration-300 hover:scale-105">
          <div className="icon-container">
            <Briefcase className="text-blue-400 h-20 w-20 mb-4 transition-transform duration-300 hover:rotate-12" />
          </div>
          <p className="grid-headtext font-bold text-2xl text-white mt-4">
            Projects 🚀
          </p>
          <p className="grid-subtext text-gray-300 mt-2 leading-relaxed max-w-md">
            I've built full-stack and interactive applications using React, including an Alumni Connect Platform, a real-time Chat App, a DSA Visualizer, and AI-based Question Paper Generator and Answer Sheet Analyzer.
          </p>

        </div>

        {/* Column 4 */}
        <div className="col-span-1 flex flex-col items-center text-center glowing-card-even transition-transform duration-300 hover:scale-105">
          <div className="icon-container">
            <Search className="text-blue-400 h-20 w-20 mb-4 transition-transform duration-300 hover:rotate-12" />
          </div>
          <p className="grid-headtext font-bold text-2xl text-white mt-4">
            Recent Focus 🔍
          </p>
          <p className="grid-subtext text-gray-300 mt-2 leading-relaxed max-w-md">
            My recent work includes building full-stack applications using the MERN stack and Spring Boot, along with creating responsive designs using Bootstrap.
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;
