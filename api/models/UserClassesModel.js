const mongoose = require('mongoose');

const UserClassesSchema = new mongoose.Schema
({
    crnNumber:
    {
        type: String,
        required: true,
    },
    subject:
    {
        type: String,
        require: true,
    },
    course:
    {
        type: String,
        require: true,
    },
    rating:
    {
        type: String,
        require: true,
    },
    interest:
    {
        type: String,
        require: true,
    },
    usefulness:
    {
        type: String,
        require: true,
    },
});

const UserClassesModel = mongoose.model("classes", UserClassesSchema);

module.exports = UserClassesModel;    