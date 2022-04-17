// QUES-1 : Explain handling request routing in MEAN with programing example 

//Routing refers to how an application’s endpoints (URIs) respond to client requests. There are two methods for this i.e. GET and POST.

const express = require('express');
const app = express();

app.get('/hello', function(req, res) {                   
  res.send('GET request to the homepage');  //  GET method carries request parameter appended in URL

app.listen(5000); 
 
//app.post('/', (req, res) => {
//res.send('POST request to the homepage') //  POST method does not carry request parameter appended in URL
  
})


