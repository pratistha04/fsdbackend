const fs=require('fs');
const write=(data)=>{
    
    fs.writeFile("./data.txt","utf8",(err,data)=>{
        if(err)
            console.log("ERROR",err);
        else
        console.log("SUCCESS");
    });
}
console.log("before")
write("i am new data");
console.log("after")