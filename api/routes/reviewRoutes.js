var express = require('express');
const Review = require('../models/reviewModel');

const router = express.Router();

//Route to update a review      
router.put("/:id", async (request, response) => {
        try {
          if (
            !request.body.course ||
            !request.body.rating ||
            !request.body.comment
          ) {
            return response.status(400).send({
              message: "Send all required fields: course, rating, comment",
            });
          }
      
          const { id } = request.params;
      
          const result = await Review.findByIdAndUpdate(id, request.body);
      
          if (!result) {
            return response.status(404).json({ message: "Review not found" });
          }
      
          return response.status(200).send({ message: "Review updated successfully" });
        } catch (error) {
          console.log(error.message);
          response.status(500).send({ message: error.message });
        }
      });
//Route to delete a review
router.delete("/:id", async (request, response) => {
        try {
          const { id } = request.params;
      
          const result = await Review.findByIdAndDelete(id);
      
          if (!result) {
            return response.status(404).json({ message: "Review not found" });
          }
          return response.status(200).send({ message: "Review has been deleted" });
        } catch (error) {
          console.log(error.message);
          response.status(500).send({ message: error.message });
        }
      });
      
    

module.exports = router;

