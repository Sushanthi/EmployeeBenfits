function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\n  <app-nav-menu></app-nav-menu>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dependent-details/dependent-details.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dependent-details/dependent-details.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDependentDetailsDependentDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\" />\n    <title></title>\n</head>\n<body>\n\n</body>\n</html>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details/employee-details.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details/employee-details.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmployeeDetailsEmployeeDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card m-3\">\n    <h5 class=\"card-header\">Angular 8 Reactive Form Validation</h5>\n    <div class=\"card-body\">\n        <form [formGroup]=\"employeeRegisterForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label>Employee ID</label>\n                <input type=\"number\" formControlName=\"employeeId\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.employeeId.errors }\" />\n                <div *ngIf=\"submitted && f.employeeId.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.employeeId.errors.required\">employeeId is required</div>\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-5\">\n                    <label>First Name</label>\n                    <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                    <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group col-5\">\n                    <label>Last Name</label>\n                    <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                    <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>DOB</label>\n                <input type=\"text\" formControlName=\"dob\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\" />\n                <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.dob.errors.required\">DOB is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>Dependents Count</label>\n                <input type=\"number\" formControlName=\"dependentsCount\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.dependentsCount.errors }\" />\n                <div *ngIf=\"submitted && f.dependentsCount.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.dependentsCount.errors.required\">dependentsCount is required</div>\n                </div>\n            </div>\n            <div class=\"text-center\">\n                <button class=\"btn btn-primary mr-1\">Register</button>\n                <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\">Cancel</button>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-employeebenfits-cost/fetch-employeebenfits-cost.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-employeebenfits-cost/fetch-employeebenfits-cost.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFetchEmployeebenfitsCostFetchEmployeebenfitsCostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card m-3\">\n    <h5 class=\"card-header\">Angular 8 Reactive Form Validation</h5>\n    <div class=\"card-body\">\n        <form [formGroup]=\"fetchBenfitsForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-row\">\n                <div class=\"form-group col-5\">\n                    <label>Full Name</label>\n                    <input type=\"text\" formControlName=\"fullName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.fullName.errors }\" />\n                    <div *ngIf=\"submitted && f.fullName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.fullName.errors.required\">Full Name is required</div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"submitted\">\n                <div>Total Cost: {{benfits.benfitsCosts}}</div>\n                <div>No Of Dependents: {{benfits.dependentsCount}} </div>\n            </div>\n            <div class=\"text-center\">\n                <button class=\"btn btn-primary mr-1\">Submit</button>\n                <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\">Cancel</button>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Hello, world!</h1>\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n  <li><strong>Angular CLI integration</strong>. In development mode, there's no need to run <code>ng serve</code>. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration automatically invokes <code>ng build</code> to produce minified, ahead-of-time compiled JavaScript files.</li>\n</ul>\n<p>The <code>ClientApp</code> subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any <code>ng</code> command (e.g., <code>ng test</code>), or use <code>npm</code> to install extra packages into it.</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavMenuNavMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n  <nav\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\n  >\n    <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">EmployeeBenfits</a>\n      <button\n        class=\"navbar-toggler\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-target=\".navbar-collapse\"\n        aria-label=\"Toggle navigation\"\n        [attr.aria-expanded]=\"isExpanded\"\n        (click)=\"toggle()\"\n      >\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\n        [ngClass]=\"{ show: isExpanded }\"\n      >\n        <ul class=\"navbar-nav flex-grow\">\n          <li\n            class=\"nav-item\"\n            [routerLinkActive]=\"['link-active']\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n          >\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\n          </li>\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/employee-details']\"\n              >Employee Details</a\n            >\n          </li>\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-employeebenfits-cost']\"\n              >Fetch Employee Benfits</a\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Models/Employee.ts":
  /*!************************************!*\
    !*** ./src/app/Models/Employee.ts ***!
    \************************************/

  /*! exports provided: Employee */

  /***/
  function srcAppModelsEmployeeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Employee", function () {
      return Employee;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Employee = function Employee() {
      _classCallCheck(this, Employee);
    };
    /***/

  },

  /***/
  "./src/app/Services/EmployeeBenfits.Service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Services/EmployeeBenfits.Service.ts ***!
    \*****************************************************/

  /*! exports provided: EmployeeBenfitsService */

  /***/
  function srcAppServicesEmployeeBenfitsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeBenfitsService", function () {
      return EmployeeBenfitsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EmployeeBenfitsService = /*#__PURE__*/function () {
      function EmployeeBenfitsService(http, baseUrl) {
        _classCallCheck(this, EmployeeBenfitsService);

        this.http = http;
        this.baseUrl = baseUrl;
      }

      _createClass(EmployeeBenfitsService, [{
        key: "getEmployees",
        value: function getEmployees() {
          return this.http.get(this.baseUrl + 'api/employeebenfits').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "getBenfitsCost",
        value: function getBenfitsCost(employeeId) {
          return this.http.get(this.baseUrl + 'api/employeebenfits/' + employeeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
          }));
        }
      }, {
        key: "postEmployee",
        value: function postEmployee(employee) {
          return this.http.post(this.baseUrl + 'api/employeebenfits', employee);
        }
      }]);

      return EmployeeBenfitsService;
    }();

    EmployeeBenfitsService.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    EmployeeBenfitsService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], String])], EmployeeBenfitsService);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./nav-menu/nav-menu.component */
    "./src/app/nav-menu/nav-menu.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _dependent_details_dependent_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dependent-details/dependent-details.component */
    "./src/app/dependent-details/dependent-details.component.ts");
    /* harmony import */


    var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./employee-details/employee-details.component */
    "./src/app/employee-details/employee-details.component.ts");
    /* harmony import */


    var _fetch_employeebenfits_cost_fetch_employeebenfits_cost_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./fetch-employeebenfits-cost/fetch-employeebenfits-cost.component */
    "./src/app/fetch-employeebenfits-cost/fetch-employeebenfits-cost.component.ts");
    /* harmony import */


    var _Services_EmployeeBenfits_Service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Services/EmployeeBenfits.Service */
    "./src/app/Services/EmployeeBenfits.Service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _dependent_details_dependent_details_component__WEBPACK_IMPORTED_MODULE_9__["DependentDetailsComponent"], _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeDetailsComponent"], _fetch_employeebenfits_cost_fetch_employeebenfits_cost_component__WEBPACK_IMPORTED_MODULE_11__["FetchEmployeeBenfitsCostComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        pathMatch: 'full'
      }, {
        path: 'employee-details',
        component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeDetailsComponent"]
      }, {
        path: 'fetch-employeebenfits-cost',
        component: _fetch_employeebenfits_cost_fetch_employeebenfits_cost_component__WEBPACK_IMPORTED_MODULE_11__["FetchEmployeeBenfitsCostComponent"]
      }]), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["NoopAnimationsModule"]],
      providers: [_Services_EmployeeBenfits_Service__WEBPACK_IMPORTED_MODULE_12__["EmployeeBenfitsService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dependent-details/dependent-details.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/dependent-details/dependent-details.component.ts ***!
    \******************************************************************/

  /*! exports provided: DependentDetailsComponent */

  /***/
  function srcAppDependentDetailsDependentDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DependentDetailsComponent", function () {
      return DependentDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DependentDetailsComponent = function DependentDetailsComponent() {
      _classCallCheck(this, DependentDetailsComponent);
    };

    DependentDetailsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-dependent-details',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./dependent-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dependent-details/dependent-details.component.html"))["default"]
    })], DependentDetailsComponent);
    /***/
  },

  /***/
  "./src/app/employee-details/employee-details.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/employee-details/employee-details.component.ts ***!
    \****************************************************************/

  /*! exports provided: EmployeeDetailsComponent */

  /***/
  function srcAppEmployeeDetailsEmployeeDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function () {
      return EmployeeDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Models_Employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Models/Employee */
    "./src/app/Models/Employee.ts");
    /* harmony import */


    var _Services_EmployeeBenfits_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/EmployeeBenfits.Service */
    "./src/app/Services/EmployeeBenfits.Service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EmployeeDetailsComponent = /*#__PURE__*/function () {
      function EmployeeDetailsComponent(service, formbuilder) {
        _classCallCheck(this, EmployeeDetailsComponent);

        this.service = service;
        this.formbuilder = formbuilder;
        this.submitted = false;
      }

      _createClass(EmployeeDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.employeeRegisterForm = this.formbuilder.group({
            employeeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dob: [''],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            addressLine: [''],
            city: [''],
            province: [''],
            state: [''],
            zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]")]],
            dependentsCount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this = this;

          this.service.postEmployee(this.employee).subscribe(function (data) {
            console.log(data);
            _this.employee = new _Models_Employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]();
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; //stop here if form is invalid
          //if (this.employeeRegisterForm.invalid) {
          //  return;
          //} else {

          this.employee = this.employeeRegisterForm.value;
          this.save(); //}
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.submitted = false;
          this.employeeRegisterForm.reset();
        }
      }, {
        key: "f",
        get: function get() {
          return this.employeeRegisterForm.controls;
        }
      }]);

      return EmployeeDetailsComponent;
    }();

    EmployeeDetailsComponent.ctorParameters = function () {
      return [{
        type: _Services_EmployeeBenfits_Service__WEBPACK_IMPORTED_MODULE_3__["EmployeeBenfitsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };

    EmployeeDetailsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-employee-details',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./employee-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details/employee-details.component.html"))["default"]
    }), __metadata("design:paramtypes", [_Services_EmployeeBenfits_Service__WEBPACK_IMPORTED_MODULE_3__["EmployeeBenfitsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], EmployeeDetailsComponent);
    /***/
  },

  /***/
  "./src/app/fetch-employeebenfits-cost/fetch-employeebenfits-cost.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/fetch-employeebenfits-cost/fetch-employeebenfits-cost.component.ts ***!
    \************************************************************************************/

  /*! exports provided: FetchEmployeeBenfitsCostComponent */

  /***/
  function srcAppFetchEmployeebenfitsCostFetchEmployeebenfitsCostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchEmployeeBenfitsCostComponent", function () {
      return FetchEmployeeBenfitsCostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Services_EmployeeBenfits_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/EmployeeBenfits.Service */
    "./src/app/Services/EmployeeBenfits.Service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FetchEmployeeBenfitsCostComponent = /*#__PURE__*/function () {
      function FetchEmployeeBenfitsCostComponent(service, formbuilder) {
        _classCallCheck(this, FetchEmployeeBenfitsCostComponent);

        this.service = service;
        this.formbuilder = formbuilder;
        this.submitted = false;
      }

      _createClass(FetchEmployeeBenfitsCostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.fetchBenfitsForm = this.formbuilder.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.service.getEmployees().subscribe(function (data) {
            console.log(data);
            _this2.employee = data;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          //stop here if form is invalid
          if (this.fetchBenfitsForm.invalid) {
            return;
          } else {
            this.employee.forEach(function (e) {
              if (e.firstName.toLowerCase() == _this3.fetchBenfitsForm.value.fullName.split(" ")[0] && e.lastName.toLowerCase() == _this3.fetchBenfitsForm.value.fullName.split(" ")[1]) {
                _this3.employeeId = e.employeeId;
              }
            });
            this.service.getBenfitsCost(this.employeeId).subscribe(function (data) {
              console.log(data);
              _this3.benfits = data;
              _this3.submitted = true;
            }, function (error) {
              return console.log(error);
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.fetchBenfitsForm.controls;
        }
      }]);

      return FetchEmployeeBenfitsCostComponent;
    }();

    FetchEmployeeBenfitsCostComponent.ctorParameters = function () {
      return [{
        type: _Services_EmployeeBenfits_Service__WEBPACK_IMPORTED_MODULE_2__["EmployeeBenfitsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };

    FetchEmployeeBenfitsCostComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-fetch-employeebenfits-costs',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./fetch-employeebenfits-cost.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-employeebenfits-cost/fetch-employeebenfits-cost.component.html"))["default"]
    }), __metadata("design:paramtypes", [_Services_EmployeeBenfits_Service__WEBPACK_IMPORTED_MODULE_2__["EmployeeBenfitsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], FetchEmployeeBenfitsCostComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeComponent = function HomeComponent() {
      _classCallCheck(this, HomeComponent);
    };

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/nav-menu/nav-menu.component.css":
  /*!*************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavMenuNavMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a.navbar-brand {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n}\n\nhtml {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\n.box-shadow {\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav-menu/nav-menu.component.ts":
  /*!************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.ts ***!
    \************************************************/

  /*! exports provided: NavMenuComponent */

  /***/
  function srcAppNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
      return NavMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NavMenuComponent = /*#__PURE__*/function () {
      function NavMenuComponent() {
        _classCallCheck(this, NavMenuComponent);

        this.isExpanded = false;
      }

      _createClass(NavMenuComponent, [{
        key: "collapse",
        value: function collapse() {
          this.isExpanded = false;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isExpanded = !this.isExpanded;
        }
      }]);

      return NavMenuComponent;
    }();

    NavMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-nav-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./nav-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./nav-menu.component.css */
      "./src/app/nav-menu/nav-menu.component.css"))["default"]]
    })], NavMenuComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Yash\Downloads\PaylocityApp (1)\PaylocityApp\EmployeeBenfits\EmployeeBenfits\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map