const express = require('express');
const path = require('path');
const app =express();
app.use('/css',express.static(path.join(_dirname,'node_modules/bootstrap/dist/css')));
app.use('/css',express.static(path.join(_dirname,'node_modules/bootstrap/dist/js')));
app.use('/css',express.static(path.join(_dirname,'node_modules/jquery/dist')));
const port=5000;
app.get("/",(req,res)=>{
res.sendFile(path.join(_dirname,'views/index.html'))
});

app.listen(5000,()=>{console.log('hello' + 5000);
});
