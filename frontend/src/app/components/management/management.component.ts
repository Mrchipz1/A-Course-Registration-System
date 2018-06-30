import { Component, OnInit } from '@angular/core';
import {AdminauthenticateService} from '../../services/adminauthenticate.service'
import {AuthenticateService} from '../../services/authenticate.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  admin:Object

  constructor(private adminauthenticate:AdminauthenticateService,
              private authenticate:AuthenticateService,
               private router:Router) { }

  ngOnInit() {
    this.getadmin()
  }

  //function to get user details

getadmin(){
  this.adminauthenticate.authenticate().subscribe(data=>{
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
