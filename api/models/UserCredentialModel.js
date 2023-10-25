const mongoose = require("mongoose");

const UserCredentialSchema = new mongoose.Schema({
    username: {
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
