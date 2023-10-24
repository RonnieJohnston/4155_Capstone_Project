const express = require("express")
const collection = require("./mango")
const cors = require("cors")

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

app.listen(8000, () => {
  console.log("Port connected");
})