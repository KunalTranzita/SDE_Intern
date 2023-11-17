var http=require('http');
var fs=require('fs');
fs.rename('mynewFile5.txt','myrenameFile.txt',function(err){
    if(err) throw err;
    console.log('File Renamed !');
})