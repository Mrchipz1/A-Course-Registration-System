import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService} from "../../services/validate.service";
import { AdminauthenticateService} from "../../services/adminauthenticate.service"
import {Router} from "@angular/router"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  email:string
  password:String
  admin:Object

  constructor(private flashmessage:FlashMessagesService,
              private ValidateServie:ValidateService,
               private router:Router,
                private adminauthenticate:AdminauthenticateService) { }

               //validating login fields by calling a function
               
               loginuser(){

                const user = ({
                  email : this.email,
                  password:this.password,
                 
                })
                
                  //validating login fields by calling a function
                  if(!this.ValidateServie.validateloginfields(user)){
                    this.flashmessage.show("Fill in all fields",{ cssClass: 'alert-danger', timeout: 1000 })
                    return false
                  }
                  if(!this.ValidateServie.validateemail(user.email)){
                    this.flashmessage.show("Enter a valid email",{ cssClass: 'alert-danger', timeout: 1000 })
                    return false
                  }
                  this.adminauthenticate.loginuser(user).subscribe(data=>{
                    if(data.success){
                      this.adminauthenticate.admintoken(data.token)    
                                                                           
                      this.flashmessage.show(data.msg,{ cssClass: 'alert-success', timeout: 1000 })
                      this.router.navigate(['/management'])
                    }
                    else{
                    this.flashmessage.show(data.msg,{ cssClass: 'alert-danger', timeout: 1000 })
                    this.router.navigate(['/admin'])
                    }
                  })

                  
               }

  ngOnInit() {
  }

}
