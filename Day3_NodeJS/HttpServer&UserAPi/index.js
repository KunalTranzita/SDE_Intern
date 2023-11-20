const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end('Hello from the Home sides');
    }else if(req.url=="/about"){
        res.end("Hello from the AboutUS sides");
    }else if(req.url=="/contact"){
        res.end("Hello from the ContactUS sides");
    }
    else if(req.url=="/userapi"){
       
        fs.readFile("testData.json","utf-8",(err,data)=>{
            res.end(data);
            if(err) throw err;
            else console.log(data);
           
        })
       
    }
    else{
        res.writeHead(404,{"Content-type" :"text/html"});
        res.end("<h1>Error 404 ! Page Doest't Exists </h1>");
    }
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port no 8000");
});