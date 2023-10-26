import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const Account = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch the list of users from the server when the component mounts
        axios.get("/api/users")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, []);


    return (
        <div className="Account">
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <div className="text-center">
                            {users.map((user) => (
                                <div key={user._id}>
                                    <figure className="avatar avatar-lg">
                                        <img
                                            className="rounded-circle img-fluid"
                                            src={user.profileImage} // Replace with the actual property name
                                            alt="User Profile"
                                        />
                                    </figure>
                                    <h2 className="mt-3">{user.name}</h2>
                                </div>
                            ))}
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <h4>Email Address</h4>
                                {users.map((user) => (
                                    <p key={user._id}>{user.email}</p>
                                ))}
                            </div>
                            <div className="col-md-6">
                                <h4>Member Since</h4>
                                {users.map((user) => (
                                    <p key={user._id}>{user.createdAt}</p>
                                ))}
                                <h4>Course Reviews</h4>
                                {users.map((user) => (
                                    <p key={user._id}>{user.courseReviews}</p>
                                ))}
                                <h4>Review Interactions</h4>
                                {users.map((user) => (
                                    <p key={user._id}>{user.reviewInteractions}</p>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4">
                            <Link to="/my-reviews" className="btn btn-primary mr-2">
                                View My Reviews
                            </Link>
                            <button className="btn btn-primary mr-2">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Account;