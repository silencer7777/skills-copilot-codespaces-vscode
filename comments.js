// Create web server
// npm install express
// npm install body-parser
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Create web server
var server = app.listen(3000, function() {
    console.log("Server is running on http://localhost:3000");
});

// Get request
app.get('/comment', function(req, res) {
    console.log("GET request");
    res.send("GET request");
});

// Post request
app.post('/comment', function(req, res) {
    console.log("POST request");
    console.log("Name: " + req.body.name);
    console.log("Comment: " + req.body.comment);
    res.send("POST request");
});

// Put request
app.put('/comment', function(req, res) {
    console.log("PUT request");
    res.send("PUT request");
});

// Delete request
app.delete('/comment', function(req, res) {
    console.log("DELETE request");
    res.send("DELETE request