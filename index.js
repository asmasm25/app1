const express= require('express');
const homeRoute = require('./routes/home')
const PatientRoute = require('./routes/show')
const editRouter = require('./routes/update')
const app=express()

var logger = require('morgan');


const bodyparser= require('body-parser')


const port = 3000

//Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
//routing
app.use('/', homeRoute)
app.use('/',PatientRoute)
app.use('/',editRouter)



app.listen(port,() => console.log(`Exemple app listening on port ${port}`))