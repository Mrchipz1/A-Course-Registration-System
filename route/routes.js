//defining our routes to as a function
const express = require('express')
const router = express.Router()
//adding the function path
const functions = require('../model/functions')
const adminfunctions = require('../model/adminfunctions')
const coursefunctions = require('../model/coursefunctions')
const jwt = require('jsonwebtoken')
const config = require('../config/database')
const passport = require('passport')
const register = require('../model/registercourses')

//definig route for registration page
router.post('/register',(req,res,send)=>{
    
    let userdetails = new functions({
    firstname:req.body.firstname,
    secondname:req.body.secondname,
    email:req.body.email,
    password:req.body.password,
    approved:req.body.approved,
        astatus:req.body.astatus,
        rstatus:req.body.rstatus,
        level:req.body.level

    
    })

    //check if the username entered exist
    functions.finduser(userdetails.email,(err,user)=>{
        if(user){
            res.json({success:false,msg:"Email Adress not available"})
        }
        else{
            functions.adduser(userdetails,(err)=>{
                if(err) throw err;
                console.log(userdetails)
                res.json({success:true,msg:"User has been successfully added"})
               
            })
        }

    })
    
    


})

// now we create a function to authenticate our users into the database
router.post('/authenticate',(req,res,send)=>{
    //first we get the username of all inputed fields
    const email = req.body.email
    const password = req.body.password
    //now we call the find user function to know if the user exists in the database
    functions.finduser(email,(err,user)=>{
       
        if (err) throw err
        if(user){
            //we call the function to compare the paswword with that in the database
            functions.comparepassword(password,user.password,(err,isMatch)=>{
                if(err) throw err
                if(isMatch){
                    console.log(user)
                   const token = jwt.sign(user.toJSON(),config.secret,{expiresIn:300})
                    res.json({success:true,msg:"you are now logged in",
                   token:'JWT '+token,
                    user:{
                        firstname:user.firstname,
                        secondname:user.secondname,
                        email:user.email,
                        id:user.id
                    }})
                }
                else{
                    res.json({success:false,msg:"the password enterd is in correct",
                   })
                }
            })

        }
        else{
            res.json({success:false,msg:"That Email doesnt exist"})
        }
    })
})

//creating a route for admin login
router.post('/admin',(req,res,send)=>{
    const email = req.body.email
   const password = req.body.password
    

    //calling our function to find if the user inputed exist
    adminfunctions.finduser(email,(err,auser)=>{
        if(err) throw err
        if (auser){
            
            //we call in the function to check if password inputed match
            adminfunctions.comparepassword(password,auser.password,(err,isMatch)=>{
                if(err) throw err
                if(isMatch){
                    const token = jwt.sign(auser.toJSON(),config.secret,{expiresIn:300})            
                    
                    res.json({success:true,msg:"you are now logged in",auser, token:"JWT " + token    
                      
                    })
                }
                else{
                    res.json({success:false,msg:"the password enterd is in correct"})
                }
            })
        }
        else{
            res.json({success:false,msg:"Email doesnt exist"})
        }
    })
})

//creating a route to register users for the admin

router.post('/registeradmin',(req,res,send)=>{
    let admindetails = new adminfunctions({
        firstname:req.body.firstname,
        secondname:req.body.secondname,
        email:req.body.email,
        password:req.body.password,
        level:req.body.level
    })
    
    //first we check if th email inputred exist in the databast
    adminfunctions.finduser(admindetails.email,(err,user)=>{
        if(err) throw err
        if(user){
            res.json({success:false,msg:"Admin with that email exist"})
        }
        else{
            // now we call afunction that will input this into the database
    adminfunctions.adduser(admindetails,(err)=>{
        console.log(admindetails)
        if(err) throw err
        else{
            res.json({success:true,msg:"You have been succesfully registerd"})
        }
    })
        }
    })
})

//function to add courses into th database
//first we check if the course exist in the database
router.post('/addcourses',(req,res,send)=>{
     //we get the input from the user fields
     let courses = new coursefunctions({
         coursecode:req.body.coursecode,
         courseunit:req.body.courseunit,
        
         coursetitle:req.body.coursetitle,
     })
     //now we check if the id inputed exist in mongodb
     coursefunctions.addcourses(courses,(err)=>{
        if(err) throw err;
        else{
            res.json({success:true,msg:"course has been succesfully added"})
        }
  })
})

//now we retrieve courses that exist in the database

router.get('/getcourses',(req,res,send)=>{
    coursefunctions.findcourses(coursefunctions.courses,(err,courses)=>{
        if(err) throw err
        if(courses){
            res.json({courses})
        }
      
    })
})
router.get('/getstudents',(req,res,send)=>{
    functions.getstudents(functions.User,(err,students)=>{
        if(err) throw err
           console.log(students.email
    )
        if(students){
        res.json(students
                
                        )}
    })
})
router.get('/profile', passport.authenticate('jwt' , {session:false}),(req,res,next)=>{
    res.json({user:req.user})
})

router.post('/registercourses',(req,res,next)=>{
    let courses = new register({
        coursecode:req.body.coursecode,
        coursetitle:req.body.coursetitle,
        courseunit:req.body.courseunit,
        email:req.body.email,
        firstname:req.body.firstname,
        secondname:req.body.secondname,
        id:req.body.id,
        
    })

   

    register.addcourses(courses,(err)=>{
          
        if(err) throw err
        res.json({success:true,msg:"You have courses been registerd successfully"})
    })
    
})

router.post('/getregisteredcourses' ,(req,res,next)=>{

    
     register.findcourses(req.body.email , (err,user)=>{
        
         if(err) throw err
         if(user){
            res.json({success:true,user:{
                user:user
            }})
         }
         else{
            res.json({success:false,msg:"error"})
         }
     })
})

router.get('/adminprofile', passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    res.json({user:req.user})
})

router.put('/updateapproval/:id',(req,res)=>{
  //  console.log('uu')
    functions.updatestatus(req.params.id,(err)=>{
       
        if(err) throw err
        else
        {
            res.json("updated")
        }
    })
})

router.put('/updateapproval2/:id',(req,res,next)=>{
    functions.updatestatus2(req.params.id,(err)=>{
        if(err) throw err
        else{
            res.json("successfull")
        }
    })
})

// route to dissaprove the registration of the user 
router.put('/disaprove/:id',(req,res)=>{
    functions.disaprove(req.params.id,(err)=>{
        if(err) throw err
    })
})

// route to delete courses from database
router.put('/deletecourses/:id',(req,res)=>{
    coursefunctions.deletecourses(req.params.id,(err)=>{
        if(err) throw err
    })
})
module.exports= router
