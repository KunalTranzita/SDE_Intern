const os=require("os");

// os architecture
console.log(os.arch());

// os hostname
console.log(os.hostname()); // => this gives the host name of your system

// os platform
console.log(os.platform());

// temp directories
console.log(os.tmpdir());

// os type
console.log(os.type());


// free memory
const freeMemory=os.freemem();
//console.log(freeMemory);   // => this will give free memory in bytes
console.log(`${freeMemory /1024/1024/1024}`); // => this will give free memory in gb

// total memory
const totalMemory=os.totalmem();
console.log(`${totalMemory /1024/1024/1024}`); // => this wull give total memory
