// Tasks
// 1 : Convert Object to JSON
// 2 : Add the converted JSON file to another file
// 3 : Read the file 
// 4 : Again convert back to js obj
// 5 : Print or Show on cconsole
const fs=require("fs");
const bioData={
    myname : "Kunal",
    age: 21,
    technology : "Node JS"
};

const jsonData=JSON.stringify(bioData);  // => Task 1
 fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("Done");   // => Task 2
 })

//  fs.readFile("json1.json","utf-8",(err,data)=>{
//     console.log(data); // => Task 3
//  })
fs.readFile("json1.json","utf-8",(err,data)=>{
 const orgData=JSON.parse(data);
 console.log(orgData.age);  // Task 4
});


