import React from 'react';

const NewReview = () => {
    return <div>
        <h2>Create a new Review</h2>
        <form action="#">
            <select id="class" name="class" required>
                <option value="itis3135">ITIS 3135</option>
                <option value="itis3300">ITIS 3300</option>
                <option value="itsc1100">ITSC 1100</option>
                <option value="itsc3200">ITSC 3200</option>
            </select>
            <textarea id="comments" name="comments" rows="10" cols="30" placeholder="Enter comments..." required></textarea>
            <input type="submit" value="Submit"></input>
        </form>
    </div>;
};

export default NewReview;