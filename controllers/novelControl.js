const db = require( "../models");
module.exports = {
    findAll: function(request, result) {
        db.Novel.find(request.query).then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
    },
    create: function(request, result) {
        console.log("This is the create function in controller");
        db.Novel.create(request.body).then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
    }
}
