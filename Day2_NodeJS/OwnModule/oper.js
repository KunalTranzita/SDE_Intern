const add=(a,b)=>{
    return a+b;
};
const sub=(a,b)=>{
    return a-b;
};
const mult=(a,b)=>{
    return a*b;
};

const name="Kunal";

// module.exports.add=add;
// module.exports.sub=sub;
// module.exports.mult=mult;

// instead of that we can use this method
module.exports={add,sub,mult,name};

