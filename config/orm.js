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
    // INSERT INTO burg (burgerName, isEaten) VALUES ("egg burger", 0)
    insertOne: function(table, col, val, cb) {
        let query = "INSERT INTO " + table + " ("+col+", isEaten) VALUES ('"+val+"', 0);";
                console.log("orm.js: "+query);
        connection.query(query, function(err, result){
            if (err) throw err;
            cb(result)
        })
    },
    // UPDATE burg SET isEaten = 1 WHERE ID=?; 
    updateOne: function(table, id, eaten) {
        console.log('orm.js: updateOne');
    }
}

module.exports = orm;