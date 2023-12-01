import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../assets/css/CoursePage.css';

const CoursePage = () => {

    const { id } = useParams();
    const [courseDetails, setCourseDetails] = useState({});
    const [courseReviews, setCourseReviews] = useState([]);
    const [averageOverallRating, setAverageOverallRating] = useState(0);
    const [averageDifficulty, setAverageDifficulty] = useState(0);
    const [averageInterest, setAverageInterest] = useState(0);

    const calculateTimeDifference = (postDate) => {
        const currentDate = new Date();
        const postDateObj = new Date(postDate);
        const timeDifference = currentDate - postDateObj;

        // Calculate time in minutes, hours, days, etc.
        const minutes = Math.floor(timeDifference / (1000 * 60));
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (minutes < 60) {
            return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        } else if (hours < 24) {
            return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else {
            return `${days} day${days !== 1 ? 's' : ''} ago`;
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/course/${id}`)
            .then(response => {
                setCourseDetails(response.data.courseDetails);
                setCourseReviews(response.data.courseReviews);
                setAverageOverallRating(response.data.averageOverallRating);
                setAverageDifficulty(response.data.averageDifficulty);
                setAverageInterest(response.data.averageInterest);
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

            <hr/>

            <div className='course-page-rating'>
                <h4>Average Overall Rating: {typeof averageOverallRating === 'number' ? averageOverallRating.toFixed(2) : 'N/A'}</h4>
                <h4>Average Difficulty Rating: {typeof averageDifficulty === 'number' ? averageDifficulty.toFixed(2) : 'N/A'}</h4>
                <h4>Average Interest Rating: {typeof averageInterest === 'number' ? averageInterest.toFixed(2) : 'N/A'}</h4>
            </div>

            <div className='course-page-reviews'>
                <h4>Reviews:</h4>
                {courseReviews.length > 0 ? (
                    <div>
                        {courseReviews
                            .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort reviews by creation date, newest first
                            .map(review => (
                                <Link to={`/course/review/${review._id}`} key={review._id} className='review-link'>
                                    <div className='review'>
                                        <div className='user-info'>
                                            <h4 className='user-info-name'>{review.first}</h4>
                                            <h6 className='user-info-date'><i>Posted {calculateTimeDifference(review.date)}</i></h6>
                                        </div>

                                        <p>Overall Rating: {review.rating}</p>
                                        <p>Difficulty Rating: {review.difficulty}</p>
                                        <p>Interest Rating: {review.interest}</p>
                                        <p>Textbook(s): {review.textbook}</p>
                                        <p>Professor: {review.professor}</p>
                                        <p>Comments: {review.review}</p>

                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                ) : (
                    <p>No reviews available for this course.</p>
                )}
            </div>

        </div>
    );
};

export default CoursePage;



