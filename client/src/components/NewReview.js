import React, { useState } from 'react';

const NewReview = () => {

    var [course, setCourse] = useState('')
    var [comments, setComments] = useState('')

    const commentsUpdate = (event) => {
        setComments(event.target.value)
    }

    const handleSubmit = () => {
        const postURL = "" //mongo url here
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                course: course,
                comments: comments
            })
        })
        .then(() =>{
            console.log(course);
            console.log(comments);
        })
    }

    return <div>
        <h2>Create a new Review</h2>
        <form onSubmit={handleSubmit}>
            <label for="course">Course:</label>
            <select id="course" name="course" required>
                <option value="itis3135">ITIS 3135</option>
                <option value="itis3300">ITIS 3300</option>
                <option value="itsc1100">ITSC 1100</option>
                <option value="itsc3200">ITSC 3200</option>
            </select>
            <label for="comments">Enter Comments:</label>
            <textarea id="comments" name="comments" onChange={commentsUpdate} rows="10" cols="30" placeholder="Enter comments..." required minLength="10"></textarea>
            <input type="submit" value="Submit"></input>
        </form>
    </div>;
};

export default NewReview;