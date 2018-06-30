import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import "rxjs/add/operator/map"
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AdminauthenticateService {
  atoken:any

  constructor(private http:Http) { }

  //creating a function to login user
  loginuser(user){
    let headers = new Headers();
    headers.append('Content-Type',"application/json")
    return this.http.post("/users/admin", user,{headers:headers})
    .map(res=>res.json())
  }
   
  //creating a function t set token for admin user
  admintoken(admintoken){
    localStorage.setItem('admintoken',admintoken)
   }

   // creating a function to get the token of trhe user
   loadtoken(){
    const admin =  localStorage.getItem('admintoken')
    this.atoken = admin
    
     
   }
//function to get users of admin using the token
authenticate(){
  let headers = new Headers()
  this.loadtoken()
  headers.append("Authorization",this.atoken)
  return this.http.get("/users/adminprofile",{headers:headers})
  .map(res=>res.json())
}


  //for admin to check if th user is logged in 

  loggedIn() {
    return tokenNotExpired('admintoken');
  }
}
