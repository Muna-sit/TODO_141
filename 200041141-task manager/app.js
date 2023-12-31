require("dotenv").config();
const express = require("express")
const connect = require("./db/connection")
const router = require("./routes/route");

const app = express();
app.use(express.json());
app.use(express.static("./public"))
app.use("/tasks",router);


const port = 3000;




app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`Listening on port ${port}...`);
})