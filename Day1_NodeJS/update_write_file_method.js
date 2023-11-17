var http=require('http');
var fs=require('fs');
fs.writeFile('mynewFile3.txt',' Hello this is the update append method ',function(err){
    if(err) throw err;
    console.log('Upated !');
})