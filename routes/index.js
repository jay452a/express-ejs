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
  saveUninitialized:true,
  //cookie: { maxAge: 300000 } //设置过期时间
}));


var login = require('./login/login')
var mainList = require('./mainList')
var addNews = require('./addNews')
app.use('/login', login)  //设置路由
app.use('/mainList', mainList)  //设置路由
app.use('/addNews', addNews)  //设置路由
module.exports = app