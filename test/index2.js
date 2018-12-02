const http=require("http");
const fs=require("fs");
const path=require("path");
const mime=require("mime");
const server=http.createServer();
// 添加mime模块
/* 
  1. npm init
  2. npm i mime
  3.const mime=require("mime")
  4.mime.getType(res.url);
*/

server.on("request",(req,res)=>{
  if(req.url.startsWith("/index")||req.url=="/"){
    fs.readFile(path.join(__dirname,"pages","index.html"),(err,data)=>res.end(data));
  }else if(req.url.startsWith("/login")){
    fs.readFile(path.join(__dirname,"pages","login.html"),(err,data)=>res.end(data));
  }else if(req.url.startsWith("/list")){
    fs.readFile(path.join(__dirname,"pages","list.html"),(err,data)=>res.end(data));
  }else{
    fs.readFile(path.join(__dirname,"pages","404.html"),(err,data)=>res.end(data));
  }
})
server.listen(9999,console.log('http://localhost:9999/'+'服务器开启啦'));
// 使用 nodemon 开启服务器   
/* 
  npm init初始化,会创建package.json 里面有name,version,和依赖项
  npm下载命令
*/
