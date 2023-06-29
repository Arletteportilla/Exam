var mongoose= require('mongoose');
Schema=mongoose.Schema;

var estudiantesSchema= new mongoose.Schema({
    nombres: String,
    apellidos:String,
    edad: Number,
    direccion: String,
    grado: Number,
});
var estudiante=mongoose.model('estudiantes',estudiantesSchema);
module.exports=estudiante;