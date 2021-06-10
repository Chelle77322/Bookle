const db = require( "../models");
module.exports = {
    findAll: function(request, result) {

        db.Novel.find(request.query).sort({date: -1})
        .then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
    },
    findbyId: function(request, result){
        db.Novel.findById(request.params.id).then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
    },
    create: function(request, result) {
        console.log("This is the create function in controller");
        db.Novel.create(request.body).then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
    },
    update: function (request, result){
        db.Novel.findOneAndUpdate({_id: request.params.id}, request.body).then (dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
    },
    remove: function(request, result){
        db.Novel.findById({_id: request.params.id}).then(dbModel => dbModel.remove()).then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
    }
};
