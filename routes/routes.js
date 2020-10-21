const express=require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

router.get('/estudiantes',(req,res)=>{
  mysqlConnection.query('SELECT * FROM actores ',(err,rows, fiels)=>{
    //callback
    //Si no hay error
    if(!err){
      res.json(rows);
    }else{
      console.log(err);
    }
  })

})//Fin get /estudiantes

//Crear un nuevo estudiante
router.post('/nuevo-estudiante',(req,res)=>{
  const{nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento, institucion_id}=req.body;

  let estudiante=[nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento, institucion_id];

  let nuevoEstudiante=`INSERT INTO actores(nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento, institucion_id)VALUES(?,?,?,?,?,?,?)`;
  
  mysqlConnection.query(nuevoEstudiante, estudiante,(err,results,fields)=>{
    if(err){
      return console.error(err.message);
    }else{
      res.json({message:'Estudiante matriculado'})
    }
  })//Fin query insert
})//Fin post /nuevo-estudiante

module.exports=router;