const bioData={
    myname : "Kunal",
    age: 21,
    technology : "Node JS"
};
//console.log(bioData.technology); // => for the single element printing.

// object Data to JSON conversion
const jsonData=JSON.stringify(bioData);
// console.log(jsonData);

// JSON File to Object Data Conversion

const objData=JSON.parse(jsonData);
console.log(objData.myname);