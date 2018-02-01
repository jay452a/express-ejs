var express = require("express")
var route = express.Router()

var query = require('../../dao/query') // 操作数据库

// 访问路径从index.js开始 /login
route.get('/', function (req, res) {
  var title="登录";
  console.log(req.session, 'login')
  res.render('ceshi',{title:title});
})
// 访问路径/login/loginForm
route.post('/loginForm', function (req, res) {
  var name = req.body.name
  var password = req.body.password
  query.queryUser(name,password,function (r) {
    if (r.body) {
      req.session.user = r.body.user
      console.log(req.session, 2)
    }
    res.send(r)
  })
  
})

module.exports = route