var express = require ('express');
var router = express.Router();
var ObjectID= require('mongodb').ObjectID;
 
function initIncidentes(db){
    var incidentescoll = db.collection('plantas');
    router.get('/',(req, res, next)=>{
        incidentescoll.find().toArray((err,incidentes)=>{
            if(err){
                console.log(err);
                return res.status(404).json({"error":"error"})
            };
            return res.status(200).json(incidentes)
        });
    });
    router.get('/:id', (req, res, next)=>{ 
        var id = new ObjectID(req.params.id);
        incidentescoll.findOne({"_id":id},(err,doc))=>{
            if (err){  
                 console.log(err);
                 return res.status(404).json({"error":"no se puede obtener los registros"})
            
                }

            return res.status(200).json(doc)

        }
    }); 
    return router;
}

module.exports= initIncidentes;