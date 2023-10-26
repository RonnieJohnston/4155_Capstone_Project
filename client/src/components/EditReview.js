import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const EditReview = () => {
  const [course, setCourse] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/reviews/${id}`)
      .then((response) => {
        setRating(response.data.rating);
        setComment(response.data.comment);
        setCourse(response.data.course);
      })
      .catch((error) => {
        alert("An error occurred. Please check console");
        console.log(error);
      });
  }, []);

  const handleEditReview = () => {
    const data = {
      course,
      rating,
      comment,
    };
    axios
      .put(`http://localhost:3000/reviews/${id}`, data)
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
      <h1>Edit Review</h1>
      <div>
        <div>
          <label>Course</label>
          <input
            className="form-control"
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label">Rating</label>
          <input
          className="form-control"
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label">Comment</label>
          <textarea
          className="form-control mb-4"
            type="number"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button className="btn btn-dark mb-4" onClick={handleEditReview}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditReview;
