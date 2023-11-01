import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';

function Home() {
    const [classes, setClasses] = useState([]);
    const username = sessionStorage.getItem('username')

   /* useEffect(() => {
       axios.get('http://localhost:8000/getClasses')
       .then(response => setClasses(response.data))
       .catch(err => console.log(err))

       setLoading(false)
    }, []);
8*/

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
        <div className='vertical-center '>
            <table className='table table-dark table-striped table-hover container-lg'>
                <thead>
                    <tr>
                        <th>CRN #</th>
                        <th>SUBJECT</th>
                        <th>COURSE</th>
                        <th>RATING</th>
                        <th>INTEREST</th>
                        <th>USEFULNESS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Link to='/CoursePage'>23758</Link></td> <td>ITIS</td> <td>3135</td> <td>5.00</td> <td>5.00</td> <td>5.00</td>
                    </tr> 
                    <tr>
                        <td><Link to='/CoursePage'>12758</Link></td> <td>ITSC</td> <td>3300</td> <td>3.46</td> <td>4.88</td> <td>3.43</td>
                    </tr> 
                    <tr>
                        <td><Link to='/CoursePage'>38032</Link></td> <td>ITSC</td> <td>1100</td> <td>4.25</td> <td>3.45</td> <td>4.78</td>
                    </tr>
                    <tr>
                        <td><Link to='/CoursePage'>12843</Link></td> <td>ITSC</td> <td>3200</td> <td>3.54</td> <td>5.00</td> <td>4.99</td>
                    </tr>
                    <tr>
                        <td><Link to='/CoursePage'>29043</Link></td> <td>ITCS</td> <td>4155</td> <td>5.00</td> <td>2.34</td> <td>4.32</td>
                    </tr>
                    <tr>
                        <td><Link to='/CoursePage'>29043</Link></td> <td>ITCS</td> <td>4155</td> <td>5.00</td> <td>2.34</td> <td>4.32</td>
                    </tr>
                    <tr>
                        <td><Link to='/CoursePage'>29043</Link></td> <td>ITCS</td> <td>4155</td> <td>5.00</td> <td>2.34</td> <td>4.32</td>
                    </tr>
                    <tr>
                        <td><Link to='/CoursePage'>84932</Link></td> <td>ITIS</td> <td>4166</td> <td>2.45</td> <td>4.32</td> <td>5.00</td>
                    </tr>
                    <tr>
                        <td><Link to='/CoursePage'>09532</Link></td> <td>ITCS</td> <td>1212</td> <td>4.49</td> <td>4.76</td> <td>1.25</td>
                    </tr>
                    <tr>
                        <td><Link to='/CoursePage'>09532</Link></td> <td>ITCS</td> <td>1212</td> <td>4.49</td> <td>4.76</td> <td>1.25</td>
                    </tr>
                    <tr>
                        <td><Link to='/CoursePage'>12843</Link></td> <td>ITCS</td> <td>1213</td> <td>3.76</td> <td>3.24</td> <td>3.77</td>
                    </tr>
                    <tr>
                        <td><Link to='/CoursePage'>12940</Link></td> <td>ITIS</td> <td>4221</td> <td>4.22</td> <td>5.00</td> <td>4.32</td>
                    </tr>
                    <tr>
                        <td><Link to='/CoursePage'>48291 </Link></td> <td>ITIS</td> <td>3153</td> <td>4.67</td> <td>5.00</td> <td>5.00</td>
                    </tr>

                    {/* {classes.map(classItem => {
                        return <tr>
                            <td>{classItem.crnNumber}</td>
                            <td>{classItem.subject}</td>
                            <td>{classItem.course}</td>
                            <td>{classItem.rating}</td>
                            <td>{classItem.interest}</td>
                            <td>{classItem.usefulness}</td>
                        </tr>
                    })} */}
                </tbody>
            </table>
        </div>
        </div>

        </body>
    );
}

export default Home;
