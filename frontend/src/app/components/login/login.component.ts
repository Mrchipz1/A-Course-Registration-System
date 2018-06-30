import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService} from "../../services/validate.service";
import { AuthenticateService} from "../../services/authenticate.service"
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String
  password:String

  constructor(private flashmessage:FlashMessagesService,
              private Validate:ValidateService,
              private authenticate:AuthenticateService,
              private router:Router) { }

  //function to login users
  loginuser(){
    const user = ({
      email:this.email,
      password:this.password
    })

    //validating this user if not defined
  if(!this.Validate.validateloginfields(user)){
    
    this.flashmessage.show('please fill in all fields',{ cssClass: 'alert-danger', timeout: 1000 })
    return false
  }

      
    //we call a funtion to validate login field
    if(!this.Validate.validateemail(user.email)){
      this.flashmessage.show('please Enter a valid email',{ cssClass: 'alert-danger', timeout: 1000 })
      return false
    }

    this.authenticate.loginuser(user).subscribe(data=>{
      if(data.success){
        this.authenticate.storeuser(data.token,data.user)
        this.flashmessage.show(data.msg,{ cssClass: 'alert-success', timeout: 1000 })
        this.router.navigate(['/dashboard'])
      }
      else{
        this.flashmessage.show(data.msg,{ cssClass: 'alert-danger', timeout: 1000 })
        this.router.navigate(['/login'])
      }
    })

    

  }

  ngOnInit() {
  }

}
