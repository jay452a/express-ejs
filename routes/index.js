var express = require("express")
var app = express()
var bodyParser = require('body-parser');
var session = require('express-session')
//json类型的body数据,如果不用改模块，req.body为undefined
app.use(bodyParser.json());

//string类型
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'sessiontest',//与cookieParser中的一致
  resave: true,
  saveUninitialized:true
}));


var login = require('./login/login')
app.use('/login', login)  //设置路由
module.exports = app