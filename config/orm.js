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
    update: function(burgerID,cb){
        var id= burgerID;
        var string = "UPDATE burgers SET devoured=1  WHERE id=?", [id];
        connection.query(string, function(err,result){
            if (err){
                throw err;
            } 
            cb(result);

        })
    },
    create: function(tableInput, val, cb){
        var string= "INSERT INTO "+tableInput+ "(burger_name) VALUES ('"+val+"');";
        connection.query(string, function(err,result){
            if (err){
                throw err;
            }
            console.log(result);
            cb(result);
        })
    }
} 
module.exports = orm;