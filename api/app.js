const express = require('express');
const indexRouter = require('./routes/index');

app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);