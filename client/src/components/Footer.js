import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';

const Footer = () => {
    return (
        <nav className='footer'>
            <a className ='footer-logo' href='/home'>
                <img
                    src='images/DC-icon.png'
                    width='60'
                    alt='declassified logo'
                />
            </a>

            <p className='footer-slogan'>Peer-Powered Pathways</p>

            <ul className='footer-links'>
                <li><Link to='/About'>About Declassified</Link></li>
                <li><Link to='/Devs'>Meet the Developers</Link></li>
                <li><Link to='/Privacy'>Privacy Policy</Link></li>
                <li><Link to='/Ethics'>Code of Ethics</Link></li>
                <li><Link to='/Contact'>Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Footer;