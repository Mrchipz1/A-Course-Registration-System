import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  ////checkin all fields to know if it undefine
  validatefields(user){
    if(user.firstname == undefined||user.secondname == undefined||user.email == undefined||user.password == undefined){
      return false
    }
    else{
      return true
    }

    
  }

  

  //cehcking if the email field is properly validated
validateemail(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email)
  }

  validateloginfields(user){
    if(user.email == undefined||user.password == undefined){
      return false
    }
    else{
      return true
    }

    
  }

  //validate add courses fields
  validatecourses(courses){
    if(courses.coursetitle==undefined||courses.coursecode==undefined||courses.courseunit==undefined){
      return false
    }
    else{
      return true
    }
  }

}
