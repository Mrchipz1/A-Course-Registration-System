const mongoose = require('mongoose')
coursesSchema = mongoose.Schema({
    coursecode:{
        type:String,
        required:false
    },
    courseunit:{
        type:String,
        required:false
    },
    coursetitle:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    id:{
        type:String,
        required:false
    },
    secondname:{
        type:String,
        required:false
    },
})

const register = module.exports = mongoose.model('registerdcourses',coursesSchema)

//creating a function to add the courses
module.exports.addcourses = function(Courses,callback){
    Courses.save(callback)
}

module.exports.findcourses = function(email,callback){
    const query = {email:email}
    register.find(query,callback)
}