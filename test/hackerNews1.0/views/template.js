const path=require("path");
const http=require('http');
const template=require("art-template")
let data={
  title:"春春",
  list:["前端1","前端3","前端4","前端5"]
}
const server=http.createServer();
 server.on('request',(req,res)=>{
  /* 
  模板引擎
  1.npm i art-template
  2.const 导入
  3.和js一样 template(路径,对象)
  */
 let str=template(path.join(__dirname,"artTemplate.html"),data);
 console.log(str);
 res.end(str);
});
server.listen(9999,console.log('http://localhost:9999/index.html'+'服务器开启啦'));