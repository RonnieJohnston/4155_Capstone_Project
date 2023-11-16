const mongoose = require('mongoose');

//Placeholder
const reviewSchema = mongoose.Schema(
  {
    course: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
);

module.exports = mongoose.model("Review", reviewSchema);
