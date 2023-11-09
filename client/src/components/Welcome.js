import React from 'react';
import '../assets/css/Welcome.css';
import { Link } from 'react-router-dom';

const WelcomePage = () => {

    return (
        <div className='welcome-page'> {/* Wrap your content in a div */}
            <div className='welcome-page-contents'>
                <div className='welcome-page-icon'>
                    <img className='DC-icon' src='images/DC-icon.png' alt='declassified icon' />
                </div>
                <div className='welcome-page-text-container'>
                    <h2 className='welcome-page-text'>Rate</h2>
                    <h2 className='welcome-page-text'>Review</h2>
                    <h2 className='welcome-page-text'>Respond</h2>
                    <h2 className='welcome-page-text'>...</h2>
                    <p></p>
                    <Link to='/home'>Click to get started</Link>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;