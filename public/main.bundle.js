webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_route_guard__ = __webpack_require__("../../../../../src/app/guards/route.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_blog_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_new_post_new_post_component__ = __webpack_require__("../../../../../src/app/components/new-post/new-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_tiny_tiny_component__ = __webpack_require__("../../../../../src/app/components/tiny/tiny.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_blog_post_blog_post_component__ = __webpack_require__("../../../../../src/app/components/blog-post/blog-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_resources_resources_component__ = __webpack_require__("../../../../../src/app/components/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_new_resource_new_resource_component__ = __webpack_require__("../../../../../src/app/components/new-resource/new-resource.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_reverse_pipe__ = __webpack_require__("../../../../../src/app/pipes/reverse.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'blog',
        component: __WEBPACK_IMPORTED_MODULE_14__components_blog_blog_component__["a" /* BlogComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_18__components_about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_19__components_contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'new-post',
        component: __WEBPACK_IMPORTED_MODULE_15__components_new_post_new_post_component__["a" /* NewPostComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_route_guard__["a" /* RouteGuard */]]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_20__components_admin_admin_component__["a" /* AdminComponent */]
    },
    {
        path: 'resources',
        component: __WEBPACK_IMPORTED_MODULE_21__components_resources_resources_component__["a" /* ResourcesComponent */]
    },
    {
        path: 'new-resource',
        component: __WEBPACK_IMPORTED_MODULE_23__components_new_resource_new_resource_component__["a" /* NewResourceComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_new_post_new_post_component__["a" /* NewPostComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_tiny_tiny_component__["a" /* TinyComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_blog_post_blog_post_component__["a" /* BlogPostComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_resources_resources_component__["a" /* ResourcesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_new_resource_new_resource_component__["a" /* NewResourceComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pipes_reverse_pipe__["a" /* ReversePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_blog_service__["a" /* BlogService */],
                __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__services_resource_service__["a" /* ResourceService */],
                __WEBPACK_IMPORTED_MODULE_9__services_window_service__["b" /* WINDOW_PROVIDERS */],
                __WEBPACK_IMPORTED_MODULE_10__guards_route_guard__["a" /* RouteGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\r\n  height: 500px;\r\n  width: 100%;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n  background-blend-mode: darken;\r\n  overflow: hidden;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: bottom center;\r\n  z-index: 1;\r\n  overflow: hidden;\r\n}\r\n\r\n.logo {\r\n  color: #fff;\r\n  font-family: 'Cheque-Regular', sans-serif;\r\n  font-size: 70px;\r\n  position: absolute;\r\n  top: 250px;\r\n  left: 50%;\r\n  margin-top: -42px;\r\n  text-align: center;\r\n  -webkit-transform: translate(-50%, 0px);\r\n          transform: translate(-50%, 0px);\r\n  border-bottom: 2px solid #fff;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\r\n  z-index: 2;\r\n}\r\n\r\n.body-container {\r\n  height: calc(100% + 50px);\r\n  min-height: calc(100vh - 500px);\r\n  width: 100%;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n}\r\n\r\n.spacer {\r\n  height: 2000px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [ngStyle]=\"{'background-image': getHeaderBg()}\">\r\n  <h1 class=\"logo\" #logo>About Us</h1>\r\n</div>\r\n\r\n<div class=\"body-container\" [ngStyle]=\"{'background-image': getBodyBg()}\">\r\n\r\n  <div class=\"spacer\"></div>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AboutComponent = (function () {
    function AboutComponent(window, document) {
        this.window = window;
        this.document = document;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.onWindowScroll = function () {
        if (this.window.scrollY < 500) {
            this.logo.nativeElement.style.transform = "translate(-50%, " + this.window.scrollY / 2 + "%";
        }
    };
    AboutComponent.prototype.getHeaderBg = function () {
        return "url('/assets/img/about-md.jpeg')";
    };
    AboutComponent.prototype.getBodyBg = function () {
        return "url('/assets/img/topography.png')";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('logo'),
        __metadata("design:type", Object)
    ], AboutComponent.prototype, "logo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AboutComponent.prototype, "onWindowScroll", null);
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_window_service__["a" /* WINDOW */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Window,
            Document])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login {\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.body-container {\r\n  height: calc(100% + 50px);\r\n  min-height: calc(100vh - 500px);\r\n  width: 100%;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n}\r\n\r\n.page-header {\r\n  font-family: 'Cheque-Black', sans-serif;\r\n  font-size: 40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body-container\" [ngStyle]=\"{'background-image': getBodyBg()}\">\r\n  <div class=\"login flex flex-column align-center justify-center text-center\">\r\n    <h2 class=\"page-header\">Login</h2>\r\n    <form (submit)=\"onLoginSubmit()\">\r\n\r\n      <div class=\"form-group\">\r\n        <label>Username</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Password</label>\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n      </div>\r\n\r\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function AdminComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
        };
        this.userService.authenticateUser(user).subscribe(function (data) {
            if (!data.success) {
                _this.router.navigate(['/']);
            }
            else {
                _this.userService.storeUserData(data.token, data.user);
                _this.router.navigate(['/blog']);
            }
        });
    };
    AdminComponent.prototype.getBodyBg = function () {
        return "url('./assets/img/topography.png')";
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blog-post/blog-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-image {\r\n  height: 281px;\r\n  width: 500px;\r\n}\r\n\r\n.post-title, .post-info, .post-body {\r\n  color: #fff;\r\n}\r\n\r\n.side-card {\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#414345), to(#232526));\r\n  background: linear-gradient(to bottom, #414345, #232526);\r\n  color: #fff;\r\n  border: 1px solid rgba(255, 255, 255, .5);\r\n}\r\n\r\n.card-header {\r\n  border-bottom: 1px solid rgba(255, 255, 255, .5);\r\n}\r\n\r\np {\r\n  font-size: 18px;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n  text-align: center;\r\n}\r\n\r\nli:hover {\r\n  cursor: pointer;\r\n  border-bottom: 2px #000;\r\n}\r\n\r\na {\r\n  color: #fff;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog-post/blog-post.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n\r\n    <!-- Post Content Column -->\r\n    <div class=\"col-md-8\" >\r\n        <img class=\"post-image\" [src]=\"determineImageSize()\" alt=\"\">\r\n      <h1 class=\"post-title\">{{post.title}}</h1>\r\n      <p class=\"post-info\">By Dennis Hoffman {{post.date}}</p>\r\n      <div class=\"post-body\" [innerHTML]=\"post.body\"></div>\r\n\r\n    </div>\r\n    <!-- end col-md-8 -->\r\n\r\n    <!-- Sidebar Widgets Column -->\r\n    <div class=\"col-md-4\">\r\n      <!-- past posts Widget -->\r\n      <div class=\"card my-4 side-card\">\r\n        <h5 class=\"card-header\">Recent Posts</h5>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 flex align-center justify-center\">\r\n              <ul class=\"post-ul\">\r\n                <li class=\"post-li\" (click)=\"selectPost(posts[0])\">{{posts[0].title}}</li>\r\n                <li class=\"post-li\" (click)=\"selectPost(posts[1])\">{{posts[1].title}}</li>\r\n                <li class=\"post-li\" (click)=\"selectPost(posts[2])\">{{posts[2].title}}</li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-md-6 flex align-center justify-center\">\r\n              <ul class=\"post-ul\">\r\n                <li class=\"post-li\" (click)=\"selectPost(posts[3])\">{{posts[3].title}}</li>\r\n                <li class=\"post-li\" (click)=\"selectPost(posts[4])\">{{posts[4].title}}</li>\r\n                <li class=\"post-li\" (click)=\"selectPost(posts[5])\">{{posts[5].title}}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Side Widget -->\r\n      <div class=\"card my-4 side-card\">\r\n        <h5 class=\"card-header\">Resources</h5>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 flex justify-center align-center\">\r\n              <ul class=\"resource-ul\">\r\n                <a [href]=\"resources[0].url\" target=\"_blank\"><li class=\"resource-li\">{{resources[0].title}}</li></a>\r\n                <a [href]=\"resources[1].url\" target=\"_blank\"><li class=\"resource-li\">{{resources[1].title}}</li></a>\r\n                <a [href]=\"resources[2].url\" target=\"_blank\"><li class=\"resource-li\">{{resources[2].title}}</li></a>\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-md-6 flex justify-center align-center\">\r\n              <ul class=\"resource-ul\">\r\n                <a [href]=\"resources[3].url\" target=\"_blank\"><li class=\"resource-li\">{{resources[3].title}}</li></a>\r\n                <a [href]=\"resources[4].url\" target=\"_blank\"><li class=\"resource-li\">{{resources[4].title}}</li></a>\r\n                <a [href]=\"resources[5].url\" target=\"_blank\"><li class=\"resource-li\">{{resources[5].title}}</li></a>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blog-post/blog-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var BlogPostComponent = (function () {
    function BlogPostComponent(window, document, blogService, resourceService) {
        this.window = window;
        this.document = document;
        this.blogService = blogService;
        this.resourceService = resourceService;
        this.evenPosts = [];
        this.oddPosts = [];
    }
    BlogPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.post = this.blogService.selectedPost;
        this.blogService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
            _this.posts = _this.posts.reverse();
        });
        this.resourceService.getResources().subscribe(function (resource) {
            _this.resources = resource;
            _this.resources = _this.resources.reverse();
        });
    };
    BlogPostComponent.prototype.selectResource = function (resource) {
    };
    BlogPostComponent.prototype.selectPost = function (post) {
        this.blogService.selectedPost = post;
        this.post = post;
        this.window.scrollTo(0, 0);
    };
    BlogPostComponent.prototype.determineImageSize = function () {
        return this.post.image;
    };
    BlogPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blog-post',
            template: __webpack_require__("../../../../../src/app/components/blog-post/blog-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blog-post/blog-post.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__services_window_service__["a" /* WINDOW */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Window,
            Document,
            __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_2__services_resource_service__["a" /* ResourceService */]])
    ], BlogPostComponent);
    return BlogPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n  color: #fff;\r\n  background-color: rgba(0,0,0,0.5);\r\n  -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n\r\n}\r\n\r\nbutton:hover {\r\n  color: #fff;\r\n  background-color: rgba(0,0,0,0.5);\r\n  -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n  -webkit-transform: translateY(-2px);\r\n          transform: translateY(-2px);\r\n}\r\n\r\n.btn {\r\n  border: 1px solid #fff;\r\n}\r\n\r\n.card {\r\n  margin-bottom: 30px;\r\n  color: #fff;\r\n  -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n  background-color: rgba(0,0,0,.7);\r\n\r\n}\r\n\r\n.card-title {\r\n  font-family: 'Cheque-Regular', sans-serif;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\r\n\r\n}\r\n\r\n.header {\r\n  height: 500px;\r\n  width: 100%;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n  background-blend-mode: darken;\r\n  overflow: hidden;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: bottom center;\r\n\r\n}\r\n\r\n.logo {\r\n  color: #fff;\r\n  font-family: 'Cheque-Regular', sans-serif;\r\n  font-size: 70px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  text-align: center;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  border-bottom: 2px solid #fff;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\r\n}\r\n\r\n.body-container {\r\n  height: calc(100% + 50px);\r\n  min-height: calc(100vh - 500px);\r\n  width: 100%;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n}\r\n\r\n.post-image {\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n\r\n.card-text {\r\n  margin-top: 20px;\r\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);\r\n  line-height: 20px;\r\n  max-height: 120px;\r\n  overflow: hidden;\r\n}\r\n\r\n.card-btn {\r\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);\r\n}\r\n\r\n.edit-btn, .back-btn, .new-post {\r\n  margin-bottom: 20px;\r\n  margin-right: 20px;\r\n  margin-top: 20px;\r\n\r\n}\r\n\r\n.back-btn {\r\n  margin-left: 12px;\r\n}\r\n\r\n.post-card {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.post-container {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n@media screen and (max-width: 370px) {\r\n  .logo {\r\n    font-size: 50px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  .card {\r\n    margin-left: 40px;\r\n    margin-right: 40px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 990px) {\r\n  .card-title {\r\n    font-size: 28px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .card {\r\n    min-height: 500px;\r\n  }\r\n\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [ngStyle]=\"{'background-image': getHeaderBg()}\">\r\n  <h1 class=\"logo\" #logo>Monthly Updates</h1>\r\n</div>\r\n\r\n<div class=\"body-container\">\r\n\r\n<div class=\"container\">\r\n\r\n\r\n  <ng-template [ngIf]=\"postSelected === true\">\r\n    <div class=\"button-group flex flex-row\">\r\n      <button (click)=\"this.postSelected = false\" [routerLink]=\"['/blog']\" type=\"button\" class=\"btn back-btn\">\r\n        <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\r\n      </button>\r\n<!-- if user logged in -->\r\n      <ng-template [ngIf]=\"this.userService.loggedIn()\">\r\n<!-- new post -->\r\n        <button [routerLink]=\"['/new-post']\" type=\"button\" class=\"btn new-post\">New Post</button>\r\n<!-- edit post -->\r\n        <button [routerLink]=\"['/new-post']\" (click)=\"this.blogService.editPost = true\" class=\"btn edit-btn\" type=\"button\">Edit Post</button>\r\n<!-- delete post -->\r\n        <button [routerLink]=\"['/']\" (click)=\"deletePost()\" class=\"btn edit-btn\" type=\"button\">Delete post</button>\r\n\r\n      </ng-template>\r\n    </div>\r\n    <app-blog-post></app-blog-post>\r\n  </ng-template>\r\n\r\n</div>\r\n\r\n<div class=\"post-cards\">\r\n\r\n<div class=\"container post-container\" #postContainer>\r\n  <br>\r\n\r\n<!-- [ngStyle]=\"{'background-image': getCardBg()}\" -->\r\n\r\n  <div class=\"row\">\r\n\r\n    <ng-template [ngIf]=\"postSelected === false\">\r\n\r\n      <div class=\"col-md-4 spacer\" *ngFor=\"let post of posts; let i = index\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body flex flex-column text-center\">\r\n            <h4 class=\"card-title\">{{post.title}}</h4>\r\n            <img class=\"post-image\" [src]=\"determineImageSize(i)\" alt=\"\">\r\n            <p class=\"card-text\">{{post.body}}...</p>\r\n            <button (click)=\"this.postSelected = true; showPost(i)\" type=\"button\" class=\" card-btn btn btn-outline-light\">View Post</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-template>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var BlogComponent = (function () {
    function BlogComponent(window, document, blogService, userService) {
        this.window = window;
        this.document = document;
        this.blogService = blogService;
        this.userService = userService;
        this.postSelected = false;
        this.getPosts();
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.blogService.editPost = false;
        this.blogService.editablePostId = undefined;
        this.getPosts();
        this.userService.loadToken();
    };
    BlogComponent.prototype.onWindowScroll = function () {
        if (this.window.scrollY < 500 && this.window.innerWidth >= 1362) {
            this.logo.nativeElement.style.transform = "translate(-50%, " + (-50 + (this.window.scrollY / 2)) + "%";
        }
        else {
            this.logo.nativeElement.style.transform = "translate(-50%, " + (-50 + (this.window.scrollY / 3)) + "%";
        }
    };
    BlogComponent.prototype.getPosts = function () {
        var _this = this;
        this.blogService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
            _this.posts = _this.posts.reverse();
            _this.blogService.blogPosts = _this.posts;
            for (var i = 0; i < _this.posts.length; i++) {
                _this.posts[i].body = _this.posts[i].body.replace(/<\/?[^>]+(>|$)/g, '').replace('&nbsp;', '');
            }
        });
    };
    BlogComponent.prototype.deletePost = function () {
        confirm('Are you sure you would like to delete this post');
        this.blogService.deletePost(this.blogService.editablePostId).subscribe();
    };
    BlogComponent.prototype.showPost = function (i) {
        console.log(this.posts[0]);
        console.log(i);
        this.blogService.selectPost(this.posts[i]);
        this.blogService.editablePostId = this.posts[i]._id;
        this.window.scrollTo(0, 0);
    };
    BlogComponent.prototype.getHeaderBg = function () {
        return "url('/assets/img/blog-md.jpeg')";
    };
    BlogComponent.prototype.determineImageSize = function (i) {
        return this.posts[i].image;
    };
    BlogComponent.prototype.getCardBg = function () {
        return "url('/assets/img/mochaGrunge.png')";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('logo'),
        __metadata("design:type", Object)
    ], BlogComponent.prototype, "logo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BlogComponent.prototype, "onWindowScroll", null);
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blog',
            template: __webpack_require__("../../../../../src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blog/blog.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_window_service__["a" /* WINDOW */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Window,
            Document,
            __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input:focus {\r\n  color: #fff;\r\n  background-color: rgba(0,0,0,0.5);\r\n  -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\ntextarea:focus {\r\n  color: #fff;\r\n  background-color: rgba(0,0,0,0.5);\r\n  -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n.btn-custom, input, textarea {\r\n  color: #fff;\r\n  background-color: rgba(0,0,0,0.5);\r\n  -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n\r\n}\r\n\r\n.btn-custom:hover {\r\n  color: #fff;\r\n  background-color: rgba(0,0,0,0.5);\r\n  -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n  -webkit-transform: translateY(-2px);\r\n          transform: translateY(-2px);\r\n}\r\n\r\n.btn {\r\n  border: 1px solid #fff;\r\n}\r\n\r\n.header {\r\n  height: 500px;\r\n  width: 100%;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n  background-blend-mode: darken;\r\n  overflow: hidden;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: bottom center;\r\n}\r\n\r\n.logo {\r\n  color: #fff;\r\n  font-family: 'Cheque-Regular', sans-serif;\r\n  font-size: 70px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  text-align: center;\r\n  -webkit-transform: translate(-50%, 0px);\r\n          transform: translate(-50%, 0px);\r\n  border-bottom: 2px solid #fff;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\r\n}\r\n\r\n.body-container {\r\n  min-height: calc(100vh - 500px);\r\n  height: calc(100% + 50px);\r\n  width: 100%;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n}\r\n\r\n.form-container {\r\n  height: 500px;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\nform {\r\n  width: 50%;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  form {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [ngStyle]=\"{'background-image': getHeaderBg()}\">\r\n  <h1 class=\"logo\" #logo>Contact Us</h1>\r\n</div>\r\n<div class=\"body-container\">\r\n\r\n  <div class=\"form-container flex flex-column align-center justify-center\">\r\n\r\n    <form action=\"https://formspree.io/your@email.com\" method=\"POST\">\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"email\" class=\"form-control\"   name=\"_replyto\" placeholder=\"Email\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <textarea type=\"text\" class=\"form-control\"   name=\"content\" placeholder=\"Message\" rows=\"5\"></textarea>\r\n        </div>\r\n\r\n      <input type=\"submit\" class=\"btn btn-custom\" value=\"Submit\">\r\n    </form>\r\n\r\n  </div>\r\n\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ContactComponent = (function () {
    function ContactComponent(window, document) {
        this.window = window;
        this.document = document;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onWindowScroll = function () {
        if (this.window.scrollY < 500 && this.window.innerWidth >= 868) {
            this.logo.nativeElement.style.transform = "translate(-50%, " + (-50 + (this.window.scrollY / 2)) + "%";
        }
        else {
            this.logo.nativeElement.style.transform = "translate(-50%, " + (-50 + (this.window.scrollY / 3)) + "%";
        }
    };
    ContactComponent.prototype.getHeaderBg = function () {
        return "url('/assets/img/contact-md.jpeg')";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('logo'),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "logo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ContactComponent.prototype, "onWindowScroll", null);
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_window_service__["a" /* WINDOW */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Window,
            Document])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n  height: 50px;\r\n  width: 100%;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#414345), to(#232526));\r\n  background: linear-gradient(to bottom, #414345, #232526);\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.col-sm.footer {\r\n  padding: none;\r\n}\r\n\r\n.fab {\r\n  color: #fff;\r\n  font-size: 35px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.fab:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.footer-left {\r\n  height: 100%;\r\n  width: 50%;\r\n  float: left;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n\r\n}\r\n\r\n.footer-right {\r\n  height: 100%;\r\n  width: 50%;\r\n  float: right;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n\r\n.copyright {\r\n  color: #fff;\r\n  margin: 0px 10px 5px 0px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <div class=\"footer-left\">\r\n    <a href=\"https://www.linkedin.com/company/5862484/\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a>\r\n    <a href=\"https://www.facebook.com/dvhmhs58?fref=%2Freqs.php\" target=\"_blank\"><i class=\"fab fa-facebook-square\"></i></a>\r\n  </div>\r\n  <div class=\"footer-right\">\r\n    <a href=\"https://parkersalterego.github.io/portfolio/\" target=\"_blank\"><p class=\"copyright\">&copy; Alter Ego Designs 2018</p></a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n  color: #fff;\r\n  background-color: rgba(0,0,0,0.5);\r\n  -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n\r\n}\r\n\r\nbutton:hover {\r\n  color: #fff;\r\n  background-color: rgba(0,0,0,0.5);\r\n  -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n  -webkit-transform: translateY(-2px);\r\n          transform: translateY(-2px);\r\n}\r\n\r\n.btn {\r\n  border: 1px solid #fff;\r\n}\r\n\r\n.header {\r\n  height: 500px;\r\n  width: 100%;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n  background-position-x: center;\r\n  background-position-y: bottom;\r\n  background-repeat: no-repeat;\r\n  overflow: hidden;\r\n}\r\n\r\n.header-text {\r\n  position:absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.logo {\r\n  color: #fff;\r\n  font-family: 'Cheque-Regular', sans-serif;\r\n  font-size: 70px;\r\n  text-align: center;\r\n  border-bottom: 2px solid #fff;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\r\n}\r\n\r\n.mission {\r\n  color: #fff;\r\n  font-size: 20px;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\r\n  text-align: center;\r\n\r\n}\r\n\r\n.body-container {\r\n  height: calc(100% + 50px);\r\n  min-height: calc(100vh -500px);\r\n  width: 100%;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n}\r\n\r\n/* profile */\r\n\r\n.profile-container {\r\n  height: 240px;\r\n  width: 100%;\r\n  position: relative;\r\n  margin: 0px 0px 20px 0px;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#414345), to(#232526));\r\n  background: linear-gradient(to bottom, #414345, #232526);\r\n  color: #fff;\r\n  -webkit-box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.75);\r\n          box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.75);\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n.profile-sub-container {\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  position: aboslute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n\r\n}\r\n\r\n.profile-image {\r\n  height: 200px;\r\n  width: 200px;\r\n  margin-right: 10px;\r\n  -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n  background-size: 100% 120%;\r\n  -webkit-clip-path: circle(50% at 50% 50%);\r\n  clip-path: circle(50% at 50% 50%);\r\n}\r\n\r\n.profile-text {\r\n  width: 500px;\r\n  margin-left: 10px;\r\n  text-align: center;\r\n}\r\n\r\n/* cards */\r\n\r\n.text-container {\r\n  height: 500px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.text-h2 {\r\n  font-family: 'Cheque-Black', sans-serif;\r\n  font-size: 40px;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, .5);\r\n  color: #fff;\r\n}\r\n\r\n.text-p {\r\n  width: 700px;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n\r\n.clear-container {\r\n  height: 500px;\r\n  width: 100%;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  -webkit-filter: blur(5px);\r\n          filter: blur(5px);\r\n}\r\n\r\n.clear-container.animate {\r\n  -webkit-filter: blur(0px);\r\n          filter: blur(0px);\r\n  -webkit-transition: 1s linear;\r\n  transition: 1s linear;\r\n}\r\n\r\n.clear-text {\r\n  color: #fff;\r\n  font-family: 'Cheque-Regular', sans-serif;\r\n  font-size: 100px;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\r\n  text-align: center;\r\n}\r\n\r\n/* updates */\r\n\r\n.updates-resources-container {\r\n  height: 500px;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.monthly-updates {\r\n  background-size: cover;\r\n  height: 500px;\r\n  width: 50%;\r\n  position: absolute;\r\n  left: 0;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n.resources {\r\n  height: 500px;\r\n  width: 50%;\r\n  position: absolute;\r\n  right: 0;\r\n  overflow: hidden;\r\n  -webkit-transition:;\r\n  transition:\r\n\r\n}\r\n\r\n.updates-image {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  -webkit-transform: scale(1.2);\r\n          transform: scale(1.2);\r\n  -webkit-transition: linear 1s;\r\n  transition: linear 1s;\r\n}\r\n\r\n.monthly-updates:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.monthly-updates:hover > .updates-image {\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n\r\n}\r\n\r\n.lower-text {\r\n  font-family: 'Cheque-Regular', sans-serif;\r\n  color: #fff;\r\n  margin: 0;\r\n  font-size: 70px;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\r\n}\r\n\r\n.resources-image {\r\n  height: 100%;\r\n  width: 100%;\r\n  -webkit-transform: scale(1.2);\r\n          transform: scale(1.2);\r\n  max-height: 500px;\r\n  -webkit-transition: linear 1s;\r\n  transition: linear 1s;\r\n\r\n}\r\n\r\n.resources:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.resources:hover > .resources-image {\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n\r\n}\r\n\r\n.text-backing {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n@media screen and (max-width: 400px) and (min-width: 0px) {\r\n  .profile-p {\r\n    max-width: 280px;\r\n    font-size: 14px;\r\n\r\n  }\r\n\r\n  .profile-text {\r\n    min-height: 128px;\r\n  }\r\n\r\n  .profile-container {\r\n    min-height: 368px;\r\n  }\r\n\r\n  .profile-sub-container {\r\n    min-height: 368px;\r\n  }\r\n\r\n  .logo {\r\n    font-size: 50px;\r\n\r\n  }\r\n\r\n  .lower-text {\r\n    font-size: 50px;\r\n  }\r\n\r\n  .text-container {\r\n    height: 400px;\r\n  }\r\n\r\n  .text-h2 {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .text-p {\r\n    font-size: 16px;\r\n    max-width: 280px;\r\n  }\r\n\r\n  .clear-text {\r\n    font-size: 50px;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 550px) and (min-width: 401px) {\r\n\r\n  .text-p {\r\n    font-size: 16px;\r\n    width: 400px;\r\n  }\r\n\r\n  .profile-p {\r\n    max-width: 280px;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .profile-text {\r\n    height: 152px;\r\n  }\r\n\r\n  .profile-container, .profile-sub-container {\r\n    height: 392px;\r\n  }\r\n\r\n  .clear-text {\r\n    font-size: 70px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n  .profile-container, .profile-sub-container {\r\n    height: 356px;\r\n  }\r\n\r\n  .profile-sub-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n\r\n  .profile-image-container {\r\n    height: 100px;\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n\r\n  .profile-image {\r\n    margin-bottom: 70px;\r\n    height: 150px;\r\n    width: 150px;\r\n\r\n  }\r\n\r\n  .profile-text {\r\n    height: 116px;\r\n    width: 100%;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n  }\r\n\r\n  .profile-p {\r\n    width: 500px;\r\n  }\r\n\r\n  .text-p {\r\n    width: 500px;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n  .resources {\r\n    height: 350px;\r\n    margin-top: 350px;\r\n    width: 100%;\r\n  }\r\n\r\n  .monthly-updates {\r\n    height: 350px;\r\n    width: 100%;\r\n  }\r\n\r\n  .updates-resources-container {\r\n    height: 700px;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [ngStyle]=\"{'background-image': getHeaderBg()}\">\r\n  <div class=\"header-text\" #headerText>\r\n      <h1 class=\"logo\">Financial Depot</h1>\r\n      <h4 class=\"mission\">Small Enough to Appreciate You - Big Enough to Serve You</h4>\r\n  </div>\r\n</div>\r\n\r\n<!-- profile -->\r\n<div class=\"body-container\">\r\n\r\n  <div class=\"profile-container\">\r\n    <div class=\"profile-sub-container\">\r\n      <div class=\"profile-image-container\">\r\n        <div class=\"profile-image\" [ngStyle]=\"{'background-image': getProfileImage()}\"></div>\r\n      </div>\r\n      <div class=\"profile-text flex flex-column justify-center align-center\">\r\n\r\n        <div class=\"profile-p\">Financial Depot's goal is to provide dividend growth for our clients so they will have disposable cash flow to spend\r\n          or build wealth by re-investing. Dividend Growth adds value over time as companies increase cash payouts to the\r\n          share holders.</div>\r\n          <br>\r\n        <div class=\"profile-h2\">Dennis Hoffman - CFP</div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- market research -->\r\n  <div class=\"text-container flex flex-column justify-center align-center\">\r\n    <h2 class=\"text-h2\">Dedication to Market Research</h2>\r\n    <p class=\"text-p\">We research DGI (Dividend Growth Investing) several days per week. We\r\n      use Seeking Alpha and Dividend Hunting Services from multiple sources\r\n      that we purchase. Our goal is active management that stays ahead of the\r\n      market trends. We follow REITs traded commercial real estate, ETF’s\r\n      exchange traded funds, and CEF closed end funds. We also follow a very\r\n      small number of mutual funds that pay dividends and offer diversification\r\n      to our portfolios.</p>\r\n  </div>\r\n\r\n  <!-- clear financial planning -->\r\n  <div class=\"clear-container flex justify-center align-center\" [ngStyle]=\"{'background-image': getSomethingImage()}\" #clear>\r\n    <h2 class=\"clear-text\">Clear Financial Planning</h2>\r\n  </div>\r\n\r\n  <!-- updates -->\r\n  <div class=\"text-container flex flex-column justify-center align-center\">\r\n    <h2 class=\"text-h2\">Monthly Updates and Resources</h2>\r\n    <p class=\"text-p\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi blanditiis voluptas, at magni minima et eos, eius corrupti\r\n      consectetur maxime reprehenderit quos tempore, expedita ullam nobis! Odit voluptates porro sint?</p>\r\n  </div>\r\n\r\n  <div class=\"updates-resources-container\">\r\n    <div class=\"monthly-updates\" [routerLink]=\"['/blog']\">\r\n      <img class=\"updates-image\" [src]=\"getUpdatesImage()\" alt=\"\">\r\n      <div class=\"text-backing flex justify-center align-center\">\r\n        <h1 class=\"lower-text\">Updates</h1>\r\n      </div>\r\n    </div>\r\n    <div class=\"resources\" [routerLink]=\"['/resources']\">\r\n      <img class=\"resources-image\" [src]=\"getResourcesImage()\" alt=\"\">\r\n      <div class=\"text-backing flex justify-center align-center\">\r\n        <h1 class=\"lower-text\">Resources</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"text-container flex flex-column justify-center align-center\">\r\n    <h2 class=\"text-h2\">Get In Touch</h2>\r\n    <p class=\"text-p\"> Our goal is to have clear consistant communication about our firm so we can meet your needs. We look forward to hearing from you soon.</p>\r\n    <button class=\"btn\" [routerLink]=\"['/contact']\">Contact Us</button>\r\n  </div>\r\n\r\n\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var HomeComponent = (function () {
    function HomeComponent(window, document, resourceService, blogService, userService) {
        this.window = window;
        this.document = document;
        this.resourceService = resourceService;
        this.blogService = blogService;
        this.userService = userService;
        this.bgImage = './assets/img/topography.svg';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.posts = this.blogService.blogPosts;
        this.userService.loadToken();
        this.userService.loggedIn();
        this.blogService.editPost = false;
        this.blogService.editablePostId = undefined;
        this.resourceService.editResource = false;
        this.resourceService.editableResourceId = undefined;
    };
    HomeComponent.prototype.onWindowScroll = function () {
        if (this.window.scrollY < 500 && this.window.innerWidth >= 1260) {
            this.headerText.nativeElement.style.transform = "translate(-50%, " + (-50 + (this.window.scrollY / 2)) + "%";
        }
        else {
            this.headerText.nativeElement.style.transform = "translate(-50%, " + (-50 + (this.window.scrollY / 3)) + "%";
        }
        if (this.window.scrollY > 500) {
            this.clear.nativeElement.classList.add('animate');
        }
    };
    HomeComponent.prototype.getHeaderBg = function () {
        return "url('./assets/img/home-lg.jpeg')";
    };
    HomeComponent.prototype.getProfileImage = function () {
        return "url('./assets/img/Dennis.jpg')";
    };
    HomeComponent.prototype.getUpdatesImage = function () {
        return './assets/img/blog-md.jpeg';
    };
    HomeComponent.prototype.getResourcesImage = function () {
        return './assets/img/resources-md.jpeg';
    };
    HomeComponent.prototype.getSomethingImage = function () {
        return "url('https://images.pexels.com/photos/630839/pexels-photo-630839.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb')";
    };
    HomeComponent.prototype.getContactImage = function () {
        return "url('/assets/img/contact-md.jpeg')";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('headerText'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "headerText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('clear'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "clear", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onWindowScroll", null);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__services_window_service__["a" /* WINDOW */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Window,
            Document,
            __WEBPACK_IMPORTED_MODULE_3__services_resource_service__["a" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ham-menu {\r\n  height: 33px;\r\n  width: 50px;\r\n  margin-top: 10px;\r\n  margin-left: 10px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 5;\r\n}\r\n\r\n.ham-menu:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.white {\r\n  background-color: #fff !important;\r\n}\r\n\r\n.bar {\r\n  height: 7px;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  position: absolute;\r\n}\r\n\r\n.bar:nth-child(1) {\r\n  position: absolute;\r\n  top: 0px;\r\n}\r\n\r\n.bar:nth-child(1).animate {\r\n  -webkit-animation: ham-one .35s ease-in forwards running;\r\n          animation: ham-one .35s ease-in forwards running;\r\n}\r\n\r\n.bar:nth-child(1).animate-reverse {\r\n  -webkit-animation: ham-one-reverse .35s ease-out forwards running;\r\n          animation: ham-one-reverse .35s ease-out forwards running;\r\n}\r\n\r\n/* bar two */\r\n\r\n.bar:nth-child(2) {\r\n  position: absolute;\r\n  top: 13px;\r\n}\r\n\r\n.bar:nth-child(2).animate {\r\n  -webkit-animation: ham-two .35s ease-in forwards running;\r\n          animation: ham-two .35s ease-in forwards running;\r\n}\r\n\r\n.bar:nth-child(2).animate-reverse {\r\n  -webkit-animation: ham-two-reverse .35s ease-out forwards running;\r\n          animation: ham-two-reverse .35s ease-out forwards running;\r\n}\r\n\r\n/*  bar three */\r\n\r\n.bar:nth-child(3) {\r\n  position: absolute;\r\n  top: 26px;\r\n}\r\n\r\n.bar:nth-child(3).animate {\r\n  -webkit-animation: ham-three .35s ease-in forwards running;\r\n          animation: ham-three .35s ease-in forwards running;\r\n}\r\n\r\n.bar:nth-child(3).animate-reverse {\r\n  -webkit-animation: ham-three-reverse .35s ease-out forwards running;\r\n          animation: ham-three-reverse .35s ease-out forwards running;\r\n}\r\n\r\n/* nav pop out */\r\n\r\n.nav {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 100px;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  position: fixed;\r\n  top: -100%;\r\n  left: 0;\r\n  z-index: 4;\r\n}\r\n\r\n.nav-ul {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  color: #fff;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  font-family: 'Cheque-Regular', sans-serif;\r\n  text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);\r\n}\r\n\r\n.nav-li {\r\n  margin-right: 20px;\r\n  list-style-type: none;\r\n}\r\n\r\n.nav-li:hover {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid #fff;\r\n}\r\n\r\n.nav-li:focus {\r\n  outline: none;\r\n}\r\n\r\n.nav.animate {\r\n  -webkit-animation: nav-slide-out .35s ease-out forwards running;\r\n          animation: nav-slide-out .35s ease-out forwards running;\r\n}\r\n\r\n.nav.animate-reverse {\r\n  -webkit-animation: nav-slide-in .35s ease-in forwards running;\r\n          animation: nav-slide-in .35s ease-in forwards running;\r\n}\r\n\r\n/* animations */\r\n\r\n@-webkit-keyframes ham-one {\r\n  0% {\r\n    top: 0px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  35% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  65% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(-45deg);\r\n            transform: rotate(-45deg);\r\n    top: 13px;\r\n  }\r\n}\r\n\r\n@keyframes ham-one {\r\n  0% {\r\n    top: 0px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  35% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  65% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(-45deg);\r\n            transform: rotate(-45deg);\r\n    top: 13px;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes ham-two {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  15% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes ham-two {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  15% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes ham-three {\r\n  0% {\r\n    top: 26px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  35% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  65% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n    top: 13px;\r\n  }\r\n}\r\n\r\n@keyframes ham-three {\r\n  0% {\r\n    top: 26px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  35% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  65% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n    top: 13px;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes ham-one-reverse {\r\n  0% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(-45deg);\r\n            transform: rotate(-45deg);\r\n  }\r\n  35% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  65% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n    top: 0px;\r\n  }\r\n}\r\n\r\n@keyframes ham-one-reverse {\r\n  0% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(-45deg);\r\n            transform: rotate(-45deg);\r\n  }\r\n  35% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  65% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n    top: 0px;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes ham-two-reverse {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  15% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes ham-two-reverse {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  15% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes ham-three-reverse {\r\n  0% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n  }\r\n  35% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  65% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n    top: 26px;\r\n  }\r\n}\r\n\r\n@keyframes ham-three-reverse {\r\n  0% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n  }\r\n  35% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  65% {\r\n    top: 13px;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n    top: 26px;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes nav-slide-out {\r\n  0% {\r\n    top: -100%;\r\n  }\r\n  100% {\r\n    top: 0%;\r\n  }\r\n}\r\n\r\n@keyframes nav-slide-out {\r\n  0% {\r\n    top: -100%;\r\n  }\r\n  100% {\r\n    top: 0%;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes nav-slide-in {\r\n  0% {\r\n    top: 0%;\r\n  }\r\n  100% {\r\n    top: -100%;\r\n  }\r\n}\r\n\r\n@keyframes nav-slide-in {\r\n  0% {\r\n    top: 0%;\r\n  }\r\n  100% {\r\n    top: -100%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 940px) {\r\n  .nav-ul {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n\r\n  .nav-li {\r\n    font-size: 40px;\r\n\r\n  }\r\n\r\n  .nav {\r\n    height: 100vh;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ham-menu\" (click)=\"onMenuClick()\" #hamMenu>\r\n  <div class=\"bar\" #barOne></div>\r\n  <div class=\"bar\" #barTwo></div>\r\n  <div class=\"bar\" #barThree></div>\r\n</div>\r\n\r\n<div class=\"nav\" #navBar>\r\n  <ul class=\"nav-ul text-center\">\r\n    <li class=\"nav-li\" (click)=\"onListItemClick()\" [routerLink]=\"['/']\">HOME</li>\r\n    <li class=\"nav-li\" (click)=\"onListItemClick()\" [routerLink]=\"['/blog']\">BLOG</li>\r\n    <li class=\"nav-li\" (click)=\"onListItemClick()\" [routerLink]=\"['/resources']\">RESOURCES</li>\r\n    <li class=\"nav-li\" (click)=\"onListItemClick()\" [routerLink]=\"['/contact']\">CONTACT</li>\r\n    <ng-template [ngIf]=\"this.userService.loggedIn()\">\r\n      <li class=\"nav-li\" (click)=\"onListItemClick()\" [routerLink]=\"['/new-post']\">NEW POST</li>\r\n      <li class=\"nav-li\" (click)=\"onListItemClick()\" [routerLink]=\"['/new-resource']\">NEW RESOURCE</li>\r\n      <li class=\"nav-li\" (click)=\"onLogoutClick()\" [routerLink]=\"['/']\">LOGOUT</li>\r\n    </ng-template>\r\n\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var NavComponent = (function () {
    function NavComponent(window, document, userService, router) {
        this.window = window;
        this.document = document;
        this.userService = userService;
        this.router = router;
        this.navBarCount = 0;
        this.navItems = [];
    }
    NavComponent.prototype.ngOnInit = function () {
        this.pushNavItems();
    };
    NavComponent.prototype.onWindowScroll = function () {
        var hamMenu = [this.barOne, this.barTwo, this.barThree];
        //  blog page scroll
        if (this.window.location.href === 'http://localhost:4200/blog') {
            if (this.window.scrollY < 485) {
                this.barOne.nativeElement.style.backgroundColor = '#fff';
                this.barTwo.nativeElement.style.backgroundColor = '#fff';
                this.barThree.nativeElement.style.backgroundColor = '#fff';
            }
            else if (this.window.scrollY >= 485) {
                this.barOne.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';
                this.barTwo.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';
                this.barThree.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, .7)';
            }
        }
    };
    NavComponent.prototype.onMenuClick = function () {
        if (this.navBarCount === 0) {
            this.navItems.forEach(function (item) {
                item.nativeElement.classList.add('animate');
            });
            this.barOne.nativeElement.classList.add('white');
            this.barTwo.nativeElement.classList.add('white');
            this.barThree.nativeElement.classList.add('white');
            this.navBarCount++;
        }
        else if (this.navBarCount % 2 === 1) {
            this.navItems.forEach(function (item) {
                item.nativeElement.classList.remove('animate');
                item.nativeElement.classList.add('animate-reverse');
            });
            this.barOne.nativeElement.classList.remove('white');
            this.barTwo.nativeElement.classList.remove('white');
            this.barThree.nativeElement.classList.remove('white');
            this.navBarCount++;
        }
        else {
            this.navItems.forEach(function (item) {
                item.nativeElement.classList.add('animate');
                item.nativeElement.classList.remove('animate-reverse');
            });
            this.barOne.nativeElement.classList.add('white');
            this.barTwo.nativeElement.classList.add('white');
            this.barThree.nativeElement.classList.add('white');
            this.navBarCount--;
        }
    };
    NavComponent.prototype.onListItemClick = function () {
        this.navItems.forEach(function (item) {
            item.nativeElement.classList.remove('animate');
            item.nativeElement.classList.add('animate-reverse');
        });
        this.navBarCount++;
    };
    NavComponent.prototype.pushNavItems = function () {
        this.navItems.push(this.barOne);
        this.navItems.push(this.barTwo);
        this.navItems.push(this.barThree);
        this.navItems.push(this.navBar);
    };
    NavComponent.prototype.onLogoutClick = function () {
        this.onListItemClick();
        this.userService.logout();
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('barOne'),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "barOne", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('barTwo'),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "barTwo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('barThree'),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "barThree", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('navBar'),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavComponent.prototype, "onWindowScroll", null);
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__services_window_service__["a" /* WINDOW */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Window,
            Document,
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/new-post/new-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\r\n  color: #fff;\r\n  margin-top: 10px;\r\n}\r\n\r\ninput[_ngcontent-c4] {\r\n  width: 80%;\r\n}\r\n\r\n.btn-custom, input {\r\n  color: #fff;\r\n  background-color: rgba(0,0,0,0.5);\r\n  -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n  border: 1px solid #fff;\r\n\r\n}\r\n\r\n.btn-custom:hover {\r\n  color: #fff;\r\n  background-color: rgba(0,0,0,0.5);\r\n  -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n  -webkit-transform: translateY(-2px);\r\n          transform: translateY(-2px);\r\n}\r\n\r\n.header {\r\n  height: 500px;\r\n  width: 100%;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n  background-blend-mode: darken;\r\n  overflow: hidden;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: bottom center;\r\n  -webkit-box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.75);\r\n          box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.75);\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.logo {\r\n  color: #fff;\r\n  font-family: 'Cheque-Regular', sans-serif;\r\n  font-size: 70px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  text-align: center;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  border-bottom: 2px solid #fff;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\r\n}\r\n\r\n.submit {\r\n  margin-bottom: 20px;\r\n}\r\n\r\ninput {\r\n  width: calc(100% - 40px);\r\n  border-radius: 5px;\r\n}\r\n\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\r\n  background-color: rgba(0,0,0,0.5);\r\n  color: #fff;\r\n}\r\n\r\n.nav-tabs .nav-link {\r\n  color: #fff;\r\n}\r\n\r\n.nav-tabs {\r\n  border: none;\r\n}\r\n\r\n.post-content, .post-title {\r\n  color: #fff;\r\n}\r\n\r\n.post-image {\r\n  height: 394px;\r\n  width: 700px;\r\n  background-size: cover;\r\n}\r\n\r\n@media screen and ( max-width: 745px) {\r\n  .post-image {\r\n    height: 281px;\r\n    width: 500px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 545px) {\r\n  .post-image {\r\n    width: 300px;\r\n    height: 169px;\r\n  }\r\n}\r\n\r\n/* height: 281px;\r\n  width: 500px; */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-post/new-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [ngStyle]=\"{'background-image': getHeaderBg()}\">\r\n  <h1 class=\"logo\" #logo>New Post</h1>\r\n</div>\r\n\r\n<div class=\"body-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <br>\r\n        <nav>\r\n          <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n            <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\"\r\n              aria-selected=\"true\">Edit</a>\r\n            <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\" aria-controls=\"nav-profile\"\r\n              aria-selected=\"false\">View</a>\r\n          </div>\r\n        </nav>\r\n\r\n        <br>\r\n        <div class=\"tab-content\" id=\"nav-tabContent\">\r\n          <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n\r\n            <div class=\"inputs flex flex-column\">\r\n              <div class=\"input-group flex flex-column align-center\">\r\n                <label for=\"\">Title</label>\r\n                <input (keyup)=\"titleUpdate($event)\" type=\"text\" id=\"title\" [(ngModel)]=\"title\" name=\"title\" #postTitle>\r\n              </div>\r\n\r\n              <div class=\"input-group flex flex-column align-center\">\r\n                <label for=\"\">Image URL</label>\r\n                <input (keyup)=\"imageUpdate($event)\" type=\"text\" id=\"image\" [(ngModel)]=\"image\" name=\"image\" #postImage>\r\n              </div>\r\n            </div>\r\n\r\n            <hr>\r\n\r\n            <app-tiny [elementId]=\"post-body\" (onEditorKeyup)=\"onEditorKeyup($event)\"></app-tiny>\r\n            <br>\r\n            <div class=\"text-center\">\r\n              <input type=\"submit\" class=\"btn btn-custom submit\" value=\"Submit\" (click)=\"onSubmit()\">\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\r\n            <div class=\"view-post\">\r\n              <div class=\" content-container\" #contentContainer>\r\n                <div class=\"post-image\" #viewImage></div>\r\n                <div class=\"post-title\" #viewTitle></div>\r\n                <div class=\"post-content\" #viewContent></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/new-post/new-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tiny_tiny_component__ = __webpack_require__("../../../../../src/app/components/tiny/tiny.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var NewPostComponent = (function () {
    function NewPostComponent(window, document, blogService, router) {
        this.window = window;
        this.document = document;
        this.blogService = blogService;
        this.router = router;
        this.title = '';
        this.image = '';
    }
    NewPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.blogService.editPost === true) {
            this.blogService.getPostById(this.blogService.editablePostId).subscribe(function (post) {
                _this.title = post.title;
                _this.image = post.image;
                _this.post = post;
                _this.viewContent.nativeElement.innerHTML = _this.post.body;
                _this.viewImage.nativeElement.innerHTML = "<img class=\"preview-img\" src='" + _this.post.image + "'>";
                _this.viewTitle.nativeElement.innerHTML = "<h1>" + _this.post.title + "</h1>";
            });
        }
        this.contentContainer.nativeElement.style.minHeight = this.window.screen.availHeight - 500 + "px";
    };
    NewPostComponent.prototype.onWindowScroll = function () {
        if (this.window.scrollY < 500 && this.window.innerWidth >= 724) {
            this.logo.nativeElement.style.transform = "translate(-50%, " + (-50 + (this.window.scrollY / 2)) + "%";
        }
        else {
            this.logo.nativeElement.style.transform = "translate(-50%, " + (-50 + (this.window.scrollY / 3)) + "%";
        }
    };
    NewPostComponent.prototype.titleUpdate = function (event) {
        this.viewTitle.nativeElement.innerHTML = "<h1>" + this.postTitle.nativeElement.value + "</h1>";
    };
    NewPostComponent.prototype.imageUpdate = function (event) {
        this.viewImage.nativeElement.style.backgroundImage = "url(" + this.postImage.nativeElement.value + ")";
    };
    NewPostComponent.prototype.onEditorKeyup = function (event) {
        if (this.blogService.editPost === true) {
            this.post = {
                _id: this.blogService.editablePostId,
                title: this.title,
                image: this.image,
                date: this.post.date,
                body: event
            };
        }
        else {
            this.post = {
                title: this.title,
                image: this.image,
                date: new Date().getDate() + ", " + this.getMonth() + ", " + new Date().getFullYear(),
                body: event
            };
        }
        this.viewContent.nativeElement.innerHTML = event;
        this.viewImage.nativeElement.style.backgroundImage = "url(" + this.postImage.nativeElement.value + ")";
        this.viewTitle.nativeElement.innerHTML = "<h1>" + this.postTitle.nativeElement.value + "</h1>";
    };
    NewPostComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.blogService.editPost === true && this.title !== '' && this.image !== '') {
            this.post.title = this.title;
            this.post.image = this.image;
            this.blogService.updatePost(this.post).subscribe(function (post) {
                alert('Post Saved!');
                _this.router.navigate(['/']);
            });
        }
        else if (this.blogService.editPost === false && this.title !== '' && this.image !== '') {
            this.post.title = this.title;
            this.post.image = this.image;
            this.blogService.addPost(this.post).subscribe(function (post) {
                if (confirm('Post Saved! Would you like to draft another post?')) {
                    _this.title = '';
                    _this.image = '';
                    _this.post = undefined;
                    _this.tinyComponent.editor.setContent('');
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
        }
        else if (this.post === undefined || this.post.title === undefined || this.post.image === undefined) {
            alert('Please be sure to fill in all of the fields below');
        }
    };
    NewPostComponent.prototype.getMonth = function () {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var x = new Date().getMonth();
        return months[x];
    };
    NewPostComponent.prototype.getHeaderBg = function () {
        return "url('/assets/img/keyboard-md.jpeg')";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('viewImage'),
        __metadata("design:type", Object)
    ], NewPostComponent.prototype, "viewImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('viewTitle'),
        __metadata("design:type", Object)
    ], NewPostComponent.prototype, "viewTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('postImage'),
        __metadata("design:type", Object)
    ], NewPostComponent.prototype, "postImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('postTitle'),
        __metadata("design:type", Object)
    ], NewPostComponent.prototype, "postTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('contentContainer'),
        __metadata("design:type", Object)
    ], NewPostComponent.prototype, "contentContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('logo'),
        __metadata("design:type", Object)
    ], NewPostComponent.prototype, "logo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('viewContent'),
        __metadata("design:type", Object)
    ], NewPostComponent.prototype, "viewContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__tiny_tiny_component__["a" /* TinyComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__tiny_tiny_component__["a" /* TinyComponent */])
    ], NewPostComponent.prototype, "tinyComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NewPostComponent.prototype, "onWindowScroll", null);
    NewPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-post',
            template: __webpack_require__("../../../../../src/app/components/new-post/new-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/new-post/new-post.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__services_window_service__["a" /* WINDOW */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Window,
            Document,
            __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NewPostComponent);
    return NewPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/new-resource/new-resource.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\r\n  color: #fff;\r\n  margin-top: 10px;\r\n}\r\n\r\ninput[_ngcontent-c4] {\r\n  width: 80%;\r\n}\r\n\r\n.btn-custom, input {\r\n  color: #fff;\r\n  background-color: rgba(0,0,0,0.5);\r\n  -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n  border: 1px solid #fff;\r\n\r\n}\r\n\r\n.btn-custom:hover {\r\n  color: #fff;\r\n  background-color: rgba(0,0,0,0.5);\r\n  -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n  -webkit-transform: translateY(-2px);\r\n          transform: translateY(-2px);\r\n}\r\n\r\n.header {\r\n  height: 500px;\r\n  width: 100%;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n  background-blend-mode: darken;\r\n  overflow: hidden;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: bottom center;\r\n  -webkit-box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.75);\r\n          box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.75);\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.logo {\r\n  color: #fff;\r\n  font-family: 'Cheque-Regular', sans-serif;\r\n  font-size: 70px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n\r\n  text-align: center;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  border-bottom: 2px solid #fff;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\r\n}\r\n\r\n.submit {\r\n  margin-bottom: 20px;\r\n}\r\n\r\ninput {\r\n  width: calc(100% - 40px);\r\n  border-radius: 5px;\r\n}\r\n\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\r\n  background-color: rgba(0,0,0,0.5);\r\n  color: #fff;\r\n}\r\n\r\n.nav-tabs .nav-link {\r\n  color: #fff;\r\n}\r\n\r\n.nav-tabs {\r\n  border: none;\r\n}\r\n\r\n.resource-content, .resource-title {\r\n  color: #fff;\r\n}\r\n\r\n.resource-image {\r\n  height: 394px;\r\n  width: 700px;\r\n  background-size: cover;\r\n}\r\n\r\n@media screen and ( max-width: 745px) {\r\n  .resource-image {\r\n    height: 281px;\r\n    width: 500px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 545px) {\r\n  .resource-image {\r\n    width: 300px;\r\n    height: 169px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-resource/new-resource.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [ngStyle]=\"{'background-image': getHeaderBg()}\">\r\n  <h1 class=\"logo\" #logo>New Resource</h1>\r\n</div>\r\n<div class=\"body-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <br>\r\n        <nav>\r\n          <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n            <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\"\r\n              aria-selected=\"true\">Edit</a>\r\n            <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#nav-profile\" role=\"tab\" aria-controls=\"nav-profile\"\r\n              aria-selected=\"false\">View</a>\r\n          </div>\r\n        </nav>\r\n\r\n        <br>\r\n        <div class=\"tab-content\" id=\"nav-tabContent\">\r\n          <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n\r\n            <div class=\"inputs flex flex-column\">\r\n              <div class=\"input-group flex flex-column align-center\">\r\n                <label for=\"title\">Title</label>\r\n                <input (keyup)=\"titleUpdate($event)\" type=\"text\" id=\"title\" [(ngModel)]=\"title\" name=\"title\" #resourceTitle>\r\n              </div>\r\n\r\n              <div class=\"input-group flex flex-column align-center\">\r\n                <label for=\"image\">Image URL</label>\r\n                <input (keyup)=\"imageUpdate($event)\" type=\"text\" id=\"image\" [(ngModel)]=\"image\" name=\"image\" #resourceImage>\r\n              </div>\r\n\r\n              <div class=\"input-group flex flex-column align-center\">\r\n                <label for=\"url\">URL</label>\r\n                <input (keyup)=\"urlUpdate($event)\" type=\"text\" id=\"url\" [(ngModel)]=\"url\" name=\"url\" #resourceUrl>\r\n              </div>\r\n            </div>\r\n\r\n            <hr>\r\n\r\n            <app-tiny [elementId]=\"post-body\" (onEditorKeyup)=\"onEditorKeyup($event)\"></app-tiny>\r\n            <br>\r\n            <div class=\"text-center\">\r\n              <input type=\"submit\" class=\"btn btn-custom submit\" value=\"Submit\" (click)=\"onSubmit()\">\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\r\n            <div class=\"view-resource\">\r\n              <div class=\"content-container\" #contentContainer>\r\n                <div class=\"resource-image\" #viewImage></div>\r\n                <div class=\"resource-title\" #viewTitle></div>\r\n                <div class=\"resource-content\" #viewContent></div>\r\n                <div class=\"resource-link\" #viewUrl></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/new-resource/new-resource.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewResourceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tiny_tiny_component__ = __webpack_require__("../../../../../src/app/components/tiny/tiny.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var NewResourceComponent = (function () {
    function NewResourceComponent(window, document, resourceService, router) {
        this.window = window;
        this.document = document;
        this.resourceService = resourceService;
        this.router = router;
        this.title = '';
        this.image = '';
        this.url = '';
    }
    NewResourceComponent.prototype.ngOnInit = function () {
        this.editCheck();
        this.contentContainer.nativeElement.style.minHeight = this.window.screen.availHeight - 500 + "px";
    };
    NewResourceComponent.prototype.onWindowScroll = function () {
        if (this.window.scrollY < 500 && this.window.innerWidth >= 1110) {
            this.logo.nativeElement.style.transform = "translate(-50%, " + (-50 + (this.window.scrollY / 2)) + "%";
        }
        else {
            this.logo.nativeElement.style.transform = "translate(-50%, " + (-50 + (this.window.scrollY / 3)) + "%";
        }
    };
    NewResourceComponent.prototype.onEditorKeyup = function (event) {
        if (this.resourceService.editResource === true) {
            this.resource = {
                _id: this.resource._id,
                title: this.title,
                image: this.image,
                date: this.resource.date,
                url: this.url,
                body: event
            };
        }
        else {
            this.resource = {
                title: this.title,
                image: this.image,
                date: new Date().getDate() + ", " + this.getMonth() + ", " + new Date().getFullYear(),
                url: this.url,
                body: event
            };
        }
        this.viewContent.nativeElement.innerHTML = event;
        this.viewImage.nativeElement.style.backgroundImage = "url(" + this.resourceImage.nativeElement.value + ")";
        this.viewTitle.nativeElement.innerHTML = "<h1>" + this.resource.title + "</h1>";
    };
    NewResourceComponent.prototype.editCheck = function () {
        var _this = this;
        if (this.resourceService.editResource === true) {
            this.resourceService.getResourceById(this.resourceService.editableResourceId).subscribe(function (resource) {
                _this.resource = resource;
                _this.title = _this.resource.title;
                _this.image = _this.resource.image;
                _this.url = _this.resource.url;
                _this.viewContent.nativeElement.innerHTML = _this.resource.body;
                _this.viewImage.nativeElement.innerHTML = "<img class=\"preview-img\" src='" + _this.resource.image + "'>";
                _this.viewTitle.nativeElement.innerHTML = "<h1>" + _this.resource.title + "</h1>";
            });
        }
    };
    NewResourceComponent.prototype.titleUpdate = function (event) {
        this.viewTitle.nativeElement.innerHTML = "<h1>" + this.resourceTitle.nativeElement.value + "</h1>";
    };
    NewResourceComponent.prototype.imageUpdate = function (event) {
        this.viewImage.nativeElement.style.backgroundImage = "url(" + this.resourceImage.nativeElement.value + ")";
    };
    NewResourceComponent.prototype.urlUpdate = function (event) {
        this.viewUrl.nativeElement.innerHTML = "<a href=\"" + this.resourceUrl.nativeElement.value + "\" target=\"_blank\"><input type=\"submit\" class=\"btn btn-custom submit\" value=\"View Resource\"></a>";
    };
    NewResourceComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('submit clicked');
        if (this.resourceService.editResource === true && this.title !== '' && this.image !== '' && this.url !== '') {
            this.resource.title = this.title;
            this.resource.image = this.image;
            this.resource.url = this.url;
            this.resourceService.updateResource(this.resource).subscribe(function (resource) {
                console.log('saved');
                if (confirm('Resource saved! Would you like to draft another post?')) {
                    _this.title = '';
                    _this.image = '';
                    _this.url = '';
                    _this.tinyComponent.editor.setContent('');
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
        }
        else if (this.resourceService.editResource === false && this.title !== '' && this.image !== '' && this.url !== '') {
            this.resource.title = this.title;
            this.resource.image = this.image;
            this.resource.url = this.url;
            this.resourceService.addResource(this.resource).subscribe(function (resource) {
                console.log('saved');
                if (confirm('Resource saved! Would you like to draft another post?')) {
                    _this.title = '';
                    _this.image = '';
                    _this.url = '';
                    _this.tinyComponent.editor.setContent('');
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
        }
        else if (this.resource === undefined || this.resource.title === undefined || this.resource.image === undefined || this.resource.url === undefined) {
            alert('Please be sure to fill in all of the fields below');
        }
    };
    NewResourceComponent.prototype.getMonth = function () {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var x = new Date().getMonth();
        return months[x];
    };
    NewResourceComponent.prototype.getHeaderBg = function () {
        return "url('/assets/img/keyboard-md.jpeg')";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('contentContainer'),
        __metadata("design:type", Object)
    ], NewResourceComponent.prototype, "contentContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('resourceTitle'),
        __metadata("design:type", Object)
    ], NewResourceComponent.prototype, "resourceTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('resourceImage'),
        __metadata("design:type", Object)
    ], NewResourceComponent.prototype, "resourceImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('resourceUrl'),
        __metadata("design:type", Object)
    ], NewResourceComponent.prototype, "resourceUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('viewTitle'),
        __metadata("design:type", Object)
    ], NewResourceComponent.prototype, "viewTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('viewImage'),
        __metadata("design:type", Object)
    ], NewResourceComponent.prototype, "viewImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('viewUrl'),
        __metadata("design:type", Object)
    ], NewResourceComponent.prototype, "viewUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('viewContent'),
        __metadata("design:type", Object)
    ], NewResourceComponent.prototype, "viewContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('logo'),
        __metadata("design:type", Object)
    ], NewResourceComponent.prototype, "logo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__tiny_tiny_component__["a" /* TinyComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__tiny_tiny_component__["a" /* TinyComponent */])
    ], NewResourceComponent.prototype, "tinyComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NewResourceComponent.prototype, "onWindowScroll", null);
    NewResourceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-resource',
            template: __webpack_require__("../../../../../src/app/components/new-resource/new-resource.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/new-resource/new-resource.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__services_window_service__["a" /* WINDOW */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Window,
            Document,
            __WEBPACK_IMPORTED_MODULE_1__services_resource_service__["a" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NewResourceComponent);
    return NewResourceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/resources/resources.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\r\n  color: #fff;\r\n  background-color: rgba(0,0,0,0.5);\r\n  -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);\r\n\r\n}\r\n\r\nbutton:hover {\r\n  color: #fff;\r\n  background-color: rgba(0,0,0,0.5);\r\n  -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n  -webkit-transform: translateY(-2px);\r\n          transform: translateY(-2px);\r\n}\r\n\r\n.btn {\r\n  border: 1px solid #fff;\r\n  margin: 10px 0px 0px 0px;\r\n  width: 200px;\r\n}\r\n\r\n.header {\r\n  height: 500px;\r\n  width: 100%;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n  background-blend-mode: darken;\r\n  overflow: hidden;\r\n  background-repeat: no-repeat;\r\n  background-position: bottom center;\r\n  margin-bottom: 0px;\r\n\r\n}\r\n\r\n.logo {\r\n  color: #fff;\r\n  font-family: 'Cheque-Regular', sans-serif;\r\n  font-size: 70px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  text-align: center;\r\n  -webkit-transform: translate(-50%, 0px);\r\n          transform: translate(-50%, 0px);\r\n  border-bottom: 2px solid #fff;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\r\n}\r\n\r\n.resource-container {\r\n  height: 100%;\r\n}\r\n\r\n.spacer {\r\n  height: 30px;\r\n  width: 100%;\r\n}\r\n\r\n.card {\r\n  margin-bottom: 30px;\r\n  color: #fff;\r\n  -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n          box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n  background-color: rgba(0,0,0,.7);\r\n\r\n}\r\n\r\n.card-title {\r\n  font-family: 'Cheque-Regular', sans-serif;\r\n  font-size: 30px;\r\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\r\n\r\n}\r\n\r\n.body-container {\r\n  margin-top: 0px;\r\n  height: calc(100% + 50px);\r\n  min-height: calc(100vh - 500px);\r\n  width: 100%;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.post-image {\r\n  height: auto;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.card-text {\r\n  margin-top: 20px;\r\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);\r\n  line-height: 20px;\r\n  max-height: 120px;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n.card-btn {\r\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);\r\n}\r\n\r\n@media screen and (max-width: 430px) {\r\n  .logo {\r\n    font-size: 50px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/resources/resources.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [ngStyle]=\"{'background-image': getHeaderBg()}\">\r\n  <h1 class=\"logo\" #logo>Resources</h1>\r\n</div>\r\n<div class=\"body-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"spacer\"></div>\r\n      <div *ngFor=\"let resource of resources | reverse; let i = index\" class=\"col-md-4 resource-container\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body flex flex-column text-center align-center\">\r\n            <h4 class=\"card-title\">{{resource.title}}</h4>\r\n            <img class=\"post-image\" [src]=\"determineImageSize(i)\" alt=\"\">\r\n            <p class=\"card-text\">{{resource.body.substring(0, resource.body.length -4).slice(3)}}...</p>\r\n            <a href=\"{{resource.url}}\" target=\"_blank\">\r\n              <button typr=\"button\" class=\"card-btn btn\">View Resource</button>\r\n            </a>\r\n            <!-- <div class=\"admin-buttons\"> -->\r\n              <!-- if user logged in -->\r\n              <ng-template [ngIf]=\"this.userService.loggedIn()\">\r\n                <!-- edit post -->\r\n                <button [routerLink]=\"['/new-resource']\" (click)=\"editResource(i)\" class=\"btn edit-btn\" type=\"button\">Edit Resource</button>\r\n                <!-- delete post -->\r\n                <button [routerLink]=\"['/']\" (click)=\"deleteResource(i)\" class=\"btn delete-btn\" type=\"button\">Delete Resource</button>\r\n\r\n              </ng-template>\r\n            <!-- </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/resources/resources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ResourcesComponent = (function () {
    function ResourcesComponent(userService, resourceService, window, document) {
        this.userService = userService;
        this.resourceService = resourceService;
        this.window = window;
        this.document = document;
    }
    ResourcesComponent.prototype.ngOnInit = function () {
        this.getResources();
        this.userService.loadToken();
    };
    ResourcesComponent.prototype.onWindowScroll = function () {
        if (this.window.scrollY < 500) {
            this.logo.nativeElement.style.transform = "translate(-50%, " + (-50 + (this.window.scrollY / 2)) + "%";
        }
    };
    ResourcesComponent.prototype.getResources = function () {
        var _this = this;
        this.resourceService.getResources().subscribe(function (resources) {
            _this.resources = resources;
        });
    };
    ResourcesComponent.prototype.editResource = function (i) {
        console.log(i);
        this.resourceService.editableResourceId = this.resources[i]._id;
        this.resourceService.editResource = true;
    };
    ResourcesComponent.prototype.deleteResource = function (i) {
        confirm('Are you sure you would like to delete this post');
        this.resourceService.deleteResource(this.resources[i]._id).subscribe();
    };
    ResourcesComponent.prototype.getHeaderBg = function () {
        return "url('./assets/img/resources-md.jpeg')";
    };
    ResourcesComponent.prototype.determineImageSize = function (i) {
        return this.resources[i].image;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('logo'),
        __metadata("design:type", Object)
    ], ResourcesComponent.prototype, "logo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ResourcesComponent.prototype, "onWindowScroll", null);
    ResourcesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resources',
            template: __webpack_require__("../../../../../src/app/components/resources/resources.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/resources/resources.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_window_service__["a" /* WINDOW */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_resource_service__["a" /* ResourceService */],
            Window,
            Document])
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tiny/tiny.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tiny/tiny.component.html":
/***/ (function(module, exports) {

module.exports = "<textarea id=\"{{elementId}}\"></textarea>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/tiny/tiny.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_resource_service__ = __webpack_require__("../../../../../src/app/services/resource.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TinyComponent = (function () {
    function TinyComponent(resourceService, blogService) {
        this.resourceService = resourceService;
        this.blogService = blogService;
        this.onEditorKeyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    TinyComponent.prototype.ngOnInit = function () {
    };
    TinyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            height: '500px',
            selector: '#' + this.elementId,
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/custom',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    var content = editor.getContent();
                    _this.onEditorKeyup.emit(content);
                });
            },
        });
        this.checkIfEditingPost();
    };
    TinyComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    TinyComponent.prototype.checkIfEditingPost = function () {
        var _this = this;
        if (this.blogService.editPost === true) {
            this.blogService.getPostById(this.blogService.editablePostId).subscribe(function (post) {
                _this.editor.setContent(post.body);
            });
        }
        else if (this.resourceService.editResource === true) {
            this.resourceService.getResourceById(this.resourceService.editableResourceId).subscribe(function (resource) {
                _this.editor.setContent(resource.body);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TinyComponent.prototype, "elementId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TinyComponent.prototype, "defaultValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], TinyComponent.prototype, "onEditorKeyup", void 0);
    TinyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tiny',
            template: __webpack_require__("../../../../../src/app/components/tiny/tiny.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tiny/tiny.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_resource_service__["a" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]])
    ], TinyComponent);
    return TinyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/route.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteGuard = (function () {
    function RouteGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    RouteGuard.prototype.canActivate = function () {
        if (this.userService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    RouteGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], RouteGuard);
    return RouteGuard;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/reverse.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        if (!value) {
            return;
        }
        else {
            return value.reverse();
        }
    };
    ReversePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = (function () {
    function BlogService(http) {
        this.http = http;
    }
    BlogService.prototype.selectPost = function (post) {
        this.selectedPost = post;
    };
    BlogService.prototype.getPosts = function () {
        return this.http.get('/posts')
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.getPostById = function (id) {
        return this.http.get('/posts/' + id)
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.addPost = function (post) {
        return this.http.post('/posts/', post)
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.updatePost = function (post) {
        return this.http.put("/posts/" + post._id, post)
            .map(function (res) { return res.json; });
    };
    BlogService.prototype.deletePost = function (id) {
        return this.http.delete('/posts/' + id)
            .map(function (res) { return res.json(); });
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "../../../../../src/app/services/resource.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ResourceService = (function () {
    function ResourceService(http) {
        this.http = http;
        this.resourcesUrl = '/resources';
    }
    ResourceService.prototype.getResources = function () {
        return this.http.get(this.resourcesUrl);
    };
    ResourceService.prototype.getResourceById = function (id) {
        return this.http.get(this.resourcesUrl + "/" + id);
    };
    ResourceService.prototype.addResource = function (resource) {
        return this.http.post(this.resourcesUrl, resource, httpOptions);
    };
    ResourceService.prototype.updateResource = function (resource) {
        return this.http.put(this.resourcesUrl + "/" + resource._id, resource, httpOptions);
    };
    ResourceService.prototype.deleteResource = function (id) {
        return this.http.delete(this.resourcesUrl + "/" + id);
    };
    ResourceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ResourceService);
    return ResourceService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    UserService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    UserService.prototype.loggedIn = function () {
        if (this.authToken == null || this.authToken === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    UserService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/window.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WINDOW; });
/* unused harmony export WindowRef */
/* unused harmony export BrowserWindowRef */
/* unused harmony export windowFactory */
/* unused harmony export browserWindowProvider */
/* unused harmony export windowProvider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/* Create a new injection token for injecting the window into a component. */
var WINDOW = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* InjectionToken */]('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            throw new Error('Not implemented.');
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());

/* Define class that implements the abstract class and returns the native window object. */
var BrowserWindowRef = (function (_super) {
    __extends(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserWindowRef;
}(WindowRef));

/* Create an factory function that returns the native window object. */
function windowFactory(browserWindowRef, platformId) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_common__["j" /* isPlatformBrowser */])(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
var browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
var windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* PLATFORM_ID */]]
};
/* Create an array of providers. */
var WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map