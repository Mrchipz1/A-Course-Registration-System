import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../../services/authenticate.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user:Object
  constructor(private authentication:AuthenticateService,
              private router:Router) { }

  ngOnInit() {
this.getprofile()

  }

  //creating a funtio to get user from backend
getprofile(){
  this.authentication.getprofile().subscribe(data=>{
    
    this.user = data.user
    
  })
}
// function to logout user 
onlogout(){
  this.authentication.logout()
  this.router.navigate(['/login'])
  return false
}

}
