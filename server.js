const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;

let app = express();

// * Reference public directory
app.use(express.static('public'));

// * Parse json data
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// * Set handlebars engine
app.engine('handlebars', exphbs({default: 'main'}));
app.set('view engine', 'handlebars');

// * Set routes


app.listen(PORT, function() {
    console.log("App listening at localhost: " + PORT);
});