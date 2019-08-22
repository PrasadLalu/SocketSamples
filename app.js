const express = require('express');
const http = require('http');
const cors = require('cors');
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

const authRouter = require('./controllers/auth');
app.use(cors());

app.use(function(req, res, next){
    res.io = io;
    next();
});
app.use('/', authRouter);

module.exports = {app: app, server: server};
