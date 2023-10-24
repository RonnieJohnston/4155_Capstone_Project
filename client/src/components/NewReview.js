import React, { useState } from 'react';

const NewReview = () => {

    const url = "" //mongo url
    const [data, setData] = useState({
        course: "",
        rating: "",
        comments: ""
    })

    function handle(event) {
        const newData = {...data}
        newData[event.target.id] = event.target.value
        setData(newData)
        console.log(newData)
    }

    function submit(event) {
        event.preventDefault()
        // need mongodb information to post form submission
    }

    return <div>
        <h2>Create a new Review</h2>
        <form onSubmit={(event)=> submit(event)}>
            <label for="course">Course:</label>
            <select id="course" value={data.course} onChange={(event)=> handle(event)} name="course" required>
                <option value="itis3135">ITIS 3135</option>
                <option value="itis3300">ITIS 3300</option>
                <option value="itsc1100">ITSC 1100</option>
                <option value="itsc3200">ITSC 3200</option>
            </select>
            <br></br>
            <label for="rating">Rate out of five stars: </label>
            <input type="number" name="rating" value={data.rating} id="rating" onChange={(event)=> handle(event)} min="0" max="5" required></input>
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