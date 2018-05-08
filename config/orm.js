var connection =require("./connection.js");
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

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
    update: function(tableInput, objColVals, condition, cb) {
        var queryString = "UPDATE " + tableInput;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
    create: function(tableInput, val, cb){
        //var string= "INSERT INTO '" + tableInput  + "' ('burger_name')" + " VALUES "+ "('"+val+"')"+ ";";
        var string= `INSERT INTO burgers (burger_name) VALUES ("tuna");`;
        console.log(string);
        connection.query(string, val, function(err,result){
            if (err){
                throw err;
            }
            console.log(result);
            console.log(cb);
            console.log(typeof cb);
            cb(result);
        })
    }
    // delete: function(tableInput, condition, cb){
    
    //   var string= "DELETE * FROM "+ tableInput +"WHERE ('burger_name') "+condition;
    //   connection.query(string, function(err,result){
    //       if (err) {
    //           throw err;
    //       }
    //       cb(result);
    //   })
    // },
  //   delete:function(tableInput, objColVals, condition, cb) {
  //     var queryString = "DELETE " + tableInput;
  
  //     queryString += objToSql(objColVals);
  //     queryString += "FROM ";
  //     queryString += condition;
  
  //     console.log(queryString);
  //     connection.query(queryString, function(err, result) {
  //       if (err) {
  //         throw err;
  //       }
  //       cb(result);
  //     })
  // }
} 
module.exports = orm;