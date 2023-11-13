import React, { useState, useEffect } from 'react';
import axios, { all } from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

function Home() {
    // search bar functionality
    const [searchTerm, setSearchTerm] = useState('');
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

    const filteredClasses = classes.filter((classItem) => {
        const { subject, course, courseName } = classItem;
        const searchTermLower = searchTerm.toLowerCase();
        return (
            subject.toLowerCase().includes(searchTermLower) ||
                course.toLowerCase().includes(searchTermLower) ||
                courseName.toLowerCase().includes(searchTermLower)
        );
    });

    return (
        <body className='page'>
        <div className='welcome-message'>
            {email ? (
                <p>Welcome {email} </p>
            ) : (
                <p>Welcome!</p>
            )}
        </div>
        <div className='above-table'>
            <a className ='charlotte-logo' href='/'>
                <img
                    src='images/charlotte_logo_white.png'
                    width='325'
                    height='70'
                    alt='declassified logo'
                />
            </a>
            <div className='search-bar'>
                <input
                    type='text'
                    placeholder='search...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
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
                     {filteredClasses.map(classItem => (
                        <tr key={classItem._id}>
                            <td><Link to={`/course/${classItem._id}`}>{classItem.subject}</Link></td>
                            <td><Link to={`/course/${classItem._id}`}>{classItem.course}</Link></td>
                            <td><Link to={`/course/${classItem._id}`}>{classItem.courseName}</Link></td>
                        </tr>
                     ))}
                </tbody>
            </table>
        </div>

        </body>
    );
}

export default Home;
