const http=require('http');

const server=http.createServer(async (req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url==='/home'){
        res.end('<h1>Home Page</h1>');
    }
    else if(req.url==='/about'){
        res.end('<h1>About Page</h1>');
    }
    else if(req.url==='/contact'){
        res.end('<h1>Contact Page</h1>');
    }
    else{
        res.end('<h1>page not found</h1>');
    }
});
server.listen(9000,(err)=>{
    if(err)
        console.log("error",err);
    else
    console.log("server running at 9000")
})