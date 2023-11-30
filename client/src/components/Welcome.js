import React from 'react';
import '../assets/css/Welcome.css';
import { Link } from 'react-router-dom';

const WelcomePage = () => {

    return (
        <div className='welcome-page'>
            <div className='welcome-page-contents'>
                <div className='welcome-page-icon'>
                    <img className='DC-icon' src='/images/DC-icon.png' alt='declassified icon' />
                </div>
                <div className='welcome-page-text-container'>
                    <h2 className='welcome-page-text-1'>Rate</h2>
                    <h2 className='welcome-page-text-2'>Review</h2>
                    <h2 className='welcome-page-text-3'>Respond</h2>
                    <img className='welcome-page-text-4' src='/images/dots.png' alt='text-spacer' />
                    <Link to='/home' className='welcome-page-text-5'>Click to get started</Link>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;