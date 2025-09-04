const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res)=> {
    "WELCOME"
})

app.listen(port, (r,rs)=>{
    console.log(`Server is running on http://localhost:${port}`);
})

let users = [
    { id: 1, name: "Ram", email: "Ram@gmail.com" },
    { id: 2, name: "Bob", email: "bob@gmail.com" }
]; 

app.post("/users/add", (req, res)=> {
    const {name, email} = req.body;
    const newUser = {
        id: users.length + 1,
        name,  
        email
    }
    users.push(newUser);
    res.status(201).json(newUser);
})

app.get("/users", (req, res)=> {
    res.json(users);
})  

app.put("/users/update/:id", (req,res)=>{
    const userId = parseInt(req.params.id);
    const {name, email}= req.body;
    const user = users.find(u => u.id === userId);

    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    user.name = name || user.name;
    user.email = email || user.email;
    res.json(user);
})