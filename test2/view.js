const mime=require("mime");
const fs= require("fs");
const path=require("path");
const http=require('http');
const server=http.createServer();
let hasUrl=(req,url)=>req.url.startsWith(url);
 server.on('request',(req,res)=>{
  
  if(hasUrl(req,"/index")||req.url=="/"){
    fs.readFile(path.join(__dirname,"views","index.html"),(err,data)=>res.end(data));
  }else if(hasUrl(req,"/details")){
    fs.readFile(path.join(__dirname,"views","details.html"),(err,data)=>res.end(data));
  }else if(hasUrl(req,"/submit")){
    fs.readFile(path.join(__dirname,"views","submit.html"),(err,data)=>res.end(data));
  }else if(hasUrl(req,"/assets")){
    res.setHeader("content-type",mime.getType(req.url));
    fs.readFile(path.join(__dirname,req.url),(err,data)=>res.end(data));
  }else{
    res.writeHead("404","bbb",{"content-type":"text/html;charset=utf-8"})
    res.end("404")
  }
  
 
});
server.listen(9999,console.log('http://localhost:9999'+'服务器开启啦'));