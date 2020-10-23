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
    update: function(id, cb){
                // console.log('burg model: '+id);
        orm.updateOne("burg", id, function(res) {
            cb(res);
        })
    },
    delete: function(id, cb) {
        orm.deleteOne("burg", id, function(res){
            cb(res);
        })
    }
};


// * TEST ORM EXPORT
// orm.selectAll();
// orm.insertOne();
// orm.updateOne();

// burger.all();

module.exports = burger;