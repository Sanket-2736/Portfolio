import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import menuImg from '../../public/assets/menu.svg';
import closeImg from '../../public/assets/close.svg';
import './Navbar.css';

const NavItems = ({ closeMenu }) => {
    const handleClick = () => {
        window.scrollTo(0, 0);
        if (closeMenu) closeMenu();
    };

    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <Link onClick={handleClick} to='/' className="nav-li_a">Home</Link>
            </li>
            <li className="nav-li">
                <Link onClick={handleClick} to='/skills' className="nav-li_a">Skills</Link>
            </li>
            <li className="nav-li">
                <Link onClick={handleClick} to='/projects' className="nav-li_a">Projects</Link>
            </li>
            <li className="nav-li">
                <Link onClick={handleClick} to='/contact' className="nav-li_a">Contact</Link>
            </li>
        </ul>
    );
};

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.nav-sidebar') && !event.target.closest('button[aria-label="Toggle Menu"]')) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 bg-black/90 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
                <Link 
                    to="/" 
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
                    style={{ fontSize: '1.75rem' }}
                >
                    Sanket K. Belekar
                </Link>
                
                <button 
                    onClick={toggleMenu} 
                    className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' 
                    aria-label='Toggle Menu' 
                    aria-expanded={isOpen}
                >
                    <img 
                        src={isOpen ? closeImg : menuImg} 
                        alt={isOpen ? "Close menu" : "Open menu"} 
                        className='h-6 w-6' 
                    />
                </button>

                <nav className="hidden sm:block">
                    <NavItems />
                </nav>
            </div>
            
            {/* Mobile menu */}
            <div 
                className={`nav-sidebar bg-black/95 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-4' : 'max-h-0'}`}
                aria-hidden={!isOpen}
            >
                <nav className="px-6">
                    <NavItems closeMenu={closeMenu} />
                </nav>
            </div>
        </header>
    );
}

export default Navbar;