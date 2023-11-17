var http=require('http');
var fs=require('fs');
fs.writeFile('mynewFile.txt','Hello Contents !',function(err){
    if(err) throw err;
    console.log('Saved !');
})