//import config/database
const db= require("../config/database");

class Student{
    //membuat method static all
    static all(){
        return new Promise((resolve,reject) => {
            const query = "SELECT * from students";

            db.query(query,(err,results) => {
                resolve(results);
            })
        })
    }
    //membuat method static create
    static create(nama,nim ,email,jurusan,created_at,updated_at){
        return new Promise((resolve,reject) => {
            const query = `INSERT INTO students(nama,nim,email,jurusan,created_at,updated_at)VALUES("${nama}", "${nim}", "${email}", "${jurusan}", "${created_at}", "${updated_at}")`;

            db.query(query,(err,results) => {
                resolve(results);
            });
        })
    }

}

//export Student
module.exports = Student;