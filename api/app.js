const express = require('express');
var http = require('http');

let port = 8080

const indexRouter = require('./routes/index');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.set('port', port);

var server = http.createServer(app);
server.listen(port);

console.log("listening to port " + port)