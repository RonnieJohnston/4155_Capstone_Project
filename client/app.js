const express = require("express")
const collection = require("./server")
const cors = require("cors")

const model = require("../api/models/UserPostsModel")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", cors(), (req, res) => {

})

app.post("/", async (req, res) => {
  const { username, password } = req.body

  try {
    const check = await collection.credentialsCollection.findOne({ username: username })

    if (check) {
      res.json("Exist")
    }
    else {
      res.json("Not exist")
    }
  }
  catch (e) {
    res.json("Fail")
  }
})

app.post("/register", async (req, res) => {
  const { username, password } = req.body
  const data =
  {
    username: username,
    password: password
  }
  try {
    const check = await collection.credentialsCollection.findOne({ username: username })

    if (check) {
      res.json("Exist")
    }
    else {
      
      res.json("Not exist")

      await collection.credentialsCollection.insertMany([data])
    }
  }
  catch (e) {
    res.json("Fail")
  }
})
/* this function made me cry ;-;
app.post("/neweview"), async (req, res, next) =>{
  console.log("!!!!!")
  const { subject, course, username, date, likes, dislikes, rating, interest, review } = req.body
  const data = {
    subject: subject,
    course: course,
    username: username,
    date: date,
    likes: likes,
    dislikes: dislikes,
    rating: rating,
    interest: interest,
    review: review
  }
  try {
    res.json("Posted")
    await collection.postsCollection.insertMany([data])
  } catch(e) {
    res.json("Fail")
  }
  /*
  let review = new model(req.body)
  review.save()
  .then((review) => {
    res.redirect('/')
  })
  .catch(err => {
    alert("Failed to save")
    next(err)
  }) */

  /*
  let review = new model(req.body)
  review.save()
  .then((review) => {
    res.redirect('/')
  })
  .catch(err => {
    alert("Failed to save")
    next(err)
  }) */

app.listen(8000, () => {
  console.log("Port connected");
})