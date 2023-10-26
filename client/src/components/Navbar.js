import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';

const Navbar = () => {
    const username=sessionStorage.getItem('username')

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
                <li><Link to='/home'>Home</Link></li>
                {username ? (
                    <li><Link to='/logout'>Logout</Link></li>
                ) : (
                    <li><Link to='/register'>Register</Link></li>,
                    <li><Link to='/login'>Login</Link></li>
                )}
                <li><Link to='/account'>Account</Link></li>
                <li><Link to='/newReview'>Review Course</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;