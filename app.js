const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, './build')));

let PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.status(200).send(`<h1>Welcome</h1>`);
});

app.listen(PORT, ()=>{
    console.log(`App is listing on port ${PORT} ...`);
});





