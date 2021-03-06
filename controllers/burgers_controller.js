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
            // console.log("hit?");
    burger.insert([
        "burgerName"
    ], [
        req.body.burgerName
    ], function(result) {
        let test = JSON.stringify(result)
                // console.log("controller.js: "+ test);
        }
    );
    res.end();
});



router.put('/api/burg/:id', function(req, res) {
    const id = "id="+req.params.id
            // console.log('controller: '+id);
    burger.update(id, function(results){
            // console.log('controller results: '+results);
    res.status(200).end();
    })
})

router.delete('/api/burg/:id', function(req, res) {
    const id = "id="+req.params.id;
    burger.delete(id, function(results){
        res.status(200).end();
    })
})



module.exports = router;