// 引入模块
const http=require("http");
const fs=require("fs");
const path=require("path");

// 创建服务器
const server=http.createServer();
// 添加request监听
server.on("request",(req,res)=>{
  if(req.url.startsWith("/index")||req.url=="/"){
    console.log("index");
    res.end("index");
  }else if(req.url.startsWith("/cart")){
    console.log("cart");
    res.end("cart");
  }else{
    console.log("404");
    res.end("404");
  }
  
  // res.end("ok");
})
// 设置端口打开服务器
server.listen(9999,(err)=>console.log('http://localhost:9999/'+'服务器开启啦'));