const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(data[0]);
        res.render('index', hbsObject);
    });
});

module.exports = router;