var express = require ('express');
var router = express.Router();

function initIncidentes(db){
    var incidentescoll = db.collection('plantas');
    router.get('/',(req, res, next)=>{
        res.status(200).json({"api":"1"}); 
    });
    return router;
}

module.exports= initIncidentes;