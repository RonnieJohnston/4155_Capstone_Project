import React from 'react';
import '../assets/css/About.css';

const AboutPage = () => {

    return (
        <div className='about-page'>
            <div className='about-page-container1'>
                <img className='DC-icon' src='images/DC-icon.png' alt='declassified icon' />
            </div>

            <div className='about-page-container2'>
                <h2 className='about-page-title'>About Declassified</h2>
                <h5 className='about-page-text'>
                    Welcome to Declassified, your go-to platform for uncovering
                    the hidden gems and well-trodden paths within the College of
                    Computing and Informatics at UNC Charlotte. We're a community-driven
                    initiative dedicated to empowering students to share their
                    invaluable insights and experiences with their fellow scholars,
                    ensuring that every college journey is informed, exciting, and
                    purposeful.
                </h5>

                <h2 className='about-page-title'>Our Mission</h2>
                <h5 className='about-page-text'>
                    At Declassified, our mission is simple yet profound: to democratize
                    education by placing the power in the hands of students. We believe
                    that every student deserves a voice in shaping their academic path,
                    making informed decisions, and fostering an environment of academic
                    excellence. Our platform is designed to provide a space for students
                    to rate and review college courses, fostering transparency,
                    collaboration, and collective wisdom.
                </h5>

                <h2 className='about-page-title'>Why Declassified</h2>
                <h5 className='about-page-text'>
                    Navigating the vast landscape of college courses can be a challenging
                    and bewildering experience, especially within the dynamic field of
                    Computing and Informatics. Each student's academic journey is unique,
                    and course choices play a pivotal role in shaping that journey.
                    We recognized the need for a platform where students can share their
                    first-hand experiences, insights, and recommendations to guide others
                    through the academic maze. Declassified exists to bridge the gap
                    between academic aspirations and reality.
                </h5>
            </div>

        </div>
    );
};

export default AboutPage;