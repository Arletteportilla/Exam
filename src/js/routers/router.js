
const express=require('express'),
    router=express.Router()
    estudiantes=require('../controllers/estudiantesController');


router.use("/estudiantes", estudiantes);

module.exports=router;
