import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';

function Home() {
    const [classes, setClasses] = useState([]);
    const username = sessionStorage.getItem('username')

    useEffect(() => {
        axios.get('http://localhost:8000/home', {
            params: {
                subject: '',
                course: '',
                courseName: '',
            },
        })
        .then(response => {
            setClasses(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);


    return (
        <body className='page'>
        <div>
            {username ? (
                <p>Welcome {username} </p>
            ) : (
                <p>Welcome!</p>
            )} 
        </div>
        <div className = 'logo-overlay'>
            <a className ='charlotte-logo' href='/'>
                <img
                    src='images/charlotte_logo_white.png'
                    width='350'
                    height='75'
                    alt='declassified logo'
                />
            </a>
        </div>
        <div className='table-responsive'>
        <div className='table-container'>
            <table className='table table-dark table-striped table-hover container-lg'>
                <thead>
                    <tr>
                        <th>SUBJECT</th>
                        <th>COURSE</th>
                        <th>COURSE NAME</th>
                    </tr>
                </thead>
                <tbody>
                     {classes.map(classItem => (
                        <tr key={classItem._id}>
                            <td><Link to='/CoursePage'>{classItem.subject}</Link></td>
                            <td>{classItem.course}</td>
                            <td>{classItem.courseName}</td>
                        </tr>
                     ))}
                </tbody>
            </table>
        </div>
        </div>
        </body>
    );
}

export default Home;
