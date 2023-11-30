import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../assets/css/App.css';

const DeleteReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [reviewExists, setReviewExists] = useState('');
  const [subject, setSubject] = useState('');
  const [course, setCourse] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:8000/reviews/${id}`)
      .then((response) => {
        setSubject(response.data.subject);
        setCourse(response.data.course);
        setReviewExists(true);
      })
      .catch((error) => {
        setReviewExists(false);
        if (!reviewExists) {
          alert("Review not found");
          navigate("/");
        } else {
          alert("An error occurred. Please check console");
          console.log(error);
        }
      });
  }, [id, reviewExists, navigate]);

  const handleDeleteReview = () => {
    axios
      .delete(`http://localhost:8000/reviews/${id}`)
      .then(() => {
        alert("Review deleted successfully");
        navigate("/account");
      })
      .catch((error) => {
          alert("An error occurred. Please check console");
          console.log(error);
      });
  };

  const handleCancel = () => {
    navigate("/account");
  };

  return (
    <div className='page'>
    <div className="container border mt-5">
      <h1 className="text-center mb-5 text-white">Delete Review?</h1>
      <div className="container">
        <h3 className="text-center mb-5 text-white">
          Are you sure you would like to delete this review for {subject} {course}? 
          This will include deleting the ratings and all likes/dislikes from other students
        </h3>
        <div className="d-grid gap-1">
          <button className="btn btn-danger btn-lg mb-4" onClick={handleDeleteReview}>
            Yes, delete it
          </button>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary btn-lg mb-4" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DeleteReview;
