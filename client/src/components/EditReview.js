import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const EditReview = () => {
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
        setRating(response.data.rating);
        setInterest(response.data.interest);
        setDifficulty(response.data.difficulty);
        setReview(response.data.review);
        setProfessor(response.data.professor);
        setTextbook(response.data.textbook);
      })
      .catch((error) => {
        alert("An error occurred. Please check console");
        console.log(error);
      });
  }, []);

  const handleEditReview = () => {
    const data = {
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
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container border mt-5">
      <h1 className="text-white">Edit Review</h1>
      <div>
        <div>
          <label className="text-white mb-2">Rating</label>
          <input
          className="form-control"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0" max="5"
          />
        </div>
        <div>
          <label className="text-white mb-2">Interest</label>
          <input
            className="form-control"
            type="number"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            min="0" max="5"
          />
        </div>
        <div>
          <label className="text-white mb-2">Difficulty</label>
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
          <label className="text-white mb-2">Textbook</label>
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
  );
};

export default EditReview;
