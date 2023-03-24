const themesController = require('../../controller/themes/themes.controller');

module.exports = function(app) {

    app.get("/themes/list", themesController.con.listar);
    app.post("/themes/update", themesController.actualizar);
    app.delete("/themes/delete/:id", themesController.eliminar);
    
}