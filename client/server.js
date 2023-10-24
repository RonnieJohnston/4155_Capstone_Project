const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/UserData")
.then(() => {
    console.log("MongoDB connected")
})
.catch((e) => {
    console.log("Failed to connect", e)
})

const UserCredentialSchema = new mongoose.Schema
    ({
        username:
        {
            type: String,
            required: true
        },
        password:
        {
            type: String,
            required: true
        }
    })

const UserClassesSchema = new mongoose.Schema
    ({
        classes:
        {
            type: String,
            required: false
        }
    })

const UserPostsSchema = new mongoose.Schema
    ({
        username:
        {
            type: String,
            required: true
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
        review:
        {
            type: String,
            required: true
        }
    })

const credentialsCollection = new mongoose.model("credentials", UserCredentialSchema)
const classesCollection = new mongoose.model("classes", UserClassesSchema)
const postsCollection = new mongoose.model("posts", UserPostsSchema)

module.exports = {
    credentialsCollection,
    classesCollection,
    postsCollection
}