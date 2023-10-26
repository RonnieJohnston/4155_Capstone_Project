import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const cors = require("cors");

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
        var username = "TESTUSER"
        var date = "2023-10-25T19:00"
        var likes = 0
        var dislikes = 0

        try {
            console.log(subject, course, username, date, likes, dislikes, rating, interest, review)
            await axios.post("http://localhost:8000/newReview",
                {
                    subject, course, username, date, likes, dislikes, rating, interest, review
                })
                .then(history('/'))
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


    return <div className='container-xl border mt-5'>
        <h2>Create a new Review</h2>
        <form action="POST" className='row g-2'>
            <label for="coursesubject" className='form-label'>Course and Subject:</label>
            <select id="coursesubject" className='form-select' onChange={(event)=> {setCourseSubject(event.target.value)}} name="coursesubject" required>
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
            <div className='col'>
            <label for="rating" className='form-label'>Rate out of five stars: </label>
            <input type="number" name="rating" id="rating" className='form-control' onChange={(event)=> {setRating(event.target.value)}} min="0" max="5" required></input>

            </div>
            <div className='col'>
            <label for="interest" className='form-label'>Interest from 0 to 5:</label>
            <input type="number" name="interest" id="interest" className='form-control' onChange={(event)=> {setInterest(event.target.value)}} min="0" max="5" required></input>
            </div>

            <label for="review" className='form-label'>Enter Comments:</label>
            <br></br>
            <textarea id="review" name="review" className='form-control' onChange={(event)=> {setReview(event.target.value)}} rows="10" cols="30" placeholder="Enter comments..." required minLength="10"></textarea>
            <br></br>
            <div className='col-auto'>
            <button type="submit" value="Submit" className="btn btn-dark mb-3" onClick={submitReview}>Submit</button>
            </div>
        </form>
    </div>
};

export default NewReview;