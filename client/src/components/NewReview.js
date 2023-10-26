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

    return (
    <div className='container-xl border mt-5'>
        <h2 className='mt-3'>Create a New Review</h2>
        <form onSubmit={(event)=> submit(event)}>
            <label for="course">Course:</label>
            <select className="form-select mb-4" id="course" value={data.course} onChange={(event)=> handle(event)} name="course" required>
                <option value="itis3135">ITIS 3135</option>
                <option value="itis3300">ITIS 3300</option>
                <option value="itsc1100">ITSC 1100</option>
                <option value="itsc3200">ITSC 3200</option>
            </select>
            <label for="rating">Rate out of five stars: </label>
            <input className="form-control mb-4" type="number" name="rating" value={data.rating} id="rating" onChange={(event)=> handle(event)} min="0" max="5" required></input>
            <label for="comments">Enter Comments:</label>
            <textarea className="form-control mb-4" id="comments" value={data.comments} name="comments" onChange={(event)=> handle(event)} rows="10" cols="30" placeholder="Enter comments..." required minLength="10"></textarea>
            <button type="submit" className="btn btn-dark mb-4">Submit</button>

        </form>
    </div>
    )
};

export default NewReview;