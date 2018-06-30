import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
import { AdminauthenticateService} from './adminauthenticate.service'
 
@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor(private auth: AuthenticateService, private router: Router,private admin:AdminauthenticateService) {}
 
  canActivate() {

    if(this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

 
  
}
@Injectable()
export class AdminAuthGuard implements CanActivate {
 
  constructor(private auth: AuthenticateService, private router: Router,private admin:AdminauthenticateService) {}
 
  canActivate() {

    if(this.admin.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/admin']);
      return false;
    }
  }

 
  
}

