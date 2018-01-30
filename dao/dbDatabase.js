/**
 * Created by lenovo on 2018/1/29.
 */
var mysql = require("mysql")
// 创建连接池
var pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'147258',
  port: '3306',
  database:'test'
})


module.exports = pool