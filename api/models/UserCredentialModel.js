const mongoose = require("mongoose");

const UserCredentialSchema = new mongoose.Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserCredentialModel = mongoose.model("credentials", UserCredentialSchema);

module.exports = UserCredentialModel;
