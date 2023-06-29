var mongoose= require('mongoose');
Schema=mongoose.Schema;

var calificacionesSchema= new mongoose.Schema({
    materia: String,
    nota: Number,
    estudiante:ObjectId,

});
var calificacion=mongoose.model('calificaciones',calificacionesSchema);
module.exports=calificacion;