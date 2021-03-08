const fs = require('fs');
var path = require('path');
const db = require('../db/data.json');
let toDoList=db;
module.exports = {

    all:function(req:any, res:any){

        res.json(toDoList)
    },
    viewOne: function(req:any, res:any){
      let id=Number(req.params.id);
        let index =toDoList.findIndex(x=> Number(x.id)===id);
        res.send(toDoList[index]);
    }
    // create: function(req, res){
    //     var todoContent = req.body.content;
    //     // create todo
    //     Todo.create({ content: todoContent }, function(err, todo){
    //         if(err) res.render('error', { error: 'Error creating your todo :('})
    //         // reload collection
    //         res.redirect('/todos');
    //     });
    // },
    // destroy: function(req, res){
    //     var id = req.params.id;

    //     Todo.findByIdAndRemove(id, function(err, todo){
    //         if(err) res.render('error', { error: 'Error deleting todo'});
    //         res.redirect('/todos');
    //     });
    // },
    // edit: function(req, res){
    //     Todo.findOneAndUpdate({ _id: req.params.id }, {content: req.body.content}, function(err, todo){
    //         res.redirect('/todos');
    //     });
    // }

};