import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../assets/css/CoursePage.css';

const CoursePage = () => {
    const [courseDetails, setCourseDetails] = useState({});
    const [averageRating, setAverageRating] = useState(0);
    const [reviews, setReviews] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/course/${id}`)
            .then(response => {
                console.log(response.data);

                // Check if response.data has courseDetails property
                if (response.data.courseDetails) {
                    setCourseDetails(response.data.courseDetails);
                }

                // Check if response.data has averageRating property
                if (response.data.averageRating) {
                    setAverageRating(response.data.averageRating);
                }

                // Check if response.data has reviews property and it is an array
                if (response.data.reviews && Array.isArray(response.data.reviews)) {
                    setReviews(response.data.reviews);
                }
            })
            .catch(error => {
                alert(`An error occurred. Please try again. Error details: ${error.message}`);
                console.error(error);
            });
    }, [id]);

    return (
        <div className='course-page'>
            {/* Display course details */}
            {courseDetails && (
                <>
                    <h1>{courseDetails.subject} {courseDetails.course}</h1>
                    <p>Course Name: {courseDetails.courseName}</p>
                </>
            )}

            {/* Display average rating */}
            <p>Average Rating: {averageRating}</p>

            {/* Display list of reviews */}
            <h2>Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review._id.$oid}>
                        <p>Rating: {review.rating}</p>
                        <p>Interest: {review.interest}</p>
                        {/* Add more review details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoursePage;



