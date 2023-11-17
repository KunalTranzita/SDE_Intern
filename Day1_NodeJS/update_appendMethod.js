var http=require('http');
var fs=require('fs');
fs.appendFile('mynewFile3.txt',' Hello this is the update append method ',function(err){
    if(err) throw err;
    console.log('Upated !');
})