const connection = require("../config/connection");

const orm = {
    // SELECT * FROM burg
    selectAll: function(table, cb) {
        let query = "SELECT * FROM " + table + ';';
        connection.query(query, function(err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    // INSERT INTO burg (burgerName, isEaten) VALUES ("??", ?)
    insertOne: function(table, value, eaten) {
        console.log('orm.js: insertOne');
    },
    // UPDATE burg SET isEaten = 1 WHERE ID=?; 
    updateOne: function(table, id, eaten) {
        console.log('orm.js: updateOne');
    }
}

module.exports = orm;