webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/addcourses/addcourses.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/addcourses/addcourses.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"admin\" id=\"app\">\t\t\n    <div class=\"sidebar app-aside\" id=\"sidebar\">\n            <div class=\"sidebar-container perfect-scrollbar\">\n                <nav>\n                \n                <!-- start: MAIN NAVIGATION MENU -->\n                <div class=\"navbar-title\">\n                  <span>Main Navigation</span>\n                  \n                </div>\n                <ul class=\"main-navigation-menu\">\n                    <li>\n                        <a [routerLink]=\"['/management']\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                  <i class=\"ti-home\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n\n                                  <span class=\"title\"> Dashboard </span>\n                                </div>\n                              </div>\n                            </a>\n                          </li>\n                          <li>\n                              <a [routerLink]=\"['/approvecourses']\">\n                                  <div class=\"item-content\">\n                                      <div class=\"item-media\">\n                                        <i class=\"ti-home\"></i>\n                                      </div>\n                                      <div class=\"item-inner\">\n                                        <span class=\"title\"> Approve Course Registration </span>\n                                      </div>\n                                    </div>\n                                  </a>\n                                </li>\n                                <li>\n                                    <a [routerLink]=\"['/addcourses']\">\n                                        <div class=\"item-content\">\n                                            <div class=\"item-media\">\n                                              <i class=\"ti-home\"></i>\n                                            </div>\n                                            <div class=\"item-inner\">\n                                              <span class=\"title\"> Add Courses </span>\n                                            </div>\n                                          </div>\n                                        </a>\n                                      </li>\n                                        \n                                      \n        </ul>\n        </nav>\n        </div>\n        </div>\n        <div class=\"app-content\">\n            <header class=\"navbar navbar-default navbar-static-top\">\n                <div class=\"navbar-header\">\n                    <a href=\"#\" class=\"sidebar-mobile-toggler pull-left hidden-md hidden-lg\" class=\"btn btn-navbar sidebar-toggle\" data-toggle-class=\"app-slide-off\" data-toggle-target=\"#app\" data-toggle-click-outside=\"#sidebar\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"navbar-brand\" href=\"#\">\n                      <h2 style=\"padding-top:2% \">Admin portal</h2>\n                    </a>\n                    <a href=\"#\" class=\"sidebar-toggler pull-right visible-md visible-lg\" data-toggle-class=\"app-sidebar-closed\" data-toggle-target=\"#app\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"pull-right menu-toggler visible-xs-block\" id=\"menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                      <span class=\"sr-only\">Toggle navigation</span>\n                      <i class=\"ti-view-grid\"></i>\n                    </a>\n                  </div>\n                  <div class=\"navbar-collapse collapse\">\n                      <ul class=\"nav navbar-right\">\n                        <!-- start: MESSAGES DROPDOWN -->\n                          <li  style=\"padding-top:2% \">\n                          <h2>{{admin.firstname}},{{admin.secondname}}</h2>\n                        </li>\n                        <li class=\"dropdown current-user\">\n                            <a href class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                              <img src=\"assets/images/avatar-1.jpg\" alt=\"Peter\"> <span class=\"username\">\n                                  <i class=\"ti-angle-down\"></i></span>\n                                  </a>\n                                  <ul class=\"dropdown-menu dropdown-dark\">\n                      \n                    \n                                      \n                                      <li>\n                                        <a href=\"#\" (click) = 'logout()'>\n                                          Log Out\n                                        </a>\n                                      </li>\n                                    </ul>\n                                    </li>\n                                    </ul>\n                                    <div class=\"close-handle visible-xs-block menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                                        <div class=\"arrow-left\"></div>\n                                        <div class=\"arrow-right\"></div>\n                                      </div>\n                                      </div>\n                                    </header>\n                                    <div class=\"main-content\" >\n                                        <div class=\"wrap-content container\" id=\"container\">\n                                            <section id=\"page-title\">\n                                                <div class=\"row\">\n                                                  <div class=\"col-sm-8\">\n                                                    <h1 class=\"mainTitle\">{{admin.secondname}}| Dashboard</h1>\n                                                                    </div>\n                                                  <ol class=\"breadcrumb\">\n                                                    <li>\n                                                      <span>{{admin.firstname}}</span>\n                                                    </li>\n                                                    <li class=\"active\">\n                                                      <span>Dashboard</span>\n                                                    </li>\n                                                  </ol>\n                                                </div>\n                                              </section>\n                                              <div class=\"container-fluid container-fullw bg-white\">\n                                                  <div class=\"row\">\n                                                    <div class=\"col-md-12\">\n                                                      \n                                                      <div class=\"row margin-top-30\">\n                                                        <div class=\"col-lg-8 col-md-12\">\n                                                          <div class=\"panel panel-white\">\n                                                            <div class=\"panel-heading\">\n                                                                <flash-messages></flash-messages>\n                                                              <h5 class=\"panel-title\">Add Courses</h5>\n                                                            </div>\n                                                            <div class=\"panel-body\">\n                                                                <div class=\"box-login\">\n                                                                    <form role=\"form\">\n                                                                        <div class=\"form-group\">\n                                                                    \n                                                                        \n                                                                        <label for=\"doctorname\">\n                                                                            Enter course code\n                                                                         </label>\n                                                                         <input type=\"text\" class=\"mainTitle\" [(ngModel)]=\"coursecode\"  name = \"coursecode\" class=\"form-control\"  placeholder=\"Enter coursecode\">\n                                                                         </div>\n                                                                         <div class=\"form-group\">\n                                                                    \n                                                                        \n                                                                            <label for=\"doctorname\">\n                                                                                Enter course Title\n                                                                             </label>\n                                                                             <input type=\"text\"  class=\"form-control\"   [(ngModel)]=\"coursetitle\"  name = \"coursetitle\" placeholder=\"Enter Course Title\">\n                                                                             </div>\n                                                                             <div class=\"form-group\">\n                                                                    \n                                                                        \n                                                                                <label for=\"doctorname\">\n                                                                                    Enter course Unit\n                                                                                 </label>\n                                                                                 <input type=\"number\"  class=\"form-control\"  [(ngModel)]=\"courseunit\"  name = \"courseunit\" placeholder=\"Enter Course Unit\">\n                                                                                 </div>\n                                                                                 \n                                                                                     <div class=\"form-group\">\n\n                                                                                    <div class=\"form-actions\">\n            \n                                                                                        <button type=\"submit\"  class=\"btn btn-primary pull-right\" name=\"login\" (click)=\"addcourses()\">\n                                                                                          Submit <i class=\"fa fa-arrow-circle-right\"></i>\n                                                                                        </button>\n                                                                                      </div>\n                                                                                      <table class=\"table table-hover\" id=\"sample-table-1\" >\n                                                                                          <thead>\n                                                                                            <tr>\n                                                                                              \n                                                                                               \n                                                                                              <th>Course Code</th>\n                                                                                              <th>Course Title</th>\n                                                                                              <th>Course Unit</th>\n                                                                                              \n                                                                                              <th>Delete Course</th>\n                                                                                              \n                                                                                              \n                                                                                              \n                                                                                            </tr >\n                                                                                            <tr *ngFor = \"let course of courses\">\n                                                                                               \n                                                                                              <td>{{course.coursecode}}</td>\n                                                                                              <td>{{course.coursetitle}}</td>\n                                                                                              <td>{{course.courseunit}}</td>\n                                                                                             \n                                                                                              <td><button type=\"submit\"  class=\"btn btn-o btn-primary\" (click)=\"deletecourses(course._id)\" >Delete</button>\n                                                                                              </td>\t\t\t\t\t\n                                                                                            </tr>\n                                                                                            \n                                                                                          </thead>\n                                                                    \n                                                                        \n                                                                                   \n                                                                                     \n                                                                                    \n                                                                                     \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                                         "

/***/ }),

/***/ "../../../../../src/app/addcourses/addcourses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_adminauthenticate_service__ = __webpack_require__("../../../../../src/app/services/adminauthenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcoursesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddcoursesComponent = (function () {
    function AddcoursesComponent(validate, flashmessage, authenticate, adminauth, router) {
        this.validate = validate;
        this.flashmessage = flashmessage;
        this.authenticate = authenticate;
        this.adminauth = adminauth;
        this.router = router;
    }
    //function to add user into the database
    AddcoursesComponent.prototype.addcourses = function () {
        var _this = this;
        var courses = ({
            coursecode: this.coursecode,
            coursetitle: this.coursetitle,
            courseunit: this.courseunit,
        });
        //now we call the validate function
        if (!this.validate.validatecourses(courses)) {
            this.flashmessage.show('please fill in all fields', { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
        //caliing the service to input course into the database
        this.authenticate.addcourses(courses).subscribe(function (data) {
            if (data.success) {
                _this.flashmessage.show(data.msg, { cssClass: 'alert-success', timeout: 1000 });
                _this.getcourses();
            }
            else {
                _this.flashmessage.show(data.msg, { cssClass: 'alert-danger', timeout: 1000 });
            }
        });
    };
    AddcoursesComponent.prototype.ngOnInit = function () {
        this.getadmin();
        this.getcourses();
    };
    //fucion for buttn
    AddcoursesComponent.prototype.button = function () {
        this.Button = false;
    };
    //function to get courses
    AddcoursesComponent.prototype.getcourses = function () {
        var _this = this;
        this.authenticate.getcourses().subscribe(function (courses) {
            _this.courses = courses;
        });
    };
    //function to delete courses
    AddcoursesComponent.prototype.deletecourses = function (id) {
        this.getcourses();
        this.authenticate.delete(id).subscribe();
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            title: "Delete Successfull",
            text: "Courses has been successfully deleted,Please reload page",
        });
    };
    //functin to display admin details
    AddcoursesComponent.prototype.getadmin = function () {
        var _this = this;
        this.adminauth.authenticate().subscribe(function (data) {
            if (data.user) {
                _this.admin = data.user;
            }
        });
    };
    AddcoursesComponent.prototype.logout = function () {
        this.authenticate.logout();
        this.router.navigate(['/admin']);
        return false;
    };
    return AddcoursesComponent;
}());
AddcoursesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addcourses',
        template: __webpack_require__("../../../../../src/app/addcourses/addcourses.component.html"),
        styles: [__webpack_require__("../../../../../src/app/addcourses/addcourses.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__["a" /* AuthenticateService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_adminauthenticate_service__["a" /* AdminauthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_adminauthenticate_service__["a" /* AdminauthenticateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _e || Object])
], AddcoursesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=addcourses.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<flash-messages></flash-messages>\r\n<router-outlet></router-outlet>\r\n\r\n    \r\n   \r\n    \r\n\r\n    "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_adminauthenticate_service__ = __webpack_require__("../../../../../src/app/services/adminauthenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_registercourses_registercourses_component__ = __webpack_require__("../../../../../src/app/components/registercourses/registercourses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_changepassword_changepassword_component__ = __webpack_require__("../../../../../src/app/components/changepassword/changepassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_management_management_component__ = __webpack_require__("../../../../../src/app/components/management/management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_approvecourses_approvecourses_component__ = __webpack_require__("../../../../../src/app/components/approvecourses/approvecourses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__addcourses_addcourses_component__ = __webpack_require__("../../../../../src/app/addcourses/addcourses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_registeradmin_registeradmin_component__ = __webpack_require__("../../../../../src/app/components/registeradmin/registeradmin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    //{path:'**',pathMatch:'full',redirectTo:'/home'},
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'navbar', component: __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'registercourses', component: __WEBPACK_IMPORTED_MODULE_15__components_registercourses_registercourses_component__["a" /* RegistercoursesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'changepassword', component: __WEBPACK_IMPORTED_MODULE_17__components_changepassword_changepassword_component__["a" /* ChangepasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_18__components_admin_admin_component__["a" /* AdminComponent */] },
    { path: 'management', component: __WEBPACK_IMPORTED_MODULE_19__components_management_management_component__["a" /* ManagementComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["b" /* AdminAuthGuard */]] },
    { path: 'approvecourses', component: __WEBPACK_IMPORTED_MODULE_20__components_approvecourses_approvecourses_component__["a" /* ApprovecoursesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["b" /* AdminAuthGuard */]] },
    { path: 'addcourses', component: __WEBPACK_IMPORTED_MODULE_21__addcourses_addcourses_component__["a" /* AddcoursesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["b" /* AdminAuthGuard */]] },
    { path: 'registeradmin', component: __WEBPACK_IMPORTED_MODULE_22__components_registeradmin_registeradmin_component__["a" /* RegisteradminComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_23__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_registercourses_registercourses_component__["a" /* RegistercoursesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_changepassword_changepassword_component__["a" /* ChangepasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_management_management_component__["a" /* ManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_approvecourses_approvecourses_component__["a" /* ApprovecoursesComponent */],
            __WEBPACK_IMPORTED_MODULE_21__addcourses_addcourses_component__["a" /* AddcoursesComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_registeradmin_registeradmin_component__["a" /* RegisteradminComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_12_angular2_flash_messages__["FlashMessagesModule"].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_5__services_authenticate_service__["a" /* AuthenticateService */], __WEBPACK_IMPORTED_MODULE_6__services_adminauthenticate_service__["a" /* AdminauthenticateService */], __WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["b" /* AdminAuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"main-login col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4\">\n      <div class=\"logo margin-top-30\">\n      <h2>Admin Login</h2>\n      </div>\n  \n      <div class=\"box-login\">\n                <form class=\"form-login\" (submit)=\"loginuser()\" >\n          <fieldset>\n            <legend>\n              Sign in to your account\n            </legend>\n            <p>\n              Please enter your name and password to log in.<br />\n              <span style=\"color:red;\"></span>\n            </p>\n            <div class=\"form-group\" >\n              <span class=\"input-icon\">\n                <input type=\"text\" [(ngModel)] = 'email' name=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n                <i class=\"fa fa-user\"></i> </span>\n            </div>\n            <div class=\"form-group form-actions\">\n              <span class=\"input-icon\">\n                <input type=\"password\" [(ngModel)] = 'password' name=\"password\" class=\"form-control password\" name=\"password\" placeholder=\"Password\"><i class=\"fa fa-lock\"></i>\n                 </span>\n            </div>\n            <div class=\"form-actions\">\n              \n              <button type=\"submit\" class=\"btn btn-primary pull-right\" name=\"login\">\n                Login <i class=\"fa fa-arrow-circle-right\"></i>\n              </button>\n            </div>\n            \n           \n            <a  [routerLink] = \"['/registeradmin']\">Click here to register admin account</a>\n              </fieldset>\n            </form>\n  \n            <div class=\"copyright\">\n              &copy; <span class=\"current-year\"></span><span class=\"text-bold text-uppercase\"> SteveInc</span>. <span>All rights reserved</span>\n            </div>\n        \n          </div>\n  \n        </div>\n      </div>\n            "

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_adminauthenticate_service__ = __webpack_require__("../../../../../src/app/services/adminauthenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = (function () {
    function AdminComponent(flashmessage, ValidateServie, router, adminauthenticate) {
        this.flashmessage = flashmessage;
        this.ValidateServie = ValidateServie;
        this.router = router;
        this.adminauthenticate = adminauthenticate;
    }
    //validating login fields by calling a function
    AdminComponent.prototype.loginuser = function () {
        var _this = this;
        var user = ({
            email: this.email,
            password: this.password,
        });
        //validating login fields by calling a function
        if (!this.ValidateServie.validateloginfields(user)) {
            this.flashmessage.show("Fill in all fields", { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
        if (!this.ValidateServie.validateemail(user.email)) {
            this.flashmessage.show("Enter a valid email", { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
        this.adminauthenticate.loginuser(user).subscribe(function (data) {
            if (data.success) {
                _this.adminauthenticate.admintoken(data.token);
                _this.flashmessage.show(data.msg, { cssClass: 'alert-success', timeout: 1000 });
                _this.router.navigate(['/management']);
            }
            else {
                _this.flashmessage.show(data.msg, { cssClass: 'alert-danger', timeout: 1000 });
                _this.router.navigate(['/admin']);
            }
        });
    };
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_adminauthenticate_service__["a" /* AdminauthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_adminauthenticate_service__["a" /* AdminauthenticateService */]) === "function" && _d || Object])
], AdminComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/approvecourses/approvecourses.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/approvecourses/approvecourses.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf = 'admin' id=\"app\">\t\t\n    <div class=\"sidebar app-aside\" id=\"sidebar\">\n            <div class=\"sidebar-container perfect-scrollbar\">\n                <nav>\n                \n                <!-- start: MAIN NAVIGATION MENU -->\n                <div class=\"navbar-title\">\n                  <span>Main Navigation</span>\n                  \n                </div>\n                <ul class=\"main-navigation-menu\">\n                    <li>\n                        <a [routerLink]=\"['/management']\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                  <i class=\"ti-home\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                  <span class=\"title\"> Dashboard </span>\n                                </div>\n                              </div>\n                            </a>\n                          </li>\n                          <li>\n                              <a [routerLink]=\"['/approvecourses']\">\n                                  <div class=\"item-content\">\n                                      <div class=\"item-media\">\n                                        <i class=\"ti-home\"></i>\n                                      </div>\n                                      <div class=\"item-inner\">\n                                        <span class=\"title\"> Approve Course Registration </span>\n                                      </div>\n                                    </div>\n                                  </a>\n                                </li>\n                                <li>\n                                    <a [routerLink]=\"['/addcourses']\">\n                                        <div class=\"item-content\">\n                                            <div class=\"item-media\">\n                                              <i class=\"ti-home\"></i>\n                                            </div>\n                                            <div class=\"item-inner\">\n                                              <span class=\"title\"> Add Courses </span>\n                                            </div>\n                                          </div>\n                                        </a>\n                                      </li>\n                                        \n                                     \n        </ul>\n        </nav>\n        </div>\n        </div>\n        <div class=\"app-content\">\n            <header class=\"navbar navbar-default navbar-static-top\">\n                <div class=\"navbar-header\">\n                    <a href=\"#\" class=\"sidebar-mobile-toggler pull-left hidden-md hidden-lg\" class=\"btn btn-navbar sidebar-toggle\" data-toggle-class=\"app-slide-off\" data-toggle-target=\"#app\" data-toggle-click-outside=\"#sidebar\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"navbar-brand\" href=\"#\">\n                      <h2 style=\"padding-top:2% \">Admin portal</h2>\n                    </a>\n                    <a href=\"#\" class=\"sidebar-toggler pull-right visible-md visible-lg\" data-toggle-class=\"app-sidebar-closed\" data-toggle-target=\"#app\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"pull-right menu-toggler visible-xs-block\" id=\"menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                      <span class=\"sr-only\">Toggle navigation</span>\n                      <i class=\"ti-view-grid\"></i>\n                    </a>\n                  </div>\n                  <div class=\"navbar-collapse collapse\">\n                      <ul class=\"nav navbar-right\">\n                        <!-- start: MESSAGES DROPDOWN -->\n                          <li  style=\"padding-top:2% \">\n                          <h2>{{admin.firstname}},{{admin.secondname}} </h2>\n                        </li>\n                        <li class=\"dropdown current-user\">\n                            <a href class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                              <img src=\"assets/images/avatar-1.jpg\" alt=\"Peter\"> <span class=\"username\">\n                                  <i class=\"ti-angle-down\"></i></span>\n                                  </a>\n                                  <ul class=\"dropdown-menu dropdown-dark\">\n                      \n                    \n                                      \n                                      <li>\n                                        <a href=\"#\" (click) = \"logout()\">\n                                          Log Out\n                                        </a>\n                                      </li>\n                                    </ul>\n                                    </li>\n                                    </ul>\n                                    <div class=\"close-handle visible-xs-block menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                                        <div class=\"arrow-left\"></div>\n                                        <div class=\"arrow-right\"></div>\n                                      </div>\n                                      </div>\n                                    </header>\n                                    <div class=\"main-content\" >\n                                        <div class=\"wrap-content container\" id=\"container\">\n                                            <section id=\"page-title\">\n                                                <div class=\"row\">\n                                                  <div class=\"col-sm-8\">\n                                                    <h1 class=\"mainTitle\">{{admin.secondname}}| Dashboard</h1>\n                                                                    </div>\n                                                  <ol class=\"breadcrumb\">\n                                                    <li>\n                                                      <span>{{admin.firstname}}</span>\n                                                    </li>\n                                                    <li class=\"active\">\n                                                      <span>Dashboard</span>\n                                                    </li>\n                                                  </ol>\n                                                </div>\n                                              </section>\n                                              <div class=\"container-fluid container-fullw bg-white\">\n                                                  <div class=\"row\">\n                                                    <div class=\"col-md-12\">\n                                                        <div class=\"row margin-top-30\">\n                                                            <div class=\"col-lg-8 col-md-12\">\n                                                              <div class=\"panel panel-white\">\n                                                                <div class=\"panel-heading\">\n                                                                  <h5 class=\"panel-title\">Approve Course Registration</h5>\n                                                                </div>\n                                                                <div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"box-login\">\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<form role=\"form\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n                                <table class=\"table table-hover\" id=\"sample-table-1\">\n                                    <thead>\n                                        <tr>\n                                          \n                                          <th>First Name</th>\n                                          <th>Secondname</th>\n                                      \n                                          <th>Registration Status</th>\n                                          <th>Approval Status</th>\n                                          <th>View/Approve/Dissaprove</th>\n                                         \n                                          \n                                          \n                                          \n                                        </tr>\n                                        <tr *ngFor =\"let name of students\">\n                                          <td>{{name.firstname}}</td>\n                                          <td>{{name.secondname}}</td>\n                                          <td>{{name.rstatus}}</td>\n                                          <td>{{name.astatus}}</td>\n                                          \n                                          <td><button class=\"btn btn-o btn-primary\" data-toggle = 'modal' data-target = \"#coursemodal\" (click) = \"getcourses(name.email,name._id)\">\n                                            View/Approve/Dissaprove\n                                          </button></td>\n                                          \t\n                                        </tr>\n                                      </thead>\n                                      </table>\n                                      </div>\n                                      </form>\n                                      \n                                      <form>\n                                      <div id = \"coursemodal\" class=\"modal fade\">\n                                          <div class=\"modal-dialog\"  >\n                                            <div class=\"modal-content\">\n                                              <div class=\"modal-header\" >\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                              <h4 class=\"modal-title\" > Courses Registered </h4>\n                                              </div>\n                                              <div class=\"modal-body\">\n                                                  <table class=\"table table-hover\" id=\"sample-table-1\">\n                                                      <thead>\n                                                          <tr>\n                                                            \n                                                            <th>Course Code</th>\n                                                            <th>Course Title</th>\n                                                            <th>Course Unit</th>\n                                                            \n\n                                                            </tr>\n                                                           \n                                                            <tr *ngFor = \"let course of courses\">\n                                                             <td>{{course.coursecode}}</td>\n                                                             <td>{{course.coursetitle}}</td>\n                                                             <td>{{course.courseunit}}</td>\n                                                            \n                                                            </tr>\n                                                            </thead>\n                                                            </table>\n                                              </div>\n                                              <div class=\"modal-footer\">\n                                                  <button type=\"button\" class=\"btn btn-default\" (click) = \"updateapproval()\" data-dismiss=\"modal\">Approve Registration</button>\n                                                  <button type=\"button\" class=\"btn btn-default\" (click)=\" dissaprove()\" data-dismiss=\"modal\">Dissaprove Registration</button>\n                                              </div>\n                                          </div>\n                                        </div>\n                                        </div>\n                                        \n                                      </form>\n                                  \n\n                  "

/***/ }),

/***/ "../../../../../src/app/components/approvecourses/approvecourses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_adminauthenticate_service__ = __webpack_require__("../../../../../src/app/services/adminauthenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovecoursesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApprovecoursesComponent = (function () {
    function ApprovecoursesComponent(authenticate, adminauth, router) {
        this.authenticate = authenticate;
        this.adminauth = adminauth;
        this.router = router;
        this.user = {};
        this.userid = String;
    }
    ApprovecoursesComponent.prototype.ngOnInit = function () {
        this.getstudents();
        this.getadmin();
    };
    //function to get all students
    ApprovecoursesComponent.prototype.getstudents = function () {
        var _this = this;
        this.authenticate.getstudents().subscribe(function (data) {
            _this.students = data;
        });
    };
    //creating a function to get the courses registerd by this user
    ApprovecoursesComponent.prototype.getcourses = function (email, userid) {
        var _this = this;
        this.userid = userid;
        //console.log(this.userid)
        var uemail = ({ email: email });
        this.authenticate.getregisterdcourses(uemail).subscribe(function (data) {
            _this.courses = data;
        });
    };
    //function to get admin details
    ApprovecoursesComponent.prototype.getadmin = function () {
        var _this = this;
        this.adminauth.authenticate().subscribe(function (data) {
            if (data.user) {
                _this.admin = data.user;
            }
        });
    };
    //function to update the approval status of the user
    ApprovecoursesComponent.prototype.updateapproval = function () {
        this.authenticate.updatestatus2(this.userid).subscribe();
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: "Approve Successfull",
            text: "Courses has been successfully approved",
        });
    };
    ApprovecoursesComponent.prototype.dissaprove = function () {
        this.authenticate.dissaprove(this.userid).subscribe();
        console.log();
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: "Dissaprove Successfull",
            text: "Courses has been successfully dissaproved",
        });
    };
    ApprovecoursesComponent.prototype.logout = function () {
        this.authenticate.logout();
        this.router.navigate(['/admin']);
        return false;
    };
    return ApprovecoursesComponent;
}());
ApprovecoursesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-approvecourses',
        template: __webpack_require__("../../../../../src/app/components/approvecourses/approvecourses.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/approvecourses/approvecourses.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_adminauthenticate_service__["a" /* AdminauthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_adminauthenticate_service__["a" /* AdminauthenticateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ApprovecoursesComponent);

var _a, _b, _c;
//# sourceMappingURL=approvecourses.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/changepassword/changepassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/changepassword/changepassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf ='user' id=\"app\">\t\t\n    <div class=\"sidebar app-aside\" id=\"sidebar\">\n            <div class=\"sidebar-container perfect-scrollbar\">\n                <nav>\n                \n                <!-- start: MAIN NAVIGATION MENU -->\n                <div class=\"navbar-title\">\n                  <span>Main Navigation</span>\n                  \n                </div>\n                <ul class=\"main-navigation-menu\">\n                    <li>\n                        <a [routerLink]=\"['/dashboard']\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                  <i class=\"ti-home\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                  <span class=\"title\"> Dashboard </span>\n                                </div>\n                              </div>\n                            </a>\n                          </li>\n                          <li>\n                              <a [routerLink]=\"['/registercourses']\">\n                                  <div class=\"item-content\">\n                                      <div class=\"item-media\">\n                                        <i class=\"ti-home\"></i>\n                                      </div>\n                                      <div class=\"item-inner\">\n                                        <span class=\"title\"> Register Courses </span>\n                                      </div>\n                                    </div>\n                                  </a>\n                                </li>\n                                <li>\n                                    <a [routerLink]=\"['/profile']\">\n                                        <div class=\"item-content\">\n                                            <div class=\"item-media\">\n                                              <i class=\"ti-home\"></i>\n                                            </div>\n                                            <div class=\"item-inner\">\n                                              <span class=\"title\"> Profile </span>\n                                            </div>\n                                          </div>\n                                        </a>\n                                      </li>\n                                        \n                                      <li>\n                                          <a [routerLink]=\"['/changepassword']\">\n                                              <div class=\"item-content\">\n                                                  <div class=\"item-media\">\n                                                    <i class=\"ti-home\"></i>\n                                                  </div>\n                                                  <div class=\"item-inner\">\n                                                    <span class=\"title\"> Change Password </span>\n                                                  </div>\n                                                </div>\n                                              </a>\n                                            </li>\n        </ul>\n        </nav>\n        </div>\n        </div>\n        <div class=\"app-content\">\n            <header class=\"navbar navbar-default navbar-static-top\">\n                <div class=\"navbar-header\">\n                    <a href=\"#\" class=\"sidebar-mobile-toggler pull-left hidden-md hidden-lg\" class=\"btn btn-navbar sidebar-toggle\" data-toggle-class=\"app-slide-off\" data-toggle-target=\"#app\" data-toggle-click-outside=\"#sidebar\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"navbar-brand\" href=\"#\">\n                      <h2 style=\"padding-top:2% \">Student portal</h2>\n                    </a>\n                    <a href=\"#\" class=\"sidebar-toggler pull-right visible-md visible-lg\" data-toggle-class=\"app-sidebar-closed\" data-toggle-target=\"#app\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"pull-right menu-toggler visible-xs-block\" id=\"menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                      <span class=\"sr-only\">Toggle navigation</span>\n                      <i class=\"ti-view-grid\"></i>\n                    </a>\n                  </div>\n                  <div class=\"navbar-collapse collapse\">\n                      <ul class=\"nav navbar-right\">\n                        <!-- start: MESSAGES DROPDOWN -->\n                          <li  style=\"padding-top:2% \">\n                          <h2>{{user.firstname}} {{user.secondname}} </h2>\n                        </li>\n                        <li class=\"dropdown current-user\">\n                            <a href class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                              <img src=\"assets/images/avatar-1.jpg\" alt=\"Peter\"> <span class=\"username\">\n                                  <i class=\"ti-angle-down\"></i></span>\n                                  </a>\n                                  <ul class=\"dropdown-menu dropdown-dark\">\n                      \n                    \n                                      <li>\n                                        <a [routerLink]='[\"/changepassword\"]'>\n                                          Change Password\n                                        </a>\n                                      </li>\n                                      <li>\n                                        <a href=\"#\" (click)='onlogout()'>\n                                          Log Out\n                                        </a>\n                                      </li>\n                                    </ul>\n                                    </li>\n                                    </ul>\n                                    <div class=\"close-handle visible-xs-block menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                                        <div class=\"arrow-left\"></div>\n                                        <div class=\"arrow-right\"></div>\n                                      </div>\n                                      </div>\n                                    </header>\n                                    <div class=\"main-content\" >\n                                        <div class=\"wrap-content container\" id=\"container\">\n                                            <section id=\"page-title\">\n                                                <div class=\"row\">\n                                                  <div class=\"col-sm-8\">\n                                                    <h1 class=\"mainTitle\">{{user.secondname}} | Dashboard</h1>\n                                                                    </div>\n                                                  <ol class=\"breadcrumb\">\n                                                    <li>\n                                                      <span>{{user.firstname}}</span>\n                                                    </li>\n                                                    <li class=\"active\">\n                                                      <span>Dashboard</span>\n                                                    </li>\n                                                  </ol>\n                                                </div>\n                                              </section>\n                                              <div class=\"container-fluid container-fullw bg-white\">\n                                                  <div class=\"row\">\n                                                    <div class=\"col-md-12\">\n                                                        <div class=\"row margin-top-30\">\n                                                            <div class=\"col-lg-8 col-md-12\">\n                                                              <div class=\"panel panel-white\">\n                                                                <div class=\"panel-heading\">\n                                                                  <h5 class=\"panel-title\">Change Password</h5>\n                                                                </div>\n                                                                <div class=\"panel-body\">\n                                                        <p style=\"color:red;\">\t\t\t\t\t\t\t\t</p>\t\n                                                                  <form role=\"form\" name=\"chngpwd\" action = \"resetpassword.php\" method=\"post\" onSubmit=\"return valid();\">\n                                                                    \n                                                                    <div class=\"form-group\">\n                                                                      <label for=\"exampleInputPassword1\">\n                                                                        New Password\n                                                                      </label>\n                                                  <input type=\"password\" name=\"npass\" class=\"form-control\"  placeholder=\"New Password\">\n                                                                    </div>\n                                                                    \n                                        <div class=\"form-group\">\n                                                                      <label for=\"exampleInputPassword1\">\n                                                                        Confirm Password\n                                                                      </label>\n                                                          <input type=\"password\" name=\"cfpass\" class=\"form-control\"  placeholder=\"Confirm Password\">\n                                                                    </div>\n                                                                    <div class=\"form-group\">\n                                                                      \n                                                          \n                                                                    </div>\n                                                                    <div class=\"form-group\">\n                                                                      \n                                                          <input type=\"hidden\" name=\"hash\" class=\"form-control\"  placeholder=\"Confirm Password\" value = \"c2626d850c80ea07e7511bbae4c76f4b\">\n                                                                    </div>\n                                                                    \n                                                                    \n                                                                    <button type=\"submit\" name=\"submit\" class=\"btn btn-o btn-primary\">\n                                                                      Submit\n                                                                    </button>\n                                                                  </form>\n                                                                </div>\n                                                              </div>\n                                                            </div>\n                                                              \n                                                              </div>\n                                                            </div>"

/***/ }),

/***/ "../../../../../src/app/components/changepassword/changepassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangepasswordComponent = (function () {
    function ChangepasswordComponent(authentication, router) {
        this.authentication = authentication;
        this.router = router;
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        this.getprofile();
    };
    ChangepasswordComponent.prototype.getprofile = function () {
        var _this = this;
        this.authentication.getprofile().subscribe(function (profile) {
            _this.user = profile.user;
        });
    };
    // function to logout user 
    ChangepasswordComponent.prototype.onlogout = function () {
        this.authentication.logout();
        this.router.navigate(['/login']);
        return false;
    };
    return ChangepasswordComponent;
}());
ChangepasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-changepassword',
        template: __webpack_require__("../../../../../src/app/components/changepassword/changepassword.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/changepassword/changepassword.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ChangepasswordComponent);

var _a, _b;
//# sourceMappingURL=changepassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf = 'user' id=\"app\">\t\t\n    <div class=\"sidebar app-aside\" id=\"sidebar\">\n            <div class=\"sidebar-container perfect-scrollbar\">\n                <nav>\n                \n                <!-- start: MAIN NAVIGATION MENU -->\n                <div class=\"navbar-title\">\n                  <span>Main Navigation</span>\n                  \n                </div>\n                <ul class=\"main-navigation-menu\">\n                    <li>\n                        <a [routerLink]=\"['/dashboard']\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                  <i class=\"ti-home\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                  <span class=\"title\"> Dashboard </span>\n                                </div>\n                              </div>\n                            </a>\n                          </li>\n                          <li>\n                              <a [routerLink]=\"['/registercourses']\">\n                                  <div class=\"item-content\">\n                                      <div class=\"item-media\">\n                                        <i class=\"ti-home\"></i>\n                                      </div>\n                                      <div class=\"item-inner\">\n                                        <span class=\"title\"> Register Courses </span>\n                                      </div>\n                                    </div>\n                                  </a>\n                                </li>\n                                <li>\n                                    <a [routerLink]=\"['/profile']\">\n                                        <div class=\"item-content\">\n                                            <div class=\"item-media\">\n                                              <i class=\"ti-home\"></i>\n                                            </div>\n                                            <div class=\"item-inner\">\n                                              <span class=\"title\"> Profile </span>\n                                            </div>\n                                          </div>\n                                        </a>\n                                      </li>\n                                        \n                                      \n        </ul>\n        </nav>\n        </div>\n        </div>\n        <div class=\"app-content\">\n            <header class=\"navbar navbar-default navbar-static-top\">\n                <div class=\"navbar-header\">\n                    <a href=\"#\" class=\"sidebar-mobile-toggler pull-left hidden-md hidden-lg\" class=\"btn btn-navbar sidebar-toggle\" data-toggle-class=\"app-slide-off\" data-toggle-target=\"#app\" data-toggle-click-outside=\"#sidebar\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"navbar-brand\" href=\"#\">\n                      <h2 style=\"padding-top:2% \">Student portal</h2>\n                    </a>\n                    <a href=\"#\" class=\"sidebar-toggler pull-right visible-md visible-lg\" data-toggle-class=\"app-sidebar-closed\" data-toggle-target=\"#app\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"pull-right menu-toggler visible-xs-block\" id=\"menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                      <span class=\"sr-only\">Toggle navigation</span>\n                      <i class=\"ti-view-grid\"></i>\n                    </a>\n                  </div>\n                  <div class=\"navbar-collapse collapse\">\n                      <ul class=\"nav navbar-right\">\n                        <!-- start: MESSAGES DROPDOWN -->\n                          <li  style=\"padding-top:2% \">\n                          <h2>{{user.firstname}} {{user.secondname}} </h2>\n                        </li>\n                        <li class=\"dropdown current-user\">\n                            <a href class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                              <img src=\"assets/images/avatar-1.jpg\" alt=\"Peter\"> <span class=\"username\">\n                                  <i class=\"ti-angle-down\"></i></span>\n                                  </a>\n                                  <ul class=\"dropdown-menu dropdown-dark\">\n                      \n                    \n                                     \n                                      <li>\n                                        <a href=\"#\" (click)='onlogout()'>\n                                          Log Out\n                                        </a>\n                                      </li>\n                                    </ul>\n                                    </li>\n                                    </ul>\n                                    <div class=\"close-handle visible-xs-block menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                                        <div class=\"arrow-left\"></div>\n                                        <div class=\"arrow-right\"></div>\n                                      </div>\n                                      </div>\n                                    </header>\n                                    <div class=\"main-content\" >\n                                        <div class=\"wrap-content container\" id=\"container\">\n                                            <section id=\"page-title\">\n                                                <div class=\"row\">\n                                                  <div class=\"col-sm-8\">\n                                                    <h1 class=\"mainTitle\">{{user.secondname}} | Dashboard</h1>\n                                                                    </div>\n                                                  <ol class=\"breadcrumb\">\n                                                    <li>\n                                                      <span>{{user.firstname}}</span>\n                                                    </li>\n                                                    <li class=\"active\">\n                                                      <span>Dashboard</span>\n                                                    </li>\n                                                  </ol>\n                                                </div>\n                                              </section>\n                                              <div class=\"row\">\n                                                  <div class=\"col-sm-4\">\n                                                      <div class=\"panel panel-white no-radius text-center\">\n                                                        <div class=\"panel-body\">\n                                                          <span class=\"fa-stack fa-2x\"> <i class=\"fa fa-square fa-stack-2x text-primary\"></i> <i class=\"fa fa-smile-o fa-stack-1x fa-inverse\"></i> </span>\n                                                          <h2 class=\"StepTitle\">Course Registration</h2>\n                                                          \n                                                          <p class=\"links cl-effect-1\">\n                                                            <a [routerLink]=\"['/registercourses']\">\n                                                                                  Register Courses\t\t\n                                                            </a>\n                                                          </p>\n                                                        </div>\n                                                      </div>\n                                                    </div>\n                                                    <div class=\"col-sm-4\">\n                                                        <div class=\"panel panel-white no-radius text-center\">\n                                                          <div class=\"panel-body\">\n                                                            <span class=\"fa-stack fa-2x\"> <i class=\"fa fa-square fa-stack-2x text-primary\"></i> <i class=\"fa fa-users fa-stack-1x fa-inverse\"></i> </span>\n                                                            <h2 class=\"StepTitle\">Dashboard</h2>\n                                                          \n                                                            <p class=\"cl-effect-1\">\n                                                              <a [routerLink]='[\"/dashboard\"]'>\n                                                                                    Dashboard\t\n                                                              </a>\n                                                              \n                                                            </p>\n                                                          </div>\n                                                        </div>\n                                                      </div>\n                                                      <div class=\"col-sm-4\">\n                                                          <div class=\"panel panel-white no-radius text-center\">\n                                                            <div class=\"panel-body\">\n                                                              <span class=\"fa-stack fa-2x\"> <i class=\"fa fa-square fa-stack-2x text-primary\"></i> <i class=\"fa fa-terminal fa-stack-1x fa-inverse\"></i> </span>\n                                                              <h2 class=\"StepTitle\"> View Profile</h2>\n                                                              \n                                                              <p class=\"links cl-effect-1\">\n                                                                <a href=\"book-appointment.php\">\n                                                                  <a [routerLink]=\"['/profile']\">\n                                                                                      View Profile\t\n                                                                </a>\n                                                                </a>\n                                                              </p>\n                                                            </div>\n                                                          </div>\n                                                        </div>\n                                                        </div>\n                                                        </div>\n                                                        <footer>\n                                                            <div class=\"footer-inner\">\n                                                              <div class=\"pull-left\">\n                                                                &copy; <span class=\"current-year\"></span><span class=\"text-bold text-uppercase\"> SteveInc</span>. <span>All rights reserved</span>\n                                                              </div>\n                                                              <div class=\"pull-right\">\n                                                                <span class=\"go-top\"><i class=\"ti-angle-up\"></i></span>\n                                                              </div>\n                                                            </div>\n                                                          </footer>\n                                                          <div class=\"settings panel panel-default hidden-xs hidden-sm\" id=\"settings\">\n                                                              <button ct-toggle=\"toggle\" data-toggle-class=\"active\" data-toggle-target=\"#settings\" class=\"btn btn-default\">\n                                                                <i class=\"fa fa-spin fa-gear\"></i>\n                                                              </button>\n                                                              <div class=\"panel-heading\">\n                                                                Style Selector\n                                                              </div>\n                                                              <div class=\"panel-body\">\n                                                                <!-- start: FIXED HEADER -->\n                                                                <div class=\"setting-box clearfix\">\n                                                                  <span class=\"setting-title pull-left\"> Fixed header</span>\n                                                                  <span class=\"setting-switch pull-right\">\n                                                                    <input type=\"checkbox\" class=\"js-switch\" id=\"fixed-header\" />\n                                                                  </span>\n                                                                </div>\n                                                                <!-- end: FIXED HEADER -->\n                                                                <!-- start: FIXED SIDEBAR -->\n                                                                <div class=\"setting-box clearfix\">\n                                                                  <span class=\"setting-title pull-left\">Fixed sidebar</span>\n                                                                  <span class=\"setting-switch pull-right\">\n                                                                    <input type=\"checkbox\" class=\"js-switch\" id=\"fixed-sidebar\" />\n                                                                  </span>\n                                                                </div>\n                                                                <!-- end: FIXED SIDEBAR -->\n                                                                <!-- start: CLOSED SIDEBAR -->\n                                                                <div class=\"setting-box clearfix\">\n                                                                  <span class=\"setting-title pull-left\">Closed sidebar</span>\n                                                                  <span class=\"setting-switch pull-right\">\n                                                                    <input type=\"checkbox\" class=\"js-switch\" id=\"closed-sidebar\" />\n                                                                  </span>\n                                                                </div>\n                                                                <!-- end: CLOSED SIDEBAR -->\n                                                                <!-- start: FIXED FOOTER -->\n                                                                <div class=\"setting-box clearfix\">\n                                                                  <span class=\"setting-title pull-left\">Fixed footer</span>\n                                                                  <span class=\"setting-switch pull-right\">\n                                                                    <input type=\"checkbox\" class=\"js-switch\" id=\"fixed-footer\" />\n                                                                  </span>\n                                                                </div>\n                                                                <!-- end: FIXED FOOTER -->\n                                                                <!-- start: THEME SWITCHER -->\n                                                                <div class=\"colors-row setting-box\">\n                                                                  <div class=\"color-theme theme-1\">\n                                                                    <div class=\"color-layout\">\n                                                                      <label>\n                                                                        <input type=\"radio\" name=\"setting-theme\" value=\"theme-1\">\n                                                                        <span class=\"ti-check\"></span>\n                                                                        <span class=\"split header\"> <span class=\"color th-header\"></span> <span class=\"color th-collapse\"></span> </span>\n                                                                        <span class=\"split\"> <span class=\"color th-sidebar\"><i class=\"element\"></i></span> <span class=\"color th-body\"></span> </span>\n                                                                      </label>\n                                                                    </div>\n                                                                  </div>\n                                                                  <div class=\"color-theme theme-2\">\n                                                                    <div class=\"color-layout\">\n                                                                      <label>\n                                                                        <input type=\"radio\" name=\"setting-theme\" value=\"theme-2\">\n                                                                        <span class=\"ti-check\"></span>\n                                                                        <span class=\"split header\"> <span class=\"color th-header\"></span> <span class=\"color th-collapse\"></span> </span>\n                                                                        <span class=\"split\"> <span class=\"color th-sidebar\"><i class=\"element\"></i></span> <span class=\"color th-body\"></span> </span>\n                                                                      </label>\n                                                                    </div>\n                                                                  </div>\n                                                                </div>\n                                                                <div class=\"colors-row setting-box\">\n                                                                  <div class=\"color-theme theme-3\">\n                                                                    <div class=\"color-layout\">\n                                                                      <label>\n                                                                        <input type=\"radio\" name=\"setting-theme\" value=\"theme-3\">\n                                                                        <span class=\"ti-check\"></span>\n                                                                        <span class=\"split header\"> <span class=\"color th-header\"></span> <span class=\"color th-collapse\"></span> </span>\n                                                                        <span class=\"split\"> <span class=\"color th-sidebar\"><i class=\"element\"></i></span> <span class=\"color th-body\"></span> </span>\n                                                                      </label>\n                                                                    </div>\n                                                                  </div>\n                                                                  <div class=\"color-theme theme-4\">\n                                                                    <div class=\"color-layout\">\n                                                                      <label>\n                                                                        <input type=\"radio\" name=\"setting-theme\" value=\"theme-4\">\n                                                                        <span class=\"ti-check\"></span>\n                                                                        <span class=\"split header\"> <span class=\"color th-header\"></span> <span class=\"color th-collapse\"></span> </span>\n                                                                        <span class=\"split\"> <span class=\"color th-sidebar\"><i class=\"element\"></i></span> <span class=\"color th-body\"></span> </span>\n                                                                      </label>\n                                                                    </div>\n                                                                  </div>\n                                                                </div>\n                                                                <div class=\"colors-row setting-box\">\n                                                                  <div class=\"color-theme theme-5\">\n                                                                    <div class=\"color-layout\">\n                                                                      <label>\n                                                                        <input type=\"radio\" name=\"setting-theme\" value=\"theme-5\">\n                                                                        <span class=\"ti-check\"></span>\n                                                                        <span class=\"split header\"> <span class=\"color th-header\"></span> <span class=\"color th-collapse\"></span> </span>\n                                                                        <span class=\"split\"> <span class=\"color th-sidebar\"><i class=\"element\"></i></span> <span class=\"color th-body\"></span> </span>\n                                                                      </label>\n                                                                    </div>\n                                                                  </div>\n                                                                  <div class=\"color-theme theme-6\">\n                                                                    <div class=\"color-layout\">\n                                                                      <label>\n                                                                        <input type=\"radio\" name=\"setting-theme\" value=\"theme-6\">\n                                                                        <span class=\"ti-check\"></span>\n                                                                        <span class=\"split header\"> <span class=\"color th-header\"></span> <span class=\"color th-collapse\"></span> </span>\n                                                                        <span class=\"split\"> <span class=\"color th-sidebar\"><i class=\"element\"></i></span> <span class=\"color th-body\"></span> </span>\n                                                                      </label>\n                                                                    </div>\n                                                                  </div>\n                                                                </div>\n                                                                <!-- end: THEME SWITCHER -->\n                                                              </div>\n                                                            </div>\t\t\t\n                                                            </div>\n                                                            "

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authentication, router) {
        this.authentication = authentication;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getprofile();
    };
    //creating a funtio to get user from backend
    DashboardComponent.prototype.getprofile = function () {
        var _this = this;
        this.authentication.getprofile().subscribe(function (data) {
            _this.user = data.user;
        });
    };
    // function to logout user 
    DashboardComponent.prototype.onlogout = function () {
        this.authentication.logout();
        this.router.navigate(['/login']);
        return false;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"./assets/css/css/responsiveslides.css\">\r\n\t\t<link rel=\"stylesheet\" href=\"./assets/css/css/style.css\">\r\n        \r\n        <div class=\"header\">\r\n            <div class=\"wrap\">\r\n            <!--start-logo-->\r\n            <div class=\"logo\">\r\n              <a href=\"index.html\" style=\"font-size: 30px;\">Course Registration System</a>\r\n            </div>\r\n            <!--end-logo-->\r\n            <!--start-top-nav-->\r\n            \r\n            <div class=\"clear\"> </div>\r\n            <!--end-top-nav-->\r\n          </div>\r\n          <!--end-header-->\r\n        </div>\r\n        <div class=\"clear\"> </div>\r\n          <!--start-image-slider---->\r\n              <div class=\"image-slider\">\r\n                <!-- Slideshow 1 -->\r\n                <ul class=\"rslides\" id=\"slider1\">\r\n                  <li><img src=\"./assets/images/slider-image1.jpg\" alt=\"\"></li>\r\n                  \r\n                </ul>\r\n                 <!-- Slideshow 2 -->\r\n              </div>\r\n              <!--End-image-slider---->\r\n          <div class=\"clear\"> </div>\r\n          <div class=\"content-grids\">\r\n            <div class=\"wrap\">\r\n            <div class=\"section group\">\r\n                    \r\n                  \r\n            <div class=\"listview_1_of_3 images_1_of_3\">\r\n              <div class=\"listimg listimg_1_of_2\">\r\n                  <img src=\"./assets/images/grid-img1.png\">\r\n              </div>\r\n              <div class=\"text list_1_of_2\">\r\n                  <h3>Registration</h3>\r\n                  <p>Student & Admin Registration</p>\r\n                 \r\n                     <div class=\"button\"><span><a [routerLink]=\"['/registeradmin']\" href=\"#\" (click) = 'changestate()'>Admin Registration</a></span></div>\r\n                  <div class=\"button\"><span><a [routerLink]=\"['/register']\" href=\"#\" (click) = 'changestate()'> Student Registration</a></span></div>\r\n              </div>\r\n            </div>\t\r\n    \r\n            <div class=\"listview_1_of_3 images_1_of_3\">\r\n              <div class=\"listimg listimg_1_of_2\">\r\n                  <img src=\"./assets/images/grid-img2.png\">\r\n              </div>\r\n              <div class=\"text list_1_of_2\">\r\n                  <h3>Student Login</h3>\r\n                \r\n                  <div class=\"button\"><span><a href=\"#\" [routerLink]=\"['/login']\" (click) = 'changestate()'>Click Here</a></span></div>\r\n                  \r\n              </div>\r\n            </div>\r\n    \r\n    \r\n              <div class=\"listview_1_of_3 images_1_of_3\">\r\n              <div class=\"listimg listimg_1_of_2\">\r\n                  <img src=\"./assets/images/grid-img3.png\">\r\n              </div>\r\n              <div class=\"text list_1_of_2\">\r\n                  <h3>Admin Login</h3>\r\n                \r\n                  <div class=\"button\"><span><a href=\"#\" [routerLink]=\"['/admin']\" (click) = 'changestate()'>Click Here</a></span></div>\r\n               </div>\r\n            </div>\t\t\t\r\n          </div>\r\n          </div>\r\n           </div>\r\n           <div class=\"wrap\">\r\n           <div class=\"content-box\">\r\n           <div class=\"section group\">\r\n            <div class=\"col_1_of_3 span_1_of_3 frist\">\r\n            \r\n            </div>\r\n            <div class=\"col_1_of_3 span_1_of_3 second\">\r\n              \r\n            </div>\r\n            <div class=\"col_1_of_3 span_1_of_3 frist\">\r\n              \r\n              \r\n            </div>\r\n          </div>\r\n           </div>\r\n           </div>\r\n           <div class=\"clear\"> </div>\r\n           <div class=\"footer\">\r\n            <div class=\"wrap\">\r\n             \r\n           \r\n             <div class=\"clear\"> </div>\r\n           </div>\r\n           </div>\r\n        <!--end-wrap-->"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"main-login col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4\">\n    <div class=\"logo margin-top-30\">\n    <h2>User Login</h2>\n    </div>\n\n    <div class=\"box-login\">\n              <form class=\"form-login\" (submit)=\"loginuser()\">\n        <fieldset>\n          <legend>\n            Sign in to your account\n          </legend>\n          <p>\n            Please enter your name and password to log in.<br />\n            <span style=\"color:red;\"></span>\n          </p>\n          <div class=\"form-group\" >\n            <span class=\"input-icon\">\n              <input type=\"text\" [(ngModel)] = 'email' name=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n              <i class=\"fa fa-user\"></i> </span>\n          </div>\n          <div class=\"form-group form-actions\">\n            <span class=\"input-icon\">\n              <input type=\"password\" [(ngModel)] = 'password' name=\"password\" class=\"form-control password\" name=\"password\" placeholder=\"Password\"><i class=\"fa fa-lock\"></i>\n               </span>\n          </div>\n          <div class=\"form-actions\">\n            \n            <button type=\"submit\" class=\"btn btn-primary pull-right\" name=\"login\">\n              Login <i class=\"fa fa-arrow-circle-right\"></i>\n            </button>\n          </div>\n          <a  [routerLink] = \"['/register']\">Click here to register</a>\n         \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t</form>\n\n\t\t\t\t\t<div class=\"copyright\">\n\t\t\t\t\t\t&copy; <span class=\"current-year\"></span><span class=\"text-bold text-uppercase\"> SteveInc</span>. <span>All rights reserved</span>\n\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n          "

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(flashmessage, Validate, authenticate, router) {
        this.flashmessage = flashmessage;
        this.Validate = Validate;
        this.authenticate = authenticate;
        this.router = router;
    }
    //function to login users
    LoginComponent.prototype.loginuser = function () {
        var _this = this;
        var user = ({
            email: this.email,
            password: this.password
        });
        //validating this user if not defined
        if (!this.Validate.validateloginfields(user)) {
            this.flashmessage.show('please fill in all fields', { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
        //we call a funtion to validate login field
        if (!this.Validate.validateemail(user.email)) {
            this.flashmessage.show('please Enter a valid email', { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
        this.authenticate.loginuser(user).subscribe(function (data) {
            if (data.success) {
                _this.authenticate.storeuser(data.token, data.user);
                _this.flashmessage.show(data.msg, { cssClass: 'alert-success', timeout: 1000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashmessage.show(data.msg, { cssClass: 'alert-danger', timeout: 1000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/management/management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/management/management.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"admin\" id=\"app\">\t\t\n    <div class=\"sidebar app-aside\" id=\"sidebar\">\n            <div class=\"sidebar-container perfect-scrollbar\">\n                <nav>\n                \n                <!-- start: MAIN NAVIGATION MENU -->\n                <div class=\"navbar-title\">\n                  <span>Main Navigation</span>\n                  \n                </div>\n                <ul class=\"main-navigation-menu\">\n                    <li>\n                        <a [routerLink]=\"['/management']\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                  <i class=\"ti-home\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                  <span class=\"title\"> Dashboard </span>\n                                </div>\n                              </div>\n                            </a>\n                          </li>\n                          <li>\n                              <a [routerLink]=\"['/approvecourses']\">\n                                  <div class=\"item-content\">\n                                      <div class=\"item-media\">\n                                        <i class=\"ti-home\"></i>\n                                      </div>\n                                      <div class=\"item-inner\">\n                                        <span class=\"title\"> Approve Course Registration </span>\n                                      </div>\n                                    </div>\n                                  </a>\n                                </li>\n                                <li>\n                                    <a [routerLink]=\"['/addcourses']\">\n                                        <div class=\"item-content\">\n                                            <div class=\"item-media\">\n                                              <i class=\"ti-home\"></i>\n                                            </div>\n                                            <div class=\"item-inner\">\n                                              <span class=\"title\"> Add Courses </span>\n                                            </div>\n                                          </div>\n                                        </a>\n                                      </li>\n                                        \n                                      \n        </ul>\n        </nav>\n        </div>\n        </div>\n        <div class=\"app-content\">\n            <header class=\"navbar navbar-default navbar-static-top\">\n                <div class=\"navbar-header\">\n                    <a href=\"#\" class=\"sidebar-mobile-toggler pull-left hidden-md hidden-lg\" class=\"btn btn-navbar sidebar-toggle\" data-toggle-class=\"app-slide-off\" data-toggle-target=\"#app\" data-toggle-click-outside=\"#sidebar\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"navbar-brand\" href=\"#\">\n                      <h2 style=\"padding-top:2% \">Admin portal</h2>\n                    </a>\n                    <a href=\"#\" class=\"sidebar-toggler pull-right visible-md visible-lg\" data-toggle-class=\"app-sidebar-closed\" data-toggle-target=\"#app\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"pull-right menu-toggler visible-xs-block\" id=\"menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                      <span class=\"sr-only\">Toggle navigation</span>\n                      <i class=\"ti-view-grid\"></i>\n                    </a>\n                  </div>\n                  <div class=\"navbar-collapse collapse\">\n                      <ul class=\"nav navbar-right\">\n                        <!-- start: MESSAGES DROPDOWN -->\n                          <li  style=\"padding-top:2% \">\n                          <h2> {{admin.firstname}},{{admin.secondname}} </h2>\n                        </li>\n                        <li class=\"dropdown current-user\">\n                            <a href class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                              <img src=\"assets/images/avatar-1.jpg\" alt=\"Peter\"> <span class=\"username\">\n                                  <i class=\"ti-angle-down\"></i></span>\n                                  </a>\n                                  <ul class=\"dropdown-menu dropdown-dark\">\n                      \n                    \n                                     \n                                      <li>\n                                        <a href=\"#\" (click)=\"logout()\">\n                                          Log Out\n                                        </a>\n                                      </li>\n                                    </ul>\n                                    </li>\n                                    </ul>\n                                    <div class=\"close-handle visible-xs-block menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                                        <div class=\"arrow-left\"></div>\n                                        <div class=\"arrow-right\"></div>\n                                      </div>\n                                      </div>\n                                    </header>\n                                    <div class=\"main-content\" >\n                                        <div class=\"wrap-content container\" id=\"container\">\n                                            <section id=\"page-title\">\n                                                <div class=\"row\">\n                                                  <div class=\"col-sm-8\">\n                                                    <h1 class=\"mainTitle\">{{admin.secondname}} | Dashboard</h1>\n                                                                    </div>\n                                                  <ol class=\"breadcrumb\">\n                                                    <li>\n                                                      <span>{{admin.firstname}}</span>\n                                                    </li>\n                                                    <li class=\"active\">\n                                                      <span>Dashboard</span>\n                                                    </li>\n                                                  </ol>\n                                                </div>\n                                              </section>\n                                              <div class=\"row\">\n                                                  <div class=\"col-sm-4\">\n                                                      <div class=\"panel panel-white no-radius text-center\">\n                                                        <div class=\"panel-body\">\n                                                          <span class=\"fa-stack fa-2x\"> <i class=\"fa fa-square fa-stack-2x text-primary\"></i> <i class=\"fa fa-smile-o fa-stack-1x fa-inverse\"></i> </span>\n                                                          <h2 class=\"StepTitle\">Course Registration</h2>\n                                                          \n                                                          <p class=\"links cl-effect-1\">\n                                                            <a [routerLink]=\"['/approvecourses']\">\n                                                                                  Approve Course Registration\t\t\n                                                            </a>\n                                                          </p>\n                                                        </div>\n                                                      </div>\n                                                    </div>\n                                                    <div class=\"col-sm-4\">\n                                                        <div class=\"panel panel-white no-radius text-center\">\n                                                          <div class=\"panel-body\">\n                                                            <span class=\"fa-stack fa-2x\"> <i class=\"fa fa-square fa-stack-2x text-primary\"></i> <i class=\"fa fa-users fa-stack-1x fa-inverse\"></i> </span>\n                                                            <h2 class=\"StepTitle\">Dashboard</h2>\n                                                          \n                                                            <p class=\"cl-effect-1\">\n                                                              <a [routerLink]='[\"/management\"]'>\n                                                                                    Admin Dashboard\t\n                                                              </a>\n                                                              \n                                                            </p>\n                                                          </div>\n                                                        </div>\n                                                      </div>\n                                                      <div class=\"col-sm-4\">\n                                                          <div class=\"panel panel-white no-radius text-center\">\n                                                            <div class=\"panel-body\">\n                                                              <span class=\"fa-stack fa-2x\"> <i class=\"fa fa-square fa-stack-2x text-primary\"></i> <i class=\"fa fa-terminal fa-stack-1x fa-inverse\"></i> </span>\n                                                              <h2 class=\"StepTitle\"> Add Courses</h2>\n                                                              \n                                                              <p class=\"links cl-effect-1\">\n                                                                \n                                                                  <a [routerLink]=\"['/addcourses']\">\n                                                                                      Add Courses\t\n                                                                \n                                                                </a>\n                                                              </p>\n                                                            </div>\n                                                          </div>\n                                                        </div>\n                                                        </div>\n                                                        </div>\n                                                        <footer>\n                                                            <div class=\"footer-inner\">\n                                                              <div class=\"pull-left\">\n                                                                &copy; <span class=\"current-year\"></span><span class=\"text-bold text-uppercase\"> SteveInc</span>. <span>All rights reserved</span>\n                                                              </div>\n                                                              <div class=\"pull-right\">\n                                                                <span class=\"go-top\"><i class=\"ti-angle-up\"></i></span>\n                                                              </div>\n                                                            </div>\n                                                          </footer>\n                                                          <div class=\"settings panel panel-default hidden-xs hidden-sm\" id=\"settings\">\n                                                              <button ct-toggle=\"toggle\" data-toggle-class=\"active\" data-toggle-target=\"#settings\" class=\"btn btn-default\">\n                                                                <i class=\"fa fa-spin fa-gear\"></i>\n                                                              </button>\n                                                              <div class=\"panel-heading\">\n                                                                Style Selector\n                                                              </div>\n                                                              <div class=\"panel-body\">\n                                                                <!-- start: FIXED HEADER -->\n                                                                <div class=\"setting-box clearfix\">\n                                                                  <span class=\"setting-title pull-left\"> Fixed header</span>\n                                                                  <span class=\"setting-switch pull-right\">\n                                                                    <input type=\"checkbox\" class=\"js-switch\" id=\"fixed-header\" />\n                                                                  </span>\n                                                                </div>\n                                                                <!-- end: FIXED HEADER -->\n                                                                <!-- start: FIXED SIDEBAR -->\n                                                                <div class=\"setting-box clearfix\">\n                                                                  <span class=\"setting-title pull-left\">Fixed sidebar</span>\n                                                                  <span class=\"setting-switch pull-right\">\n                                                                    <input type=\"checkbox\" class=\"js-switch\" id=\"fixed-sidebar\" />\n                                                                  </span>\n                                                                </div>\n                                                                <!-- end: FIXED SIDEBAR -->\n                                                                <!-- start: CLOSED SIDEBAR -->\n                                                                <div class=\"setting-box clearfix\">\n                                                                  <span class=\"setting-title pull-left\">Closed sidebar</span>\n                                                                  <span class=\"setting-switch pull-right\">\n                                                                    <input type=\"checkbox\" class=\"js-switch\" id=\"closed-sidebar\" />\n                                                                  </span>\n                                                                </div>\n                                                                <!-- end: CLOSED SIDEBAR -->\n                                                                <!-- start: FIXED FOOTER -->\n                                                                <div class=\"setting-box clearfix\">\n                                                                  <span class=\"setting-title pull-left\">Fixed footer</span>\n                                                                  <span class=\"setting-switch pull-right\">\n                                                                    <input type=\"checkbox\" class=\"js-switch\" id=\"fixed-footer\" />\n                                                                  </span>\n                                                                </div>\n                                                                <!-- end: FIXED FOOTER -->\n                                                                <!-- start: THEME SWITCHER -->\n                                                                <div class=\"colors-row setting-box\">\n                                                                  <div class=\"color-theme theme-1\">\n                                                                    <div class=\"color-layout\">\n                                                                      <label>\n                                                                        <input type=\"radio\" name=\"setting-theme\" value=\"theme-1\">\n                                                                        <span class=\"ti-check\"></span>\n                                                                        <span class=\"split header\"> <span class=\"color th-header\"></span> <span class=\"color th-collapse\"></span> </span>\n                                                                        <span class=\"split\"> <span class=\"color th-sidebar\"><i class=\"element\"></i></span> <span class=\"color th-body\"></span> </span>\n                                                                      </label>\n                                                                    </div>\n                                                                  </div>\n                                                                  <div class=\"color-theme theme-2\">\n                                                                    <div class=\"color-layout\">\n                                                                      <label>\n                                                                        <input type=\"radio\" name=\"setting-theme\" value=\"theme-2\">\n                                                                        <span class=\"ti-check\"></span>\n                                                                        <span class=\"split header\"> <span class=\"color th-header\"></span> <span class=\"color th-collapse\"></span> </span>\n                                                                        <span class=\"split\"> <span class=\"color th-sidebar\"><i class=\"element\"></i></span> <span class=\"color th-body\"></span> </span>\n                                                                      </label>\n                                                                    </div>\n                                                                  </div>\n                                                                </div>\n                                                                <div class=\"colors-row setting-box\">\n                                                                  <div class=\"color-theme theme-3\">\n                                                                    <div class=\"color-layout\">\n                                                                      <label>\n                                                                        <input type=\"radio\" name=\"setting-theme\" value=\"theme-3\">\n                                                                        <span class=\"ti-check\"></span>\n                                                                        <span class=\"split header\"> <span class=\"color th-header\"></span> <span class=\"color th-collapse\"></span> </span>\n                                                                        <span class=\"split\"> <span class=\"color th-sidebar\"><i class=\"element\"></i></span> <span class=\"color th-body\"></span> </span>\n                                                                      </label>\n                                                                    </div>\n                                                                  </div>\n                                                                  <div class=\"color-theme theme-4\">\n                                                                    <div class=\"color-layout\">\n                                                                      <label>\n                                                                        <input type=\"radio\" name=\"setting-theme\" value=\"theme-4\">\n                                                                        <span class=\"ti-check\"></span>\n                                                                        <span class=\"split header\"> <span class=\"color th-header\"></span> <span class=\"color th-collapse\"></span> </span>\n                                                                        <span class=\"split\"> <span class=\"color th-sidebar\"><i class=\"element\"></i></span> <span class=\"color th-body\"></span> </span>\n                                                                      </label>\n                                                                    </div>\n                                                                  </div>\n                                                                </div>\n                                                                <div class=\"colors-row setting-box\">\n                                                                  <div class=\"color-theme theme-5\">\n                                                                    <div class=\"color-layout\">\n                                                                      <label>\n                                                                        <input type=\"radio\" name=\"setting-theme\" value=\"theme-5\">\n                                                                        <span class=\"ti-check\"></span>\n                                                                        <span class=\"split header\"> <span class=\"color th-header\"></span> <span class=\"color th-collapse\"></span> </span>\n                                                                        <span class=\"split\"> <span class=\"color th-sidebar\"><i class=\"element\"></i></span> <span class=\"color th-body\"></span> </span>\n                                                                      </label>\n                                                                    </div>\n                                                                  </div>\n                                                                  <div class=\"color-theme theme-6\">\n                                                                    <div class=\"color-layout\">\n                                                                      <label>\n                                                                        <input type=\"radio\" name=\"setting-theme\" value=\"theme-6\">\n                                                                        <span class=\"ti-check\"></span>\n                                                                        <span class=\"split header\"> <span class=\"color th-header\"></span> <span class=\"color th-collapse\"></span> </span>\n                                                                        <span class=\"split\"> <span class=\"color th-sidebar\"><i class=\"element\"></i></span> <span class=\"color th-body\"></span> </span>\n                                                                      </label>\n                                                                    </div>\n                                                                  </div>\n                                                                </div>\n                                                                <!-- end: THEME SWITCHER -->\n                                                              </div>\n                                                            </div>\t\t\t\n                                                            </div>\n                                                            "

/***/ }),

/***/ "../../../../../src/app/components/management/management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_adminauthenticate_service__ = __webpack_require__("../../../../../src/app/services/adminauthenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManagementComponent = (function () {
    function ManagementComponent(adminauthenticate, authenticate, router) {
        this.adminauthenticate = adminauthenticate;
        this.authenticate = authenticate;
        this.router = router;
    }
    ManagementComponent.prototype.ngOnInit = function () {
        this.getadmin();
    };
    //function to get user details
    ManagementComponent.prototype.getadmin = function () {
        var _this = this;
        this.adminauthenticate.authenticate().subscribe(function (data) {
            if (data.user) {
                _this.admin = data.user;
            }
        });
    };
    ManagementComponent.prototype.logout = function () {
        this.authenticate.logout();
        this.router.navigate(['/admin']);
        return false;
    };
    return ManagementComponent;
}());
ManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-management',
        template: __webpack_require__("../../../../../src/app/components/management/management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/management/management.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_adminauthenticate_service__["a" /* AdminauthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_adminauthenticate_service__["a" /* AdminauthenticateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ManagementComponent);

var _a, _b, _c;
//# sourceMappingURL=management.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\t\t\n    <div class=\"sidebar app-aside\" id=\"sidebar\">\n            <div class=\"sidebar-container perfect-scrollbar\">\n                <nav>\n                \n                <!-- start: MAIN NAVIGATION MENU -->\n                <div class=\"navbar-title\">\n                  <span>Main Navigation</span>\n                  \n                </div>\n                <ul class=\"main-navigation-menu\">\n                    <li>\n                        <a href=\"User_Dashboard.php\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                  <i class=\"ti-home\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                  <span class=\"title\"> Dashboard </span>\n                                </div>\n                              </div>\n                            </a>\n                          </li>\n                          <li>\n                              <a href=\"javascript:void(0)\">\n                                <div class=\"item-content\">\n                                  <div class=\"item-media\">\n                                    <i class=\"ti-user\"></i>\n                                  </div>\n                                  <div class=\"item-inner\">\n                                    <span class=\"title\"> Course Registration </span><i class=\"icon-arrow\"></i>\n                                  </div>\n                                </div>\n                              </a>\n                              <ul class=\"sub-menu\">\n                      \n                                  <li>\n                                    <a href=\"user_sentsms.php\">\n                                      <span class=\"title\"> Register Courses</span>\n                                    </a>\n                                  </li>\n                                 \n                                </ul>\n                                </li>\n                                <li>\n                                    <a href=\"javascript:void(0)\">\n                                        <div class=\"item-content\">\n                                          <div class=\"item-media\">\n                                            <i class=\"ti-user\"></i>\n                                          </div>\n                                          <div class=\"item-inner\">\n                                            <span class=\"title\"> Profile </span><i class=\"icon-arrow\"></i>\n                                          </div>\n                                        </div>\n                                      </a>\n                                      <ul class=\"sub-menu\">\n                      \n                                          <li>\n                                            <a href=\"profile.php\">\n                                              <span class=\"title\"> View Profile </span>\n                                            </a>\n                                          </li>\n                                  \n                                          \n                                        </ul>\n                                        </li>\t\n                                        \n      <li>\n          <a href=\"javascript:void(0)\">\n            <div class=\"item-content\">\n              <div class=\"item-media\">\n                <i class=\"ti-user\"></i>\n              </div>\n              <div class=\"item-inner\">\n                <span class=\"title\"> Settings </span><i class=\"icon-arrow\"></i>\n              </div>\n            </div>\n          </a>\n          <ul class=\"sub-menu\">\n            \n            <li>\n              <a href=\"changepassword.php\">\n                <span class=\"title\"> Change Password </span>\n              </a>\n            </li>\n            <li>\n              <a href=\"logout.php\">\n                <span class=\"title\"> Logout </span>\n              </a>\n            </li>\n            \n          </ul>\n          </li>\t\n        </ul>\n        </nav>\n        </div>\n        </div>\n        <div class=\"app-content\">\n            <header class=\"navbar navbar-default navbar-static-top\">\n                <div class=\"navbar-header\">\n                    <a href=\"#\" class=\"sidebar-mobile-toggler pull-left hidden-md hidden-lg\" class=\"btn btn-navbar sidebar-toggle\" data-toggle-class=\"app-slide-off\" data-toggle-target=\"#app\" data-toggle-click-outside=\"#sidebar\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"navbar-brand\" href=\"#\">\n                      <h2 style=\"padding-top:2% \">Student portal</h2>\n                    </a>\n                    <a href=\"#\" class=\"sidebar-toggler pull-right visible-md visible-lg\" data-toggle-class=\"app-sidebar-closed\" data-toggle-target=\"#app\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"pull-right menu-toggler visible-xs-block\" id=\"menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                      <span class=\"sr-only\">Toggle navigation</span>\n                      <i class=\"ti-view-grid\"></i>\n                    </a>\n                  </div>\n                  <div class=\"navbar-collapse collapse\">\n                      <ul class=\"nav navbar-right\">\n                        <!-- start: MESSAGES DROPDOWN -->\n                          <li  style=\"padding-top:2% \">\n                          <h2>Student Name goes in here </h2>\n                        </li>\n                        <li class=\"dropdown current-user\">\n                            <a href class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                              <img src=\"assets/images/avatar-1.jpg\" alt=\"Peter\"> <span class=\"username\">\n                                  <i class=\"ti-angle-down\"></i></span>\n                                  </a>\n                                  <ul class=\"dropdown-menu dropdown-dark\">\n                      \n                    \n                                      <li>\n                                        <a href=\"changepassword.php\">\n                                          Change Password\n                                        </a>\n                                      </li>\n                                      <li>\n                                        <a href=\"logout.php\">\n                                          Log Out\n                                        </a>\n                                      </li>\n                                    </ul>\n                                    </li>\n                                    </ul>\n                                    <div class=\"close-handle visible-xs-block menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                                        <div class=\"arrow-left\"></div>\n                                        <div class=\"arrow-right\"></div>\n                                      </div>\n                                      </div>\n                                      \n                                      <div class=\"main-content\" >\n                                          <div class=\"wrap-content container\" id=\"container\">\n                                              <section id=\"page-title\">\n                                                  <div class=\"row\">\n                                                    <div class=\"col-sm-8\">\n                                                      <h1 class=\"mainTitle\">Oyebade | Dashboard</h1>\n                                                                      </div>\n                                                    <ol class=\"breadcrumb\">\n                                                      <li>\n                                                        <span>Firstname of user</span>\n                                                      </li>\n                                                      <li class=\"active\">\n                                                        <span>Dashboard</span>\n                                                      </li>\n                                                    </ol>\n                                                  </div>\n                                                </section>\n                                                <div class=\"container-fluid container-fullw bg-white\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-sm-4\">\n                                                            <div class=\"panel panel-white no-radius text-center\">\n                                                              <div class=\"panel-body\">\n                                                                <span class=\"fa-stack fa-2x\"> <i class=\"fa fa-square fa-stack-2x text-primary\"></i> <i class=\"fa fa-smile-o fa-stack-1x fa-inverse\"></i> </span>\n                                                                <h2 class=\"StepTitle\">Course Registration</h2>\n                                                                \n                                                                <p class=\"links cl-effect-1\">\n                                                                  <a href=\"user_sentsms.php\">\n                                                                                        Register Courses\t\t\n                                                                  </a>\n                                                                </p>\n                                                              </div>\n                                                            </div>\n                                                          </div>                       "

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf = 'user' id=\"app\">\t\t\n    <div class=\"sidebar app-aside\" id=\"sidebar\">\n            <div class=\"sidebar-container perfect-scrollbar\">\n                <nav>\n                \n                <!-- start: MAIN NAVIGATION MENU -->\n                <div class=\"navbar-title\">\n                  <span>Main Navigation</span>\n                  \n                </div>\n                <ul class=\"main-navigation-menu\">\n                    <li>\n                        <a [routerLink]=\"['/dashboard']\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                  <i class=\"ti-home\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                  <span class=\"title\"> Dashboard </span>\n                                </div>\n                              </div>\n                            </a>\n                          </li>\n                          <li>\n                              <a [routerLink]=\"['/registercourses']\">\n                                  <div class=\"item-content\">\n                                      <div class=\"item-media\">\n                                        <i class=\"ti-home\"></i>\n                                      </div>\n                                      <div class=\"item-inner\">\n                                        <span class=\"title\"> Register Courses </span>\n                                      </div>\n                                    </div>\n                                  </a>\n                                </li>\n                                <li>\n                                    <a [routerLink]=\"['/profile']\">\n                                        <div class=\"item-content\">\n                                            <div class=\"item-media\">\n                                              <i class=\"ti-home\"></i>\n                                            </div>\n                                            <div class=\"item-inner\">\n                                              <span class=\"title\"> Profile </span>\n                                            </div>\n                                          </div>\n                                        </a>\n                                      </li>\n                                        \n                                     \n        </ul>\n        </nav>\n        </div>\n        </div>\n        <div class=\"app-content\">\n            <header class=\"navbar navbar-default navbar-static-top\">\n                <div class=\"navbar-header\">\n                    <a href=\"#\" class=\"sidebar-mobile-toggler pull-left hidden-md hidden-lg\" class=\"btn btn-navbar sidebar-toggle\" data-toggle-class=\"app-slide-off\" data-toggle-target=\"#app\" data-toggle-click-outside=\"#sidebar\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"navbar-brand\" href=\"#\">\n                      <h2 style=\"padding-top:2% \">Student portal</h2>\n                    </a>\n                    <a href=\"#\" class=\"sidebar-toggler pull-right visible-md visible-lg\" data-toggle-class=\"app-sidebar-closed\" data-toggle-target=\"#app\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"pull-right menu-toggler visible-xs-block\" id=\"menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                      <span class=\"sr-only\">Toggle navigation</span>\n                      <i class=\"ti-view-grid\"></i>\n                    </a>\n                  </div>\n                  <div class=\"navbar-collapse collapse\">\n                      <ul class=\"nav navbar-right\">\n                        <!-- start: MESSAGES DROPDOWN -->\n                          <li  style=\"padding-top:2% \">\n                          <h2>{{user.firstname}} {{user.secondname}} </h2>\n                        </li>\n                        <li class=\"dropdown current-user\">\n                            <a href class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                              <img src=\"assets/images/avatar-1.jpg\" alt=\"Peter\"> <span class=\"username\">\n                                  <i class=\"ti-angle-down\"></i></span>\n                                  </a>\n                                  <ul class=\"dropdown-menu dropdown-dark\">\n                      \n                    \n                                      \n                                      <li>\n                                        <a href=\"#\" (click)='onlogout()'>\n                                          Log Out\n                                        </a>\n                                      </li>\n                                    </ul>\n                                    </li>\n                                    </ul>\n                                    <div class=\"close-handle visible-xs-block menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                                        <div class=\"arrow-left\"></div>\n                                        <div class=\"arrow-right\"></div>\n                                      </div>\n                                      </div>\n                                    </header>\n                                    <div class=\"main-content\" >\n                                        <div class=\"wrap-content container\" id=\"container\">\n                                            <section id=\"page-title\">\n                                                <div class=\"row\">\n                                                  <div class=\"col-sm-8\">\n                                                    <h1 class=\"mainTitle\">{{user.secondname}} | Dashboard</h1>\n                                                                    </div>\n                                                  <ol class=\"breadcrumb\">\n                                                    <li>\n                                                      <span>{{user.firstname}}</span>\n                                                    </li>\n                                                    <li class=\"active\">\n                                                      <span>Dashboard</span>\n                                                    </li>\n                                                  </ol>\n                                                </div>\n                                              </section>\n                                              <div class=\"container-fluid container-fullw bg-white\">\n                                                  <div class=\"row\">\n                                                    <div class=\"col-md-12\">\n                                                      \n                                                      <div class=\"row margin-top-30\">\n                                                        <div class=\"col-lg-8 col-md-12\">\n                                                          <div class=\"panel panel-white\">\n                                                            <div class=\"panel-heading\">\n                                                              <h5 class=\"panel-title\">View Profile</h5>\n                                                            </div>\n                                                            <div class=\"panel-body\">\n                                                      \n                                                              <form role=\"form\" name=\"adddoc\" method=\"post\" onSubmit=\"return valid();\">\n                                                                \n                                    \n                                    <div class=\"form-group\">\n                                                                  <label for=\"firstname\">\n                                                                     First Name\n                                                                  </label>\n                                              <input type=\"text\"  class=\"form-control\"  placeholder=\"First Name\" value = {{user.firstname}}  readonly = \"readonly\">\n                                                                </div>\n                                    \n                                                                <div class=\"form-group\">\n                                                                  <label for=\"secondname\">\n                                                                     Second Name\n                                                                  </label>\n                                              <input type=\"text\"  class=\"form-control\"  placeholder=\"second Name\" value = {{user.secondname}}  readonly = \"readonly\">\n                                                                </div>\n                                    \n                                    \n                                                                  <div class=\"form-group\">\n                                                                  <label for=\"email\">\n                                                                     Email\n                                                                  </label>\n                                              <input type=\"text\"  class=\"form-control\"  placeholder=\"Email\" value = {{user.email}} readonly = \"readonly\">\n                                                                </div>\n                                      \n                                      \n                                      \n                                                      \n                                    \n                                    \n                                    \n                                                                \n                                                                \n                                                      \n                                                                \n                                                                \n                                                                \n                                                                \n                                                              </form>\n                                                            </div>\n                                                          </div>\n                                                        </div>\n                                                          \n                                                          </div>\n                                                        </div>\n                                                      <div class=\"col-lg-12 col-md-12\">\n                                                          <div class=\"panel panel-white\">\n                                                            \n                                                            \n                                                          </div>\n                                                        </div>\n                                                      </div>\n                                                    </div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authentication, router) {
        this.authentication = authentication;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getprofile();
    };
    ProfileComponent.prototype.getprofile = function () {
        var _this = this;
        this.authentication.getprofile().subscribe(function (profile) {
            _this.user = profile.user;
        });
    };
    // function to logout user 
    ProfileComponent.prototype.onlogout = function () {
        this.authentication.logout();
        this.router.navigate(['/login']);
        return false;
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"login\">\n  <div class=\"row\">\n    <div class=\"main-login col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4\">\n      <div class=\"logo margin-top-30\">\n      <h2>Student Registration</h2>\n      </div>\n\n      <div class=\"box-login\">\n                <form class=\"form-login\"  (submit)='registeruser()'>\n          <fieldset>\n            <legend>\n              Register\n            </legend>\n            <p>\n              Please Fill the form to register.<br />\n              <span style=\"color:red;\"></span>\n            </p>\n            <div class=\"form-group\">\n            <label>Enter First Name</label>\n              <span class=\"input-icon\">\n                <input type=\"text\" [(ngModel)]='firstname' name = \"firstname\" class=\"form-control\" name=\"firstname\" placeholder=\"First Name\" >\n                <i class=\"fa fa-user\"></i> </span>\n            </div>\n            <div class=\"form-group\">\n            <label>Enter Second Name</label>\n              <span class=\"input-icon\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)] ='secondname' name = \"secondname\" name=\"secondname\" placeholder=\"Second Name\">\n                <i class=\"fa fa-user\"></i> </span>\n            </div>\n\n            \n            \n            <div class=\"form-group\">\n            <label>Enter Email</label>\n              <span class=\"input-icon\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='email' name = \"email\"name=\"email\" placeholder=\"Email\">\n                <i class=\"fa fa-user\"></i> </span>\n            </div>\n            \n            <div class=\"form-group\">\n            <label>Password</label>\n              <span class=\"input-icon\">\n                <input type=\"password\" class=\"form-control password\" [(ngModel)]='password' name = \"password\" name=\"npass\" placeholder=\"Password\"><i class=\"fa fa-lock\"></i>\n                 </span>\n            </div>\n            \n            \n            \n            <div class=\"form-actions\">\n              \n              <button type=\"submit\" class=\"btn btn-primary pull-right\" name=\"Register\">\n                Register <i class=\"fa fa-arrow-circle-right\"></i>\n              </button>\n            </div>\n            <a  [routerLink] = \"['/login']\">Click here to Login</a>\n          </fieldset>\n        </form>\n\n        <div class=\"copyright\">\n          &copy; <span class=\"current-year\"></span><span class=\"text-bold text-uppercase\"> SteveInc</span>. <span>All rights reserved</span>\n        </div>\n    \n      </div>\n\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateservice, flashservice, authenticate, router) {
        this.validateservice = validateservice;
        this.flashservice = flashservice;
        this.authenticate = authenticate;
        this.router = router;
    }
    //creating function to register user
    RegisterComponent.prototype.registeruser = function () {
        var _this = this;
        this.approved = 0;
        this.astatus = 'Not Approved';
        this.rstatus = "Not Registered";
        this.level = 0;
        var user = ({
            firstname: this.firstname,
            secondname: this.secondname,
            email: this.email,
            password: this.password,
            approved: this.approved,
            astatus: this.astatus,
            rstatus: this.rstatus,
            level: this.level
        });
        if (!this.validateservice.validatefields(user)) {
            this.flashservice.show('please fill in all fields', { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
        //service to validate our email
        if (!this.validateservice.validateemail(user.email)) {
            this.flashservice.show('please Enter a valid Email', { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
        this.authenticate.registeruser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashservice.show(data.msg, { cssClass: 'alert-success', timeout: 1000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashservice.show(data.msg, { cssClass: 'alert-danger', timeout: 1000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/registeradmin/registeradmin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/registeradmin/registeradmin.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"login\">\n  <div class=\"row\">\n    <div class=\"main-login col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4\">\n      <div class=\"logo margin-top-30\">\n      <h2>Admin Registration</h2>\n      </div>\n\n      <div class=\"box-login\">\n                <form class=\"form-login\">\n          <fieldset>\n            <legend>\n              Register\n            </legend>\n            <p>\n              Please Fill the form to register.<br />\n              <span style=\"color:red;\"></span>\n            </p>\n            <div class=\"form-group\">\n            <label>Enter First Name</label>\n              <span class=\"input-icon\">\n                <input type=\"text\" [(ngModel)]='firstname' name = \"firstname\" class=\"form-control\" name=\"firstname\" placeholder=\"First Name\" >\n                <i class=\"fa fa-user\"></i> </span>\n            </div>\n            <div class=\"form-group\">\n            <label>Enter Second Name</label>\n              <span class=\"input-icon\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)] ='secondname' name = \"secondname\" name=\"secondname\" placeholder=\"Second Name\">\n                <i class=\"fa fa-user\"></i> </span>\n            </div>\n\n            \n            \n            <div class=\"form-group\">\n            <label>Enter Email</label>\n              <span class=\"input-icon\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]='email' name = \"email\"name=\"email\" placeholder=\"Email\">\n                <i class=\"fa fa-user\"></i> </span>\n            </div>\n            \n            <div class=\"form-group\">\n            <label>Password</label>\n              <span class=\"input-icon\">\n                <input type=\"password\" class=\"form-control password\" [(ngModel)]='password' name = \"password\" name=\"npass\" placeholder=\"Password\"><i class=\"fa fa-lock\"></i>\n                 </span>\n            </div>\n            \n            \n            \n            <div class=\"form-actions\">\n              \n              <button type=\"submit\" class=\"btn btn-primary pull-right\" name=\"Register\" (click)=\"admindetails()\">\n                Register <i class=\"fa fa-arrow-circle-right\"></i>\n              </button>\n            </div>\n            <a  [routerLink] = \"['/admin']\">Click here to Login</a>\n          </fieldset>\n        </form>\n\n        <div class=\"copyright\">\n          &copy; <span class=\"current-year\"></span><span class=\"text-bold text-uppercase\"> SteveInc</span>. <span>All rights reserved</span>\n        </div>\n    \n      </div>\n\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/registeradmin/registeradmin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisteradminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisteradminComponent = (function () {
    function RegisteradminComponent(validateservice, flashservice, authenticate, router) {
        this.validateservice = validateservice;
        this.flashservice = flashservice;
        this.authenticate = authenticate;
        this.router = router;
    }
    RegisteradminComponent.prototype.ngOnInit = function () {
    };
    //now we create a function to get what was inputed in the register fields
    RegisteradminComponent.prototype.admindetails = function () {
        var _this = this;
        this.level = 1;
        var user = ({
            firstname: this.firstname,
            secondname: this.secondname,
            email: this.email,
            password: this.password,
            level: this.level
        });
        //now we validate all fields 
        if (!this.validateservice.validatefields(user)) {
            this.flashservice.show('please fill in all fields', { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
        if (!this.validateservice.validateemail(user.email)) {
            this.flashservice.show('please Enter a Valid Email', { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
        this.authenticate.registeradmin(user).subscribe(function (data) {
            if (data.success) {
                _this.flashservice.show(data.msg, { cssClass: 'alert-success', timeout: 1000 });
                _this.router.navigate(['/admin']);
                return false;
            }
            else {
                _this.flashservice.show(data.msg, { cssClass: 'alert-danger', timeout: 1000 });
            }
        });
    };
    return RegisteradminComponent;
}());
RegisteradminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registeradmin',
        template: __webpack_require__("../../../../../src/app/components/registeradmin/registeradmin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/registeradmin/registeradmin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisteradminComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=registeradmin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/registercourses/registercourses.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/registercourses/registercourses.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf = 'user' id=\"app\">\t\t\n    <div class=\"sidebar app-aside\" id=\"sidebar\">\n            <div class=\"sidebar-container perfect-scrollbar\">\n                <nav>\n                \n                <!-- start: MAIN NAVIGATION MENU -->\n                <div class=\"navbar-title\">\n                  <span>Main Navigation</span>\n                  \n                </div>\n                <ul class=\"main-navigation-menu\">\n                    <li>\n                        <a [routerLink]=\"['/dashboard']\">\n                            <div class=\"item-content\">\n                                <div class=\"item-media\">\n                                  <i class=\"ti-home\"></i>\n                                </div>\n                                <div class=\"item-inner\">\n                                  <span class=\"title\"> Dashboard </span>\n                                </div>\n                              </div>\n                            </a>\n                          </li>\n                          <li>\n                              <a [routerLink]=\"['/registercourses']\">\n                                  <div class=\"item-content\">\n                                      <div class=\"item-media\">\n                                        <i class=\"ti-home\"></i>\n                                      </div>\n                                      \n                                      <div class=\"item-inner\">\n                                        <span class=\"title\"> Register Courses </span>\n                                      </div>\n                                    </div>\n                                  </a>\n                                </li>\n                                <li>\n                                    <a [routerLink]=\"['/profile']\">\n                                        <div class=\"item-content\">\n                                            <div class=\"item-media\">\n                                              <i class=\"ti-home\"></i>\n                                            </div>\n                                            <div class=\"item-inner\">\n                                              <span class=\"title\"> Profile </span>\n                                            </div>\n                                          </div>\n                                        </a>\n                                      </li>\n                                        \n                                     \n        </ul>\n        </nav>\n        </div>\n        </div>\n        <div class=\"app-content\">\n            <header class=\"navbar navbar-default navbar-static-top\">\n                <div class=\"navbar-header\">\n                    <a href=\"#\" class=\"sidebar-mobile-toggler pull-left hidden-md hidden-lg\" class=\"btn btn-navbar sidebar-toggle\" data-toggle-class=\"app-slide-off\" data-toggle-target=\"#app\" data-toggle-click-outside=\"#sidebar\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"navbar-brand\" href=\"#\">\n                      <h2 style=\"padding-top:2% \">Student portal</h2>\n                    </a>\n                    <a href=\"#\" class=\"sidebar-toggler pull-right visible-md visible-lg\" data-toggle-class=\"app-sidebar-closed\" data-toggle-target=\"#app\">\n                      <i class=\"ti-align-justify\"></i>\n                    </a>\n                    <a class=\"pull-right menu-toggler visible-xs-block\" id=\"menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                      <span class=\"sr-only\">Toggle navigation</span>\n                      <i class=\"ti-view-grid\"></i>\n                    </a>\n                  </div>\n                  <div class=\"navbar-collapse collapse\">\n                      <ul class=\"nav navbar-right\">\n                        <!-- start: MESSAGES DROPDOWN -->\n                          <li  style=\"padding-top:2% \">\n                          <h2>{{user.firstname}} {{user.secondname}} </h2>\n                        </li>\n                        <li class=\"dropdown current-user\">\n                            <a href class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                              <img src=\"assets/images/avatar-1.jpg\" alt=\"Peter\"> <span class=\"username\">\n                                  <i class=\"ti-angle-down\"></i></span>\n                                  </a>\n                                  <ul class=\"dropdown-menu dropdown-dark\">\n                      \n                    \n                                      \n                                      <li>\n                                        <a href=\"#\"  (click)='onlogout()'>\n                                          Log Out\n                                        </a>\n                                      </li>\n                                    </ul>\n                                    </li>\n                                    </ul>\n                                    <div class=\"close-handle visible-xs-block menu-toggler\" data-toggle=\"collapse\" href=\".navbar-collapse\">\n                                        <div class=\"arrow-left\"></div>\n                                        <div class=\"arrow-right\"></div>\n                                      </div>\n                                      </div>\n                                    </header>\n                                    <div class=\"main-content\" >\n                                        <div class=\"wrap-content container\" id=\"container\">\n                                            <section id=\"page-title\">\n                                                <div class=\"row\">\n                                                  <div class=\"col-sm-8\">\n                                                    <h1 class=\"mainTitle\">{{user.secondname}} | Dashboard</h1>\n                                                                    </div>\n                                                  <ol class=\"breadcrumb\">\n                                                    <li>\n                                                      <span>{{user.firstname}}</span>\n                                                    </li>\n                                                    <li class=\"active\">\n                                                      <span>Dashboard</span>\n                                                    </li>\n                                                  </ol>\n                                                </div>\n                                              </section>\n                                              <div class=\"container-fluid container-fullw bg-white\">\n                                                  <div class=\"row\">\n                                                      <div class=\"col-md-12\">\n                                                          <h5 class=\"over-title margin-bottom-15\">Register<span class=\"text-bold\">Courses</span></h5>\n                                                        \n                  <p style=\"color:red;\">\t</p>\n                 \n                  <div *ngIf= \"status == 0; then notregistered\"></div>\n                  <div *ngIf= \"status == 1; then registered\"></div>\n                  <div *ngIf= \"status == 2; then approved\"></div>\n                    \n                  <ng-template #notregistered>   \n                    <form >\t\n\t\t\t\t\t\t\t\t\t<table class=\"table table-hover\" id=\"sample-table-1\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Course Code</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th>Course Title</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"hidden-xs\">Course Unit</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th> Select Course</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\n                      </tr>\n                      <tr *ngFor = 'let course of courses'>\n                        <td >{{course.coursecode}}</td>\n                        <td>{{course.coursetitle}}</td>\n                        <td>{{course.courseunit}}</td>\n                        <td hidden>{{user.email}}</td>\n                        \n                        <td hidden>{{user._id}}</td>\n                        \n                        \n                        <td><input type=\"checkbox\" name=\"courses\" [(ngModel)] = \"course.checked\" ></td>\n                         \n                      </tr>\n                      <br><br>\n                      <button type=\"submit\" class=\"btn btn-primary pull-left\" (click)='registercourses(user.email,user._id)'>\n                        Register <i class=\"fa fa-arrow-circle-right\"></i>\n                      </button>\n\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\n                  </table>\n                </form>\n              </ng-template>\n              <ng-template #registered>Courses have been registered,await admin approval</ng-template>\n              <ng-template #approved> Your course registration has been approved,Click the button below to view your approved courses<br><br>\n                <button type=\"submit\" class=\"btn btn-primary pull-left\"  data-toggle = 'modal' data-target = \"#coursemodal\" (click)=' getcourses2(user.email)' >\n                   View Approved Courses<i class=\"fa fa-arrow-circle-right\"></i>\n                </button></ng-template>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                \n\n\n              \n                <div id = \"coursemodal\" class=\"modal fade\">\n                    <div class=\"modal-dialog\" >\n                      <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                        <h4 class=\"modal-title\" > Courses Registered </h4>\n                        </div>\n                        <div class=\"modal-body\">\n                            <table class=\"table table-hover\" id=\"sample-table-1\">\n                                <thead>\n                                    <tr>\n                                      \n                                      <th>Course Code</th>\n                                      <th>Course Title</th>\n                                      <th>Course Unit</th>\n\n                                      </tr>\n                                      <tr *ngFor = \"let course of ucourses\">\n                                       <td>{{course.coursecode}}</td>\n                                       <td>{{course.coursetitle}}</td>\n                                       <td>{{course.courseunit}}</td>\n                                      </tr>\n                                      </thead>\n                                      </table>\n                        </div>\n                       \n                    </div>\n                  </div>\n                  </div>\n            \n            \n             \n\n             "

/***/ }),

/***/ "../../../../../src/app/components/registercourses/registercourses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistercoursesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistercoursesComponent = (function () {
    function RegistercoursesComponent(authenticate, router, flashmessage) {
        this.authenticate = authenticate;
        this.router = router;
        this.flashmessage = flashmessage;
        this.courses = [];
    }
    RegistercoursesComponent.prototype.ngOnInit = function () {
        this.getprofile();
        this.getcourses();
    };
    //function to get services
    RegistercoursesComponent.prototype.getcourses = function () {
        var _this = this;
        this.authenticate.getcourses()
            .subscribe(function (courses) { _this.courses = courses; });
    };
    RegistercoursesComponent.prototype.getprofile = function () {
        var _this = this;
        this.authenticate.getprofile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.status = profile.user.approved;
            _this.useremail = profile.user.email;
        });
    };
    // function to logout user 
    RegistercoursesComponent.prototype.onlogout = function () {
        this.authenticate.logout();
        this.router.navigate(['/login']);
        return false;
    };
    RegistercoursesComponent.prototype.registercourses = function (email, uid) {
        var _this = this;
        var uemail = email;
        var id = uid;
        return this.courses
            .filter(function (opt) { return opt.checked; })
            .map(function (opt) {
            if (opt) {
                var checked = {
                    coursecode: opt.coursecode,
                    coursetitle: opt.coursetitle,
                    courseunit: opt.courseunit,
                    email: uemail,
                    id: uid
                };
                _this.authenticate.updatereg(id).subscribe();
                _this.authenticate.registercourses(checked).subscribe(function (data) {
                    if (data.success) {
                        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                            title: "Course Registration successfull",
                            text: "Your course have been succesfully registered",
                        });
                        _this.status = 1;
                    }
                    else {
                        _this.flashmessage.show("Please select at least one course", { cssClass: 'alert-danger', timeout: 20000000 });
                    }
                });
            }
            else {
                _this.flashmessage.show("Please select at least one course", { cssClass: 'alert-danger', timeout: 20000000 });
            }
        });
    };
    //function to get courses if they have been approved 
    RegistercoursesComponent.prototype.getcourses2 = function (email) {
        var _this = this;
        var uemail = ({ email: email });
        this.authenticate.getregisterdcourses(uemail).subscribe(function (data) {
            _this.ucourses = data;
            console.log(_this.ucourses);
        });
    };
    return RegistercoursesComponent;
}());
RegistercoursesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registercourses',
        template: __webpack_require__("../../../../../src/app/components/registercourses/registercourses.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/registercourses/registercourses.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], RegistercoursesComponent);

var _a, _b, _c;
//# sourceMappingURL=registercourses.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/adminauthenticate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminauthenticateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminauthenticateService = (function () {
    function AdminauthenticateService(http) {
        this.http = http;
    }
    //creating a function to login user
    AdminauthenticateService.prototype.loginuser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', "application/json");
        return this.http.post("/users/admin", user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //creating a function t set token for admin user
    AdminauthenticateService.prototype.admintoken = function (admintoken) {
        localStorage.setItem('admintoken', admintoken);
    };
    // creating a function to get the token of trhe user
    AdminauthenticateService.prototype.loadtoken = function () {
        var admin = localStorage.getItem('admintoken');
        this.atoken = admin;
    };
    //function to get users of admin using the token
    AdminauthenticateService.prototype.authenticate = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadtoken();
        headers.append("Authorization", this.atoken);
        return this.http.get("/users/adminprofile", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //for admin to check if th user is logged in 
    AdminauthenticateService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('admintoken');
    };
    return AdminauthenticateService;
}());
AdminauthenticateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AdminauthenticateService);

var _a;
//# sourceMappingURL=adminauthenticate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adminauthenticate_service__ = __webpack_require__("../../../../../src/app/services/adminauthenticate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AdminAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(auth, router, admin) {
        this.auth = auth;
        this.router = router;
        this.admin = admin;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authenticate_service__["a" /* AuthenticateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__adminauthenticate_service__["a" /* AdminauthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__adminauthenticate_service__["a" /* AdminauthenticateService */]) === "function" && _c || Object])
], AuthGuard);

var AdminAuthGuard = (function () {
    function AdminAuthGuard(auth, router, admin) {
        this.auth = auth;
        this.router = router;
        this.admin = admin;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        if (this.admin.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/admin']);
            return false;
        }
    };
    return AdminAuthGuard;
}());
AdminAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authenticate_service__["a" /* AuthenticateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__adminauthenticate_service__["a" /* AdminauthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__adminauthenticate_service__["a" /* AdminauthenticateService */]) === "function" && _f || Object])
], AdminAuthGuard);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authenticate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticateService = (function () {
    function AuthenticateService(http) {
        this.http = http;
    }
    //creating a function to communicate with the backend
    AuthenticateService.prototype.registeruser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //service to authenticate login user i.e communicate with the backend
    AuthenticateService.prototype.loginuser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //service to add courses via communication with the backened
    AuthenticateService.prototype.addcourses = function (courses) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', "application/json");
        return this.http.post('/users/addcourses', courses, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //service to get all contacts from the database
    //service to get details when correct token is supplied
    AuthenticateService.prototype.getprofile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadtoken();
        headers.append('Authorization', this.authtoken);
        return this.http.get('/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //create service to add registered courses int the database
    AuthenticateService.prototype.registercourses = function (courses) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/registercourses', courses, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //create a function to load token
    AuthenticateService.prototype.loadtoken = function () {
        var token = localStorage.getItem('user_token');
        this.authtoken = token;
    };
    AuthenticateService.prototype.getcourses = function () {
        return this.http.get('/users/getcourses')
            .map(function (res) { return res.json().courses; });
    };
    //function to get all students 
    AuthenticateService.prototype.getstudents = function () {
        return this.http.get('/users/getstudents')
            .map(function (res) { return res.json(); });
    };
    AuthenticateService.prototype.getregisterdcourses = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/getregisteredcourses', email, { headers: headers })
            .map(function (res) { return res.json().user.user; });
    };
    //service to update all the registered parameters
    AuthenticateService.prototype.updatereg = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("/users/updateapproval/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //service to store user in local storage
    AuthenticateService.prototype.storeuser = function (token, user) {
        localStorage.setItem('user_token', token);
        //localStorage.setItem('user',JSON.stringify(user))
    };
    //service to logout user
    AuthenticateService.prototype.logout = function () {
        localStorage.clear();
        this.authtoken = null;
    };
    //for checking if her is a token
    AuthenticateService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('user_token');
    };
    //creating the service to communicate with the backend api and change the approval status
    AuthenticateService.prototype.updatestatus2 = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', "application/json");
        return this.http.put('/users/updateapproval2/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //service to dissaprove user course registraton 
    AuthenticateService.prototype.dissaprove = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/users/disaprove/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // creating a service to delete courses
    AuthenticateService.prototype.delete = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/users/deletecourses/' + id, { headers: headers });
    };
    AuthenticateService.prototype.registeradmin = function (admin) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", "application/json");
        return this.http.post("/users/registeradmin", admin, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AuthenticateService;
}());
AuthenticateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthenticateService);

var _a;
//# sourceMappingURL=authenticate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ////checkin all fields to know if it undefine
    ValidateService.prototype.validatefields = function (user) {
        if (user.firstname == undefined || user.secondname == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    //cehcking if the email field is properly validated
    ValidateService.prototype.validateemail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateloginfields = function (user) {
        if (user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    //validate add courses fields
    ValidateService.prototype.validatecourses = function (courses) {
        if (courses.coursetitle == undefined || courses.coursecode == undefined || courses.courseunit == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map