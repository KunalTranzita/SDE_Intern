const EventEmitter=require("events");
const event=new EventEmitter();
event.on("CheckPage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit("CheckPage",200,"ok");