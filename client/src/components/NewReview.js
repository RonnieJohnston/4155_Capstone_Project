import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const NewReview = () => {

    const [subject, setSubject] = useState('')
    const [course, setCourse] = useState('')
    const [rating, setRating] = useState('')
    const [interest, setInterest] = useState('')
    const [comments, setComments] = useState('')
    const history = useNavigate()

    async function submitReview(e) {
        e.preventDefault()

        try {
            await axios.post("http://localhost:8000/register", //update url
                {
                    subject, course, rating, interest, comments
                })
                .then(res => {
                    history("/")
                })
                .catch(res => {
                    alert("Wrong details")
                    console.log(e)
                })
        }
        catch (e) {
            console.log(e)
        }
    }

    return <div>
        <h2>Create a new Review</h2>
        <form onSubmit={(event)=> submitReview(event)}>
            <label for="subject">Subject: </label>
            <select id="subject" value={data.subject} onChange={(event)=> {setSubject(event.target.value)}} name="subject" required>
                <option value="itis">ITIS</option>
                <option value="itsc">ITSC</option>
            </select>
            <label for="course">Course:</label>
            <select id="course" value={data.course} onChange={(event)=> {setCourse(event)}} name="course" required>
                <option value="3135">3135</option>
                <option value="3300">3300</option>
                <option value="1100">1100</option>
                <option value="3200">3200</option>
            </select>
            <br></br>
            <label for="rating">Rate out of five stars: </label>
            <input type="number" name="rating" value={data.rating} id="rating" onChange={(event)=> {setRating(event)}} min="0" max="5" required></input>
            <br></br>
            <label for="interest">Interest from 0 to 5:</label>
            <input type="number" name="interest" value={data.interest} id="interest" onChange={(event)=> {setInterest(event)}} min="0" max="5" required></input>
            <br></br>
            <label for="comments">Enter Comments:</label>
            <br></br>
            <textarea id="comments" value={data.comments} name="comments" onChange={(event)=> {setComments(event)}} rows="10" cols="30" placeholder="Enter comments..." required minLength="10"></textarea>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form>
    </div>;
};

export default NewReview;