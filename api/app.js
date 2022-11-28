const express = require('express');
const indexRouter = require('./routes/index');

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);