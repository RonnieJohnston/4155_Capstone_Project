import React, { useState, useEffect } from 'react';
import axios, { all } from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';

function Home() {
    const [classes, setClasses] = useState([]);
    const email = sessionStorage.getItem('email');

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
            {email ? (
                <p>Welcome {email} </p>
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
            <select onChange={(e) => {
                const selectedOption = e.target.value
                console.log(selectedOption)
                let tempClassArr = [...classes]
                
                if(selectedOption == 'Course Name')
                {
                    tempClassArr.sort((a, b) => a.courseName.localeCompare(b.courseName))
                    setClasses(tempClassArr)
                }
                else if(selectedOption == 'Course Number')
                {
                    tempClassArr.sort((a, b) => a.course.localeCompare(b.course))
                    setClasses(tempClassArr)
                }
                else if(selectedOption == 'Subject')
                {
                    tempClassArr.sort((a, b) => a.subject.localeCompare(b.subject))
                    setClasses(tempClassArr)
                }
            }}>
                <option>None Selected</option>
                <option>Course Name</option>
                <option>Course Number</option>
                <option>Subject</option>
            </select>
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
