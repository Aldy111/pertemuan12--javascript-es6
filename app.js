//import express
const express = require("express");

//buat object express
const app = express();

//definisikan middleware
app.use(express.json());
app.use(express.urlencoded());

//definisikan route
const router = require("./routes/api");
app.use(router);

//definition port

app.listen(3000,()=>{
    console.log(`Server running at http://localhost:3000`);
});