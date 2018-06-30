import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object

  constructor(private authentication:AuthenticateService,
              private router : Router) { }

  ngOnInit() {
    this.getprofile()
  }
  getprofile(){
    this.authentication.getprofile().subscribe(profile=>{
      this.user = profile.user
      
    })
  }
  // function to logout user 
  onlogout(){
    this.authentication.logout()
    this.router.navigate(['/login'])
    return false
  }
}
