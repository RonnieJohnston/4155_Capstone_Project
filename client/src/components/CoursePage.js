import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../assets/css/CoursePage.css';

const CoursePage = () => {

    const { id } = useParams();
    const [courseDetails, setCourseDetails] = useState({});
    const [courseReviews, setCourseReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:8000/course/${id}`)
            .then(response => {
                setCourseDetails(response.data.courseDetails);
                setCourseReviews(response.data.courseReviews);
                setAverageRating(response.data.averageRating);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    return (
        <div className='course-page'>
            <div className='course-page-title'>
                <h1>{courseDetails.subject} {courseDetails.course}</h1>
                <h2>{courseDetails.courseName}</h2>
            </div>

            <div className='course-page-rating'>
                <h3>Average Rating: {typeof averageRating === 'number' ? averageRating.toFixed(2) : 'N/A'}</h3>
            </div>

            <div className='course-page-reviews'>
                <h4>Reviews:</h4>
                {courseReviews.length > 0 ? (
                    <div>
                        {courseReviews.map(review => (
                            <div key={review._id}>
                                <p>Rating: {review.rating}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No reviews available for this course.</p>
                )}
            </div>

        </div>
    );
};

export default CoursePage;



