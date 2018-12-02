const mime=require("mime");
const path=require("path");
const http=require('http');
const template=require("art-template");
let obj={
  tittle:"小洲",
  list:["前端1","前端2","前端3","前端4"]
}
const server=http.createServer();
 server.on('request',(req,res)=>{
 let str= template(path.join(__dirname,"views","template.html"),obj);
  res.end(str);
});
server.listen(9999,console.log('http://localhost:9999'+'服务器开启啦'));