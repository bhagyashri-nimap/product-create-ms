const express = require('express');
 const cors = require('cors');
const mongoose = require('./db.js');
var router = require('./routers/router')
const app = express();
// var router = require('./routers')
app.use(cors());
app.options('*', cors());

// app.use(router)
app.use('/',router)
const server = require('http').createServer(app);
server.listen(3000, () => {
  console.log("Success", 3000)
})

module.exports = app;