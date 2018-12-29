(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n<h1>\n    Looking for repository..\n  </h1>\n  <router-outlet></router-outlet>\n</div>  "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var src_app_core_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _repository_item_repository_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./repository-item/repository-item.component */ "./src/app/repository-item/repository-item.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: src_app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                src_app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _repository_item_repository_item_component__WEBPACK_IMPORTED_MODULE_10__["RepositoryItemComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"]
            ],
            providers: [
                src_app_core_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _repo_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repo-entity */ "./src/app/core/repo-entity.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        //package object - for push data while server return a response
        this.packageData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.itemsPerPage = 15;
    }
    DataService.prototype.findRepositories = function (term, page) {
        var _this = this;
        //set query string params
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("q", term)
            .set("page", page)
            .set("per_page", this.itemsPerPage.toString());
        //call to GIT api
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].gitAPI, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError)).subscribe(function (res) {
            //save paging details, and map result items to RepoEntity object
            _this.total_items = res["total_count"];
            var arr = new Array();
            arr = res["items"].map(function (item) { return new _repo_entity__WEBPACK_IMPORTED_MODULE_3__["RepoEntity"](item.name, item.url, item.owner.avatar_url, item.owner.id, item.description, item.id); });
            //push data to packageData, this will rise all 'subscribe()' calling
            _this.packageData.next(arr);
        });
    };
    DataService.prototype.bookmarkMe = function (item) {
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
            .set("Access-Control-Allow-Origin", "*")
            .set("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
        // _headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        // _headers['Access-Control-Allow-Origin'] = '*';
        // _headers['Access-Control-Allow-Methods'] = 'GET, POST, DELETE, PUT';
        var request = { item: JSON.stringify(item) };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].bookmarksAPI + "/api/sessionstorage/save", this.encodeUrlParams(request), { headers: _headers, withCredentials: true });
    };
    DataService.prototype.handleError = function (error) {
        console.log(error);
        // return an observable with a user friendly message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Error occured. pls try again later..');
    };
    //encoded params that sending to server
    //on server side will get it in POST method as [FormBody] paramter
    DataService.prototype.encodeUrlParams = function (data) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](data, function (value, key) {
            body = body.append(key, value);
        });
        return body;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/core/repo-entity.ts":
/*!*************************************!*\
  !*** ./src/app/core/repo-entity.ts ***!
  \*************************************/
/*! exports provided: RepoEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoEntity", function() { return RepoEntity; });
var RepoEntity = /** @class */ (function () {
    function RepoEntity(name, url, avatar, owner, desc, id) {
        this.name = name;
        this.url = url;
        this.avatar = avatar;
        this.owner = owner;
        this.desc = desc;
        this.id = id;
    }
    return RepoEntity;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form-field {\r\n    width: 200px;\r\n  }\r\n.example-button-row button,\r\n.example-button-row a {\r\n  margin-right: 8px;\r\n}\r\n.rep{\r\n  float: left;\r\n  margin: 20px; \r\n  width: 25%;\r\n}\r\n.mat-mini-fab.mat-warn{\r\n  margin: 20px;\r\n}\r\n.loading{\r\nmargin-left: 50%;\r\n  \r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- search control -->\n<mat-form-field class=\"example-form-field\">\n  <input matInput type=\"text\" placeholder=\"type repository name\" [(ngModel)]=\"value\" (keyup.enter)=\"search(1)\">\n  <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-form-field>\n<button mat-mini-fab color=\"warn\" (click)=\"search(1)\">GO</button>\n\n<!-- result section-->\n<div class=\"row\">\n  <div *ngIf=\"repArray != null && repArray.length > 0\">\n    <pagination-controls (pageChange)=\"search($event)\" ></pagination-controls>\n  </div>\n  <div [ngClass]=\"{ 'hidden': !loading }\" class=\"loading\">\n    <img src=\"/assets/images/loading.gif\" />\n  </div>\n  <!-- loop through all repositories, each one rendered as sub component: 'app-repository-item' -->\n  <div [ngClass]=\"{ 'hidden': loading }\" *ngFor=\"let repItem of repArray | paginate: { itemsPerPage: 15, currentPage: p, totalItems: total }\" class=\"rep\">\n    <app-repository-item [data]=\"repItem\" class=\"\"></app-repository-item>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/data.service */ "./src/app/core/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
        this.value = '';
        this.p = 1;
        this.total = 0;
        this.loading = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe to package data - will occured on each 'next()' calling
        this.dataService.packageData.subscribe(function (res) {
            if (res != null) {
                //hide loading gif
                _this.loading = false;
                //save repository array 
                _this.repArray = res;
                //save total items - for paging control
                _this.total = _this.dataService.total_items;
                //TODO: check if there are no data, show message, hide loading, etc...
            }
        });
    };
    HomeComponent.prototype.search = function (page) {
        //show loading gif
        this.loading = true;
        //save current page
        this.p = page;
        //retrieve data from server according to page number
        this.dataService.findRepositories(this.value, page);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_core_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/repository-item/repository-item.component.css":
/*!***************************************************************!*\
  !*** ./src/app/repository-item/repository-item.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .avatarImg{\r\n    border-radius: 50%;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-card-content{\r\n    word-break: break-word;\r\n    text-overflow: ellipsis;\r\n    height: 200px;\r\n    overflow: hidden;\r\n    /* max-height: 200px !important; */\r\n  }\r\n  \r\n  .mat-card-header{\r\n    min-height: 100px;\r\n  }\r\n  \r\n  .mat-card-header .mat-card-title{\r\n    word-break: break-all;\r\n    text-overflow: ellipsis;\r\n    max-height: 60px;\r\n    overflow: hidden;\r\n    \r\n  }\r\n  \r\n  .bookmark{\r\n    font-weight: bold;\r\n    color: #66b6c4;\r\n    font-size: 16px;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/repository-item/repository-item.component.html":
/*!****************************************************************!*\
  !*** ./src/app/repository-item/repository-item.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar>\n      <img src=\"{{data.avatar}}\" class=\"avatarImg\" />\n    </div>\n    <mat-card-title>{{data.name}}</mat-card-title>\n    <mat-card-subtitle># {{data.id}}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      {{data.desc}}\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button class=\"bookmark\" (click)=\"bookmark()\">\n      Bookmark Me!\n      <img src='/assets/images/i_doc-active.png'>\n    </button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/repository-item/repository-item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/repository-item/repository-item.component.ts ***!
  \**************************************************************/
/*! exports provided: RepositoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryItemComponent", function() { return RepositoryItemComponent; });
/* harmony import */ var src_app_core_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _core_repo_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/repo-entity */ "./src/app/core/repo-entity.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepositoryItemComponent = /** @class */ (function () {
    function RepositoryItemComponent(dataService) {
        this.dataService = dataService;
    }
    RepositoryItemComponent.prototype.ngOnInit = function () {
    };
    RepositoryItemComponent.prototype.bookmark = function () {
        //this method calling to server 
        //will not working, bcoz you need web api side
        this.dataService.bookmarkMe(this.data).subscribe(function (res) {
            if (res != null) {
                //TODO: show label 'DONE' or another icon instead of button
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", _core_repo_entity__WEBPACK_IMPORTED_MODULE_1__["RepoEntity"])
    ], RepositoryItemComponent.prototype, "data", void 0);
    RepositoryItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-repository-item',
            template: __webpack_require__(/*! ./repository-item.component.html */ "./src/app/repository-item/repository-item.component.html"),
            styles: [__webpack_require__(/*! ./repository-item.component.css */ "./src/app/repository-item/repository-item.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_core_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]])
    ], RepositoryItemComponent);
    return RepositoryItemComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    gitAPI: "https://api.github.com/search/repositories",
    bookmarksAPI: "/api"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Efrat\Documents\JOBS2018\fnx\searchapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map