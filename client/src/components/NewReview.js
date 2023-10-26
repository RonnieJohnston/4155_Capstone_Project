import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const NewReview = () => {

    const [coursesubject, setCourseSubject] = useState('')
    const [rating, setRating] = useState('')
    const [interest, setInterest] = useState('')
    const [review, setReview] = useState('')
    const history = useNavigate()

    async function submitReview(e) {
        e.preventDefault()

        var stuff = parseCourseSubject(coursesubject)
        var subject = stuff[0]
        var course = stuff[1]
        const username = "TESTUSER"
        const date = "2023-10-25T19:00"
        const likes = 0
        const dislikes = 0
        console.log(subject, course, username, date, likes, dislikes, rating, interest, review)

        try {
            await axios.post("http://localhost:8000/newReview",
                {
                    subject, course, username, date, likes, dislikes, rating, interest, review
                })
                .then(res => {
                    console.log("!!!")
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

    function parseCourseSubject(data) {
        const subject = data.substring(0, 3)
        const course = data.substring(4, 8)
        const arr = [subject, course]
        return arr
    }

    return <div>
        <h2>Create a new Review</h2>
        <form action="POST">
            <label for="coursesubject">Course and Subject:</label>
            <select id="coursesubject" onChange={(event)=> {setCourseSubject(event.target.value)}} name="coursesubject" required>
                <option value="itis3300">ITIS 3300</option>
                <option value="itsc1100">ITSC 1100</option>
                <option value="itsc3200">ITSC 3200</option>
                <option value="itcs4155">ITCS 4155</option>
                <option value="itis4166">ITIS 4166</option>
                <option value="itcs1212">ITCS 1212</option>
                <option value="itcs1213">ITCS 1213</option>
                <option value="itis4221">ITIS 4221</option>
                <option value="itis3135">ITIS 3135</option>
            </select>
            <br></br>
            <label for="rating">Rate out of five stars: </label>
            <input type="number" name="rating" id="rating" onChange={(event)=> {setRating(event.target.value)}} min="0" max="5" required></input>
            <br></br>
            <label for="interest">Interest from 0 to 5:</label>
            <input type="number" name="interest" id="interest" onChange={(event)=> {setInterest(event.target.value)}} min="0" max="5" required></input>
            <br></br>
            <label for="review">Enter Comments:</label>
            <br></br>
            <textarea id="review" name="review" onChange={(event)=> {setReview(event.target.value)}} rows="10" cols="30" placeholder="Enter comments..." required minLength="10"></textarea>
            <br></br>
            <input type="submit" value="Submit" onClick={submitReview}></input>
        </form>
    </div>;
};

export default NewReview;