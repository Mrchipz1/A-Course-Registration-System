import { Component, OnInit } from '@angular/core';
import { ValidateService} from "../../services/validate.service"
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthenticateService} from "../../services/authenticate.service"
import {Router} from "@angular/router"

@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrls: ['./registeradmin.component.css']
})
export class RegisteradminComponent implements OnInit {

  firstname:String
  secondname:String
  email:String
  password:String
  level:Number

  constructor(private validateservice:ValidateService,
    private flashservice:FlashMessagesService,
    private authenticate:AuthenticateService,
    private router:Router) { }

  ngOnInit() {
  }
//now we create a function to get what was inputed in the register fields
admindetails(){
  this.level = 1
  const user = ({
    firstname:this.firstname,
    secondname:this.secondname,
    email:this.email,
    password:this.password,
    level:this.level
  })
  //now we validate all fields 
  if (!this.validateservice.validatefields(user)){
    this.flashservice.show('please fill in all fields',{ cssClass: 'alert-danger', timeout: 1000 })
    return false
  }
  if(!this.validateservice.validateemail(user.email)){
    this.flashservice.show('please Enter a Valid Email',{ cssClass: 'alert-danger', timeout: 1000 })
    return false
  }

  this.authenticate.registeradmin(user).subscribe(data=>{
    if(data.success){
      this.flashservice.show(data.msg,{ cssClass: 'alert-success', timeout: 1000 })
      this.router.navigate(['/admin'])
      return false
    }
    else{
      this.flashservice.show(data.msg,{ cssClass: 'alert-danger', timeout: 1000 })

    }
  })
}
}
