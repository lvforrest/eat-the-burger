var express =require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index", {burger_data});
    })
})
 
 router.put("/burgers/update/:id",function(req, res){
     var condition = "id= " + req.params.id;
     burger.update(
         {"devoured": req.body.devoured}, condition,function(result){

         console.log(result);
         res.redirect("/");
     });
 });

router.post("/burgers/create", function(req, res){
    console.log(req.body.burger_name);
    burger.create(req.body.burger_name, function(result){
        res.redirect("/");
        
    })
})
// router.delete("/burgers/delete/:id",function(req, res){
//     var condition = "id= " + req.params.id;
//     burger.delete(
//         {"delete": req.body.delete}, condition,function(result){

//         console.log(result);
//         res.redirect("/")
//     })
// })

module.exports =router;
