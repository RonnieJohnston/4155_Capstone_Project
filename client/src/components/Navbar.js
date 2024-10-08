import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
    const email = sessionStorage.getItem('email')
    const location=useLocation()

    return (
        <nav className='navbar'>
            <a className ='logo-image' href='/home'>
                <img src={process.env.PUBLIC_URL + '/images/declassified-logo.png'} alt="Navbar Logo" className='DC-logo'/>
            </a>
            <ul className='navbar-links'>

                <li><Link to='/home'>Home</Link></li>

                {location.state && location.state.id || email ? (
                    <ul>
                        <li><Link to='/account'>Account</Link></li>
                        <li><Link to='/newReview'>Review Course</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                    </ul>
                ) : (
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                )}

            </ul>
        </nav>
    );
};

export default Navbar;