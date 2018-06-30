import { Component, OnInit } from '@angular/core';
import { ValidateService} from "../../services/validate.service"
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthenticateService} from "../../services/authenticate.service"
import {Router} from "@angular/router"
import swal from 'sweetalert2'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname:String
  secondname:String
  email:String
  password:String
  approved:Number
  astatus:String
  rstatus:String
  level:Number //this is used in the authentication process because both adnin and user logges in via passport n/b not level of the student
  constructor(private validateservice:ValidateService,
              private flashservice:FlashMessagesService,
              private authenticate:AuthenticateService,
              private router:Router) { }
  //creating function to register user
  registeruser(){
    this.approved = 0
    this.astatus = 'Not Approved'
    this.rstatus = "Not Registered"
    this.level = 0
    
      const user = ({
        firstname:this.firstname,
        secondname:this.secondname,
        email:this.email,
        password:this.password,
        approved:this.approved,
       
        astatus:this.astatus,
        rstatus:this.rstatus,
        level:this.level
      })
      if(!this.validateservice.validatefields(user)){
        this.flashservice.show('please fill in all fields',{ cssClass: 'alert-danger', timeout: 1000 })
        return false
      }
      //service to validate our email
      if(!this.validateservice.validateemail(user.email)){
        this.flashservice.show('please Enter a valid Email',{ cssClass: 'alert-danger', timeout: 1000 })
        return false
      }
      this.authenticate.registeruser(user).subscribe(data=>{
        if(data.success){
          this.flashservice.show(data.msg,{ cssClass: 'alert-success', timeout: 1000 })
          this.router.navigate(['/login'])
        }
        else{
          this.flashservice.show(data.msg,{ cssClass: 'alert-danger', timeout: 1000 })
          this.router.navigate(['/register'])
        }

      })
  }

  ngOnInit() {
  }

}
