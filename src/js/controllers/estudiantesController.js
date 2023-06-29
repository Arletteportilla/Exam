var Estudiantes=require("../models/estudiantes");
    express=require("express");
    router=express.Router();

router.post('/crearEstudiantes',(req,response)=>{
    var body=req.body;
    console.log(body);
    Estudiantes.insertMany({
        nombres:body.nombres,
        apellidos:body.apellidos,
        edad:body.edad,
        direccion:body.direccion,
        grado:body.grado
    }).then(function () {
        console.log("Successfully saved defult items to DB");
        response.status(200).json("Datos Guardados");
    })
    .catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrio un error al guardar")
    });;

});
router.post('/editarEstudiantes',(req,response)=>{
    var body=req.body;
    Estudiantes.updateOne({
        _id:body.id,
        nombre:body.nombre
    },{
        $set:{
        nombres:body.nombres,
        apellidos:body.apellidos,
        edad:body.edad,
        direccion:body.direccion,
        grado:body.grado


        }
    }).then(function () {
        console.log("Se actualizo en base");
        response.status(200).json("Datos Actualizados");
    })
    .catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrio un error al actualizar")
    });

});
router.post('/eliminarEstudiantes',(req,response)=>{
    var body=req.body;
    Estudiantes.deleteOne({
        _id:body.id
    }).then(function () {
        console.log("Se elimino en base");
        response.status(200).json("Datos eliminados");
    })
    .catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrio un error al eliminar")
    });

});
router.post('/listarEstudiantes',(req,response)=>{
    Estudiantes.find().then(function(Estudiantes){
        console.log("listado de Estudiantes");
        response.status(200).json(Estudiantes);
    }).catch(function(err){
        console.log(err);
        response.status(500).json("Ocurrio un error al obtener el listado")
    });
});
module.exports=router;