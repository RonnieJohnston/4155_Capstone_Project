import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const cors = require("cors");

const NewReview = () => {
    const [subject, setSubject] = useState('')
    const [course, setCourse] = useState('')
    const [rating, setRating] = useState('')
    const [interest, setInterest] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [review, setReview] = useState('')
    const [professor, setProfessor] = useState('')
    const [textbook, setTextbook] = useState('')
    const history = useNavigate()

    async function submitReview(e) {
        e.preventDefault()

        var first = ''
        const email = sessionStorage.getItem("email");
        const response = await axios.get(`http://localhost:8000/users/${email}`);
        if (response.data.email) {
            first = response.data.first;
        } else {
            console.error("User does not exist");
        }

        var date = new Date()
        var likes = 0
        var dislikes = 0

        try {
            await axios.post("http://localhost:8000/newReview",
                {
                    subject, course, professor, email, first, date, likes, dislikes, rating, interest, difficulty, review, textbook
                })
                .then( res=> {
                    if(res.data == 'Exist') {
                        alert('Review for ' + subject + " " + course + " posted!", );
                        history('/home');
                    } else if(res.data == 'Not Exist') {
                        alert('Error: ' + subject + ' ' + course +' does not exist.');
                        history('/newReview');
                    }
                })
                .catch(res => {
                    // need to fix this alert("Wrong details")
                    console.log(e)
                })
        }
        catch (e) {
            console.log(e)
        }
    }

    return <body className='page'><div className='table-container container-sm border mt-5'>
        <h2>Create a new Review</h2>
        <form action="POST" className='row g-3'>
            <div className='col-md-4'>
                <label for="subject" >Subject: </label>
                <input type="text" name="subject" id="subject" onChange={(event)=> {setSubject(event.target.value)}} className="form-control" required></input>
            </div>

            <div className='col-md-8'>
                <label for="course" className="form-label">Course: </label>
                <input type="text" name="course" id="course" onChange={(event)=> (setCourse(event.target.value))} className="form-control" required></input>
            </div>

            <div className='col-md-12'>
                <label for="professor" className='form-label'>Professor Name:</label>
                <input type="text" name="professor" id="professor" className='form-control' onChange={(event)=> {setProfessor(event.target.value)}} required></input>
            </div>

            <div className='col-md-4'>
                <label for="rating" className='form-label'>Rate out of five stars: </label>
                <input type="number" name="rating" id="rating" className='form-control' onChange={(event)=> {setRating(event.target.value)}} min="0" max="5" required></input>
            </div>

            <div className='col-md-4'>
                <label for="interest" className='form-label'>Interest from 0 to 5:</label>
                <input type="number" name="interest" id="interest" className='form-control' onChange={(event)=> {setInterest(event.target.value)}} min="0" max="5" required></input>
            </div>

            <div className='col-md-4'>
                <label for="difficulty" className='form-label'>Difficulty from 0 (Easy) to 10 (Hard)</label>
                <input type="number" name="difficulty" id="difficulty" className='form-control' onChange={(event)=> {setDifficulty(event.target.value)}} min="0" max="10" required></input>
            </div>

            <div className='col-md-12'>
                <label htmlFor="texbook" className='form-label'>Textbook(s):</label>
                <textarea id="textbook" name="textbook" className='form-control' onChange={(event) => {
                    setTextbook(event.target.value)
                }} rows="5" cols="30" placeholder="Textbook(s)..." required></textarea>
            </div>

            <div className='col-md-12'>
                <label for="review" className='form-label'>Enter Comments:</label>
                <textarea id="review" name="review" className='form-control' onChange={(event)=> {setReview(event.target.value)}} rows="10" cols="30" placeholder="Enter comments..." required minLength="10"></textarea>
            </div>

            <div className='col-md-2'>
                <input type="submit" className='btn btn-outline-light btn-lg' value="Submit" onClick={submitReview}></input>
            </div>
        </form>
    </div></body>
};

export default NewReview;