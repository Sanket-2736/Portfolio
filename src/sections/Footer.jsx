import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Sanket's Portfolio</h3>
          <p className="text-sm">Crafting solutions with creativity and code.</p>
        </div>
        
        {/* Quick Links Section */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-1">
          <li className="nav-li">
                <Link onClick={() => scrollTo(0, 0)} to='/' className="">Home</Link>
            </li>
            <li className="nav-li">
                <Link onClick={() => scrollTo(0, 0)} to='/skills' className="">Skills</Link>
            </li>
            <li className="nav-li">
                <Link onClick={() => scrollTo(0, 0)} to='/projects' className="">Projects</Link>
            </li>
            <li className="nav-li">
                <Link onClick={() => scrollTo(0, 0)} to='/contact' className="">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons Section */}
        <ul className="flex space-x-4 mb-4 md:mb-0">
          <li>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
            <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">
            <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200">
            <i className="fa-brands fa-x-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-200">
            <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      

      {/* Copyright Section */}
      <div className="border-t border-gray-700 my-4" />
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sanket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
