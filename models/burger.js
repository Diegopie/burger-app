const orm = require('../config/orm');

let burger = { 
    all: function(cb) {
        orm.selectAll('burg', function(res) {
            // console.table(res);
            cb(res);
        });
    },
    insert: function(col, val, cb) {
        orm.insertOne("burg", col, val, function(res){
            cb(res);
        });
    },
    update: function(){
        console.log('burger.js: update');
    },
};

// * TEST ORM EXPORT
// orm.selectAll();
// orm.insertOne();
// orm.updateOne();

// burger.all();

module.exports = burger;