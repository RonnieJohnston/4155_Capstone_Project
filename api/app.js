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

mongoose.connect('mongodb://127.0.0.1:27017/UserData', { useNewUrlParser: true, useUnifiedTopology: true })
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

app.get('/', cors(), (req, res) => {

});

app.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    const check = await UserCredentialModel.findOne({ username: username });

    if (check) {
      res.json('Exist');
    } else {
      res.json('Not exist');
    }
  } catch (e) {
    res.json('Fail');
  }
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const data = {
    username: username,
    password: password,
  };
  try {
    const check = await UserCredentialModel.findOne({ username: username });

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
  console.log('!!!!')
  const { subject, course, username, date, likes, dislikes, rating, interest, review } = req.body;
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
  };
  await UserPostsModel.insertMany([data]);
  console.log("wowie zowie")
})


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
