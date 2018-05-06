var connection =require("./connection.js");

var orm = {
    all: function(tableInput, cb){
    
        var string= "SELECT * FROM " +tableInput+ ";";
        connection.query(string, function(err,result){
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    update: function(tableInput,condition,cb){
        var string = "UPDATE  " +tableInput+ "SET devour=true WHERE id= "+condition+ ";";
        connection.query(string, function(err,result){
            if (err){
                throw err;
            } 
            cb(result);

        })
    }
} 
module.exports = orm;