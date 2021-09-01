const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const staticPath = path.join(__dirname,'../public');
app.use(express.static(staticPath));

app.get('/',(req,res) => {

});

app.listen(port,(err) => {
    if(err){
        console.log(`error in connecting to port ${port}`);
    }
    console.log(`connected to port ${port}`);
});