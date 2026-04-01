require('./config/env');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth.routes')

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send("Hello World!");
});

module.exports = app;