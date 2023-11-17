var fs=require('fs');
fs.appendFile('mynewFile.txt',' Hello Transita !',function(err){
    if(err) throw err;
    console.log('Saved!');
})