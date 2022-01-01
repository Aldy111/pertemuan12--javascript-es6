// import object StudentController
const StudentController = require("../controllers/StudentController");
//import express
const express = require("express");
//buat object router
const router = express.Router();

//buat routing

/**
 * membuat routing
 * menggunakan method get
 * memiliki 2 param
 * param 1 endpoint
 * param 2 callback req dan res
 * 
 */
router.get("/",(req,res) => {
    res.send("Hello Express");
});

//membuat routing students
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

//export routing
module.exports = router;