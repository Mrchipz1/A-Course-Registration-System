import { Component, OnInit } from '@angular/core';
import {List} from './listcourses'
import {AuthenticateService} from '../../services/authenticate.service'
import{Router, Route} from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import swal from 'sweetalert2'
import {  Courses } from './rcourses';
@Component({
  selector: 'app-registercourses',
  templateUrl: './registercourses.component.html',
  styleUrls: ['./registercourses.component.css']
})
export class RegistercoursesComponent implements OnInit {
  courses=[]
  
  courseunit:String
  coursecode:String
  coursetitle:String
  regcourses:String
  email:String
  user:Object
  id:String
  status:Number
  useremail:String
  ucourses:Courses
  
  constructor(private authenticate:AuthenticateService,
                  private router:Router,
                  private flashmessage:FlashMessagesService) { }

  ngOnInit() {
    this.getprofile()
    this.getcourses()
    
  }

  //function to get services
  getcourses(){
    this.authenticate.getcourses()
    .subscribe(courses=>
      {this.courses=courses;})
  }

  
  getprofile(){
    this.authenticate.getprofile().subscribe(profile=>{
      this.user = profile.user
      this.status = profile.user.approved
      this.useremail = profile.user.email
      
      
    })
  }
  // function to logout user 
  onlogout(){
    this.authenticate.logout()
    this.router.navigate(['/login'])
    return false
  }

  registercourses(email,uid){
     const uemail = email
     
    const id = uid

   


    return this.courses
  
    .filter(opt=>opt.checked)
    .map(opt=>{if(opt){

      const checked = {
        coursecode:opt.coursecode,
        coursetitle:opt.coursetitle,
        courseunit:opt.courseunit,
        email:uemail,
        id:uid
      }
      this.authenticate.updatereg(id).subscribe()
      this.authenticate.registercourses(checked).subscribe(data=>{
        if(data.success){
          swal({
            
            title:"Course Registration successfull",
            text:"Your course have been succesfully registered",
            
        
          })
         this.status = 1
        }
        else{
          this.flashmessage.show("Please select at least one course",{ cssClass: 'alert-danger', timeout: 20000000 })
        }
      })
        
      
      
    }
    else{
      this.flashmessage.show("Please select at least one course",{ cssClass: 'alert-danger', timeout: 20000000 })
    }
  })
  
   
  }

  //function to get courses if they have been approved 

  getcourses2(email){
   
    const uemail = ({email:email})
    this.authenticate.getregisterdcourses(uemail).subscribe(data=>{
     this.ucourses = data
     console.log(this.ucourses)
    })
  }

 

}
