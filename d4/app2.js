const express = require('express');
const express = require('express');
const app = express();

app.use(express.json()); 

let users = []; 
const readdata=()=>{
    users=JSON.parse(FileSystem.readFile('./data.json','utf8'));
}
const writedata=async ()=>{
    await fs.writeFile('./data.json',JSON.stringify(users,'\t',' '));  
}
readdata();
app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/', (req, res) => {
    res.send('hello message');
});
app.post('/users',(req,res)=>{
    const data=req.body;
    users.push(data);
    writedata();
    res.status(200).json({message:'data received!',data:data});
});
app.post('/users', (req, res) => { 
    const data = req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    data.id=newid;
    users.push(data);
    res.status(200).json({ message: 'Data received', data: data });
});
app.listen(9000, () => {
    console.log("Server started on port 9000");
});
