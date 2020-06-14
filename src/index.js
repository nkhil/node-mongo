const express = require('express');

const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const healthcheck = require('./router/healthcheck');
const questionsRouter = require('./router/questions');

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

mongoose.connect('mongodb://localhost:27017/pubquiznow-demo', {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
});

app.use('/healthcheck', healthcheck);
app.use('/questions', questionsRouter);

module.exports = app;
