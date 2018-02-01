var express = require("express")
var route = express.Router()

var query = require('../dao/query') // 操作数据库
var filter = require('../dao/filter')
// 访问路径从index.js开始 /login
route.get('/', function (req, res) {
  var isLogin = filter.isLogin(req, res, 'list')
  if (isLogin) {
    var title="列表";
    var list
    query.getNewsList({userId:req.session.user.userId},function (r) {
      try {
        list = r.body
        console.log(list, 'list')
        res.render('mainList',{title:title,list:list});
      }
      catch(err){
        console.log(err, 'err')
        res.render('mainList',{title:title});
      }
    })
  }
})
// 访问路径/login/loginForm
/*route.get('/', function (req, res) {

})*/

module.exports = route