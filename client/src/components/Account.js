import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import '../assets/css/Account.css';

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
        handleMyReviews()
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
            sessionStorage.removeItem("email");
            // After successful deletion, navigate to the logout page
            navigate("/");
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
        <div className='page'>
        <div className="container mt-5 mb-5">
                <div className="card-header bg-dark text-white">
                    <h1 className='mb-0'>
                        <b>{formData.first}'s profile</b>
                    </h1>
                    <br/>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        {/*  input field if editing is enabled, otherwise display the first name as text */}
                        {editing ? (
                            <>
                                <label htmlFor="firstName" className="form-label">
                                    <b>First Name:</b>
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
                            <p className="card-text"><b>First Name:</b> {formData.first}</p>
                        )}
                    </div>
                    <div className="mb-3">
                        {editing ? (
                            <>
                                <label htmlFor="lastName" className="form-label">
                                    <b>Last Name:</b>
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
                            <p className="card-text"><b>Last Name:</b> {formData.last}</p>
                        )}
                    </div>
                    <div className="mb-3">
                        {editing && (
                            <>
                                <label htmlFor="email" className="form-label">
                                    <b>Email:</b>
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
                        )}
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        {!editing && (
                            <p className="card-text"><b>Email:</b> {formData.email}</p>
                        )}
                        {!editing && (
                            <div className='text-end'>
                                <button className="btn btn-outline-light btn-sm me-2" onClick={handleEdit}>
                                    Edit
                                </button>
                                <button className="btn btn-outline-secondary btn-sm" onClick={handleDelete}>
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                    {editing && (
                        <div className='text-center'>
                            <button className=" btn btn-outline-success" onClick={handleSave}>
                                Save Changes
                            </button>
                        </div>
                    )}
                    <br/>
                    <hr/>
                    <br/>
                    {/* Display reviews */}
                    {reviews.length > 0 && (
                        <div className="mt-3">
                            <h3 className="mb-2">My Reviews:</h3>
                                {reviews.map((review, index) => (
                                    <div className='review-list'>
                                    <li key={index} className="list-group-item">
                                            <div className="d-flex justify-content-end">
                                                <Link to={`/reviews/edit/${review._id}`}>
                                                    <AiOutlineEdit className="fs-4 text-primary" />
                                                </Link>
                                                <Link to={`/reviews/delete/${review._id}`}>
                                                    <MdOutlineDelete className="fs-4 text-danger" />
                                                </Link>
                                            </div>
                                        <div className='review-content'>
                                            <b>Subject:</b> {review.subject}<br />
                                            <b>Course:</b> {review.course}<br />
                                            <b>Professor:</b> {review.professor}<br />
                                            <b>Likes:</b> {review.likes}<br />
                                            <b>Dislikes:</b> {review.dislikes}<br />
                                            <b>Rating:</b> {review.rating}<br />
                                            <b>Interest:</b> {review.interest}<br />
                                            <b>Difficulty:</b> {review.difficulty}<br />
                                            <b>Review:</b> {review.review}<br />
                                            <b>Textbook:</b> {review.textbook}<br />
                                        </div>
                                    </li>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
        </div>
        </div>
    );
}

export default Account;
