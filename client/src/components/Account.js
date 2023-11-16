import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Account() {
    // used to navigate 
    const navigate = useNavigate();
    //  used to indicate whether the user is in edit mode
    const [editing, setEditing] = useState(false);
    // Stores user reviews 
    const [reviews, setReviews] = useState([]);
    // Holds user data
    const [formData, setFormData] = useState({
        first: "",
        last: "",
        email: "",
    });

    useEffect(() => {
        fetchData();
    }, []);


    // Fetch User data via the email in session storage 
    const fetchData = async () => {
        try {
            const email = sessionStorage.getItem("email");
            const response = await axios.get(`http://localhost:8000/users/${email}`);
            if (response.data.email) {
                setFormData(response.data);
            } else {
                console.error("User does not exist");
            }
        } catch (error) {
            console.error("Error fetching user account data:", error);
        }
    };

    // Handle the "Edit" button click
    const handleEdit = () => {
        setEditing(true);
    };

    // Handle the "Delete" button click 
    const handleDelete = async () => {
        try {
            const email = sessionStorage.getItem("email");
            await axios.delete(`http://localhost:8000/users/${email}`);
            // After successful deletion, navigate to the logout page
            navigate("/Logout");
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    // Handle the Save "Changes" button click
    const handleSave = async () => {
        try {
            const email = sessionStorage.getItem("email");
            await axios.put(`http://localhost:8000/users/${email}`, formData);
            setEditing(false);
            fetchData(); // Refresh user data after saving changes
        } catch (error) {
            console.error("Error updating user data:", error);
        }
    };

    // Handle the "My Reviews" button click  
    const handleMyReviews = async () => {
        try {
            const email = sessionStorage.getItem("email");
            const response = await axios.get(`http://localhost:8000/newReview/${email}`);
            setReviews(response.data);
        } catch (error) {
            console.error("Error fetching user reviews:", error);
        }
    };


    // Handle input changes in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="card">
                <div className="card-header bg-dark text-white">
                    <h1 className="mb-0">Account Information</h1>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <h2 className="card-title">
                            {formData.first} {formData.last}
                        </h2>
                        {/*  input field if editing is enabled, otherwise display the first name as text */}
                        {editing ? (
                            <>
                                <label htmlFor="firstName" className="form-label">
                                    First Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="first"
                                    value={formData.first}
                                    onChange={handleInputChange}
                                />
                            </>
                        ) : (
                            <p className="card-text">First Name: {formData.first}</p>
                        )}
                    </div>
                    <div className="mb-3">
                        {editing ? (
                            <>
                                <label htmlFor="lastName" className="form-label">
                                    Last Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="last"
                                    value={formData.last}
                                    onChange={handleInputChange}
                                />
                            </>
                        ) : (
                            <p className="card-text">Last Name: {formData.last}</p>
                        )}
                    </div>
                    <div className="mb-3">
                        {editing ? (
                            <>
                                <label htmlFor="email" className="form-label">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="You cannot change email"
                                    disabled="disabled"
                                />
                            </>
                        ) : (
                            <p className="card-text">Email: {formData.email}</p>
                        )}
                    </div>
                    <div className="text-center">
                        {editing ? (
                            <button className="btn btn-success mx-2" onClick={handleSave}>
                                Save Changes
                            </button>
                        ) : (
                            <>
                                <button
                                    className="btn btn-secondary mx-2"
                                    onClick={handleMyReviews}
                                >
                                    My Reviews
                                </button>
                                <button className="btn btn-primary mx-2" onClick={handleEdit}>
                                    Edit
                                </button>
                                <button className="btn btn-danger mx-2" onClick={handleDelete}>
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                    {/* Display reviews */}
                    {reviews.length > 0 && (
                        <div className="mt-3">
                            <h3 className="mb-2">My Reviews:</h3>
                            <ul className="list-group">
                                {reviews.map((review, index) => (
                                    <li key={index} className="list-group-item">
                                        <p className="mb-0">
                                            <strong>Subject:</strong> {review.subject}<br />
                                            <strong>Course:</strong> {review.course}<br />
                                            <strong>Professor:</strong> {review.professor}<br />
                                            <strong>Likes:</strong> {review.likes}<br />
                                            <strong>Dislikes:</strong> {review.dislikes}<br />
                                            <strong>Rating:</strong> {review.rating}<br />
                                            <strong>Interest:</strong> {review.interest}<br />
                                            <strong>Difficulty:</strong> {review.difficulty}<br />
                                            <strong>Review:</strong> {review.review}<br />
                                            <strong>Textbook:</strong> {review.textbook}<br />
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Account;