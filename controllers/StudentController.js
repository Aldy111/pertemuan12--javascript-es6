//import model Student
const Student = require("../models/Student");

class StudentController {
    async index(req,res){
        const students = await Student.all(); 
        const data = {
            message : "menampilkan semua data student",
            data : students,
        };
        res.json(data);
    }
    async store(req,res){
        //destrucing/menerima insert dari req body
        const {
            nama,
            nim,
            email,
            jurusan,
            created_at,
            updated_at,
        } = req.body;

        const insert = [
            nama,
            nim,
            email,
            jurusan,
            created_at,
            updated_at
        ];
        //membuat data baru
        const students = await Student.create(nama,nim,email,jurusan,created_at,updated_at);
        const data = {
            message : `menambahkan data student :`,
            data :insert,
        };
        res.json(data);
    }
    update(req,res){
        const {id} = req.params;
        const {nama}= req.body;
        const data = {
            message : `Mengedit data student  id : ${id}, nama : ${nama} `,
            data : [],
        };
        
    res.json(data);
    }
    destroy(req,res){
        const {id} = req.params;
        const data = {
            message : `Menghapus data student : ${id}`,
            data : [],
        }
    res.json(data);
    }
}
//buat object Student Controller
const object = new StudentController();
//export StudentController/object
module.exports = object;

