import React, { useState, useEffect } from 'react';
import './NavBar.css';
import Logo from '../../assets/logo.png';
import MenuIcon from '../../assets/menu-icon.png'; // Import your menu icon

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <img src={Logo} alt="Logo" className="logo" />
            <img src={MenuIcon} alt="Menu Icon" className="menu-icon" onClick={toggleMenu} />
            <ul className={isMenuOpen ? 'open' : ''}>
                <li><a href="#home">Home</a></li>
                <li><a href="#program">Program</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#campus">Campus</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact" className='button'>Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
