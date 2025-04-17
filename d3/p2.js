const http=require('http');

const server=http.createServer(async (req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    if(req.url==='/setdata'&& req.method==='POST'){
        let body='';
        req.on('data',chunk=>{
            body+=chunk;
        });
        req.on('end',()=>{
            let data=JSON.parse(body);
            console.log(data);
            res.end(JSON.stringify({message:'Data received successfully'}));
        });
    }
});
server.listen(9000,(err)=>{
    if(err)
        console.log("error",err);
    else
    console.log("server running at 9000")
})