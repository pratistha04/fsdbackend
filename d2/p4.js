const  http=require('http');
const server=http.createServer((req,res)=>{
    let data=[
        {
            "id":1,
            "username":"admin",
            "password":"123456",
        },
        {
            "id":2,
            "username":"user",
            "password":"5678"
        }
    ];
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(data);
});

server.listen(9000,(err)=>{
    if(err)
        console.log("error",err);
    else
    console.log("server running")
});