const mongoose = require('mongoose');

const UserPostsSchema = new mongoose.Schema
    ({
        subject:
        {
            type: String,
            required: true,
            ref: 'UserClassesSchema'
        },
        course:
        {
            type: String,
            required: true,
            ref: 'UserClassesSchema',
        },
        professor:
        {
            type: String,
            required: true,
        },
        email:
        {
            type: String,
            required: true,
            ref: 'UserCredentialSchema'
        },
        first:
        {
            type: String,
            required: true,
        },
        date:
        {
            type: String,
            required: true
        },
        likes:
        {
            type: Number,
            required: true
        },
        dislikes:
        {
            type: Number,
            required: true
        },
        rating:
        {
            type: Number,
            required: true
        },
        interest:
        {
            type: Number,
            required: true
        },
        difficulty:
        {
            type: Number,
            required: true
        },
        review:
        {
            type: String,
            required: true
        },
        textbook:
        {
            type: String,
            required: true
        },
        liked:
        {
            type: Array
        },
        disliked:
        {
            type: Array
        },
        isAnonymous: {
            type: Boolean,
            required: true,
        },
    });

const UserPostsModel = mongoose.model("posts", UserPostsSchema);

module.exports = UserPostsModel;  