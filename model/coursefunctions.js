const mongoose = require('mongoose')
courseSchema = mongoose.Schema({
    coursetitle:{
        type:String,
        required:true
    },
    courseunit:{
        type:Number,
        required:true,
    },
    coursecode:{
        type:String,
        required:true,
    },

})

const courses = module.exports= mongoose.model('courses',courseSchema)

//function to add courses in to the database
module.exports.addcourses = function(courses,callback){
    courses.save(callback)
}

//creating a function to check if course id exist in the database

module.exports.checkid = function(courseid,callback){
    const query = {courseid:courseid}
    courses.findOne(query,callback)
}

//creating a function to get courses that exist in the databae
module.exports.findcourses = function(courselist,callback){
    courses.find(callback)
}

//creating a function to delete the courses 

module.exports.deletecourses = function(id){
    courses.findByIdAndRemove(id,function(res,err,result){
        if (err){
            console.log(err)
        }
        if(result){
            console.log(result)
        }
    })
}