import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';

const Footer = () => {
    return (
        <nav className='footer'>
            <a className ='footer-logo' href='/home'>
                <img src={process.env.PUBLIC_URL + '/images/DC-icon.png'} alt="Footer Logo" width='60'/>
            </a>

            <p className='footer-slogan'>Peer-Powered Pathways</p>

            <ul className='footer-links'>
                <li><Link to='/about'>About Declassified</Link></li>
                <li><Link to='/privacy'>Privacy Policy</Link></li>
                <li><Link to='/ethics'>Code of Ethics</Link></li>
            </ul>
        </nav>
    );
};

export default Footer;