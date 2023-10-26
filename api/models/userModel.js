const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    createdAt: Date,
    
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;