const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//cors allows cross-origin requests so the front and back end can run simultaneously 
const cors = require('cors');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const reviewRoutes  = require('./routes/reviewRoutes');

const UserCredentialModel = require('./models/UserCredentialModel')
const UserPostsModel = require('./models/UserPostsModel')
const UserClassesModel = require('./models/UserClassesModel')
const Review = require("./models/UserPostsModel");
const { error } = require('console');

// mongodb connection uri - capstone user group and pass
let uri = 'mongodb+srv://capstoneGroup:O75OvIunEpMljYL4@cluster0.ditslgs.' +
    'mongodb.net/UserData?retryWrites=true&w=majority'

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((e) => {
      console.log('Failed to connect', e);
    });

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/reviews', reviewRoutes);

app.get('/course/:id', async (req, res) => {

  try {
    // getting request parameter (course ID)
    const { id } = req.params;

    // Fetch the course details from the database using the provided ID
    const courseDetails = await UserClassesModel.findById(id);

    // Find reviews based on both course and subject
    const courseReviews = await UserPostsModel.find({
      course: courseDetails.course,
      subject: courseDetails.subject,
    });

    // calculate average rating
    const totalRatings = courseReviews.reduce((sum, review) => sum + review.rating, 0);
    const averageOverallRating = courseReviews.length > 0 ? totalRatings / courseReviews.length : 0;

    // Calculate average difficulty
    const totalDifficulties = courseReviews.reduce((sum, review) => sum + review.difficulty, 0);
    const averageDifficulty = courseReviews.length > 0 ? totalDifficulties / courseReviews.length : 0;

    // Calculate average interest
    const totalInterests = courseReviews.reduce((sum, review) => sum + review.interest, 0);
    const averageInterest = courseReviews.length > 0 ? totalInterests / courseReviews.length : 0;

    // Respond with the fetched course details and reviews in JSON format
    res.status(200).json({
      courseDetails,
      courseReviews,
      averageOverallRating,
      averageDifficulty,
      averageInterest
    });

  } catch (error) {
    // If an error occurs in the try block, log the error
    console.log(error.message);

    // Respond with a 500 Internal Server Error along with an error message
    res.status(500).send({ message: error.message });
  }
});

app.get('/course/:courseid/:id', async (req, res) => {
  try {
    const {id} = req.params.id;

    res.status(200).json({
      id
    });
  } catch (err) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
})

app.get('/', cors(), (req, res) => {

});

app.get('/home', async (req, res) => {
  try {
    const { subject, course, courseName } = req.body;

    const query = {};

    if (subject) query.subject = subject;
    if (course) query.course = course;
    if (courseName) query.courseName = courseName;

    const classes = await UserClassesModel.find(query);

    res.json(classes);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal server error'});
  }
});

app.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const isEmail = await UserCredentialModel.findOne({ email: email });
    const isPassword = await UserCredentialModel.findOne({ password: password });

    if (isEmail && isPassword) {
      res.json('Exist');
    } else {
      res.json('Not exist');
    }
  } catch (e) {
    res.json('Fail');
  }
});

app.post('/register', async (req, res) => {
  const { first, last, email, password } = req.body;
  const data = {
    first: first,
    last: last,
    email: email,
    password: password,
  };
  try {
    const check = await UserCredentialModel.findOne({ email: email });

    if (check) {
      res.json('Exist');
    } else {
      res.json('Not exist');

      await UserCredentialModel.insertMany([data]);
    }
  } catch (e) {
    res.json('Fail');
  }
});


app.post('/newReview', async (req, res) => {
  const { subject, course, professor, username, date, likes, dislikes, rating, interest, difficulty, review, textbook } = req.body;
  const data = {
    subject: subject,
    course: course,
    professor: professor,
    username: username,
    date: date,
    likes: likes,
    dislikes: dislikes,
    rating: rating,
    interest: interest,
    difficulty: difficulty,
    review: review,
    textbook: textbook
  };
  try{
    const check = await UserClassesModel.findOne({subject: subject, course: course});

    if (check) {
      res.json('Exist');
      await UserPostsModel.insertMany([data]);
    } else {
      res.json('Not Exist');
    }
  } catch (e) {
    res.json('Fail');
  }
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8000, () => {
  console.log('Port connected');
});
