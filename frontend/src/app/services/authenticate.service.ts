import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http"
import "rxjs/add/operator/map";
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthenticateService {
authtoken:any
  constructor(private http:Http) { }
  //creating a function to communicate with the backend

  registeruser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post('/users/register', user,{headers:headers})
    .map(res=>res.json());
  }

  //service to authenticate login user i.e communicate with the backend
  loginuser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post('/users/authenticate',user,{headers:headers})
    .map(res=>res.json())
  }

  //service to add courses via communication with the backened
  addcourses(courses){
    let headers = new Headers();
    headers.append('Content-Type',"application/json")
    return this.http.post('/users/addcourses',courses,{headers:headers})
    .map(res=>res.json())
  }
  //service to get all contacts from the database

  //service to get details when correct token is supplied
  getprofile(){
    let headers = new Headers()
    this.loadtoken()
    headers.append('Authorization',this.authtoken)
    return this.http.get('/users/profile',{headers:headers})
    .map(res=>res.json())
  }
//create service to add registered courses int the database
registercourses(courses){
  
  let headers = new Headers()
  headers.append('Content-Type','application/json')
  return this.http.post('/users/registercourses',courses,{headers:headers})
  .map(res=>res.json())
}
  //create a function to load token
  loadtoken(){
    const token = localStorage.getItem('user_token')
    this.authtoken = token
  }

  getcourses(){
    return this.http.get('/users/getcourses')
    .map(res=>res.json().courses)
  }

  //function to get all students 
  getstudents(){
    return this.http.get('/users/getstudents')
    .map(res=>res.json())
  }

  getregisterdcourses(email){
   
    let headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('/users/getregisteredcourses',email,{headers:headers})
    .map(res=>res.json().user.user)
  }

  //service to update all the registered parameters

  updatereg(id){
   
    let headers = new Headers()
    headers.append('Content-Type','application/json')
 return this.http.put("/users/updateapproval/"+id,{headers:headers})
 .map(res=>res.json())
  }

  //service to store user in local storage
  storeuser(token,user){
 localStorage.setItem('user_token',token)
 //localStorage.setItem('user',JSON.stringify(user))
  }

  //service to logout user
  logout(){
    localStorage.clear()
    this.authtoken = null
  }
  //for checking if her is a token
  loggedIn() {
    return tokenNotExpired('user_token');
  }

  
 //creating the service to communicate with the backend api and change the approval status

 updatestatus2(id){
   let headers = new Headers()
   headers.append('Content-Type',"application/json")
   return this.http.put('/users/updateapproval2/'+id,{headers:headers})
   .map(res=>res.json())
 }

 //service to dissaprove user course registraton 

 dissaprove(id){
   let headers = new Headers()
   headers.append('Content-Type','application/json')
   return this.http.put('/users/disaprove/'+id,{headers:headers})
   .map(res=>res.json())
 }

 // creating a service to delete courses

 delete(id){
   let headers = new Headers()
   headers.append('Content-Type','application/json')
   return this.http.put('/users/deletecourses/'+id,{headers:headers})
 }

 registeradmin(admin){
let headers = new Headers()
headers.append("Content-Type","application/json")
return this.http.post("/users/registeradmin",admin,{headers:headers})
.map(res=>res.json())
 }

}

