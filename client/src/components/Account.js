import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../assets/css/App.css';

const Account = () => {
    const username = sessionStorage.getItem('username');

    return (
        <div className="page">
            <div className="Account container-xl border mt-5 p-4">
                <h1 className="text-left">Account Information</h1>
                <div className="container-xl border p-4">
                    <div className="text-center">
                        <figure className="avatar avatar-lg">
                            <div className="avatar-placeholder bg-white rounded-circle">
                                
                            </div>
                        </figure>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                            </div>
                            <div className="col-sm-5">
                                <h4 className="mt-3">User Name</h4>
                                {username ? (
                                    <p>{username}</p>
                                ) : (
                                    <p>Loading...</p>
                                )}
                                <h4>Member Since</h4>
                                <p>Loading...</p>
                                <h4>Course Reviews</h4>
                                <p>Loading...</p>
                                <h4>Review Interactions</h4>
                                <p>Loading...</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between mt-3 p-3">
                    <div>
                        <Link to="/my-reviews" className="btn btn-dark btn-lg">
                            View My Reviews
                        </Link>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-dark btn-lg me-2" type="button">Edit</button>
                        <button className="btn btn-dark btn-lg" type="button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;