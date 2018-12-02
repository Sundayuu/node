const fs=require("fs");
const path=require("path");
const http=require('http');
const mime=require("mime");
const server=http.createServer();
 server.on('request',(req,res)=>{
 res.setHeader("content-type",mime.getType(req.url));
 fs.readFile(path.join(__dirname,"pages2",req.url),(err,data)=>res.end(data))
});
server.listen(9999,console.log('http://localhost:9999/index.html'+'服务器开启啦'));