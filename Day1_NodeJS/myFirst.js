var http=require('http'); // require is a module that import module.
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World!');
}).listen(8080);