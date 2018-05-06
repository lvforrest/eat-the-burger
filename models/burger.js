var orm = require("../config/orm.js");

var burger ={
    all: function(cb){
        orm.all("burgers",function(result){
            cb(result);
        })
    },
    update: function(id,cb){
        orm.update("burgers", id,function(result){
            cb(result);
        })
    },
    create:function(name, cb){
        orm.create("burgers", name,function(result){
            cb(result);
        });
  
    }
};

module.exports = burger;