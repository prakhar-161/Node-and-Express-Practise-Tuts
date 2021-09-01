const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;

//important
//path to public(static files)folder.
//console.log(path.join(__dirname,'../public'));

//Middleware
const staticPath = path.join(__dirname,'../public');
app.use(express.static(staticPath));

//Set view engine
const templatePath = path.join(__dirname,'../templates/views');
app.set('view engine','hbs');
app.set('views',templatePath);

//partials
const partialsPath = path.join(__dirname,'../templates/partials');
hbs.registerPartials(partialsPath);

app.get('/',(req,res) => {
    res.render('index',{
        userName : "john"
    });
});

app.get('/about',(req,res) => {
    // console.log(req.query);
    res.render('about',{
        name : req.query.name
    });
});

app.get('/contact',(req,res) => {
    res.render('contact');
});

app.get('*',(req,res) => {
    res.render('404');
});

app.listen(port,(err) => {
    if(err){
        console.log(`error in connecting to port ${port}`);
    }
    console.log(`connected to port ${port}`);
});