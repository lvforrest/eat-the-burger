var orm = require("../config/orm.js");

var burger ={
    all: function(cb){
        orm.all("burgers",function(res){
            cb(res);
        })
    },
    update: function(id,cb){
        orm.update("burgers", id, cb,function(res){
            cb(res);
        })
    },
    create:function(name, cb){
        orm.create("burgers", name,cb,function(result){
            cb(result);
        });
  
    }
};

module.exports = burger;