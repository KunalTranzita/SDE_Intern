var http=require('http'); // require is a module that import module.
var dt=require('./own_module');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("The Date and Time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);