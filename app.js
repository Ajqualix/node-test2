const express = require('express');

var app = express();

const port = process.env.PORT || 3000;

app.get('/',(req, res)=>{
    res.send('test');

});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})