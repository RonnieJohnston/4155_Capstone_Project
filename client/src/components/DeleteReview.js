import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
    <div className="container mt-5">
      <h3 className="text-center mb-5 text-white">Delete Review?</h3>
      <div className="container">
        <h5 className="text-center mb-5 text-white">
          Are you sure you would like to delete this review for {subject} {course}? 
          This will include deleting the ratings and all likes/dislikes from other students
        </h5>
        <div className='text-center'>
          <button className="btn btn-outline-danger me-2" onClick={handleDeleteReview}>
            Yes, delete it
          </button>
          <button className="btn btn-outline-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DeleteReview;
