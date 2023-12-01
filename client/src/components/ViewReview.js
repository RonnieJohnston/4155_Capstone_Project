import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import '../assets/css/ViewReview.css';
import {getFormattedDate} from "../utils/FormatDate";

const ViewReview = () => {
    const { id } = useParams();
    const [reviewDetails, setReviewDetails] = useState('');
    const email = sessionStorage.getItem('email');
    const history = useNavigate()

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
        axios.get(`http://localhost:8000/course/review/${id}`)
          .then((response) => {
            setReviewDetails(response.data.reviewDetails);
          })
          .catch((err) => {
            alert("Error fetching review data.");
            console.log(err);
          });
    }, []);

    async function updateLikeCount(e) {

        var likes = reviewDetails.likes;
        var dislikes = reviewDetails.dislikes;
        var liked = reviewDetails.liked;
        var disliked = reviewDetails.disliked;
        var state = '';

        if(e === 'like') {
            state = 'like';
        } else if (e === 'dislike') {
            state = 'dislike';
        }
            try {
                await axios.post(`http://localhost:8000/course/review/${id}`, {
                    likes, dislikes, liked, disliked, state, email
                })
                .then(res => {
                    if(res.data == 'Successfully added like' || 'Successfully removed like' || 'Successfully added dislike' || 'Successfully removed dislike') {
                        window.location.reload(false);
                        alert(res.data);
                    } else {
                        alert(res.data);
                    }
                })
                .catch(err => {
                    alert("Wrong Details");
                    console.log(err);
                })
            } catch (e) {
                console.log(e);
            }
    }

    if(email !== '' || email !== null) {
        return (
            <div className="review-container">
                <h3 className='review-text-title'>Review for {reviewDetails.subject} {reviewDetails.course}</h3>
                <div className='review-posted-by'>
                    <h5 className='review-text-title'>Posted by {reviewDetails.first}</h5>
                    <p><i>{calculateTimeDifference(reviewDetails.date)}</i></p>
                </div>

                <hr/>

                <div className='review-text'>
                    <div className='review-info'>
                        <h6>Rating: </h6>
                        <p>{reviewDetails.rating} out of 5 (best)</p>
                    </div>

                    <div className='review-info'>
                        <h6>Interest: </h6>
                        <p>{reviewDetails.interest} out of 5 (best)</p>
                    </div>

                    <div className='review-info'>
                        <h6>Difficulty: </h6>
                        <p>{reviewDetails.difficulty} out of 10 (hardest)</p>
                    </div>

                    <div className='review-info'>
                        <h6>Professor: </h6>
                        <p>{reviewDetails.professor}</p>
                    </div>

                    <div className='review-info'>
                        <h6>Textbook: </h6>
                        <p>{reviewDetails.textbook}</p>
                    </div>

                    <div className='review-info'>
                        <h6>Comments: </h6>
                        <p>{reviewDetails.review}</p>
                    </div>

                    <br></br>

                    <button  className='btn btn-outline-light btn-sm'  onClick={() => updateLikeCount('like')}>{reviewDetails.likes} likes</button>
                    <button  className='btn btn-outline-light btn-sm' onClick={() => updateLikeCount('dislike')}>{reviewDetails.dislikes} dislikes</button>
                </div>

            </div>
        )
    } else {
        return (
            <div className="review-container">
                <h3 className='review-text-title'>Review for {reviewDetails.subject} {reviewDetails.course}</h3>
                <h5 className='review-text-title'>Posted by {reviewDetails.first} <i>{calculateTimeDifference(reviewDetails.date)}</i></h5>

                <hr/>

                <div className='review-text'>
                    <div className='review-info'>
                        <h6>Rating: </h6>
                        <p>{reviewDetails.rating} out of 5 (best)</p>
                    </div>

                    <div className='review-info'>
                        <h6>Interest: </h6>
                        <p>{reviewDetails.interest} out of 5 (best)</p>
                    </div>

                    <div className='review-info'>
                        <h6>Difficulty: </h6>
                        <p>{reviewDetails.difficulty} out of 10 (hardest)</p>
                    </div>

                    <div className='review-info'>
                        <h6>Professor: </h6>
                        <p>{reviewDetails.professor}</p>
                    </div>

                    <div className='review-info'>
                        <h6>Textbook: </h6>
                        <p>{reviewDetails.textbook}</p>
                    </div>

                    <div className='review-info'>
                        <h6>Comments: </h6>
                        <p>{reviewDetails.review}</p>
                    </div>

                </div>

            </div>
        )
    }
};

export default ViewReview;