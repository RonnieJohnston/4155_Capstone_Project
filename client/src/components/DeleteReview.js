import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    axios
      .delete(`http://localhost:3000/reviews/${id}`)
      .then(() => {
        alert("Review deleted successfully");
        navigate("/");
      })
      .catch((error) => {
        alert("An error occurred. Please check console");
        console.log(error);
      });
  };

  return (
    <div className="container border mt-5">
      <h1 className="text-center mb-5">Delete Review</h1>
      <div className="container">
        <h3 className="text-center mb-5">
          Are you sure you want to delete this review?
        </h3>
        <div className="d-grid gap-2">
          <button className="btn btn-danger btn-lg mb-4" onClick={handleDeleteBook}>
            Yes, delete it
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
