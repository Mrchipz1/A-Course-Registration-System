import { Component, OnInit } from '@angular/core';
import {Students} from './students';
import {AuthenticateService} from '../../services/authenticate.service'
import {AdminauthenticateService} from '../../services/adminauthenticate.service'
import {Router} from '@angular/router'
import swal from 'sweetalert2'
import {Courses} from './courses'
@Component({
  selector: 'app-approvecourses',
  templateUrl: './approvecourses.component.html',
  styleUrls: ['./approvecourses.component.css']
})
export class ApprovecoursesComponent implements OnInit {
  students:Students
  courses:Courses
  admin:Object
 user = {}
 userid = String


  constructor(private authenticate:AuthenticateService ,
              private adminauth:AdminauthenticateService,
              private router:Router
             ) { }

  ngOnInit() {
   this.getstudents()
   this.getadmin()
  }
  //function to get all students
  getstudents(){
    this.authenticate.getstudents().subscribe(data => {this.students=data
                
     },
      
    
    );
    
  }

  //creating a function to get the courses registerd by this user

  getcourses(email,userid){
  this.userid = userid

  //console.log(this.userid)
 
    const uemail = ({email:email})
     
    this.authenticate.getregisterdcourses(uemail).subscribe(data=>{

      this.courses = data
      
    
       
    })
  }

  //function to get admin details
  getadmin(){
    this.adminauth.authenticate().subscribe(data=>{
      if(data.user){
        this.admin = data.user
      }
    })
  }

  //function to update the approval status of the user

  updateapproval(){

   this.authenticate.updatestatus2(this.userid).subscribe()
  
   swal({
            
    title:"Approve Successfull",
    text:"Courses has been successfully approved",
    

  })
  }

  dissaprove(){
    this.authenticate.dissaprove(this.userid).subscribe()
    console.log()

    swal({
            
      title:"Dissaprove Successfull",
      text:"Courses has been successfully dissaproved",
      
  
    })

  }

  logout(){
    this.authenticate.logout()
    this.router.navigate(['/admin'])
    return false
  }
}
