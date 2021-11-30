const express = require('express');

const bodyParser = require('body-parser');

const app = express();



app.get('/', (req,res) => {


    res.sendFile(__dirname + "/index.html");
});


app.get("/about", (req,res)=>{



    res.sendFile(__dirname + "/about.html");
});



app.get("/contact", (req,res) => {


    res.sendFile(__dirname + "/contact.html");
});


app.listen(4000, (res,req) => {


    console.log("server started running on port 4000");
});