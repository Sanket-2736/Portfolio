import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Don't forget to import Link
import menuImg from '../../public/assets/menu.svg';
import closeImg from '../../public/assets/close.svg';
import './Navbar.css';

const NavItems = () => {
    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <Link to='/' className="nav-li_a">Home</Link>
            </li>
            <li className="nav-li">
                <Link to='/skills' className="nav-li_a">Skills</Link>
            </li>
            <li className="nav-li">
                <Link to='/projects' className="nav-li_a">Projects</Link>
            </li>
            <li className="nav-li">
                <Link to='/contact' className="nav-li_a">Contact</Link>
            </li>
        </ul>
    );
};

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-5 c-space">
                <a style={{fontSize: 30}} href="/" className="text-neutral-400 navbar-brand font-bold text-xl hover:text-white transition-colors">
                    Sanket K. Belekar
                </a>
                <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle Menu' aria-expanded={isOpen}>
                    <img src={isOpen ? closeImg : menuImg} alt="Menu" className='h-6 w-6' />
                </button>

                <nav className="sm:flex hidden">
                    <NavItems />
                </nav>
            </div>
            <div className={`nav-sidebar transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
