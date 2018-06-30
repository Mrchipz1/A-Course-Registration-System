import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ValidateService} from "./services/validate.service";
import { AuthenticateService} from "./services/authenticate.service";
import { AdminauthenticateService} from "./services/adminauthenticate.service"

import {AuthGuard, AdminAuthGuard} from './services/auth-guard.service'


import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule,Routes} from '@angular/router';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistercoursesComponent } from './components/registercourses/registercourses.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManagementComponent } from './components/management/management.component';
import { ApprovecoursesComponent } from './components/approvecourses/approvecourses.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { RegisteradminComponent } from './components/registeradmin/registeradmin.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes:Routes = [
  {path:'', pathMatch:'full' ,redirectTo:'/home'},
  //{path:'**',pathMatch:'full',redirectTo:'/home'},
  {path:'login',component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path: 'profile',component:ProfileComponent,canActivate: [AuthGuard]},
  {path:'navbar',component:NavbarComponent},
  {path:'registercourses',component:RegistercoursesComponent,canActivate: [AuthGuard]},
  {path:'dashboard',component:DashboardComponent, canActivate: [AuthGuard]},
  {path:'changepassword',component:ChangepasswordComponent,canActivate: [AuthGuard]},
  {path:'admin',component:AdminComponent},
{path:'management',component:ManagementComponent,canActivate:[AdminAuthGuard]},
  {path:'approvecourses',component:ApprovecoursesComponent,canActivate:[AdminAuthGuard]},
  {path:'addcourses',component:AddcoursesComponent,canActivate:[AdminAuthGuard]},
  {path:'registeradmin',component:RegisteradminComponent},
  {path:'home',component:HomeComponent}
]





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    RegistercoursesComponent,
    DashboardComponent,
    ChangepasswordComponent,
    AdminComponent,
    ManagementComponent,
    ApprovecoursesComponent,
    AddcoursesComponent,
    RegisteradminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
    
  ],
  providers: [ValidateService,AuthenticateService,AdminauthenticateService,AuthGuard,AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
