import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const username = sessionStorage.getItem('username')
    const location=useLocation()

    return (
        <nav className='navbar'>
            <a className ='logo-image' href='/home'>
                <img
                    src='images/Logo.png'
                    width='794'
                    height='32'
                    alt='declassified logo'
                />
            </a>
            <ul className='navbar-links'>
                {location.state && location.state.id || username ? (
                    <ul className='navbar-links'>
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to='/account'>Account</Link></li>
                    </ul>
                ) : (
                    <ul className='navbar-links'>
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                )}

                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/newReview'>Review Course</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;