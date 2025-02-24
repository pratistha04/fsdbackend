const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World\n');
})
server.listen(9001,(err)=>{
    if(err) 
        console.log("error starting server",err);
    else
       console.log("server started on port 9001");
})