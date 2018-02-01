/**
 * Created by lenovo on 2018/1/31.
 */
var tools = function () {

}
tools.getNowDate = function () {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var min = date.getMinutes()
  var sec = date.getSeconds()
  return `${year}-${month}-${day} ${hour}:${min}:${sec}`
}
module.exports = tools