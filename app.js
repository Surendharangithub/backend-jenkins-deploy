const express = require("express");

const app = express();

app.get('/', (ret, res, next)=> {
    res.send('This is Running in Default Route')
})

app.listen(3000, ()=> {
    console.log('Running in port 3000')
})