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
         {
         "devoured": req.body.devoured}, condition,function(result){

         console.log(result);
         res.redirect("/");
     });
 });

router.post("/burgers/create", function(req, res){
    burger.create(req.body.burger_name, function(result){
        res.redirect("/");
    })
})


module.exports =router;

// router.put("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     console.log("condition", condition);
  
//     cat.update(
//       {
//         sleepy: req.body.sleepy
//       },
//       condition,
//       function(result) {
//         if (result.changedRows === 0) {
//           // If no rows were changed, then the ID must not exist, so 404
//           return res.status(404).end();
//         }
//         res.status(200).end();
  
//       }
//     );