var express = require ('express');
var router = express.Router();

function initApp(db){
    var incidentesRoutes = require('./incidentes')(db);;
    router.use('/incidentes',plantasRoutes);
    return router;
}

module.exports= initApi; 