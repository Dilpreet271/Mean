//This file is used for making server side configurations using express framework This file is the base or main file to run node server     
// Main sever.js file for node configurations

/*make a constant variable --> express
*and call external express module using require function 
*and import external express module using 'require' function
*/ 
const express = require('express');

/*Making path variable and import path module 
 *for joinning multiple segments  
*/
const path = require('path');

const app = express();
//GET method is used that carries request parameter appended in URL

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, '/homePage.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
 });

app.use(express.static(__dirname+'/views')); // To import static files like CSS files

app.use(express.static(path.join(__dirname, 'public')));

/*App.listen() is used to bind or listen the connections on specific port 
*in this case it is at port -> 3000
*/

app.listen(3000); 


