// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Home = () => {
//     const[classes, setClasses] = useState([]);

    
//         async function fetchData() {
//             try {
//                 const response = await axios.get('/');
//                 setClasses(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         }

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <div className='App'>
//             <h1>Classes</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>CRN #</th>
//                         <th>Subject</th>
//                         <th>Course</th>
//                         <th>Rating</th>
//                         <th>Interest</th>
//                         <th>Usefulness</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {classes && classes.map((classItem) => (
//                         <tr key={classItem._id}>
//                             <td>{classItem.crnNumber}</td>
//                             <td>{classItem.subject}</td>
//                             <td>{classItem.course}</td>
//                             <td>{classItem.rating}</td>
//                             <td>{classItem.interest}</td>
//                             <td>{classItem.usefulness}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// };

// export default Home;

import React from 'react';

const Home = () => {
    return <div>Home Page Content</div>;
};

export default Home;