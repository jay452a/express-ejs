/**
 * Created by lenovo on 2018/1/30.
 */
var pool = require('./dbDatabase') // 获取连接池

var errResult = {
  head:{
    resultCode: -1,
    msg:''
  }
}
var successResult = {
  head: {
    resultCode: 200,
    msg:'查询成功'
  },
  body:{}
}
var query = function() {
}
query.queryUser = function (username, password,callback) {
  pool.getConnection(function (err,conn) {
    if (err) {
      console.log('数据库建立连接失败')
      callback(err)
    } else {
      console.log('数据库建立连接成功')
      console.log(username)
      var sql = `SELECT username, password FROM userlist WHERE username="${username}" AND password="${password}"`
      conn.query(sql,function (err, res) {
        if(err) {
          console.log('数据查询失败')
          errResult.head.msg = '数据查询失败'
          callback(errResult)
        }else{
          console.log(res, '数据')
          if(res.length>0) {
            successResult.body.user = res[0]
            callback(successResult)
          }else{
            errResult.head.msg = '账号或密码不正确'
            callback(errResult)
          }
          
          
        }
        conn.release()
      })
    }
  })
  
}
module.exports = query