
var mysql = require("mysql");
var connection = mysql.createConnection({
    port: 8889,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_DB"
});

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: " + connection.threadId);
});
module.exports =connection;