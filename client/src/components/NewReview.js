import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const cors = require("cors");

const NewReview = () => {

    const [coursesubject, setCourseSubject] = useState('')
    const [rating, setRating] = useState('')
    const [interest, setInterest] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [review, setReview] = useState('')
    const [professor, setProfessor] = useState('')
    const [textbook, setTextbook] = useState('')
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
            console.log(subject, course, professor, username, date, likes, dislikes, rating, interest, difficulty, review, textbook)
            await axios.post("http://localhost:8000/newReview",
                {
                    subject, course, professor, username, date, likes, dislikes, rating, interest, difficulty, review, textbook
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


    return <body className='page'><div className='container-xl border mt-5'>
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
            <br></br>
            <div className='col'>
            <label for="professor" className='form-label'>Professor Name:</label>
            <input type="text" name="professor" id="professor" className='form-control' onChange={(event)=> {setProfessor(event.target.value)}} required></input>
            </div>
            <br></br>   
            <div className='col'>
            <label for="rating" className='form-label'>Rate out of five stars: </label>
            <input type="number" name="rating" id="rating" className='form-control' onChange={(event)=> {setRating(event.target.value)}} min="0" max="5" required></input>
            </div>
            <br></br>
            <div className='col'>
            <label for="interest" className='form-label'>Interest from 0 to 5:</label>
            <input type="number" name="interest" id="interest" className='form-control' onChange={(event)=> {setInterest(event.target.value)}} min="0" max="5" required></input>
            </div>
            <br></br>
            <div className='col'>
            <label for="difficulty" className='form-label'>Difficulty from 0 (Easy) to 10 (Hard)</label>
            <input type="number" name="difficulty" id="difficulty" className='form-control' onChange={(event)=> {setDifficulty(event.target.value)}} min="0" max="10" required></input>
            </div>
            <br></br>
            <div className='col'>
            <label for="review" className='form-label'>Enter Comments:</label>
            <textarea id="review" name="review" className='form-control' onChange={(event)=> {setReview(event.target.value)}} rows="10" cols="30" placeholder="Enter comments..." required minLength="10"></textarea>
            </div>
            <br></br>
            <div className='col'>
            <label for="texbook" className='form-label'>Textbook(s):</label>
            <textarea id="textbook" name="textbook" className='form-control' onChange={(event) => {setTextbook(event.target.value)}} rows="5" cols="30" placeholder="Textbook(s)..." required></textarea>
            </div>
            <div className='col-auto'>
            <input type="submit" value="Submit" onClick={submitReview}></input>
            </div>
        </form>
    </div></body>
};

export default NewReview;