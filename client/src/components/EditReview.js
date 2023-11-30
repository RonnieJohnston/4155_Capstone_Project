import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../assets/css/App.css';


const EditReview = () => {
    const [subject, setSubject] = useState('')
    const [course, setCourse] = useState('')
    const [rating, setRating] = useState('')
    const [interest, setInterest] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [review, setReview] = useState('')
    const [professor, setProfessor] = useState('')
    const [textbook, setTextbook] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/reviews/${id}`)
      .then((response) => {
        setSubject(response.data.subject);
        setCourse(response.data.course);
        setRating(response.data.rating);
        setInterest(response.data.interest);
        setDifficulty(response.data.difficulty);
        setReview(response.data.review);
        setProfessor(response.data.professor);
        setTextbook(response.data.textbook);
      })
       .catch((error) => {
        if (error.response && error.response.status === 404) {
          alert("Review not found");
          navigate("/");
        } else {
          alert("An error occurred. Please check console");
          console.log(error);
        }
       });
  }, [id, navigate]);

  const handleEditReview = () => {
    const data = {
      subject,
      course,
      rating,
      interest,
      difficulty,
      review,
      professor,
      textbook,
    };
    axios
      .put(`http://localhost:8000/reviews/${id}`, data)
      .then(() => {
        alert("Review edited successfully");
        navigate("/account");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='page'>
    <div className="container border mt-5">
      <h1 className="text-white">Editing review for {subject} {course}</h1>
      <div>
        <div>
          <label className="text-white mb-2">Rating from 0 to 5</label>
          <input
          className="form-control"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0" max="5"
          />
        </div>
        <div>
          <label className="text-white mb-2">Interest from 0 to 5</label>
          <input
            className="form-control"
            type="number"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            min="0" max="5"
          />
        </div>
        <div>
          <label className="text-white mb-2">Difficulty from 0 (Easy) to 10 (Hard)</label>
          <input
            className="form-control"
            type="number"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            min="0" max="10"
          />
        </div>
        <div>
          <label className="text-white mb-2">Professor</label>
          <input
            className="form-control"
            type="text"
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
          />
        </div>
        <div>
          <label className="text-white mb-2">Textbook(s)</label>
          <input
            className="form-control"
            type="text"
            value={textbook}
            onChange={(e) => setTextbook(e.target.value)}
          />
        </div>
        <div>
          <label className="text-white mb-2">Review</label>
          <textarea
          className="form-control mb-3"
            type="number"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <button className="btn btn-dark btn-outline-light mb-4" onClick={handleEditReview}>
          Save
        </button>
      </div>
    </div>
    </div>
  );
};

export default EditReview;
