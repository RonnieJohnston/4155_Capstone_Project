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

    useEffect(() => {
        axios.get(`http://localhost:8000/course/${id}`)
            .then(response => {
                setCourseDetails(response.data.courseDetails);
                setCourseReviews(response.data.courseReviews);
                setAverageOverallRating(response.data.averageOverallRating);
                setAverageDifficulty(response.data.averageDifficulty);
                setAverageInterest(response.data.averageInterest)
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
                        {courseReviews.map(review => (
                            <Link to={`/course/review/${review._id}`} key={review._id} className='review-link'>
                                <div className='review'>

                                    <div className='user-info'>
                                        <h4 className='user-info-name'>Anonymous</h4>
                                        <h6 className='user-info-date'><i>Posted 3 min ago</i></h6>
                                    </div>

                                    <p>Overall Rating: {review.rating}</p>
                                    <p>Difficulty Rating: {review.difficulty}</p>
                                    <p>Interest Rating: {review.interest}</p>
                                    <p>Textbook(s): {review.textbook}</p>
                                    <p>Professor: {review.professor}</p>
                                    <p>Comments: {review.review}</p>

                                </div>
                            </Link>
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



