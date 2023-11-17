var http=require('http');
var fs=require('fs');
fs.unlink('mynewFile4.txt',function(err){
    if(err) throw err;
    console.log('File Deleted');
});