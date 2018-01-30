var app = require("./routes/index")
var express = require("express")
var path = require("path")

app.set('views', path.join(__dirname, 'view'));  // 设置模板引擎，并指明模板引擎位置
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/')); // 设置静态资源路径
app.listen(3000);