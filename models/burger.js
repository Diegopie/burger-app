const orm = require('../config/orm');

let burger = {
        // % This one is working locally! 
    all: function(cb) {
        orm.selectAll('burg', function(res) {
            console.table(res);
            cb(res);
        });
    },
    insert: function() {
        console.log('burger.js: insert');
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