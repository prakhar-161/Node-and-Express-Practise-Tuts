//Routing practise example

const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req,res) => {
    res.send('welcome to home page');
});

app.get('/about',(req,res) => {
    res.status(200).send('welcome to about page');
});

app.get('/contact',(req,res) => {
    res.write('<h3>contacts page</h3>')
    res.write('<h3>welcome to contacts page</h3>');
    res.send();
});

//Passing JSON data as a response 
app.get('/temp',(req,res) => {
    res.send([
        {
            id:1,
            name: "John"
        } ,
        {
            id: 2,
            name: "mac"
        }
    ]);
});

app.listen(port,(err) => {
    if(err){
        console.log(`error in listening to port ${port}`);
    }
    console.log(`connected to port ${port}`);
});