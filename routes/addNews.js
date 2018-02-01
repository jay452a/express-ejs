/**
 * Created by lenovo on 2018/1/31.
 */
var express = require("express")
var route = express.Router()

var query = require('../dao/query') // 操作数据库
var filter = require('../dao/filter')
var tool = require('../public/js/tools')
// 访问路径从index.js开始 /addNews
route.get('/', function (req, res) {
  var isLogin = filter.isLogin(req, res, 'add')
  if (isLogin) {
    var title="添加新闻";
    res.render('addNews',{title:title});
  }
  
})
// 访问路径/addNews/add
route.post('/add', function (req, res) {
  var isLogin = filter.isLogin(req, res, 'addNews')
  if (isLogin) {
    var name = req.body.name
    var content = req.body.content
    var userId = req.session.user.userId
    var data = {
      name: name,
      content:content,
      userId:userId,
      createTime:tool.getNowDate()
    }
    query.addNews(data,function (r) {
      res.send(r)
    })
  }else{
    res.send({
      head:{
        resultCode:-1,
        msg:'未获取到用户信息'
      }
    })
  }
})

module.exports = route
