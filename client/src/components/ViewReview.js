import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import '../assets/css/ViewReview.css';
//const model = require('../../../api/models/UserPostsModel');

const ViewReview = () => {
    const { id } = useParams();
    const [reviewDetails, setReviewDetails] = useState('');
    const email = sessionStorage.getItem('email');
    const history = useNavigate()
    /*const [subject, setSubject] = useState('')
    const [course, setCourse] = useState('')
    const [rating, setRating] = useState('')
    const [interest, setInterest] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [review, setReview] = useState('')
    const [professor, setProfessor] = useState('')
    const [textbook, setTextbook] = useState('')
    const [likes, setLikes] = useState('')
    const [dislikes, setDislikes] = useState('')
    const [username, setUsername] = useState('')
    const [date, setDate] = useState('')
    const [liked, setLiked] = useState('')
    const [disliked, setDisliked] = useState('')*/

    useEffect(() => {
        axios.get(`http://localhost:8000/course/review/${id}`)
          .then((response) => {
            setReviewDetails(response.data.reviewDetails);
            /*setSubject(response.data.subject);
            setCourse(response.data.course);
            setRating(response.data.rating);
            setInterest(response.data.interest);
            setDifficulty(response.data.difficulty);
            setReview(response.data.review);
            setProfessor(response.data.professor);
            setTextbook(response.data.textbook);
            setLikes(response.data.likes);
            setDislikes(response.data.dislikes);
            setUsername(response.data.username);
            setDate(response.data.date);
            setLiked(response.data.liked);
            setDisliked(response.data.disliked);*/
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
        /*if(e === 'like') {
            if(!pst.liked.find(email)) {
                likes++;
                model.findByIdAndUpdate(id, { likes: likes });
                model.updateOne(
                    { _id: id },
                    { $push: { liked: email } }
                )
            } else {
                likes--;
                model.findByIdAndUpdate(id, { likes: likes });
                model.updateOne(
                    { _id: id },
                    { $pull: { liked: email }}
                )
            }
        } else if(e === 'dislike') {
            if(!pst.disliked.find(email)) {
                dislikes++;
                model.findByIdAndUpdate(id, { dislikes: dislikes });
                model.updateOne(
                    { _id: id },
                    { $push: { disliked: email }}
                )
            } else {
                dislikes--;
                model.findByIdAndUpdate(id, { dislikes: dislikes });
                model.updateOne(
                    { _id: id },
                    { $pull: { disliked: email }}
                )
            }
        }*/
    }

    if(email !== '' || email !== null) {
        return (
            <div className="container border mt-5">
                <h3 className='review-text-title'>Review for {reviewDetails.subject} {reviewDetails.course}</h3>
                <h5 className='review-text-title'>By: {reviewDetails.username}</h5>
                <div className='review-text'>
                    <h6>Rating: {reviewDetails.rating} out of 5</h6>
                    <h6>Interest: {reviewDetails.interest} out of 5 (best)</h6>
                    <h6>Difficulty: {reviewDetails.difficulty} out of 10 (hardest)</h6>
                    <h6>Professor: {reviewDetails.professor}</h6>
                    <h6>Textbook: {reviewDetails.textbook}</h6>
                    <h6>Comments:</h6>
                    <p>{reviewDetails.review}</p>
                    <br></br>
                    <p>Posted at { reviewDetails.date }</p>
                    <br></br>
                    
                    <button  className='btn btn-outline-light btn-lg'  onClick={() => updateLikeCount('like')}>{reviewDetails.likes} likes</button>
                    <button  className='btn btn-outline-light btn-lg' onClick={() => updateLikeCount('dislike')}>{reviewDetails.dislikes} dislikes</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container border mt-5">
                <h3 className='review-text-title'>Review for {reviewDetails.subject} {reviewDetails.course}</h3>
                <h5 className='review-text-title'>By: {reviewDetails.username}</h5>
                <div className='review-text'>
                    <h6>Rating: {reviewDetails.rating} out of 5</h6>
                    <h6>Interest: {reviewDetails.interest} out of 5 (best)</h6>
                    <h6>Difficulty: {reviewDetails.difficulty} out of 10 (hardest)</h6>
                    <h6>Professor: {reviewDetails.professor}</h6>
                    <h6>Textbook: {reviewDetails.textbook}</h6>
                    <h6>Comments:</h6>
                    <p>{reviewDetails.review}</p>
                    <br></br>
                    <p>Posted at { reviewDetails.date }</p>
                </div>
            </div>
        )
    }
};

export default ViewReview;