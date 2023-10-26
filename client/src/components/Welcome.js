import React from 'react';
import '../assets/css/App.css';

const WelcomePage = () => {

    return (
        <body className='page'>
            <div className='welcome-page-contents'>
                <div className='welcome-page-icon'>
                    <img className='DC-icon'
                         src='images/DC-icon.png'
                         alt='declassified icon'
                    />
                </div>
                <div className='welcome-page-text'>
                    <div className='welcome-page-text-container'>
                        <h2>Rate</h2>
                        <h2>Review</h2>
                        <h2>Respond</h2>
                        <h2>...</h2>
                        <p>Click to get started</p>
                    </div>
                </div>
            </div>
        </body>

    );
};

export default WelcomePage;