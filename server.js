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