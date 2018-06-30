const express = require('express');
//defining our route
const routes = require('./route/routes')
//defining modeule mongoose
const mongoose = require('mongoose')
const path = require('path')
//defining our bodyparser to send informations between route pages
const bodyParser = require('body-parser')
const passport = require('passport')
//checkung if our database has been successfully connected
const cors = require('cors')
const config = require('./config/database')
mongoose.connect(config.database)

mongoose.connection.on('connected',()=>{
    console.log("database has been successfully connected")
})

const app = express()
//setting the port to tbe used by the database
const port = 4000
//using our bodyparser
//app.use(function(req,res,next){
  //  res.setHeader('Access-Control-Allow-Origin','http://192.168.43.68:4200')
  //  res.setHeader('Access-Control-Allow-Methods','GET,POST,')
   // res.setHeader('Access-Control-Allow-Headers','/users/getstudents')
   
    
  //  next();
//})
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)
app.use(cors())

//configuring our route to the route part 
app.use('/users',routes)
app.get('/',(req,res)=>{
    res.send('page is still under construction')
})
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})

//setting our port to listen on an interface
app.listen(port,'192.168.43.68',()=>{
    console.log('port has been connected on port:'+port)
})