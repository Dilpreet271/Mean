//This file is used for making server side configurations using express framework This file is the base or main file to run node server     
// Main sever.js file for node configurations

// Set express as Node.js web application
// server framework.
// To install express before using it as
// an application server by using
// "npm install express" command.
var express = require('express');
var app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.get('/', (req, res)=>{

// The render method takes the name of the HTML
// page to be rendered as input
// This page should be in the views folder
// in the root directory.

//Here data is a variable 
var data = {name:'Dilpreet ',
	hobbies:['Bhangra', 'Listening Music', 'Cycling']}
//Here 'home' is used beacuse we made a HTML file named as home.ejs
res.render('home', {data:data});
});

var server = app.listen(4000, function() {
	console.log('listening to port 4000')
});

