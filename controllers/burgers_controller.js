const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

// Retrieve all Data from Database
router.get('/', function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

// Send New Data to Database
router.post('/api/burg', function(req, res) {
    console.log("hit?");
    burger.insert([
        "burgerName"
    ], [
        req.body.burgerName
    ], function(result) {
        let test = JSON.stringify(result)
        console.log("controller.js: "+ test);
        }
    );
    res.end();
});
module.exports = router;



// Test post insert routes
    // burger.insert([
    //     "burgerName"
    // ], [
    //     // req.body.burgerName
    //     "Fat Burger"
    // ], function(result) {
    //     console.log(result);
    //     }
    // );