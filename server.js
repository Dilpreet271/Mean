const express = require('express');
const path = require('path');
const app = express();

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, '/homePage.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
 });

//app.get('/contact', function(req, res){
 // res.sendFile(path.join(dirname, '/contact.html'));
//});

app.use(express.static(__dirname+'/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);
