const path=require("path");
const fs=require("fs");
const mime=require("mime");
const http=require('http');
function hasUrl(req,urlStr){
  return req.url.startsWith(urlStr);
}
const server=http.createServer();
 server.on('request',(req,res)=>{
  
  if(hasUrl(req,"/index")){
    fs.readFile(path.join(__dirname,"views","index.html"),(err,data)=>res.end(data))
  }else if(hasUrl(req,"/details")){
    fs.readFile(path.join(__dirname,"views","details.html"),(err,data)=>res.end(data))
  }else if(hasUrl(req,"/submit")){
    fs.readFile(path.join(__dirname,"views","submit.html"),(err,data)=>res.end(data))
  }else if(hasUrl(req,"/assets")){
    res.setHeader("content-type",mime.getType(req.url));
    fs.readFile(path.join(__dirname,req.url),(err,data)=>res.end(data))
  }else{
    res.end("404")
  }

});
server.listen(9999,console.log('http://localhost:9999/index.html'+'服务器开启啦'));