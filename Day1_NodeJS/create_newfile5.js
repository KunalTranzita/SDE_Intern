var fs=require('fs');
fs.appendFile('mynewFile5.txt',' Hello Transita !',function(err){
    if(err) throw err;
    console.log('Saved!');
})