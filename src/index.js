const express = require('express');
const colors = require('colors');;
const path = require('path');
require('../db/db')

//initializations 

const app = express();


//settings

app.set('port', process.env.PORT || 3002);



// middleware

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


// Global Variables

app.use((request, response, next) => {
    next();
});

// Routes
app.use(require('./places'));
app.use(require('./transactions'));
app.use(require('./users'));


app.use(express.static(path.join(__dirname, 'public')));


//Start Server

app.listen(app.get('port'), () => {
    console.log("Server on port ".green, app.get('port'));
});

app.set('close',()=>{
    app.close();
});

module.exports = app;