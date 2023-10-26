import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const NewReview = () => {

    const [coursesubject, setCourseSubject] = useState('')
    const [rating, setRating] = useState('')
    const [interest, setInterest] = useState('')
    const [comments, setComments] = useState('')
    const history = useNavigate()

    async function submitReview(e) {
        e.preventDefault()

        var stuff = parseCourseSubject(coursesubject)
        var subject = stuff[0]
        var course = stuff[1]
        console.log(subject, course, rating, interest, comments)

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

    function parseCourseSubject(data) {
        const subject = data.substring(0, 3)
        const course = data.substring(4, 8)
        const arr = [subject, course]
        return arr
    }

    return <div>
        <h2>Create a new Review</h2>
        <form onSubmit={(event)=> submitReview(event)}>
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
            <label for="comments">Enter Comments:</label>
            <br></br>
            <textarea id="comments" name="comments" onChange={(event)=> {setComments(event.target.value)}} rows="10" cols="30" placeholder="Enter comments..." required minLength="10"></textarea>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form>
    </div>;
};

export default NewReview;