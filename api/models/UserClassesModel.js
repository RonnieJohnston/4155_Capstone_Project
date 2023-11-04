const mongoose = require('mongoose');

const UserClassesSchema = new mongoose.Schema
({
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
    courseName: {
        type: String,
        required: true,
    },
});

const UserClassesModel = mongoose.model("classes", UserClassesSchema);

module.exports = UserClassesModel;    