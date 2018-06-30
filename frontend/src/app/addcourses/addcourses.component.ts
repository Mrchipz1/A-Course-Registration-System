import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService} from "../services/validate.service";
import { AuthenticateService} from "../services/authenticate.service";
import {AdminauthenticateService} from "../services/adminauthenticate.service"
import {Courses} from './courses'
import { Button } from 'selenium-webdriver';
import swal from 'sweetalert2'
import {Router} from '@angular/router'
@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css'],
  providers: [AuthenticateService]
})
export class AddcoursesComponent implements OnInit {
  
  courses:Courses
  coursecode:String
  coursetitle:String
  courseunit:Number
  admin:Object
  Button:Object
  
  
  constructor(private validate:ValidateService,
              private flashmessage:FlashMessagesService,
              private authenticate:AuthenticateService,
              private adminauth:AdminauthenticateService,
              private router:Router
              ) { }

  //function to add user into the database
  addcourses(){
    const courses = ({
      coursecode:this.coursecode,
      coursetitle:this.coursetitle,
      courseunit:this.courseunit,
      
    })
    //now we call the validate function
    if(!this.validate.validatecourses(courses)){
      this.flashmessage.show('please fill in all fields',{ cssClass: 'alert-danger', timeout: 1000 })
      return false
    }
    //caliing the service to input course into the database
    this.authenticate.addcourses(courses).subscribe(data=>{
      if(data.success){
        this.flashmessage.show(data.msg,{ cssClass: 'alert-success', timeout: 1000 })
        this.getcourses()
      }
      else{
        this.flashmessage.show(data.msg,{ cssClass: 'alert-danger', timeout: 1000 })
      }
    })
  }

  ngOnInit() {

    this.getadmin()
    
    this.getcourses(); 
    
  }

  //fucion for buttn

  button(){
    this.Button = false
  }

  //function to get courses
  

getcourses(){
  this.authenticate.getcourses().subscribe(
    courses=>{
      this.courses=courses;
    }
    
  )
  
}

//function to delete courses
deletecourses(id){
  this.getcourses()
  this.authenticate.delete(id).subscribe()
  swal({
            
    title:"Delete Successfull",
    text:"Courses has been successfully deleted,Please reload page",
    

  })
  
 
 

}

//functin to display admin details
getadmin(){
  this.adminauth.authenticate().subscribe(data=>{
    if(data.user){
      this.admin = data.user
    }
  })
}
  
logout(){
  this.authenticate.logout()
   this.router.navigate(['/admin'])
   return false
}

}
