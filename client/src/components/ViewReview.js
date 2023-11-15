import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { post } from '../../../api/routes';
const model = require('../../../api/models/UserPostsModel');
const cors = require("cors");

const email = sessionStorage.getItem('email');

const viewReview = () => {
    const { id } = useParams();
    const [subject, setSubject] = useState('')
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
    const [disliked, setDisliked] = useState('')
    const history = useNavigate()

    useEffect(() => {
        axios
          .get(`http://localhost:3000/posts/${id}`)
          .then((response) => {
            setSubject(response.data.subject);
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
            setDisliked(response.data.disliked);
          })
          .catch((err) => {
            alert("Error fetching review data.");
            console.log(err);
          });
    }, []);

    const updateLikeCount = (e) => {
        const pst = model.findById(id);
        if(e === 'like') {
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
        }
    }

    if(email !== '' || email !== null) {
        return (
            <div className="container border mt-5">
                <h1>Review for {subject} {course}</h1>
                <h2>By: {username}</h2>
                <div>
                    <h3>Rating: {rating} out of 5</h3>
                    <h3>Interest: {interest} out of 5 (best)</h3>
                    <h3>Difficulty: {difficulty} out of 10 (hardest)</h3>
                    <h3>Professor: {professor}</h3>
                    <h3>Textbook: {textbook}</h3>
                    <h3>Comments:</h3>
                    <p>{review}</p>
                    <br></br>
                    <p>Posted at { date }</p>
                    <br></br>
                    
                    <button onClick={() => updateLikeCount('like')}>{likes} likes</button>
                    <button onClick={() => updateLIkeCount('dislike')}>{dislikes} dislikes</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container border mt-5">
                <h1>Review for {subject} {course}</h1>
                <h2>By: {username}</h2>
                <div>
                    <h3>Rating: {rating} out of 5</h3>
                    <h3>Interest: {interest} out of 5 (best)</h3>
                    <h3>Difficulty: {difficulty} out of 10 (hardest)</h3>
                    <h3>Professor: {professor}</h3>
                    <h3>Textbook: {textbook}</h3>
                    <h3>Comments:</h3>
                    <p>{review}</p>
                    <br></br>
                    <p>Posted at { date }</p>
                </div>
            </div>
        )
    }
}