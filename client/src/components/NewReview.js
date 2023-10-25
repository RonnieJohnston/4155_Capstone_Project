import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const NewReview = () => {

    const url = "" //mongo url
    const [data, setData] = useState({
        subject: "",
        course: "",
        rating: "",
        interest: ""
    })

    function handle(event) {
        const newData = {...data}
        newData[event.target.id] = event.target.value
        setData(newData)
        console.log(newData)
    }

    async function submit(event) {
        event.preventDefault()
        
        try {
            await axios.post("http://localhost:8000/",
                {
                    data
                })
                .then(res => {
                    if (res.data === "Not exist") {
                        res.redirect("/")
                        console.log("success!!!")
                    }
                    else if (res.data === "Exist") {
                        alert("Error posting review")
                    }
                })
                .catch(e => {
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
        <form onSubmit={(event)=> submit(event)}>
            <label for="subject">Subject: </label>
            <select id="subject" value={data.subject} onChange={(event)=> handle(event)} name="subject" required>
                <option value="itis">ITIS</option>
                <option value="itsc">ITSC</option>
            </select>
            <label for="course">Course:</label>
            <select id="course" value={data.course} onChange={(event)=> handle(event)} name="course" required>
                <option value="3135">3135</option>
                <option value="3300">3300</option>
                <option value="1100">1100</option>
                <option value="3200">3200</option>
            </select>
            <br></br>
            <label for="rating">Rate out of five stars: </label>
            <input type="number" name="rating" value={data.rating} id="rating" onChange={(event)=> handle(event)} min="0" max="5" required></input>
            <br></br>
            <label for="interest">Interest from 0 to 5:</label>
            <input type="number" name="interest" value={data.interest} id="interest" onChange={(event)=> handle(event)} min="0" max="5" required></input>
            <br></br>
            <label for="comments">Enter Comments:</label>
            <br></br>
            <textarea id="comments" value={data.comments} name="comments" onChange={(event)=> handle(event)} rows="10" cols="30" placeholder="Enter comments..." required minLength="10"></textarea>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form>
    </div>;
};

export default NewReview;