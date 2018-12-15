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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/animation/collapse-animate.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/animation/collapse-animate.ts ***!
  \*****************************************************/
/*! exports provided: collapse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapse", function() { return collapse; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var collapse = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('collapse', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('init', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('off', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => on', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms cubic-bezier(.39,.8,.5,.95)')]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('on => off', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms cubic-bezier(.39,.8,.5,.95)')]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('init => off', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0s')])
    ])
];


/***/ }),

/***/ "./src/app/admin/components/advirtesment/advirtesment.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/components/advirtesment/advirtesment.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* // pagination  */\r\n\r\n.ngx-pagination {\r\n    margin-left: 0;\r\n    margin-bottom: 1rem;\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    font-size: 12px;\r\n    padding: 0;\r\n  \r\n  }\r\n\r\n.pagination-wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-between;\r\n  }\r\n\r\n.pagination-wrapper .input-group {\r\n    width: 150px;\r\n  }\r\n\r\n.pagination-wrapper .input-group .input-group-addon {\r\n    color: #fff;\r\n    border: none;\r\n  }\r\n\r\n.pagination-wrapper .form-group {\r\n    height: auto;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n.my-pagination /deep/ \r\n  \r\n  {\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    font-size: 12px;\r\n    padding: 0;\r\n  }\r\n\r\n.my-pagination[_ngcontent-c8] .ngx-pagination a, .my-pagination[_ngcontent-c8] .ngx-pagination .current{\r\n    text-decoration: none;\r\n    height: 35px;\r\n    text-align: center;\r\n    line-height: 33px;\r\n    margin: 0;\r\n   }\r\n\r\n.my-pagination .ngx-pagination a:last-child,\r\n  .my-pagination .ngx-pagination .current:last-child {\r\n    border: none;\r\n  }\r\n\r\n.my-pagination .ngx-pagination .disabled {\r\n      color: rgba(38, 37, 60, 0.4);\r\n      cursor: not-allowed;\r\n  }\r\n\r\n.ngx-pagination .small-screen {\r\n    display: none;\r\n  }\r\n\r\n.bg-primary[_ngcontent-c8], .pagination-wrapper[_ngcontent-c8] .input-group[_ngcontent-c8] .input-group-addon[_ngcontent-c8], .my-pagination[_ngcontent-c8] .ngx-pagination a:hover, .my-pagination[_ngcontent-c8] .ngx-pagination .current , .pagination-wrapper[_ngcontent-c10] .input-group[_ngcontent-c10] .input-group-addon[_ngcontent-c10]{\r\n    background: linear-gradient(to top right, #fca400, #ffd17c);\r\n      background: -webkit-linear-gradient(to top right, #fca400, #ffd17c);\r\n      color: #fff;\r\n      padding: 0.1875rem 0.625rem;\r\n  \r\n  }\r\n\r\n.ngx-pagination::after {\r\n    clear: both;\r\n  }\r\n\r\n.ngx-pagination::before, .ngx-pagination::after {\r\n    content: ' ';\r\n    display: table;\r\n  }"

/***/ }),

/***/ "./src/app/admin/components/advirtesment/advirtesment.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/advirtesment/advirtesment.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-spin\"></ngx-spinner>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <!-- <card cardTitle=\"Data Table\"> -->\n\n\n    <div class=\"search-group\">\n      <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\">\n      <button (click)=\"searchData()\" class=\"search-btn\">\n        <i class=\"fa fa-search fa-fw\"></i>\n      </button>\n    </div>\n\n\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Title</th>\n          <th>Description</th>\n          <th>Image</th>\n          <!-- <th>Creation Date</th> -->\n          <th>Action</th>\n\n          <th>Active / UnActive</th>\n\n\n\n\n          <!-- <th>STATE</th> -->\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr *ngIf=\"dataListSize == 0\">\n          <td class=\"text-center no-data\" colspan=\"7\">\n            <i class=\"fa fa-database fa-fw\"></i>\n            No Data Avilable\n          </td>\n\n        </tr>\n\n        <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n          <td>{{index+1}}</td>\n\n          <td>{{item.title}}</td>\n          <td>{{item.description}}</td>\n          <td class=\"url\">\n            <!-- {{item.advertiseImageToken}} -->\n            <a href=\"{{AdvImgService}}{{item.advertiseImageToken}}\" target=\"_blank\">\n\n              <img src=\"{{ImgSrc}}\" alt=\"avatar\">\n\n            </a>\n\n          </td>\n          <td>\n            <i style=\"cursor: pointer;\" (click)=\"DeleteAds(item.advertiseId)\" class=\"fa fa-trash\"></i>\n          </td>\n          <td class=\"text-center\" (click)=\"toggleActive(item.advertiseId,false)\" *ngIf=\"item.isActive == true\">\n            <i style=\"cursor: pointer;\" class=\"fa fa-toggle-on\" title=\"Deactive\"></i></td>\n          <td class=\"text-center\" (click)=\"toggleActive(item.advertiseId,true)\" *ngIf=\"item.isActive == false\"><i style=\"cursor: pointer;\"\n              class=\"fa fa-toggle-off\" title=\"active\"></i></td>\n\n\n\n          <!-- <td>{{item.creationDate | date : format : timezone }}</td> -->\n        </tr>\n      </tbody>\n    </table>\n    <form class=\"pagination-wrapper\">\n\n\n      <div class=\"form-group pages\">\n        <div class=\"has-text-centered\">\n\n          <div *ngIf=\"loading\" class=\"spinner\"></div>\n        </div>\n        <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\"\n          directionLinks=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n          screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n      </div>\n\n\n      <div class=\"form-group options pages\">\n        <div class=\"input-group input-group-sm\">\n          <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n            <option>1</option>\n            <option>5</option>\n            <option>10</option>\n            <option>20</option>\n            <option>50</option>\n\n          </select>\n          <span class=\"input-group-addon addon-right\">Per Page</span>\n        </div>\n      </div>\n    </form>\n    <!-- </card> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/advirtesment/advirtesment.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/advirtesment/advirtesment.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdvirtesmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvirtesmentComponent", function() { return AdvirtesmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/shared/companyservice.service */ "./src/app/services/shared/companyservice.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared/settings.service */ "./src/app/services/shared/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdvirtesmentComponent = /** @class */ (function () {
    function AdvirtesmentComponent(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.searchCeritria = '';
        this.dataListSize = 0;
        this.loading = true;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.ImgSrc = './../assets/images/picture.png';
        this.AdvImgService = _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"].DOMAIN_ImgeURLAdver;
    }
    AdvirtesmentComponent.prototype.ngOnInit = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    AdvirtesmentComponent.prototype.loadData = function (pageSize, pageNumber, searchCeritria) {
        var _this = this;
        this.spinner.show();
        this.service.GetAdds(pageSize, pageNumber, searchCeritria).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    AdvirtesmentComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    AdvirtesmentComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
        // this.searchCeritria ='';
    };
    AdvirtesmentComponent.prototype.toggleActive = function (id, status) {
        var _this = this;
        var text = '';
        if (status == true) {
            text = 'Activate';
        }
        else {
            text = ' DeActivate';
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: 'You will ' + text + ' this !',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: text
        }).then(function (result) {
            if (result.value) {
                _this.service.toggleAds(id, status).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()(text, 'Your Advs has been ' + text, 'success');
                    _this.loadData(_this.pageSize, _this.pageNumber, _this.searchCeritria);
                }, function (err) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error!', 'Error when ' + text, 'warning');
                });
            }
        });
    };
    AdvirtesmentComponent.prototype.DeleteAds = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete!'
        }).then(function (result) {
            if (result.value) {
                _this.service.DeleteAds(id).subscribe(function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Deleted!', 'Your Advs has been deleted.', 'success');
                    _this.loadData(_this.pageSize, _this.pageNumber, _this.searchCeritria);
                }, function (err) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error!', 'Error when Delted.', 'warning');
                });
            }
        });
    };
    AdvirtesmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advirtesment',
            template: __webpack_require__(/*! ./advirtesment.component.html */ "./src/app/admin/components/advirtesment/advirtesment.component.html"),
            styles: [__webpack_require__(/*! ./advirtesment.component.css */ "./src/app/admin/components/advirtesment/advirtesment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_1__["CompanyserviceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AdvirtesmentComponent);
    return AdvirtesmentComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/company/establishedcompany/establishedcompany.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/components/company/establishedcompany/establishedcompany.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/company/establishedcompany/establishedcompany.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/components/company/establishedcompany/establishedcompany.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-spin\"></ngx-spinner>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <!-- <card cardTitle=\"Data Table\"> -->\n\n\n    <div class=\"search-group\">\n      <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\">\n      <button (click)=\"searchData()\" class=\"search-btn\">\n        <i class=\"fa fa-search fa-fw\"></i>\n      </button>\n    </div>\n\n\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <!-- <th>Country</th> -->\n          <th>Capital</th>\n          <th>Company Name</th>\n          <th>C.R Image</th>\n          <th>investment Country</th>\n          <th>Expiry Date</th>\n          <th>Phone Number</th>\n          <th>Admin Name</th>\n          <th>Company Website</th>\n          <th>Email Address</th>\n\n\n\n          <!-- <th>Status</th> -->\n\n          <th>Creation Date</th>\n\n\n\n          <th>Status</th>\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr *ngIf=\"dataListSize == 0\">\n          <td class=\"text-center no-data\" colspan=\"12\">\n            <i class=\"fa fa-database fa-fw\"></i>\n            No Data Avilable\n          </td>\n\n        </tr>\n\n        <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n          <td>{{index+1}}</td>\n\n          <!-- <td>{{item.country}}</td> -->\n          <td>{{item.capital}}</td>\n\n          <td>{{item.companyName}}</td>\n\n          <td class=\"url\">\n            <!-- {{item.advertiseImageToken}} -->\n            <a href=\"{{ImageService}}{{item.cRNumberImageToken}}\"\n              target=\"_blank\">\n\n              <img src=\"{{ImgSrc}}\" alt=\"avatar\">\n\n            </a>\n\n          </td>\n          <td>{{item.investmentCountry}}</td>\n\n\n          <td>{{item.expireDate }}</td>\n          <td>{{item.ownerPhone }}</td>\n          <td>{{item.ownerName }}</td>\n          <td>\n            <a href=\"item.websiteLink\" target=\"_blank\">{{item.websiteLink}}</a>\n          </td>\n\n          <td>{{item.mail}}</td>\n\n\n\n          <td>{{item.creationDate | date : format : timezone }}</td>\n          <td *ngIf=\"item.status == 'Pending' \" class=\"pending\">{{item.status}}</td>\n          <td *ngIf=\"item.status == 'Approverd' \" class=\"Approverd\">{{item.status}}</td>\n          <td *ngIf=\"item.status == 'Rejected' \" class=\"Rejected\">{{item.status}}</td>\n\n        </tr>\n      </tbody>\n    </table>\n    <form class=\"pagination-wrapper\">\n\n\n      <div class=\"form-group pages\">\n        <div class=\"has-text-centered\">\n\n          <div *ngIf=\"loading\" class=\"spinner\"></div>\n        </div>\n        <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\"\n          directionLinks=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n          screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n      </div>\n\n\n      <div class=\"form-group options pages\">\n        <div class=\"input-group input-group-sm\">\n          <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n            <option>1</option>\n            <option>5</option>\n            <option>10</option>\n            <option>20</option>\n            <option>50</option>\n\n          </select>\n          <span class=\"input-group-addon addon-right\">Per Page</span>\n        </div>\n      </div>\n    </form>\n    <!-- </card> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/company/establishedcompany/establishedcompany.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/components/company/establishedcompany/establishedcompany.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EstablishedcompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishedcompanyComponent", function() { return EstablishedcompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_Company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/shared/Company.service */ "./src/app/services/shared/Company.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/shared/settings.service */ "./src/app/services/shared/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EstablishedcompanyComponent = /** @class */ (function () {
    function EstablishedcompanyComponent(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.searchCeritria = '';
        this.dataListSize = 0;
        this.loading = true;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.companyType = 'Esta';
        this.ImgSrc = 'assets/images/picture.png';
        this.ImageService = _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].imageUrlCompany;
    }
    EstablishedcompanyComponent.prototype.ngOnInit = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    EstablishedcompanyComponent.prototype.loadData = function (pageSize, pageNumber, searchCeritria) {
        var _this = this;
        this.spinner.show();
        this.service.GetCompany(pageSize, pageNumber, searchCeritria, this.companyType).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            _this.loading = false;
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    EstablishedcompanyComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    EstablishedcompanyComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    EstablishedcompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-establishedcompany',
            template: __webpack_require__(/*! ./establishedcompany.component.html */ "./src/app/admin/components/company/establishedcompany/establishedcompany.component.html"),
            styles: [__webpack_require__(/*! ./establishedcompany.component.css */ "./src/app/admin/components/company/establishedcompany/establishedcompany.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_Company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyServices"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EstablishedcompanyComponent);
    return EstablishedcompanyComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/company/internationalcompany/internationalcompany.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/components/company/internationalcompany/internationalcompany.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/company/internationalcompany/internationalcompany.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/components/company/internationalcompany/internationalcompany.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-spin\"></ngx-spinner>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <!-- <card cardTitle=\"Data Table\"> -->\n\n\n    <div class=\"search-group\">\n      <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\">\n      <button (click)=\"searchData()\" class=\"search-btn\">\n        <i class=\"fa fa-search fa-fw\"></i>\n      </button>\n    </div>\n\n\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <!-- <th>Country</th> -->\n          <th>Capital</th>\n          <th>Company Name</th>\n          <th>C.R Image</th>\n          <th>investment Country</th>\n          <th>Expiry Date</th>\n          <th>Phone Number</th>\n          <th>Admin Name</th>\n          <th>Company Website</th>\n          <th>Email Address</th>\n\n\n\n          <!-- <th>Status</th> -->\n\n          <th>Creation Date</th>\n\n\n\n          <!-- <th>STATE</th> -->\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr *ngIf=\"dataListSize == 0\">\n          <td class=\"text-center no-data\" colspan=\"12\">\n            <i class=\"fa fa-database fa-fw\"></i>\n            No Data Avilable\n          </td>\n\n        </tr>\n\n        <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n          <td>{{index+1}}</td>\n\n          <!-- <td>{{item.country}}</td> -->\n          <td>{{item.capital}}</td>\n\n          <td>{{item.companyName}}</td>\n\n          <td class=\"url\">\n            <!-- {{item.advertiseImageToken}} -->\n            <a href=\"{{ImageService}}{{item.cRNumberImageToken}}\"\n\n              target=\"_blank\">\n\n              <img src=\"{{ImgSrc}}\" alt=\"avatar\">\n\n            </a>\n\n          </td>\n          <td>{{item.investmentCountry}}</td>\n\n\n          <td>{{item.expireDate }}</td>\n          <td>{{item.ownerPhone }}</td>\n          <td>{{item.ownerName }}</td>\n          <td>\n            <a href=\"item.websiteLink\" target=\"_blank\">{{item.websiteLink}}</a>\n          </td>\n\n          <td>{{item.mail}}</td>\n\n\n\n          <td>{{item.creationDate | date : format : timezone }}</td>\n          <td *ngIf=\"item.status == 'Pending' \" class=\"pending\">{{item.status}}</td>\n          <td *ngIf=\"item.status == 'Approverd' \" class=\"Approverd\">{{item.status}}</td>\n          <td *ngIf=\"item.status == 'Rejected' \" class=\"Rejected\">{{item.status}}</td>\n\n        </tr>\n      </tbody>\n    </table>\n    <form class=\"pagination-wrapper\">\n\n\n      <div class=\"form-group pages\">\n        <div class=\"has-text-centered\">\n\n          <div *ngIf=\"loading\" class=\"spinner\"></div>\n        </div>\n        <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\"\n          directionLinks=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n          screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n      </div>\n\n\n      <div class=\"form-group options pages\">\n        <div class=\"input-group input-group-sm\">\n          <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n            <option>1</option>\n            <option>5</option>\n            <option>10</option>\n            <option>20</option>\n            <option>50</option>\n\n          </select>\n          <span class=\"input-group-addon addon-right\">Per Page</span>\n        </div>\n      </div>\n    </form>\n    <!-- </card> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/company/internationalcompany/internationalcompany.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/components/company/internationalcompany/internationalcompany.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: InternationalcompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternationalcompanyComponent", function() { return InternationalcompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_Company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/shared/Company.service */ "./src/app/services/shared/Company.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/shared/settings.service */ "./src/app/services/shared/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InternationalcompanyComponent = /** @class */ (function () {
    function InternationalcompanyComponent(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.searchCeritria = '';
        this.dataListSize = 0;
        this.loading = true;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.companyType = 'Inter';
        this.ImgSrc = 'assets/images/picture.png';
        this.ImageService = _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].imageUrlCompany;
    }
    InternationalcompanyComponent.prototype.ngOnInit = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    InternationalcompanyComponent.prototype.loadData = function (pageSize, pageNumber, searchCeritria) {
        var _this = this;
        this.spinner.show();
        this.service.GetCompany(pageSize, pageNumber, searchCeritria, this.companyType).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            _this.loading = false;
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    InternationalcompanyComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    InternationalcompanyComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
        this.searchCeritria = '';
    };
    InternationalcompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-internationalcompany',
            template: __webpack_require__(/*! ./internationalcompany.component.html */ "./src/app/admin/components/company/internationalcompany/internationalcompany.component.html"),
            styles: [__webpack_require__(/*! ./internationalcompany.component.css */ "./src/app/admin/components/company/internationalcompany/internationalcompany.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_Company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyServices"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], InternationalcompanyComponent);
    return InternationalcompanyComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/company/newinvestor/newinvestor.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/admin/components/company/newinvestor/newinvestor.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/company/newinvestor/newinvestor.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/company/newinvestor/newinvestor.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-spin\"></ngx-spinner>\n\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <!-- <card cardTitle=\"Data Table\"> -->\n\n\n    <div class=\"search-group\">\n      <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\">\n      <button (click)=\"searchData()\" class=\"search-btn\">\n        <i class=\"fa fa-search fa-fw\"></i>\n      </button>\n    </div>\n\n\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <!-- <th>Country</th> -->\n          <th>Capital</th>\n          <th>Company Name</th>\n          <th>C.R Image</th>\n          <th>investment Country</th>\n          <th>Expiry Date</th>\n          <th>Phone Number</th>\n          <th>Admin Name</th>\n          <th>Company Website</th>\n          <th>Email Address</th>\n\n\n\n          <!-- <th>Status</th> -->\n\n          <th>Creation Date</th>\n\n\n\n          <!-- <th>STATE</th> -->\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr *ngIf=\"dataListSize == 0\">\n          <td class=\"text-center no-data\" colspan=\"12\">\n            <i class=\"fa fa-database fa-fw\"></i>\n            No Data Avilable\n          </td>\n\n        </tr>\n\n        <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n          <td>{{index+1}}</td>\n\n          <!-- <td>{{item.country}}</td> -->\n          <td>{{item.capital}}</td>\n\n          <td>{{item.companyName}}</td>\n\n          <td class=\"url\">\n            <!-- {{item.advertiseImageToken}} -->\n            <a href=\"{{ImageService}}{{item.cRNumberImageToken}}\"\n              target=\"_blank\">\n\n              <img src=\"{{ImgSrc}}\" alt=\"avatar\">\n\n            </a>\n\n          </td>\n          <td>{{item.investmentCountry}}</td>\n\n\n          <td>{{item.expireDate }}</td>\n          <td>{{item.ownerPhone }}</td>\n          <td>{{item.ownerName }}</td>\n          <td>\n            <a href=\"item.websiteLink\" target=\"_blank\">{{item.websiteLink}}</a>\n          </td>\n\n          <td>{{item.mail}}</td>\n\n\n\n          <td>{{item.creationDate | date : format : timezone }}</td>\n          <td *ngIf=\"item.status == 'Pending' \" class=\"pending\">{{item.status}}</td>\n          <td *ngIf=\"item.status == 'Approverd' \" class=\"Approverd\">{{item.status}}</td>\n          <td *ngIf=\"item.status == 'Rejected' \" class=\"Rejected\">{{item.status}}</td>\n\n        </tr>\n      </tbody>\n    </table>\n    <form class=\"pagination-wrapper\">\n\n\n      <div class=\"form-group pages\">\n        <div class=\"has-text-centered\">\n\n          <div *ngIf=\"loading\" class=\"spinner\"></div>\n        </div>\n        <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\"\n          directionLinks=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n          screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n      </div>\n\n\n      <div class=\"form-group options pages\">\n        <div class=\"input-group input-group-sm\">\n          <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n            <option>1</option>\n            <option>5</option>\n            <option>10</option>\n            <option>20</option>\n            <option>50</option>\n\n          </select>\n          <span class=\"input-group-addon addon-right\">Per Page</span>\n        </div>\n      </div>\n    </form>\n    <!-- </card> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/company/newinvestor/newinvestor.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/company/newinvestor/newinvestor.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NewinvestorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewinvestorComponent", function() { return NewinvestorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_Company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/shared/Company.service */ "./src/app/services/shared/Company.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/shared/settings.service */ "./src/app/services/shared/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewinvestorComponent = /** @class */ (function () {
    function NewinvestorComponent(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.searchCeritria = '';
        this.dataListSize = 0;
        this.loading = true;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.companyType = 'Inverst';
        this.ImgSrc = 'assets/images/picture.png';
        this.ImageService = _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].imageUrlCompany;
    }
    NewinvestorComponent.prototype.ngOnInit = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    NewinvestorComponent.prototype.loadData = function (pageSize, pageNumber, searchCeritria) {
        var _this = this;
        this.spinner.show();
        this.service.GetCompany(pageSize, pageNumber, searchCeritria, this.companyType).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    NewinvestorComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    NewinvestorComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
        // this.searchCeritria ='';
    };
    NewinvestorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newinvestor',
            template: __webpack_require__(/*! ./newinvestor.component.html */ "./src/app/admin/components/company/newinvestor/newinvestor.component.html"),
            styles: [__webpack_require__(/*! ./newinvestor.component.css */ "./src/app/admin/components/company/newinvestor/newinvestor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_Company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyServices"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], NewinvestorComponent);
    return NewinvestorComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/services/certifiedtranslation/certifiedtranslation.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/components/services/certifiedtranslation/certifiedtranslation.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/services/certifiedtranslation/certifiedtranslation.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/components/services/certifiedtranslation/certifiedtranslation.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n\n    <div class=\"search-group\">\n      <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\">\n      <button (click)=\"searchData()\" class=\"search-btn\">\n        <i class=\"fa fa-search fa-fw\"></i>\n      </button>\n    </div>\n\n\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Upload Translation File</th>\n          <th>Type Of Translation</th>\n          <th>To Which Language</th>\n          <th>Responsible Of Recieving</th>\n\n          <th>Other</th>\n\n          <th>Creation Date</th>\n\n\n\n          <!-- <th>STATE</th> -->\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr *ngIf=\"dataListSize == 0\">\n          <td class=\"text-center no-data\" colspan=\"7\">\n            <i class=\"fa fa-database fa-fw\"></i>\n            No Data Avilable\n          </td>\n\n        </tr>\n\n        <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n          <td>{{index+1}}</td>\n\n          <td>\n\n\n            <a class=\"url\" [href]=\"fileUrl\" target=\"_blank\">\n\n              <img id=\"{{item.translationFileName}}\" src=\"{{ImgSrc}}\" alt=\"avatar\">\n            </a>\n            <!-- [href]=\"fileUrl\" download=\"file.txt\" -->\n\n\n\n          </td>\n          <td>{{item.translationType}}</td>\n          <td>{{item.language}}</td>\n          <td>{{item.responsibleReceiver}}</td>\n\n\n          <td>{{item.other }}</td>\n          <td>{{item.creationDate | date : format : timezone }}</td>\n        </tr>\n      </tbody>\n    </table>\n    <form class=\"pagination-wrapper\">\n\n\n      <div class=\"form-group pages\">\n\n        <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\"\n          directionLinks=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n          screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n      </div>\n\n\n      <div class=\"form-group options pages\">\n        <div class=\"input-group input-group-sm\">\n          <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n            <option>1</option>\n            <option>5</option>\n            <option>10</option>\n            <option>20</option>\n            <option>50</option>\n\n          </select>\n          <span class=\"input-group-addon addon-right\">Per Page</span>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/services/certifiedtranslation/certifiedtranslation.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/components/services/certifiedtranslation/certifiedtranslation.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CertifiedtranslationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertifiedtranslationComponent", function() { return CertifiedtranslationComponent; });
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_Services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/shared/Services.service */ "./src/app/services/shared/Services.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CertifiedtranslationComponent = /** @class */ (function () {
    function CertifiedtranslationComponent(service, spinner, toastr, sanitizer) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.searchCeritria = '';
        this.dataListSize = 0;
        this.loading = true;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.ImgSrc = 'assets/images/picture.png';
    }
    CertifiedtranslationComponent.prototype.ngOnInit = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    CertifiedtranslationComponent.prototype.loadData = function (pageSize, pageNumber, searchCeritria) {
        var _this = this;
        this.spinner.show();
        this.service.GetCertifiedTranslations(pageSize, pageNumber, searchCeritria).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    CertifiedtranslationComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    CertifiedtranslationComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
        // this.searchCeritria ='';
    };
    CertifiedtranslationComponent.prototype.getFiles = function (fileName, id) {
        var _this = this;
        this.spinner.show();
        this.service.getImage(fileName, 'Certified_Translation').subscribe(function (data) {
            // console.log(data);
            _this.spinner.hide();
            _this.createBlob(data);
            // let bikeImage = document.getElementById(id) as HTMLImageElement;
            // var objectURL = URL.createObjectURL(data);
            // bikeImage.src = objectURL;
            // var w = window.open("");
            // w.document.write(bikeImage.outerHTML);
            // w.focus();
        }, function (err) {
            console.log(err);
        });
    };
    CertifiedtranslationComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
        return image;
    };
    CertifiedtranslationComponent.prototype.createBlob = function (data) {
        var blob = new Blob([data], { type: 'application/octet-stream' });
        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    };
    CertifiedtranslationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-certifiedtranslation',
            template: __webpack_require__(/*! ./certifiedtranslation.component.html */ "./src/app/admin/components/services/certifiedtranslation/certifiedtranslation.component.html"),
            styles: [__webpack_require__(/*! ./certifiedtranslation.component.css */ "./src/app/admin/components/services/certifiedtranslation/certifiedtranslation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_Services_service__WEBPACK_IMPORTED_MODULE_3__["ServiceServices"], ngx_spinner__WEBPACK_IMPORTED_MODULE_0__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], CertifiedtranslationComponent);
    return CertifiedtranslationComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/services/chart-accounting/chart-accounting.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/components/services/chart-accounting/chart-accounting.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/services/chart-accounting/chart-accounting.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/components/services/chart-accounting/chart-accounting.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div class=\"search-group\">\n      <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\">\n      <button (click)=\"searchData()\" class=\"search-btn\">\n        <i class=\"fa fa-search fa-fw\"></i>\n      </button>\n    </div>\n\n\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Year of budget</th>\n          <th>Accounting of the year</th>\n          <th>Bank Statment</th>\n          <th>Company Accounts</th>\n          <th>Other</th>\n          <th>Creation Date</th>\n          <!-- <th>STATE</th> -->\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngIf=\"dataListSize == 0\">\n          <td class=\"text-center no-data\" colspan=\"7\">\n            <i class=\"fa fa-database fa-fw\"></i>\n            No Data Avilable\n          </td>\n\n        </tr>\n        <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n          <td>{{index+1}}</td>\n\n          <td>{{item.yearOfBudget}}</td>\n          <td>\n            <a class=\"url\" (click)=\"getFiles(item.accOfYearImageName , item.accOfYearImageName)\" target=\"_blank\">\n              <img id=\"{{item.accOfYearImageName}}\" src=\"{{ImgSrc}}\" alt=\"avatar\">\n            </a>\n          </td>\n\n          <td>\n\n\n            <a class=\"url\" (click)=\"getFiles(item.bankOfYearImageName , item.bankOfYearImageName)\" target=\"_blank\">\n              <img id=\"{{item.bankOfYearImageName}}\" src=\"{{ImgSrc}}\" alt=\"avatar\">\n            </a></td>\n\n\n          <td>\n\n\n            <a class=\"url\" (click)=\"getFiles(item.companyAccImageName , item.companyAccImageName)\" target=\"_blank\">\n\n              <img id=\"{{item.companyAccImageName}}\" src=\"{{ImgSrc}}\" alt=\"avatar\">\n            </a></td>\n\n          <td>{{item.other }}</td>\n          <td>{{item.creationDate | date : format : timezone }}</td>\n        </tr>\n      </tbody>\n    </table>\n    <form class=\"pagination-wrapper\">\n\n\n      <div class=\"form-group pages\">\n        <div class=\"has-text-centered\">\n\n          <div *ngIf=\"loading\" class=\"spinner\"></div>\n        </div>\n        <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\"\n          directionLinks=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n          screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n      </div>\n\n\n      <div class=\"form-group options pages\">\n        <div class=\"input-group input-group-sm\">\n          <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n            <option>1</option>\n            <option>5</option>\n            <option>10</option>\n            <option>20</option>\n            <option>50</option>\n\n          </select>\n          <span class=\"input-group-addon addon-right\">Per Page</span>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/services/chart-accounting/chart-accounting.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/components/services/chart-accounting/chart-accounting.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ChartAccountingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartAccountingComponent", function() { return ChartAccountingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_Services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/shared/Services.service */ "./src/app/services/shared/Services.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChartAccountingComponent = /** @class */ (function () {
    function ChartAccountingComponent(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.searchCeritria = '';
        this.dataListSize = 0;
        this.loading = true;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.ImgSrc = 'assets/images/picture.png';
    }
    ChartAccountingComponent.prototype.ngOnInit = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    ChartAccountingComponent.prototype.loadData = function (pageSize, pageNumber, searchCeritria) {
        var _this = this;
        this.spinner.show();
        this.service.get_Charter_Accounting(pageSize, pageNumber, searchCeritria).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    ChartAccountingComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    ChartAccountingComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
        this.searchCeritria = '';
    };
    ChartAccountingComponent.prototype.getFiles = function (fileName, id) {
        var _this = this;
        this.spinner.show();
        this.service.getImage(fileName, 'CharterAccount').subscribe(function (data) {
            // console.log(data);
            _this.spinner.hide();
            var bikeImage = document.getElementById(id);
            var objectURL = URL.createObjectURL(data);
            bikeImage.src = objectURL;
            var w = window.open("");
            w.document.write(bikeImage.outerHTML);
            w.focus();
        }, function (err) {
            console.log(err);
        });
    };
    ChartAccountingComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
        return image;
    };
    ChartAccountingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart-accounting',
            template: __webpack_require__(/*! ./chart-accounting.component.html */ "./src/app/admin/components/services/chart-accounting/chart-accounting.component.html"),
            styles: [__webpack_require__(/*! ./chart-accounting.component.css */ "./src/app/admin/components/services/chart-accounting/chart-accounting.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_Services_service__WEBPACK_IMPORTED_MODULE_1__["ServiceServices"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ChartAccountingComponent);
    return ChartAccountingComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/services/customerclearance/customerclearance.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/components/services/customerclearance/customerclearance.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/services/customerclearance/customerclearance.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/components/services/customerclearance/customerclearance.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n\n    <div class=\"search-group\">\n      <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\">\n      <button (click)=\"searchData()\" class=\"search-btn\">\n        <i class=\"fa fa-search fa-fw\"></i>\n      </button>\n    </div>\n\n\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Copy Of Bill Of Shipment</th>\n          <th>Copy Of Authorization</th>\n          <th>Port Of Shipment</th>\n          <th>Shipment Description</th>\n          <th>Other</th>\n          <th>Creation Date</th>\n          <!-- <th>STATE</th> -->\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr *ngIf=\"dataListSize == 0\">\n          <td class=\"text-center no-data\" colspan=\"7\">\n            <i class=\"fa fa-database fa-fw\"></i>\n            No Data Avilable\n          </td>\n\n        </tr>\n\n        <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n          <td>{{index+1}}</td>\n\n\n\n          <td>\n            <a class=\"url\" (click)=\"getFiles(item.shipmentBillImageName , item.shipmentBillImageName)\" target=\"_blank\">\n              <img id=\"{{item.shipmentBillImageName}}\" src=\"{{ImgSrc}}\" alt=\"avatar\">\n            </a>\n\n          </td>\n\n          <td>\n            <a class=\"url\" (click)=\"getFiles(item.authorizationImageName , item.authorizationImageName)\" target=\"_blank\">\n              <img id=\"{{item.authorizationImageName}}\" src=\"{{ImgSrc}}\" alt=\"avatar\">\n            </a>\n\n          </td>\n\n\n\n\n\n\n          <td>{{item.shipmentDescription}}</td>\n          <td>{{item.shipmentPort}}</td>\n\n          <td>{{item.other}}</td>\n\n\n          <td>{{item.creationDate | date : format : timezone }}</td>\n        </tr>\n      </tbody>\n    </table>\n    <form class=\"pagination-wrapper\">\n\n\n      <div class=\"form-group pages\">\n\n        <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\"\n          directionLinks=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n          screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n      </div>\n\n\n      <div class=\"form-group options pages\">\n        <div class=\"input-group input-group-sm\">\n          <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n            <option>1</option>\n            <option>5</option>\n            <option>10</option>\n            <option>20</option>\n            <option>50</option>\n\n          </select>\n          <span class=\"input-group-addon addon-right\">Per Page</span>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/services/customerclearance/customerclearance.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/components/services/customerclearance/customerclearance.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CustomerclearanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerclearanceComponent", function() { return CustomerclearanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_Services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/shared/Services.service */ "./src/app/services/shared/Services.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerclearanceComponent = /** @class */ (function () {
    function CustomerclearanceComponent(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.searchCeritria = '';
        this.dataListSize = 0;
        this.loading = true;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.ImgSrc = 'assets/images/picture.png';
    }
    CustomerclearanceComponent.prototype.ngOnInit = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    CustomerclearanceComponent.prototype.loadData = function (pageSize, pageNumber, searchCeritria) {
        var _this = this;
        this.spinner.show();
        this.service.GetCustomClearance(pageSize, pageNumber, searchCeritria).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    CustomerclearanceComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    CustomerclearanceComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
        // this.searchCeritria ='';
    };
    CustomerclearanceComponent.prototype.getFiles = function (fileName, id) {
        var _this = this;
        this.spinner.show();
        this.service.getImage(fileName, 'Customs_Clearance').subscribe(function (data) {
            // console.log(data);
            _this.spinner.hide();
            var bikeImage = document.getElementById(id);
            var objectURL = URL.createObjectURL(data);
            bikeImage.src = objectURL;
            var w = window.open("");
            w.document.write(bikeImage.outerHTML);
            w.focus();
        }, function (err) {
            console.log(err);
        });
    };
    CustomerclearanceComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
        return image;
    };
    CustomerclearanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customerclearance',
            template: __webpack_require__(/*! ./customerclearance.component.html */ "./src/app/admin/components/services/customerclearance/customerclearance.component.html"),
            styles: [__webpack_require__(/*! ./customerclearance.component.css */ "./src/app/admin/components/services/customerclearance/customerclearance.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_Services_service__WEBPACK_IMPORTED_MODULE_1__["ServiceServices"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CustomerclearanceComponent);
    return CustomerclearanceComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/services/employmentadmin/employmentadmin.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/components/services/employmentadmin/employmentadmin.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/services/employmentadmin/employmentadmin.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/components/services/employmentadmin/employmentadmin.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n    <div style=\" display: -webkit-box;\n      \" class=\"form-group col-md-5\">\n      <label style=\"    margin-right: 15px;\n        margin-top: 5px;\" class=\"control-label\">Select Job</label>\n      <select [(ngModel)]=\"jobTitleCode\" name=\"select\" id=\"select1\" class=\"form-control\">\n        <option *ngFor=\"let job of JobTitle\" value=\"{{job.code}}\">{{job.value}}</option>\n\n      </select>\n      <button (click)=\"searchData()\" class=\"btn btn-icon btn-xs btn-primary\">\n        <i class=\"fa fa-search fa-fw\"></i>\n      </button>\n\n    </div>\n    <!-- <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\"> -->\n    <!-- <button (click)=\"searchData()\" class=\"search-btn\">\n              <i class=\"fa fa-search fa-fw\"></i>\n            </button> -->\n    <div class=\"form-group\">\n      <label class=\"control-label\"></label>\n\n    </div>\n\n\n\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Job Title</th>\n          <th>Activity</th>\n          <th> Salary</th>\n          <th>Cv</th>\n          <th>Profile Image</th>\n\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr *ngIf=\"dataListSize == 0\">\n          <td class=\"text-center no-data\" colspan=\"8\">\n            <i class=\"fa fa-database fa-fw\"></i>\n            No Data Avilable\n          </td>\n\n        </tr>\n\n        <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n          <td>{{index+1}}</td>\n\n\n\n          <td>{{item.employeeName}}</td>\n          <td>{{item.jobTitle}}</td>\n\n          <td>{{item.activity}}</td>\n          <td>{{item.salary}}</td>\n          <td>\n\n\n            <a class=\"url\" (click)=\"getFiles(item.cvUrl , item.cvUrl)\" target=\"_blank\">\n\n\n              <i class=\"fa fa-download\"></i>\n            </a>\n\n          </td>\n\n\n          <td>\n            <a class=\"url\" href=\"{{imgService}}{{item.profileImage}}\" target=\"_blank\">\n              <img src=\"{{ImgSrc}}\" alt=\"avatar\">\n            </a>\n\n          </td>\n\n\n\n\n        </tr>\n      </tbody>\n    </table>\n    <form class=\"pagination-wrapper\">\n\n\n      <div class=\"form-group pages\">\n\n        <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\"\n          directionLinks=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n          screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n      </div>\n\n\n      <div class=\"form-group options pages\">\n        <div class=\"input-group input-group-sm\">\n          <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n            <option>1</option>\n            <option>5</option>\n            <option>10</option>\n            <option>20</option>\n            <option>50</option>\n\n          </select>\n          <span class=\"input-group-addon addon-right\">Per Page</span>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/services/employmentadmin/employmentadmin.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/components/services/employmentadmin/employmentadmin.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EmploymentadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentadminComponent", function() { return EmploymentadminComponent; });
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_shared_Services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/shared/Services.service */ "./src/app/services/shared/Services.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/shared/settings.service */ "./src/app/services/shared/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmploymentadminComponent = /** @class */ (function () {
    function EmploymentadminComponent(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.jobTitleCode = '';
        this.dataListSize = 0;
        this.loading = true;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.ImgSrc = 'assets/images/picture.png';
        this.imgService = _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].imageUrlProfile;
    }
    EmploymentadminComponent.prototype.ngOnInit = function () {
        this.getPickList();
        this.loadData(this.pageSize, this.pageNumber, this.jobTitleCode);
        console.log(this.imgService);
    };
    EmploymentadminComponent.prototype.getPickList = function () {
        var _this = this;
        this.service.getJobTitlePickList().subscribe(function (data) {
            _this.JobTitle = data;
        });
    };
    EmploymentadminComponent.prototype.loadData = function (pageSize, pageNumber, jobTitleCode) {
        var _this = this;
        this.spinner.show();
        this.service.GetEmployment(pageSize, pageNumber, jobTitleCode).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            console.log(_this.tableData);
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    EmploymentadminComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.jobTitleCode);
    };
    EmploymentadminComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.jobTitleCode);
        // this.searchCeritria ='';
    };
    EmploymentadminComponent.prototype.getFiles = function (fileName, id) {
        var _this = this;
        this.spinner.show();
        this.service.getImage(fileName, 'Employment').subscribe(function (data) {
            // console.log(data);
            _this.spinner.hide();
            // let bikeImage = document.getElementById(id) as HTMLImageElement;
            // var objectURL = URL.createObjectURL(data);
            // bikeImage.src = objectURL;
            _this.downloadFile(data);
        }, function (err) {
            console.log(err);
        });
    };
    EmploymentadminComponent.prototype.downloadFile = function (data) {
        // const blob = new Blob([data], { type: 'text/csv' });
        // const url = window.URL.createObjectURL(blob);
        // window.open(url);
        // window.focus();
        var url = window.URL.createObjectURL(data);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = data.filename;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove(); // remove the element
    };
    EmploymentadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-employmentadmin',
            template: __webpack_require__(/*! ./employmentadmin.component.html */ "./src/app/admin/components/services/employmentadmin/employmentadmin.component.html"),
            styles: [__webpack_require__(/*! ./employmentadmin.component.css */ "./src/app/admin/components/services/employmentadmin/employmentadmin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_Services_service__WEBPACK_IMPORTED_MODULE_1__["ServiceServices"], ngx_spinner__WEBPACK_IMPORTED_MODULE_0__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EmploymentadminComponent);
    return EmploymentadminComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/services/establishcompany/establishcompany.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/components/services/establishcompany/establishcompany.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/services/establishcompany/establishcompany.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/components/services/establishcompany/establishcompany.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n\n    <div class=\"search-group\">\n      <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\">\n      <button (click)=\"searchData()\" class=\"search-btn\">\n        <i class=\"fa fa-search fa-fw\"></i>\n      </button>\n    </div>\n\n\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Country</th>\n          <th>Activity</th>\n          <th>Capital Currency</th>\n          <th>ID Cardss</th>\n\n          <th>ids Copies </th>\n\n          <th>Authorization Copy</th>\n\n          <th>Rental Agreement Copy</th>\n          <th>Other</th>\n\n          <th>Creation Date</th>\n          <!-- <th>STATE</th> -->\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr *ngIf=\"dataListSize == 0\">\n          <td class=\"text-center no-data\" colspan=\"10\">\n            <i class=\"fa fa-database fa-fw\"></i>\n            No Data Avilable\n          </td>\n\n        </tr>\n\n        <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n          <td>{{index+1}}</td>\n\n          <td>{{item.country}}</td>\n          <td>{{item.activity}}</td>\n          <td>{{item.capitalCurrency}}</td>\n          <td>{{item.id}}</td>\n\n\n\n\n\n          <td>\n            <a class=\"url\" (click)=\"getFiles(item.idsCopiesImageName , item.idsCopiesImageName)\" target=\"_blank\">\n              <img id=\"{{item.idsCopiesImageName}}\" src=\"{{ImgSrc}}\" alt=\"avatar\">\n            </a>\n\n          </td>\n\n\n          <td>\n            <a class=\"url\" (click)=\"getFiles(item.idsCopiesImageName , item.authorizationImageName)\" target=\"_blank\">\n              <img id=\"{{item.authorizationImageName}}\" src=\"{{ImgSrc}}\" alt=\"avatar\">\n            </a>\n\n          </td>\n\n          <td>\n            <a class=\"url\" (click)=\"getFiles(item.idsCopiesImageName , item.agreementImageName)\" target=\"_blank\">\n              <img id=\"{{item.agreementImageName}}\" src=\"{{ImgSrc}}\" alt=\"avatar\">\n            </a></td>\n\n\n          <td>{{item.other }}</td>\n          <td>{{item.creationDate | date : format : timezone }}</td>\n        </tr>\n      </tbody>\n    </table>\n    <form class=\"pagination-wrapper\">\n\n\n      <div class=\"form-group pages\">\n\n        <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\"\n          directionLinks=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n          screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n      </div>\n\n\n      <div class=\"form-group options pages\">\n        <div class=\"input-group input-group-sm\">\n          <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n            <option>1</option>\n            <option>5</option>\n            <option>10</option>\n            <option>20</option>\n            <option>50</option>\n\n          </select>\n          <span class=\"input-group-addon addon-right\">Per Page</span>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/services/establishcompany/establishcompany.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/components/services/establishcompany/establishcompany.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EstablishcompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishcompanyComponent", function() { return EstablishcompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_shared_Services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/shared/Services.service */ "./src/app/services/shared/Services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EstablishcompanyComponent = /** @class */ (function () {
    function EstablishcompanyComponent(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.searchCeritria = '';
        this.dataListSize = 0;
        this.loading = true;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.ImgSrc = 'assets/images/picture.png';
    }
    EstablishcompanyComponent.prototype.ngOnInit = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    EstablishcompanyComponent.prototype.loadData = function (pageSize, pageNumber, searchCeritria) {
        var _this = this;
        this.spinner.show();
        this.service.GetEstablishCompnies(pageSize, pageNumber, searchCeritria).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    EstablishcompanyComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    EstablishcompanyComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
        // this.searchCeritria ='';
    };
    EstablishcompanyComponent.prototype.getFiles = function (fileName, id) {
        var _this = this;
        this.spinner.show();
        this.service.getImage(fileName, 'EstablishComp').subscribe(function (data) {
            // console.log(data);
            _this.spinner.hide();
            var bikeImage = document.getElementById(id);
            var objectURL = URL.createObjectURL(data);
            bikeImage.src = objectURL;
            var w = window.open("");
            w.document.write(bikeImage.outerHTML);
            w.focus();
        }, function (err) {
            console.log(err);
        });
    };
    EstablishcompanyComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
        return image;
    };
    EstablishcompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-establishcompany',
            template: __webpack_require__(/*! ./establishcompany.component.html */ "./src/app/admin/components/services/establishcompany/establishcompany.component.html"),
            styles: [__webpack_require__(/*! ./establishcompany.component.css */ "./src/app/admin/components/services/establishcompany/establishcompany.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_Services_service__WEBPACK_IMPORTED_MODULE_3__["ServiceServices"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], EstablishcompanyComponent);
    return EstablishcompanyComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/services/feasibilitystudy/feasibilitystudy.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/components/services/feasibilitystudy/feasibilitystudy.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/services/feasibilitystudy/feasibilitystudy.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/components/services/feasibilitystudy/feasibilitystudy.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n\n        <div class=\"search-group\">\n            <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\">\n            <button (click)=\"searchData()\" class=\"search-btn\">\n              <i class=\"fa fa-search fa-fw\"></i>\n            </button>\n          </div>\n\n          \n      <table class=\"table table-bordered table-hover\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Country</th>\n            \n            <th>Company</th>\n            <th>Activity</th>\n            <th>Details  Address</th>\n            <th>Capital Currency</th>\n\n            \n            <th>Creation Date</th>\n            <!-- <th>STATE</th> -->\n          </tr>\n        </thead>\n        <tbody>\n\n            <tr *ngIf=\"dataListSize == 0\" >\n                <td  class=\"text-center no-data\" colspan=\"8\">\n                    <i  class=\"fa fa-database fa-fw\"></i>\n                    No Data Avilable\n                </td>\n                \n                </tr>\n                \n          <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n              <td>{{index+1}}</td>\n\n              <td>{{item.country}}</td>\n              \n              <td>{{item.companyType}}</td>\n              <td>{{item.activity}}</td>\n              <td>{{item.detailedAdress}}</td>\n\n              <td>{{item.capitalCurrency}}</td>\n\n\n\n\n              \n              \n            \n              <td>{{item.creationDate | date : format : timezone }}</td>\n            </tr>\n        </tbody>\n      </table>\n      <form class=\"pagination-wrapper\">\n\n        \n        <div class=\"form-group pages\">\n          \n          <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\"\n             previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\n            screenReaderCurrentLabel=\"You're on page\">\n          </pagination-controls>\n        </div>\n\n\n        <div class=\"form-group options pages\">\n          <div class=\"input-group input-group-sm\">\n            <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n              <option>1</option>\n              <option>5</option>\n              <option>10</option>\n              <option>20</option>\n              <option>50</option>\n             \n            </select>\n            <span class=\"input-group-addon addon-right\">Per Page</span>\n          </div>\n        </div>\n      </form>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/services/feasibilitystudy/feasibilitystudy.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/components/services/feasibilitystudy/feasibilitystudy.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FeasibilitystudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeasibilitystudyComponent", function() { return FeasibilitystudyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_Services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/shared/Services.service */ "./src/app/services/shared/Services.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeasibilitystudyComponent = /** @class */ (function () {
    function FeasibilitystudyComponent(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.searchCeritria = '';
        this.dataListSize = 0;
        this.loading = true;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.ImgSrc = 'assets/images/picture.png';
    }
    FeasibilitystudyComponent.prototype.ngOnInit = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    FeasibilitystudyComponent.prototype.loadData = function (pageSize, pageNumber, searchCeritria) {
        var _this = this;
        this.spinner.show();
        this.service.GetFeasabilityStudy(pageSize, pageNumber, searchCeritria).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    FeasibilitystudyComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    FeasibilitystudyComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
        // this.searchCeritria ='';
    };
    FeasibilitystudyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feasibilitystudy',
            template: __webpack_require__(/*! ./feasibilitystudy.component.html */ "./src/app/admin/components/services/feasibilitystudy/feasibilitystudy.component.html"),
            styles: [__webpack_require__(/*! ./feasibilitystudy.component.css */ "./src/app/admin/components/services/feasibilitystudy/feasibilitystudy.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_Services_service__WEBPACK_IMPORTED_MODULE_1__["ServiceServices"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], FeasibilitystudyComponent);
    return FeasibilitystudyComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/services/hiringlaborsadmin/hiringlaborsadmin.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/components/services/hiringlaborsadmin/hiringlaborsadmin.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/services/hiringlaborsadmin/hiringlaborsadmin.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/components/services/hiringlaborsadmin/hiringlaborsadmin.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n      <div  style=\"margin-bottom: 40px;    display: -webkit-box;\n      \" class=\"form-group col-md-5\">\n        <label style=\"    margin-right: 15px;\n        margin-top: 5px;\" class=\"control-label\">Select Job</label>\n        <select [(ngModel)]=\"jobTitleCode\" name=\"select\" id=\"select1\" class=\"form-control\">\n          <option *ngFor=\"let job of JobTitle\" value=\"{{job.code}}\">{{job.value}}</option>\n         \n        </select>\n        <button style=\"padding: 8px 20px;\n        \" (click)=\"searchData()\" class=\"btn btn-icon btn-xs btn-primary\">\n        <i class=\"fa fa-search fa-fw\"></i>\n      </button>\n\n        </div>\n             <!-- <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\"> -->\n            <!-- <button (click)=\"searchData()\" class=\"search-btn\">\n              <i class=\"fa fa-search fa-fw\"></i>\n            </button> -->\n            <div class=\"form-group\">\n                <label class=\"control-label\"></label>\n\n          </div>\n    \n\n          \n      <table class=\"table table-bordered table-hover\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Job Title</th>\n            <th>Country</th>\n            <th>Region</th>\n            <th>Years Of Experience</th>\n            <th> Daily Work Hours</th>\n            <th> Salary</th>\n\n          \n            <th>Other</th>\n\n\n\n\n            <!-- <th>STATE</th> -->\n          </tr>\n        </thead>\n        <tbody>\n\n            <tr *ngIf=\"dataListSize == 0\" >\n                <td  class=\"text-center no-data\" colspan=\"8\">\n                    <i  class=\"fa fa-database fa-fw\"></i>\n                    No Data Avilable\n                </td>\n                \n                </tr>\n                \n          <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n              <td>{{index+1}}</td>\n          \n                \n\n                    <td>{{item.jobTitle}}</td>\n\n                      <td>{{item.country}}</td>\n                    <td>{{item.region}}</td>\n                    \n                    <td>{{item.yearsOfExperience}}</td>\n                    <td>{{item.dailyWorkHours}}</td>\n                    <td>{{item.salary}}</td>\n\n      \n                    <td>{{item.other}}</td>\n                   \n            </tr>\n        </tbody>\n      </table>\n      <form class=\"pagination-wrapper\">\n\n        \n        <div class=\"form-group pages\">\n            <div class=\"has-text-centered\">\n\n             </div>\n          <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\"\n             previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\n            screenReaderCurrentLabel=\"You're on page\">\n          </pagination-controls>\n        </div>\n\n\n        <div class=\"form-group options pages\">\n          <div class=\"input-group input-group-sm\">\n            <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n              <option>1</option>\n              <option>5</option>\n              <option>10</option>\n              <option>20</option>\n              <option>50</option>\n             \n            </select>\n            <span class=\"input-group-addon addon-right\">Per Page</span>\n          </div>\n        </div>\n      </form>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/services/hiringlaborsadmin/hiringlaborsadmin.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/components/services/hiringlaborsadmin/hiringlaborsadmin.component.ts ***!
  \********************************************************************************************/
/*! exports provided: HiringlaborsadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiringlaborsadminComponent", function() { return HiringlaborsadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_Services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/shared/Services.service */ "./src/app/services/shared/Services.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HiringlaborsadminComponent = /** @class */ (function () {
    function HiringlaborsadminComponent(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.jobTitleCode = '';
        this.dataListSize = 0;
        this.loading = true;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.ImgSrc = 'assets/images/picture.png';
    }
    HiringlaborsadminComponent.prototype.ngOnInit = function () {
        this.getPickList();
        this.loadData(this.pageSize, this.pageNumber, this.jobTitleCode);
    };
    HiringlaborsadminComponent.prototype.getPickList = function () {
        var _this = this;
        this.service.getJobTitlePickList().subscribe(function (data) {
            _this.JobTitle = data;
        });
    };
    HiringlaborsadminComponent.prototype.loadData = function (pageSize, pageNumber, jobTitleCode) {
        var _this = this;
        this.spinner.show();
        this.service.GetHiringLabors(pageSize, pageNumber, jobTitleCode).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    HiringlaborsadminComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.jobTitleCode);
    };
    HiringlaborsadminComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.jobTitleCode);
        // this.searchCeritria ='';
    };
    HiringlaborsadminComponent.prototype.openUrl = function (url) {
        var URL = url;
        window.open(URL, '_blank');
    };
    HiringlaborsadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hiringlaborsadmin',
            template: __webpack_require__(/*! ./hiringlaborsadmin.component.html */ "./src/app/admin/components/services/hiringlaborsadmin/hiringlaborsadmin.component.html"),
            styles: [__webpack_require__(/*! ./hiringlaborsadmin.component.css */ "./src/app/admin/components/services/hiringlaborsadmin/hiringlaborsadmin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_Services_service__WEBPACK_IMPORTED_MODULE_1__["ServiceServices"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], HiringlaborsadminComponent);
    return HiringlaborsadminComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/services/officeservices/officeservices.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/components/services/officeservices/officeservices.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/services/officeservices/officeservices.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/components/services/officeservices/officeservices.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n \n\n        <div class=\"search-group\">\n            <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\">\n            <button (click)=\"searchData()\" class=\"search-btn\">\n              <i class=\"fa fa-search fa-fw\"></i>\n            </button>\n          </div>\n\n          \n      <table class=\"table table-bordered table-hover\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Address</th>\n            <th>Renting Offices</th>\n            <th>Furniture Of Office</th>\n            <th>Devices</th>\n            <th>Cameras CCTV</th>\n            <th>Links</th>\n\n            <th>Papers</th>\n            <th>Web Design</th>\n            \n            <th>Digital Marketing</th>\n            <th>Other</th>\n            <th>Creation Date</th>\n\n\n\n            <!-- <th>STATE</th> -->\n          </tr>\n        </thead>\n        <tbody>\n\n            <tr *ngIf=\"dataListSize == 0\" >\n                <td  class=\"text-center no-data\" colspan=\"12\">\n                    <i  class=\"fa fa-database fa-fw\"></i>\n                    No Data Avilable\n                </td>\n                \n                </tr>\n                \n          <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n              <td>{{index+1}}</td>\n\n              <td>{{item.address}}</td>\n              <td>{{item.rentingOffices}}</td>\n              <td>{{item.officeFurnuture}}</td>\n              <td>{{item.devices}}</td>\n              <td>{{item.cameras}}</td>\n              <td>{{item.links}}</td>\n\n              <td>{{item.papers}}</td>\n\n              <td>{{item.webDesigns}}</td>\n\n              <td>{{item.degitalMarketting}}</td>\n\n              <td>{{item.other }}</td>\n              <td>{{item.creationDate | date : format : timezone }}</td>\n            </tr>\n        </tbody>\n      </table>\n      <form class=\"pagination-wrapper\">\n\n        \n        <div class=\"form-group pages\">\n          \n          <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\"\n             previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\n            screenReaderCurrentLabel=\"You're on page\">\n          </pagination-controls>\n        </div>\n\n\n        <div class=\"form-group options pages\">\n          <div class=\"input-group input-group-sm\">\n            <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n              <option>1</option>\n              <option>5</option>\n              <option>10</option>\n              <option>20</option>\n              <option>50</option>\n             \n            </select>\n            <span class=\"input-group-addon addon-right\">Per Page</span>\n          </div>\n        </div>\n      </form>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/services/officeservices/officeservices.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/components/services/officeservices/officeservices.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OfficeservicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeservicesComponent", function() { return OfficeservicesComponent; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_Services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/shared/Services.service */ "./src/app/services/shared/Services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OfficeservicesComponent = /** @class */ (function () {
    function OfficeservicesComponent(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.searchCeritria = '';
        this.dataListSize = 0;
        this.loading = true;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.ImgSrc = 'assets/images/picture.png';
    }
    OfficeservicesComponent.prototype.ngOnInit = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    OfficeservicesComponent.prototype.loadData = function (pageSize, pageNumber, searchCeritria) {
        var _this = this;
        this.spinner.show();
        this.service.GetOfficeServices(pageSize, pageNumber, searchCeritria).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    OfficeservicesComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    OfficeservicesComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
        // this.searchCeritria ='';
    };
    OfficeservicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-officeservices',
            template: __webpack_require__(/*! ./officeservices.component.html */ "./src/app/admin/components/services/officeservices/officeservices.component.html"),
            styles: [__webpack_require__(/*! ./officeservices.component.css */ "./src/app/admin/components/services/officeservices/officeservices.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_Services_service__WEBPACK_IMPORTED_MODULE_3__["ServiceServices"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"]])
    ], OfficeservicesComponent);
    return OfficeservicesComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/services/shippingadmin/shippingadmin.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/components/services/shippingadmin/shippingadmin.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/services/shippingadmin/shippingadmin.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/components/services/shippingadmin/shippingadmin.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n\n    <div class=\"search-group\">\n      <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\">\n      <button (click)=\"searchData()\" class=\"search-btn\">\n        <i class=\"fa fa-search fa-fw\"></i>\n      </button>\n    </div>\n\n\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Upload A Copy Of The Bill Of The Authorization</th>\n          <th>Port Of Shipment</th>\n          <th>Name Responsible Of Recieving</th>\n          <th>Address</th>\n          <th> Types Of Goods</th>\n\n\n\n          <th>Other</th>\n\n          <th>Creation Date</th>\n\n\n\n          <!-- <th>STATE</th> -->\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr *ngIf=\"dataListSize == 0\">\n          <td class=\"text-center no-data\" colspan=\"7\">\n            <i class=\"fa fa-database fa-fw\"></i>\n            No Data Avilable\n          </td>\n\n        </tr>\n\n        <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n          <td>{{index+1}}</td>\n          <td>\n\n\n\n            <a class=\"url\" (click)=\"getFiles(item.billAuthorization , item.billAuthorization)\" target=\"_blank\">\n\n              <img id=\"{{item.billAuthorization}}\" src=\"{{ImgSrc}}\" alt=\"avatar\">\n            </a>\n\n\n          </td>\n\n\n\n\n          <td>{{item.shipmentPort}}</td>\n\n          <td>{{item.responsableName}}</td>\n          <td>{{item.deliveryStreetAdress}}</td>\n\n          <td>{{item.goodsType}}</td>\n\n          <td>{{item.other}}</td>\n          <td>{{item.creationDate | date : format : timezone }}</td>\n\n        </tr>\n      </tbody>\n    </table>\n    <form class=\"pagination-wrapper\">\n\n\n      <div class=\"form-group pages\">\n\n        <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\"\n          directionLinks=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n          screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n      </div>\n\n\n      <div class=\"form-group options pages\">\n        <div class=\"input-group input-group-sm\">\n          <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n            <option>1</option>\n            <option>5</option>\n            <option>10</option>\n            <option>20</option>\n            <option>50</option>\n\n          </select>\n          <span class=\"input-group-addon addon-right\">Per Page</span>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/services/shippingadmin/shippingadmin.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/components/services/shippingadmin/shippingadmin.component.ts ***!
  \************************************************************************************/
/*! exports provided: ShippingadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingadminComponent", function() { return ShippingadminComponent; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_shared_Services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/shared/Services.service */ "./src/app/services/shared/Services.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShippingadminComponent = /** @class */ (function () {
    function ShippingadminComponent(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.searchCeritria = '';
        this.dataListSize = 0;
        this.loading = true;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.ImgSrc = 'assets/images/picture.png';
    }
    ShippingadminComponent.prototype.ngOnInit = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    ShippingadminComponent.prototype.loadData = function (pageSize, pageNumber, searchCeritria) {
        var _this = this;
        this.spinner.show();
        this.loading = true;
        this.service.GetShippings(pageSize, pageNumber, searchCeritria).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    ShippingadminComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    ShippingadminComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
        // this.searchCeritria ='';
    };
    ShippingadminComponent.prototype.getFiles = function (fileName, id) {
        var _this = this;
        this.spinner.show();
        this.service.getImage(fileName, 'Shipping').subscribe(function (data) {
            // console.log(data);
            _this.spinner.hide();
            var bikeImage = document.getElementById(id);
            var objectURL = URL.createObjectURL(data);
            bikeImage.src = objectURL;
            var w = window.open("");
            w.document.write(bikeImage.outerHTML);
            w.focus();
        }, function (err) {
            console.log(err);
        });
    };
    ShippingadminComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
        return image;
    };
    ShippingadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-shippingadmin',
            template: __webpack_require__(/*! ./shippingadmin.component.html */ "./src/app/admin/components/services/shippingadmin/shippingadmin.component.html"),
            styles: [__webpack_require__(/*! ./shippingadmin.component.css */ "./src/app/admin/components/services/shippingadmin/shippingadmin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_Services_service__WEBPACK_IMPORTED_MODULE_2__["ServiceServices"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"]])
    ], ShippingadminComponent);
    return ShippingadminComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/services/tradingagencies/tradingagencies.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/components/services/tradingagencies/tradingagencies.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/services/tradingagencies/tradingagencies.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/components/services/tradingagencies/tradingagencies.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n\n\n    <div class=\"search-group\">\n      <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\">\n      <button (click)=\"searchData()\" class=\"search-btn\">\n        <i class=\"fa fa-search fa-fw\"></i>\n      </button>\n    </div>\n\n\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Activity</th>\n          <th>Required Brand</th>\n          <th>Product Description</th>\n          <th>Location</th>\n          <th>Image Of Product</th>\n          <th>Other</th>\n\n          <th>Creation Date</th>\n\n\n\n          <!-- <th>STATE</th> -->\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr *ngIf=\"dataListSize == 0\">\n          <td class=\"text-center no-data\" colspan=\"8\">\n            <i class=\"fa fa-database fa-fw\"></i>\n            No Data Avilable\n          </td>\n\n        </tr>\n\n        <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n          <td>{{index+1}}</td>\n\n          <td>{{item.activity}}</td>\n          <td>{{item.requiredBand}}</td>\n          <td>{{item.productDescription}}</td>\n          <td>{{item.location}}</td>\n\n          <td>\n\n            <a class=\"url\" (click)=\"getFiles(item.productImage , item.productImage)\" target=\"_blank\">\n\n              <img id=\"{{item.productImage}}\" src=\"{{ImgSrc}}\" alt=\"avatar\">\n            </a>\n\n          </td>\n\n          <td>{{item.other}}</td>\n\n          <td>{{item.creationDate | date : format : timezone }}</td>\n        </tr>\n      </tbody>\n    </table>\n    <form class=\"pagination-wrapper\">\n\n\n      <div class=\"form-group pages\">\n\n        <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\"\n          directionLinks=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n          screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n      </div>\n\n\n      <div class=\"form-group options pages\">\n        <div class=\"input-group input-group-sm\">\n          <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n            <option>1</option>\n            <option>5</option>\n            <option>10</option>\n            <option>20</option>\n            <option>50</option>\n\n          </select>\n          <span class=\"input-group-addon addon-right\">Per Page</span>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/services/tradingagencies/tradingagencies.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/components/services/tradingagencies/tradingagencies.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TradingagenciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingagenciesComponent", function() { return TradingagenciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_Services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/shared/Services.service */ "./src/app/services/shared/Services.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TradingagenciesComponent = /** @class */ (function () {
    function TradingagenciesComponent(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.searchCeritria = '';
        this.dataListSize = 0;
        this.loading = true;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.ImgSrc = 'assets/images/picture.png';
    }
    TradingagenciesComponent.prototype.ngOnInit = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    TradingagenciesComponent.prototype.loadData = function (pageSize, pageNumber, searchCeritria) {
        var _this = this;
        this.spinner.show();
        this.service.GetTradingAgencies(pageSize, pageNumber, searchCeritria).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    TradingagenciesComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    TradingagenciesComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
        // this.searchCeritria ='';
    };
    TradingagenciesComponent.prototype.getFiles = function (fileName, id) {
        var _this = this;
        this.spinner.show();
        this.service.getImage(fileName, 'Trading_Agency').subscribe(function (data) {
            // console.log(data);
            _this.spinner.hide();
            var bikeImage = document.getElementById(id);
            var objectURL = URL.createObjectURL(data);
            bikeImage.src = objectURL;
            var w = window.open("");
            w.document.write(bikeImage.outerHTML);
            w.focus();
        }, function (err) {
            console.log(err);
        });
    };
    TradingagenciesComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
        return image;
    };
    TradingagenciesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tradingagencies',
            template: __webpack_require__(/*! ./tradingagencies.component.html */ "./src/app/admin/components/services/tradingagencies/tradingagencies.component.html"),
            styles: [__webpack_require__(/*! ./tradingagencies.component.css */ "./src/app/admin/components/services/tradingagencies/tradingagencies.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_Services_service__WEBPACK_IMPORTED_MODULE_1__["ServiceServices"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], TradingagenciesComponent);
    return TradingagenciesComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/users/users.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/components/users/users.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/users/users.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/components/users/users.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"large\" color=\"#fff\" type=\"ball-spin\"></ngx-spinner>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n\n\n    <div class=\"search-group\">\n      <input [(ngModel)]=\"searchCeritria\" (keyup.enter)=\"searchData()\" type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\">\n      <button (click)=\"searchData()\" class=\"search-btn\">\n        <i class=\"fa fa-search fa-fw\"></i>\n      </button>\n    </div>\n\n\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Phone</th>\n          <th>ID</th>\n          <!-- <th>Password</th> -->\n          <th>Creation Date</th>\n\n\n\n\n\n          <!-- <th>STATE</th> -->\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr *ngIf=\"dataListSize == 0\">\n          <td class=\"text-center no-data\" colspan=\"7\">\n            <i class=\"fa fa-database fa-fw\"></i>\n            No Data Avilable\n          </td>\n\n        </tr>\n\n        <tr *ngFor=\"let item of tableData  | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber , totalItems: dataListSize};let index = index\">\n          <td>{{index+1}}</td>\n\n          <td>{{item.userName}}</td>\n          <td>{{item.phoneNumber}}</td>\n          <td>{{item.nationalId}}</td>\n\n\n\n\n          <td>{{item.creationDate | date : format : timezone }}</td>\n        </tr>\n      </tbody>\n    </table>\n    <form class=\"pagination-wrapper\">\n\n\n      <div class=\"form-group pages\">\n        <div class=\"has-text-centered\">\n\n          <div *ngIf=\"loading\" class=\"spinner\"></div>\n        </div>\n        <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\"\n          directionLinks=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n          screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n      </div>\n\n\n      <div class=\"form-group options pages\">\n        <div class=\"input-group input-group-sm\">\n          <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n            <option>1</option>\n            <option>5</option>\n            <option>10</option>\n            <option>20</option>\n            <option>50</option>\n\n          </select>\n          <span class=\"input-group-addon addon-right\">Per Page</span>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/users/users.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/users/users.component.ts ***!
  \***********************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _services_shared_Users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/shared/Users.service */ "./src/app/services/shared/Users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(service, spinner, toastr) {
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.searchCeritria = '';
        this.dataListSize = 0;
        /* pagination Info */
        this.pageSize = 5;
        this.pageNumber = 1;
        this.ImgSrc = 'assets/images/picture.png';
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    UsersComponent.prototype.loadData = function (pageSize, pageNumber, searchCeritria) {
        var _this = this;
        this.spinner.show();
        this.service.GetUsers(pageSize, pageNumber, searchCeritria).subscribe(function (res) {
            _this.tableData = res.data;
            _this.dataListSize = res.size;
            console.log(_this.dataListSize);
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error('Cannot Get Data', 'Server Error');
        });
    };
    UsersComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
    };
    UsersComponent.prototype.searchData = function () {
        this.loadData(this.pageSize, this.pageNumber, this.searchCeritria);
        // this.searchCeritria ='';
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/admin/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/admin/components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_Users_service__WEBPACK_IMPORTED_MODULE_0__["UsersServices"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/admin/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pages-top {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 81px;\r\n  background: #465294;\r\n  border: none;\r\n}\r\n\r\n/*----------------------------\r\n    The file upload form\r\n-----------------------------*/\r\n\r\n#upload {\r\n  font-family: \"PT Sans Narrow\", sans-serif;\r\n  background-color: #373a3d;\r\n  background-image: linear-gradient(top, #373a3d, #313437);\r\n  width: 250px;\r\n  padding: 30px;\r\n  border-radius: 3px;\r\n  margin: 200px auto 100px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#drop {\r\n  background-color: #2E3134;\r\n  padding: 40px 50px;\r\n  margin-bottom: 30px;\r\n  border: 20px solid rgba(0, 0, 0, 0);\r\n  border-radius: 3px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  color: #7f858a;\r\n}\r\n\r\n#drop a {\r\n  background-color: #007a96;\r\n  padding: 12px 26px;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  border-radius: 2px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  margin-top: 12px;\r\n  line-height: 1;\r\n}\r\n\r\n#drop a:hover {\r\n  background-color: #0986a3;\r\n}\r\n\r\n#drop input {\r\n  display: none;\r\n}\r\n\r\n#upload ul {\r\n  list-style: none;\r\n  margin: 0 -30px;\r\n  border-top: 1px solid #2b2e31;\r\n  border-bottom: 1px solid #3d4043;\r\n}\r\n\r\n/* #upload ul li{\r\n\r\n    background-color:#333639;\r\n\r\n    background-image:-webkit-linear-gradient(top, #333639, #303335);\r\n    background-image:-moz-linear-gradient(top, #333639, #303335);\r\n    background-image:linear-gradient(top, #333639, #303335);\r\n\r\n    border-top:1px solid #3d4043;\r\n    border-bottom:1px solid #2b2e31;\r\n    padding:15px;\r\n    height: 52px;\r\n\r\n    position: relative;\r\n} */\r\n\r\n#upload ul li input {\r\n  display: none;\r\n}\r\n\r\n#upload ul li p {\r\n  width: 144px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  color: #EEE;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  position: absolute;\r\n  top: 20px;\r\n  left: 100px;\r\n}\r\n\r\n#upload ul li i {\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  color: #7f7f7f;\r\n  display: block;\r\n}\r\n\r\n#upload ul li canvas {\r\n  top: 15px;\r\n  left: 32px;\r\n  position: absolute;\r\n}\r\n\r\n#upload ul li span {\r\n  width: 15px;\r\n  height: 12px;\r\n  position: absolute;\r\n  top: 34px;\r\n  right: 33px;\r\n  cursor: pointer;\r\n}\r\n\r\n#upload ul li.working span {\r\n  height: 16px;\r\n  background-position: 0 -12px;\r\n}\r\n\r\n#upload ul li.error p {\r\n  color: red;\r\n}\r\n\r\n/*----------------------------\r\n    The Demo Footer\r\n-----------------------------*/\r\n\r\nfooter {\r\n  background-color: #080808;\r\n  bottom: 0;\r\n  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.4);\r\n  height: 40px;\r\n  left: 0;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 100000;\r\n}\r\n\r\nfooter h2 {\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  bottom: 0;\r\n  margin-left: -420px;\r\n  padding: 13px 20px 0;\r\n  border: 1px solid #000;\r\n  border-width: 0 1px;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  box-shadow: 0 0 5px #000 inset;\r\n  line-height: 1;\r\n  margin-top: 0;\r\n}\r\n\r\nfooter h2 a {\r\n  color: #EEEEEE !important;\r\n  text-decoration: none !important;\r\n}\r\n\r\nfooter h2 i {\r\n  font-style: normal;\r\n  color: #888;\r\n}\r\n\r\n#tzine-download {\r\n  opacity: 0.9;\r\n  background-color: #257691;\r\n  font-size: 11px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  width: 150px;\r\n  height: 28px;\r\n  line-height: 28px;\r\n  text-decoration: none !important;\r\n  display: inline-block;\r\n  border-radius: 2px;\r\n  color: #fff !important;\r\n  font-weight: bold;\r\n  box-shadow: 0 -1px 2px #1e5e74 inset;\r\n  border-top: 1px solid #26849c;\r\n  text-shadow: 1px 1px 1px #1e6176;\r\n  margin-top: 6px;\r\n}\r\n\r\n#tzine-download:hover {\r\n  opacity: 1;\r\n}\r\n\r\n#tzine-actions {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 500px;\r\n  right: 50%;\r\n  margin-right: -420px;\r\n  text-align: right;\r\n}\r\n\r\n#tzine-actions iframe {\r\n  display: inline-block;\r\n  height: 21px;\r\n  width: 95px;\r\n  position: relative;\r\n  float: left;\r\n  margin-top: 11px;\r\n}\r\n\r\n.avatar-wrap {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 10px;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n  padding: 15px 0;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 240px;\r\n  height: auto;\r\n  min-height: 50px;\r\n}\r\n\r\n.avatar-wrap .avatar {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n}\r\n\r\n.avatar-wrap .avatar img {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.avatar-wrap .user-info-wrap {\r\n  padding: 2px 14px;\r\n  width: 170px;\r\n  height: auto;\r\n}\r\n\r\n.avatar-wrap .user-name,\r\n.avatar-wrap .user-post {\r\n  display: block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.avatar-wrap .user-name {\r\n  color: #fff;\r\n  font-size: 16px;\r\n}\r\n\r\n.avatar-wrap .user-post {\r\n  color: #fca400;\r\n  font-size: 12px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.collapse-menu {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 250px;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n  color: #fff;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\n.collapse-menu:hover {\r\n  color: #fca400;\r\n}\r\n\r\n.collapse-menu .toggle-on {\r\n  -webkit-transform: rotate(0);\r\n          transform: rotate(0);\r\n}\r\n\r\n.collapse-menu .toggle-off {\r\n  -webkit-transform: rotate(-270deg);\r\n          transform: rotate(-270deg);\r\n}\r\n\r\n.search-group {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 170px;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n  width: 340px;\r\n  background: rgba(0, 0, 0, 0.1);\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  border-radius: 2px;\r\n  overflow: hidden;\r\n}\r\n\r\n.search-group .search-input {\r\n  width: 300px;\r\n  height: 40px;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  color: #fff;\r\n  font-size: 12px;\r\n  text-indent: 1.5em;\r\n}\r\n\r\n.search-group .search-btn {\r\n  position: relative;\r\n  top: -1px;\r\n  right: 1px;\r\n  width: 30px;\r\n  height: 30px;\r\n  background: #fca400;\r\n  border: 0;\r\n  border-radius: 50%;\r\n  outline: none;\r\n  line-height: 30px;\r\n  text-align: center;\r\n  color: #fff;\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n  transition: all 0.4s;\r\n}\r\n\r\n.search-group .search-btn:hover {\r\n  background: #ffb730;\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n}\r\n\r\n.search-group .search-input:focus + .search-btn {\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n}\r\n\r\n.msg-tips-wrap {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 60px;\r\n  -webkit-transform: translate(0, -50%);\r\n          transform: translate(0, -50%);\r\n  width: 100px;\r\n  height: 40px;\r\n  color: #fff;\r\n}\r\n\r\n.msg-entrance {\r\n  position: relative;\r\n  width: 50px;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n\r\n.msg-entrance:hover {\r\n  cursor: pointer;\r\n  color: #fca400;\r\n}\r\n\r\n.msg-entrance span.badge {\r\n  padding: 0;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  display: block;\r\n  width: 11px;\r\n  height: 11px;\r\n  background: #fca400;\r\n  border: 2px solid #465294;\r\n  border-radius: 50%;\r\n}\r\n\r\n@media (max-width: 414px) {\r\n  .avatar-wrap {\r\n    width: auto;\r\n  }\r\n  .avatar-wrap .avatar {\r\n    border-radius: 50px;\r\n  }\r\n  .avatar-wrap .user-info-wrap {\r\n    display: none;\r\n  }\r\n\r\n  .collapse-menu {\r\n    left: 100px;\r\n  }\r\n\r\n  .search-group {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.avatar-upload {\r\n  position: relative;\r\n  max-width: 205px;\r\n  margin: 50px auto;\r\n}\r\n\r\n.avatar-upload .avatar-edit {\r\n  position: absolute;\r\n  right: 12px;\r\n  z-index: 1;\r\n  top: 10px;\r\n}\r\n\r\n.avatar-upload .avatar-edit input {\r\n  display: none;\r\n}\r\n\r\n.avatar-upload .avatar-edit input + label {\r\n  display: inline-block;\r\n  width: 34px;\r\n  height: 34px;\r\n  margin-bottom: 0;\r\n  border-radius: 100%;\r\n  background: #FFFFFF;\r\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);\r\n  cursor: pointer;\r\n  font-weight: normal;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.avatar-upload .avatar-edit input + label:hover {\r\n  background: #f1f1f1;\r\n  border-color: #d6d6d6;\r\n}\r\n\r\n.avatar-upload .avatar-edit input + label {\r\n  color: #757575;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 0;\r\n  text-align: center;\r\n  margin: auto;\r\n}\r\n\r\n.avatar-upload .avatar-preview {\r\n  width: 192px;\r\n  height: 192px;\r\n  position: relative;\r\n  border-radius: 100%;\r\n  border: 6px solid #F8F8F8;\r\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.avatar-upload .avatar-preview > img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 100%;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.validationHint {\r\n  margin-top: 6px;\r\n  color: #fa5167;\r\n}"

/***/ }),

/***/ "./src/app/admin/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pages-top\">\n  <div class=\"avatar-wrap\">\n    <div style=\"cursor: pointer;\" (click)=\"openModal(changeImage)\" class=\"avatar\">\n      <img src=\"{{avatarImgSrc}}\" alt=\"avatar\">\n    </div>\n    <div class=\"user-info-wrap\">\n      <span class=\"user-name\" title=\"{{userName}}\">{{userName}}</span>\n      <span style=\"cursor: pointer;\" (click)=\"openChangepassmodal()\" class=\"user-post\" title=\"changePassword\">\n        changePassword</span>\n    </div>\n  </div>\n\n  <div class=\"collapse-menu\" (click)=\"_sidebarToggle()\">\n    <!-- <i class=\"fa fa-navicon fa-fw\" [ngClass]=\"{'toggle-on':sidebarToggle,'toggle-off':!sidebarToggle}\"></i> -->\n    <i class=\"fa fa-dedent fa-fw\" *ngIf=\"sidebarToggle\"></i>\n    <i class=\"fa fa-indent fa-fw\" *ngIf=\"!sidebarToggle\"></i>\n  </div>\n\n\n  <!-- <div class=\"search-group\">\n    <input type=\"text\" class=\"search-input\" placeholder=\"Search  · · ·\">\n    <button class=\"search-btn\">\n      <i class=\"fa fa-search fa-fw\"></i>\n    </button>\n  </div> -->\n\n  <div class=\"msg-tips-wrap\">\n    <div class=\"msg-entrance ring\">\n      <span class=\"fa fa-home fa-fw\"></span>\n      <!-- <span class=\"badge\" *ngIf=\"tip.ring\"></span> -->\n    </div>\n    <div class=\"msg-entrance email\" (click)=\"logOut()\">\n      <!-- <span class=\"fas fa-sign-out fa-fw\" aria-hidden=\"true\"></span> -->\n      <i class=\"fas fa-sign-in-alt\"></i>\n\n    </div>\n  </div>\n\n  \n \n \n<ng-template #changeImage>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">change Image</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"avatar-upload\">\n      <div class=\"avatar-edit\">\n          <input [(ngModel)]=\"imageBlob1\" type='file' id=\"imageUpload\"  (change)=\"previewImg($event)\" accept=\"image/*\" required/>\n          <label for=\"imageUpload\">\n        <i class=\"fa fa-upload\"></i>\n  \n          </label>\n      </div>\n      <div class=\"avatar-preview\">\n          <img id=\"imagePreview\"  [src]=\"imageSrc || 'http://placehold.it/180'\" alt=\"your image\" />\n  \n      </div>\n  </div>\n  </div>\n  \n   \n  \n  \n    <div class=\"modal-footer\">\n      \n  \n  <button type=\"button\" [disabled]=\"! ChangProfileImgBtn\" class=\"btn btn-primary\"  (click)=\"changeProfileImage($event)\">Upload!</button>\n  \n  \n    </div>\n  \n  \n  \n</ng-template>"

/***/ }),

/***/ "./src/app/admin/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_shared_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shared/session.service */ "./src/app/services/shared/session.service.ts");
/* harmony import */ var _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/shared/authention.service */ "./src/app/services/shared/authention.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _modalcomponent_changepic_changepic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modalcomponent/changepic/changepic.component */ "./src/app/admin/modalcomponent/changepic/changepic.component.ts");
/* harmony import */ var _modalcomponent_changepass_changepass_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modalcomponent/changepass/changepass.component */ "./src/app/admin/modalcomponent/changepass/changepass.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, AuthService, builder, fb, http, modalService, spinner, toast) {
        this.router = router;
        this.AuthService = AuthService;
        this.fb = fb;
        this.http = http;
        this.modalService = modalService;
        this.spinner = spinner;
        this.toast = toast;
        this.avatarImgSrc = 'assets/images/avatar.png';
        this.required = 'this feild requried';
        //  passmodal:Modal;
        this.imageSrc = '';
        this.selectedFile = null;
        this.ChangProfileImgBtn = false;
        this.sidebarToggle = true;
        this.tip = { ring: true, email: true };
        this.userName = localStorage.getItem('userName');
        var profileImaeToken = localStorage.getItem('imgToken');
        console.log(profileImaeToken);
        this.getProfileImageByToken(profileImaeToken);
    }
    HeaderComponent.prototype.getProfileImageByToken = function (imageToken) {
        var _this = this;
        this.spinner.show();
        this.AuthService.getProfileImage(imageToken).subscribe(function (image) {
            _this.createImageFromBlob(image);
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            _this.toast.error(err.message, 'Server Error');
        });
    };
    HeaderComponent.prototype.logOut = function () {
        var _this = this;
        this.isVisable = true;
        this.AuthService.logOut().subscribe(function (data) {
            _services_shared_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].resetData();
            _services_shared_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].clearDateFromLocalStorage();
            _this.router.navigate(['home']);
            _this.isVisable = false;
        }),
            function (err) {
                console.log("error with serveer");
            };
    };
    HeaderComponent.prototype.previewImg = function (event) {
        this.selectedFile = event.target.files[0];
        if (this.selectedFile != null) {
            this.readURL(event);
        }
    };
    // change image 
    HeaderComponent.prototype.changeProfileImage = function (event) {
        var _this = this;
        this.spinner.show();
        var uploadData = new FormData();
        uploadData.append('profileimage', this.selectedFile, this.selectedFile.name);
        this.AuthService.UploadProfileImage(uploadData).subscribe(function (data) {
            _this.spinner.hide();
            _this.bsModalRef.hide();
            _services_shared_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].userSessionData.userDetails.picture_url = data.imageToken;
            localStorage.setItem('imgToken', data.imageToken);
            _this.getProfileImageByToken(data.imageToken);
        }, function (err) {
            _this.spinner.hide();
            _this.toast.error(err.message, 'Server Error');
        });
    };
    HeaderComponent.prototype.readURL = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_1 = new FileReader();
            var file = event.target.files[0];
            reader_1.onload = function (e) {
                _this.imageSrc = reader_1.result;
                _this.ChangProfileImgBtn = true;
                if (!_this.imageSrc.startsWith('data:image')) {
                    _this.ChangProfileImgBtn = false;
                    _this.toast.error('Upload A valid Image Please', 'Server Error');
                }
            };
            reader_1.readAsDataURL(file);
        }
    };
    HeaderComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.avatarImgSrc = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    HeaderComponent.prototype.openModal = function (template) {
        this.imageSrc = this.avatarImgSrc;
        this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
    };
    //validate password 
    // open modal picr
    HeaderComponent.prototype.openChangePicmodal = function () {
        this.modalService.show(_modalcomponent_changepic_changepic_component__WEBPACK_IMPORTED_MODULE_9__["ChangepicComponent"]);
    };
    // open modalpass
    HeaderComponent.prototype.openChangepassmodal = function () {
        this.modalService.show(_modalcomponent_changepass_changepass_component__WEBPACK_IMPORTED_MODULE_10__["ChangepassComponent"]);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/admin/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/admin/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_3__["AuthentionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/admin/layout/layout.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/layout/layout.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/admin/layout/layout.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/layout/layout.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pages-wrap\">\n  <!-- <pages-top></pages-top> -->\n  <app-header></app-header>\n  <div class=\"pages-body\">\n\n    <sidebar></sidebar>\n    <!-- <a routerLink=\"advetis\" routerLinkActive=\"active\">Heroes</a> -->\n    <div class=\"pages-content\">\n      <router-outlet></router-outlet>\n\n    </div>\n\n    <!-- <right-config></right-config> -->\n  </div>\n</div>\n\n\n\n\n<!-- <table class=\"table table-striped\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"1\">\n  <thead>\n    <tr>\n      <th style=\"width: 20%\">\n        <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\n      </th>\n      <th style=\"width: 50%\">\n        <mfDefaultSorter by=\"email\">Email</mfDefaultSorter>\n      </th>\n      <th style=\"width: 10%\">\n        <mfDefaultSorter by=\"age\">Age</mfDefaultSorter>\n      </th>\n      <th style=\"width: 20%\">\n        <mfDefaultSorter by=\"city\">City</mfDefaultSorter>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of data\">\n      <td>{{item.name}}</td>\n      <td>{{item.email}}</td>\n      <td class=\"text-right\">{{item.age}}</td>\n      <td>{{item.city | uppercase}}</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan=\"4\">\n        <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n      </td>\n    </tr>\n  </tfoot>\n</table> -->\n"

/***/ }),

/***/ "./src/app/admin/layout/layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/layout/layout.component.ts ***!
  \**************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/admin/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/admin/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/admin/layout/sidebar/sidebar.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/layout/sidebar/sidebar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pages-sider {\n    width: 250px;\n    height: 100%;\n    background: #465294;\n    overflow-x: hidden;\n    border: none;\n  }\n  .pages-sider .sidebar-top-line {\n    display: block;\n    width: 80%;\n    position: relative;\n    left: 10%;\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n  }\n  .side-collapsed {\n    width: 0;\n    /* .avatar-wrap {\n        padding: 15px 4px;\n        border-bottom: 1px solid transparent;\n    }\n    .avatar {\n        width: 40px;\n        height: 40px;\n        border-radius: 50%;\n        margin: 5px 2px;\n    }\n    .user-info-wrap {\n        transform: scale(0, 0);\n    } */\n  }\n  @media (max-width: 1440px) {\n    .pages-sider {\n      width: 210px;\n    }\n  \n    .side-collapsed {\n      width: 0;\n    }\n  }\n  @media (max-width: 970px) {\n    .pages-sider {\n      width: 150px;\n    }\n  \n    .side-collapsed {\n      width: 0;\n    }\n  \n    .menu-item .menu-link .placeholder {\n      width: 0 !important;\n    }\n  }"

/***/ }),

/***/ "./src/app/admin/layout/sidebar/sidebar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/layout/sidebar/sidebar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pages-sider\" [ngClass]=\"{'side-collapsed':!sidebarToggle}\">\n  <span class=\"sidebar-top-line\"></span>\n  <app-menu [menuInfo]=\"menuInfo\"></app-menu>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/layout/sidebar/sidebar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/layout/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/menu.service */ "./src/app/services/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_menuService, _globalService) {
        this._menuService = _menuService;
        this._globalService = _globalService;
        this.menuInfo = [];
        this.sidebarToggle = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuInfo = this._menuService.putSidebarJson();
        this._sidebarToggle();
        this._menuService.selectItem(this.menuInfo); /* ----->初始化判断路由isActive状态  未完成  待优化 */
        this._isSelectItem(this.menuInfo);
    };
    SidebarComponent.prototype._sidebarToggle = function () {
        var _this = this;
        // this._globalService._sidebarToggleState(true);
        /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
          this.sidebarToggle = sidebarToggle;
        }, error => {
          console.log('Error: ' + error);
        }); */
        this._globalService.data$.subscribe(function (data) {
            if (data.ev === 'sidebarToggle') {
                _this.sidebarToggle = data.value;
            }
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    /* 初始化 判断当前路由状态信息 首次加载菜单状态 */
    SidebarComponent.prototype._isSelectItem = function (item) {
        for (var i in item) {
            if (item[i].children) {
                for (var index in item[i].children) {
                    if (item[i].children[index].isActive || item[i].children[index].toggle === 'on') {
                        item[i].toggle = 'on';
                        break;
                    }
                    else {
                        this._isSelectItem(item[i].children);
                    }
                }
            }
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/admin/layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/admin/layout/sidebar/sidebar.component.css")],
            providers: [_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["menuService"]]
        }),
        __metadata("design:paramtypes", [_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["menuService"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/admin/menu/menu.component.css":
/*!***********************************************!*\
  !*** ./src/app/admin/menu/menu.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-wrap {\r\n    padding: 0;\r\n    width: 250px;\r\n    height: auto;\r\n  }\r\n  \r\n  .menu-item {\r\n    margin: 0;\r\n    list-style: none;\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .menu-item .menu-link {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    height: 50px;\r\n    outline: none;\r\n    background: transparent;\r\n    border-left: 3px solid transparent;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .menu-item .menu-link:hover {\r\n    color: #fca400;\r\n    background: rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .menu-item .menu-link .placeholder,\r\n  .menu-item .menu-link .text,\r\n  .menu-item .menu-link .direction {\r\n    display: block;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    font-size: 13px;\r\n  }\r\n  \r\n  .menu-item .menu-link .placeholder {\r\n    width: 47px;\r\n    text-align: center;\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  .menu-item .menu-link .text {\r\n    flex: 1;\r\n  }\r\n  \r\n  .menu-item .menu-link .direction {\r\n    width: 50px;\r\n  }\r\n  \r\n  .menu-item .menu-link.active {\r\n    border-left: 3px solid #fca400;\r\n    color: #fca400;\r\n  }\r\n  \r\n  .item-children .menu-wrap {\r\n    background: rgba(0, 0, 0, 0.05);\r\n  }\r\n  \r\n  @media (max-width: 1440px) {\r\n    .menu-wrap {\r\n      width: 210px;\r\n    }\r\n  }\r\n"

/***/ }),

/***/ "./src/app/admin/menu/menu.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/menu/menu.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"menu-wrap animated fadeIn\">\n\n  <!-- edit by ahmed -->\n  <li class=\"menu-item\">\n    <!-- start service -->\n    <a class=\"menu-link\" (click)=\"toggleServices()\">\n      <div class=\"placeholder\">\n        <i class=\"fa fa-server fa-fw\"></i>\n      </div>\n      <span class=\"text\">Services</span>\n      <span class=\"fa fa-angle-right fa-fw direction\"></span>\n    </a>\n\n    <ul class=\"menu-wrap animated fadeIn\" *ngIf=\"ServiceFlag\">\n      <li class=\"menu-item\">\n\n        <a routerLink=\"charter_accounting\" routerLinkActive=\"active\" class=\"menu-link\">\n          <div class=\"placeholder\">\n            <!--<i class=\"fa fa-folder fa-fw\"></i>-->\n          </div>\n          <span class=\"text\">Charter Accounting</span>\n        </a>\n      </li>\n\n      <li class=\"menu-item\">\n\n        <a routerLink=\"hiringLabors\" routerLinkActive=\"active\" class=\"menu-link\">\n          <div class=\"placeholder\">\n            <!--<i class=\"fa fa-folder fa-fw\"></i>-->\n          </div>\n          <span class=\"text\">Hiring labors</span>\n        </a>\n      </li>\n\n      <li class=\"menu-item\">\n\n        <a routerLink=\"establish_companies\" routerLinkActive=\"active\" class=\"menu-link\">\n          <div class=\"placeholder\">\n            <!--<i class=\"fa fa-folder fa-fw\"></i>-->\n          </div>\n          <span class=\"text\">Establishing companies</span>\n        </a>\n      </li>\n      <li class=\"menu-item\">\n\n        <a routerLink=\"custom_clearance\" routerLinkActive=\"active\" class=\"menu-link\">\n          <div class=\"placeholder\">\n            <!--<i class=\"fa fa-folder fa-fw\"></i>-->\n          </div>\n          <span class=\"text\">Customs Clearance</span>\n        </a>\n      </li>\n      <li class=\"menu-item\">\n\n        <a routerLink=\"employment\" routerLinkActive=\"active\" class=\"menu-link\">\n          <div class=\"placeholder\">\n            <!--<i class=\"fa fa-folder fa-fw\"></i>-->\n          </div>\n          <span class=\"text\">Employment</span>\n        </a>\n      </li>\n      <li class=\"menu-item\">\n\n        <a routerLink=\"feasability_Study\" routerLinkActive=\"active\" class=\"menu-link\">\n          <div class=\"placeholder\">\n            <!--<i class=\"fa fa-folder fa-fw\"></i>-->\n          </div>\n          <span class=\"text\">Feasibility study</span>\n        </a>\n      </li>\n      <li class=\"menu-item\">\n\n        <a routerLink=\"office_services\" routerLinkActive=\"active\" class=\"menu-link\">\n          <div class=\"placeholder\">\n            <!--<i class=\"fa fa-folder fa-fw\"></i>-->\n          </div>\n          <span class=\"text\">Office services</span>\n        </a>\n      </li>\n\n      <li class=\"menu-item\">\n\n        <a routerLink=\"trading_Agencies\" routerLinkActive=\"active\" class=\"menu-link\">\n          <div class=\"placeholder\">\n            <!--<i class=\"fa fa-folder fa-fw\"></i>-->\n          </div>\n          <span class=\"text\">Trading agencies</span>\n        </a>\n      </li>\n      <li class=\"menu-item\">\n\n        <a routerLink=\"certified_Translations\" routerLinkActive=\"active\" class=\"menu-link\">\n          <div class=\"placeholder\">\n            <!--<i class=\"fa fa-folder fa-fw\"></i>-->\n          </div>\n          <span class=\"text\">Certified translation</span>\n        </a>\n      </li>\n      <li class=\"menu-item\">\n\n        <a routerLink=\"shipping\" routerLinkActive=\"active\" class=\"menu-link\">\n          <div class=\"placeholder\">\n            <!--<i class=\"fa fa-folder fa-fw\"></i>-->\n          </div>\n          <span class=\"text\">Shipping</span>\n        </a>\n      </li>\n\n    </ul>\n    <!-- end service -->\n\n    <!-- start company -->\n\n    <a class=\"menu-link\" (click)=\"togglecompany()\">\n      <div class=\"placeholder\">\n        <i class=\"fa fa-building fa-fw\"></i>\n      </div>\n      <span class=\"text\">Company</span>\n      <span class=\"fa fa-angle-right fa-fw direction\"></span>\n    </a>\n\n\n    <ul class=\"menu-wrap animated fadeIn\" *ngIf=\"companyFlag\">\n      <li class=\"menu-item\">\n\n        <a routerLink=\"established_Company\" routerLinkActive=\"active\" class=\"menu-link\">\n          <div class=\"placeholder\">\n            <!--<i class=\"fa fa-folder fa-fw\"></i>-->\n          </div>\n          <span class=\"text\">Established company</span>\n        </a>\n      </li>\n      <li class=\"menu-item\">\n\n        <a routerLink=\"new_Investor\" routerLinkActive=\"active\" class=\"menu-link\">\n          <div class=\"placeholder\">\n            <!--<i class=\"fa fa-folder fa-fw\"></i>-->\n          </div>\n          <span class=\"text\">New investor</span>\n        </a>\n      </li>\n      <li class=\"menu-item\">\n\n        <a routerLink=\"International\" routerLinkActive=\"active\" class=\"menu-link\">\n          <div class=\"placeholder\">\n            <!--<i class=\"fa fa-folder fa-fw\"></i>-->\n          </div>\n          <span class=\"text\">International company</span>\n        </a>\n      </li>\n    </ul>\n    <!-- end company -->\n\n    <a routerLink=\"advetis\" routerLinkActive=\"active\" class=\"menu-link\">\n      <div class=\"placeholder\">\n        <i class=\"fa fa-folder fa-fw\"></i>\n      </div>\n      <span class=\"text\">Advirtesment</span>\n    </a>\n\n    <a routerLink=\"Users\" routerLinkActive=\"active\" class=\"menu-link\">\n      <div class=\"placeholder\">\n        <i class=\"fa fa-users fa-fw\"></i>\n      </div>\n      <span class=\"text\">Users</span>\n    </a>\n  </li>\n\n\n\n\n</ul>\n"

/***/ }),

/***/ "./src/app/admin/menu/menu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation_collapse_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation/collapse-animate */ "./src/app/admin/animation/collapse-animate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(_globalService) {
        this._globalService = _globalService;
        this.ServiceFlag = false;
        this.companyFlag = false;
        console.log("ddddddddddddddd", this.menuInfo);
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.isToggleOn = function (item) {
        item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
    };
    MenuComponent.prototype._selectItem = function (item) {
        //this._globalService._isActived(item);
        console.log(item);
        this._globalService.dataBusChanged('isActived', item);
    };
    MenuComponent.prototype.toggleServices = function () {
        if (this.ServiceFlag) {
            this.ServiceFlag = false;
        }
        else {
            this.ServiceFlag = true;
        }
    };
    MenuComponent.prototype.togglecompany = function () {
        if (this.companyFlag) {
            this.companyFlag = false;
        }
        else {
            this.companyFlag = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "menuInfo", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/admin/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/admin/menu/menu.component.css")],
            animations: [_animation_collapse_animate__WEBPACK_IMPORTED_MODULE_2__["collapse"]]
        }),
        __metadata("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_0__["GlobalService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/admin/menu/menu.ts":
/*!************************************!*\
  !*** ./src/app/admin/menu/menu.ts ***!
  \************************************/
/*! exports provided: MENU_ITEM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEM", function() { return MENU_ITEM; });
var MENU_ITEM = [
    {
        path: 'Service',
        title: 'Services',
        icon: 'paint-brush',
        children: [
            {
                path: 'charter_accounting',
                title: 'Charter Accounting'
            },
            {
                path: 'hiringLabors',
                title: 'Hiring labors'
            },
            {
                path: 'feasability_Study',
                title: 'Feasibility study'
            },
            {
                path: 'establish_companies',
                title: 'Establishing companies'
            },
            {
                path: 'custom_clearance',
                title: 'Customs Clearance'
            },
            {
                path: 'employment',
                title: 'Employment'
            },
            {
                path: 'office_services',
                title: 'Office services'
            },
            {
                path: 'trading_Agencies',
                title: 'Trading agencies'
            },
            {
                path: 'certified_Translations',
                title: 'Certified translation'
            },
            {
                path: 'shipping',
                title: 'Shipping'
            },
        ]
    },
    {
        path: 'Company',
        title: 'Company',
        icon: 'check-square-o',
        children: [
            {
                path: 'established_Company',
                title: 'Established company'
            },
            {
                path: 'new_Investor',
                title: 'New investor'
            },
            {
                path: 'International',
                title: 'International company'
            },
        ]
    },
    {
        path: 'advirtesment',
        title: 'Advirtesment',
        icon: 'diamond'
    },
    {
        path: 'Users',
        title: 'Users ',
        icon: 'user'
    },
];


/***/ }),

/***/ "./src/app/admin/modalcomponent/changepass/changepass.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/modalcomponent/changepass/changepass.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/modalcomponent/changepass/changepass.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/modalcomponent/changepass/changepass.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">change Password</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  \n        <form [formGroup]=\"changePass\">\n\n          <div class=\"form-group\">\n            \n            <label class=\"control-label\">Current Password</label>\n            <input  [(ngModel)]=\"oldpass\" formControlName=\"oldpass\" type=\"password\" class=\"form-control\" placeholder=\"Current Password\">\n  <p class=\"validationHint\" *ngIf=\"hasError('oldpass', 'required')\">{{ required}}</p>\n            \n            \n            <label class=\"control-label\">New Password</label>\n            <input  [(ngModel)]=\"newpass\" formControlName=\"newpass\" type=\"password\" class=\"form-control\" placeholder=\"New Password\">\n            \n  <p class=\"validationHint\" *ngIf=\"hasError('newpass', 'required')\">{{ required}}</p>\n            \n            \n            <label class=\"control-label\">Re-type Password</label>\n            <input formControlName=\"confirmpass\" type=\"password\" class=\"form-control\" placeholder=\"Re-type Password\">\n  \n\n  \n  <p class=\"validationHint\" *ngIf=\"hasError('confirmpass', 'required')\">{{required}}</p>\n\n  <p class=\"validationHint\" *ngIf=\"changePass.errors?.doesMatchPassword\">Password does not match</p>\n\n\n              \n          </div>\n        </form>\n       \n     \n\n\n</div>\n <div style=\"    margin-top: 0px \" class=\"modal-footer\">\n          <button class=\"btn btn-info\" [disabled]=\"!changePass.valid\" (click)=\"changPassword()\">Change Password</button>\n\n          \n      </div>"

/***/ }),

/***/ "./src/app/admin/modalcomponent/changepass/changepass.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/modalcomponent/changepass/changepass.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChangepassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepassComponent", function() { return ChangepassComponent; });
/* harmony import */ var _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/shared/authention.service */ "./src/app/services/shared/authention.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_shared_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared/session.service */ "./src/app/services/shared/session.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChangepassComponent = /** @class */ (function () {
    function ChangepassComponent(bsModalRef, builder, spinner, AuthService, toastr) {
        this.bsModalRef = bsModalRef;
        this.spinner = spinner;
        this.AuthService = AuthService;
        this.toastr = toastr;
        this.required = 'this feild requried';
        this.changePass = builder.group({
            'oldpass': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'newpass': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'confirmpass': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        }, {
            validator: this.validate.bind(this)
        });
    }
    ChangepassComponent.prototype.ngOnInit = function () {
    };
    ChangepassComponent.prototype.validate = function (changePassFormGroup) {
        var password = changePassFormGroup.controls.newpass.value;
        var repeatPassword = changePassFormGroup.controls.confirmpass.value;
        if (repeatPassword.length <= 0) {
            return null;
        }
        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
        return null;
    };
    ChangepassComponent.prototype.changPassword = function () {
        var _this = this;
        this.spinner.show();
        this.AuthService.changePassword(this.changePass.get('oldpass').value, this.changePass.get('newpass').value).subscribe(function (data) {
            _this.spinner.hide();
            var value = localStorage.getItem("token");
            value = data.tkn;
            localStorage.setItem("token", JSON.stringify(value));
            _services_shared_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"].userSessionData.tkn = data.tkn;
            _this.toastr.success('Done Updating Your Password', 'Change Password');
            _this.bsModalRef.hide();
            _this.changePass.reset();
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error(err.message, 'Server Error');
        });
    };
    ChangepassComponent.prototype.hasError = function (field, error) {
        var ctrl = this.changePass.get(field);
        return ctrl.dirty && ctrl.hasError(error);
    };
    ChangepassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-changepass',
            template: __webpack_require__(/*! ./changepass.component.html */ "./src/app/admin/modalcomponent/changepass/changepass.component.html"),
            styles: [__webpack_require__(/*! ./changepass.component.css */ "./src/app/admin/modalcomponent/changepass/changepass.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_0__["AuthentionService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ChangepassComponent);
    return ChangepassComponent;
}());



/***/ }),

/***/ "./src/app/admin/modalcomponent/changepic/changepic.component.css":
/*!************************************************************************!*\
  !*** ./src/app/admin/modalcomponent/changepic/changepic.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar-upload {\r\n    position: relative;\r\n    max-width: 205px;\r\n    margin: 50px auto;\r\n  }\r\n  .avatar-upload .avatar-edit {\r\n    position: absolute;\r\n    right: 12px;\r\n    z-index: 1;\r\n    top: 10px;\r\n  }\r\n  .avatar-upload .avatar-edit input {\r\n    display: none;\r\n  }\r\n  .avatar-upload .avatar-edit input + label {\r\n    display: inline-block;\r\n    width: 34px;\r\n    height: 34px;\r\n    margin-bottom: 0;\r\n    border-radius: 100%;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);\r\n    cursor: pointer;\r\n    font-weight: normal;\r\n    transition: all 0.2s ease-in-out;\r\n  }\r\n  .avatar-upload .avatar-edit input + label:hover {\r\n    background: #f1f1f1;\r\n    border-color: #d6d6d6;\r\n  }\r\n  .avatar-upload .avatar-edit input + label {\r\n  \r\n    color: #757575;\r\n    position: absolute;\r\n    top: 10px;\r\n   \r\n    right: 0;\r\n    text-align: center;\r\n    margin: auto;\r\n  }\r\n  .avatar-upload .avatar-preview {\r\n    width: 192px;\r\n    height: 192px;\r\n    position: relative;\r\n    border-radius: 100%;\r\n    border: 6px solid #F8F8F8;\r\n    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  .avatar-upload .avatar-preview > img {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n  }\r\n  \r\n"

/***/ }),

/***/ "./src/app/admin/modalcomponent/changepic/changepic.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/modalcomponent/changepic/changepic.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/modalcomponent/changepic/changepic.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/modalcomponent/changepic/changepic.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChangepicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepicComponent", function() { return ChangepicComponent; });
/* harmony import */ var _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/shared/authention.service */ "./src/app/services/shared/authention.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangepicComponent = /** @class */ (function () {
    function ChangepicComponent(bsModalRef, AuthService, spinner, toastr) {
        this.bsModalRef = bsModalRef;
        this.AuthService = AuthService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.url = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.imageSrc = '';
        this.selectedFile = null;
        this.ChangProfileImgBtn = false;
    }
    ChangepicComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], ChangepicComponent.prototype, "url", void 0);
    ChangepicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepic',
            template: __webpack_require__(/*! ./changepic.component.html */ "./src/app/admin/modalcomponent/changepic/changepic.component.html"),
            styles: [__webpack_require__(/*! ./changepic.component.css */ "./src/app/admin/modalcomponent/changepic/changepic.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"], _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_0__["AuthentionService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ChangepicComponent);
    return ChangepicComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _services_shared_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/shared/session.service */ "./src/app/services/shared/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/shared/authention.service */ "./src/app/services/shared/authention.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(translate, autherService, router) {
        this.autherService = autherService;
        this.router = router;
        if (localStorage.getItem("lang") == null) {
            localStorage.setItem("lang", "en");
            translate.setDefaultLang('en');
            translate.use('en');
        }
        else {
            var lang = localStorage.getItem("lang");
            translate.setDefaultLang(lang);
            translate.use(lang);
        }
        translate.onLangChange.subscribe(function (event) {
            if (event.lang == "en") {
                localStorage.setItem("lang", "en");
            }
            else {
                localStorage.setItem("lang", "ar");
            }
        });
        var token = localStorage.getItem('token');
        // console.log(true);
        var type = localStorage.getItem('type');
        if (token != null) {
            _services_shared_session_service__WEBPACK_IMPORTED_MODULE_0__["SessionService"].userSessionData.tkn = token;
            if (type == 'Company') {
                _services_shared_session_service__WEBPACK_IMPORTED_MODULE_0__["SessionService"].userSessionData.is_log = true;
                this.router.navigate(['layout/Users']);
                _services_shared_session_service__WEBPACK_IMPORTED_MODULE_0__["SessionService"].userSessionData.userDetails.type = 'Company';
                this.autherService.validateSession().subscribe(function (data) {
                    _services_shared_session_service__WEBPACK_IMPORTED_MODULE_0__["SessionService"].saveInSession(data);
                    _services_shared_session_service__WEBPACK_IMPORTED_MODULE_0__["SessionService"].saveDataInLocalStorage(data);
                    // console.log(data, SessionService.userSessionData);
                    localStorage.setItem("token", data.tkn);
                }, function (error) {
                });
            }
        }
        // console.log(token, SessionService.userSessionData);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_3__["AuthentionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _services_shared_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/shared/session.service */ "./src/app/services/shared/session.service.ts");
/* harmony import */ var _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/shared/authention.service */ "./src/app/services/shared/authention.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/loginmodal/loginmodal.component */ "./src/app/component/loginmodal/loginmodal.component.ts");
/* harmony import */ var _component_forgetmodal_forgetmodal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/forgetmodal/forgetmodal.component */ "./src/app/component/forgetmodal/forgetmodal.component.ts");
/* harmony import */ var _component_resetmodal_resetmodal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/resetmodal/resetmodal.component */ "./src/app/component/resetmodal/resetmodal.component.ts");
/* harmony import */ var _component_signupmodal_signupmodal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/signupmodal/signupmodal.component */ "./src/app/component/signupmodal/signupmodal.component.ts");
/* harmony import */ var _component_verfiymodal_verfiymodal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/verfiymodal/verfiymodal.component */ "./src/app/component/verfiymodal/verfiymodal.component.ts");
/* harmony import */ var _component_upgrademodal_upgrademodal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/upgrademodal/upgrademodal.component */ "./src/app/component/upgrademodal/upgrademodal.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _component_services_charter_charter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/services/charter/charter.component */ "./src/app/component/services/charter/charter.component.ts");
/* harmony import */ var _component_services_hiring_hiring_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/services/hiring/hiring.component */ "./src/app/component/services/hiring/hiring.component.ts");
/* harmony import */ var _component_services_feasibility_feasibility_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/services/feasibility/feasibility.component */ "./src/app/component/services/feasibility/feasibility.component.ts");
/* harmony import */ var _component_services_establish_establish_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/services/establish/establish.component */ "./src/app/component/services/establish/establish.component.ts");
/* harmony import */ var _component_services_customs_customs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/services/customs/customs.component */ "./src/app/component/services/customs/customs.component.ts");
/* harmony import */ var _component_services_office_office_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/services/office/office.component */ "./src/app/component/services/office/office.component.ts");
/* harmony import */ var _component_services_trading_trading_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/services/trading/trading.component */ "./src/app/component/services/trading/trading.component.ts");
/* harmony import */ var _component_services_certified_certified_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/services/certified/certified.component */ "./src/app/component/services/certified/certified.component.ts");
/* harmony import */ var _component_services_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/services/shipping/shipping.component */ "./src/app/component/services/shipping/shipping.component.ts");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/lib/index.js");
/* harmony import */ var _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/shared/settings.service */ "./src/app/services/shared/settings.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _component_confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./component/confirm-password/confirm-password.component */ "./src/app/component/confirm-password/confirm-password.component.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _admin_layout_layout_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/layout/layout.component */ "./src/app/admin/layout/layout.component.ts");
/* harmony import */ var _admin_header_header_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/header/header.component */ "./src/app/admin/header/header.component.ts");
/* harmony import */ var _admin_menu_menu_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin/menu/menu.component */ "./src/app/admin/menu/menu.component.ts");
/* harmony import */ var _admin_components_services_chart_accounting_chart_accounting_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/components/services/chart-accounting/chart-accounting.component */ "./src/app/admin/components/services/chart-accounting/chart-accounting.component.ts");
/* harmony import */ var _admin_components_services_feasibilitystudy_feasibilitystudy_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin/components/services/feasibilitystudy/feasibilitystudy.component */ "./src/app/admin/components/services/feasibilitystudy/feasibilitystudy.component.ts");
/* harmony import */ var _admin_components_services_establishcompany_establishcompany_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/components/services/establishcompany/establishcompany.component */ "./src/app/admin/components/services/establishcompany/establishcompany.component.ts");
/* harmony import */ var _admin_components_services_customerclearance_customerclearance_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/components/services/customerclearance/customerclearance.component */ "./src/app/admin/components/services/customerclearance/customerclearance.component.ts");
/* harmony import */ var _admin_components_services_officeservices_officeservices_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./admin/components/services/officeservices/officeservices.component */ "./src/app/admin/components/services/officeservices/officeservices.component.ts");
/* harmony import */ var _admin_components_services_tradingagencies_tradingagencies_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin/components/services/tradingagencies/tradingagencies.component */ "./src/app/admin/components/services/tradingagencies/tradingagencies.component.ts");
/* harmony import */ var _admin_components_services_certifiedtranslation_certifiedtranslation_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin/components/services/certifiedtranslation/certifiedtranslation.component */ "./src/app/admin/components/services/certifiedtranslation/certifiedtranslation.component.ts");
/* harmony import */ var _admin_components_company_establishedcompany_establishedcompany_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./admin/components/company/establishedcompany/establishedcompany.component */ "./src/app/admin/components/company/establishedcompany/establishedcompany.component.ts");
/* harmony import */ var _admin_components_company_newinvestor_newinvestor_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./admin/components/company/newinvestor/newinvestor.component */ "./src/app/admin/components/company/newinvestor/newinvestor.component.ts");
/* harmony import */ var _admin_components_company_internationalcompany_internationalcompany_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./admin/components/company/internationalcompany/internationalcompany.component */ "./src/app/admin/components/company/internationalcompany/internationalcompany.component.ts");
/* harmony import */ var _admin_components_advirtesment_advirtesment_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./admin/components/advirtesment/advirtesment.component */ "./src/app/admin/components/advirtesment/advirtesment.component.ts");
/* harmony import */ var _admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./admin/components/users/users.component */ "./src/app/admin/components/users/users.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _admin_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./admin/layout/sidebar/sidebar.component */ "./src/app/admin/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _admin_components_services_hiringlaborsadmin_hiringlaborsadmin_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./admin/components/services/hiringlaborsadmin/hiringlaborsadmin.component */ "./src/app/admin/components/services/hiringlaborsadmin/hiringlaborsadmin.component.ts");
/* harmony import */ var _admin_components_services_employmentadmin_employmentadmin_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./admin/components/services/employmentadmin/employmentadmin.component */ "./src/app/admin/components/services/employmentadmin/employmentadmin.component.ts");
/* harmony import */ var _admin_components_services_shippingadmin_shippingadmin_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./admin/components/services/shippingadmin/shippingadmin.component */ "./src/app/admin/components/services/shippingadmin/shippingadmin.component.ts");
/* harmony import */ var _admin_modalcomponent_changepic_changepic_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./admin/modalcomponent/changepic/changepic.component */ "./src/app/admin/modalcomponent/changepic/changepic.component.ts");
/* harmony import */ var _admin_modalcomponent_changepass_changepass_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./admin/modalcomponent/changepass/changepass.component */ "./src/app/admin/modalcomponent/changepass/changepass.component.ts");
/* harmony import */ var _services_shared_Company_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./services/shared/Company.service */ "./src/app/services/shared/Company.service.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _services_shared_Services_service__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./services/shared/Services.service */ "./src/app/services/shared/Services.service.ts");
/* harmony import */ var _component_services_employment_employment_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./component/services/employment/employment.component */ "./src/app/component/services/employment/employment.component.ts");
/* harmony import */ var _component_find_job_find_job_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./component/find-job/find-job.component */ "./src/app/component/find-job/find-job.component.ts");
/* harmony import */ var _component_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./component/job-details/job-details.component */ "./src/app/component/job-details/job-details.component.ts");
/* harmony import */ var _component_search_job_search_job_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./component/search-job/search-job.component */ "./src/app/component/search-job/search-job.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































































function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _admin_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_53__["SidebarComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _component_loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_8__["LoginmodalComponent"],
                _component_forgetmodal_forgetmodal_component__WEBPACK_IMPORTED_MODULE_9__["ForgetmodalComponent"],
                _component_resetmodal_resetmodal_component__WEBPACK_IMPORTED_MODULE_10__["ResetmodalComponent"],
                _component_signupmodal_signupmodal_component__WEBPACK_IMPORTED_MODULE_11__["SignupmodalComponent"],
                _component_verfiymodal_verfiymodal_component__WEBPACK_IMPORTED_MODULE_12__["VerfiymodalComponent"],
                _component_upgrademodal_upgrademodal_component__WEBPACK_IMPORTED_MODULE_13__["UpgrademodalComponent"],
                _component_services_charter_charter_component__WEBPACK_IMPORTED_MODULE_18__["CharterComponent"],
                _component_services_hiring_hiring_component__WEBPACK_IMPORTED_MODULE_19__["HiringComponent"],
                _component_services_feasibility_feasibility_component__WEBPACK_IMPORTED_MODULE_20__["FeasibilityComponent"],
                _component_services_establish_establish_component__WEBPACK_IMPORTED_MODULE_21__["EstablishComponent"],
                _component_services_customs_customs_component__WEBPACK_IMPORTED_MODULE_22__["CustomsComponent"],
                _component_services_employment_employment_component__WEBPACK_IMPORTED_MODULE_63__["EmploymentComponent"],
                _component_services_office_office_component__WEBPACK_IMPORTED_MODULE_23__["OfficeComponent"],
                _component_services_trading_trading_component__WEBPACK_IMPORTED_MODULE_24__["TradingComponent"],
                _component_services_certified_certified_component__WEBPACK_IMPORTED_MODULE_25__["CertifiedComponent"],
                _component_services_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_26__["ShippingComponent"],
                _component_confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmPasswordComponent"],
                _admin_layout_layout_component__WEBPACK_IMPORTED_MODULE_36__["LayoutComponent"],
                _admin_header_header_component__WEBPACK_IMPORTED_MODULE_37__["HeaderComponent"],
                _admin_menu_menu_component__WEBPACK_IMPORTED_MODULE_38__["MenuComponent"],
                _admin_components_services_chart_accounting_chart_accounting_component__WEBPACK_IMPORTED_MODULE_39__["ChartAccountingComponent"],
                _admin_components_services_feasibilitystudy_feasibilitystudy_component__WEBPACK_IMPORTED_MODULE_40__["FeasibilitystudyComponent"],
                _admin_components_services_establishcompany_establishcompany_component__WEBPACK_IMPORTED_MODULE_41__["EstablishcompanyComponent"],
                _admin_components_services_customerclearance_customerclearance_component__WEBPACK_IMPORTED_MODULE_42__["CustomerclearanceComponent"],
                _admin_components_services_officeservices_officeservices_component__WEBPACK_IMPORTED_MODULE_43__["OfficeservicesComponent"],
                _admin_components_services_tradingagencies_tradingagencies_component__WEBPACK_IMPORTED_MODULE_44__["TradingagenciesComponent"],
                _admin_components_services_certifiedtranslation_certifiedtranslation_component__WEBPACK_IMPORTED_MODULE_45__["CertifiedtranslationComponent"],
                _admin_components_company_establishedcompany_establishedcompany_component__WEBPACK_IMPORTED_MODULE_46__["EstablishedcompanyComponent"],
                _admin_components_company_newinvestor_newinvestor_component__WEBPACK_IMPORTED_MODULE_47__["NewinvestorComponent"],
                _admin_components_company_internationalcompany_internationalcompany_component__WEBPACK_IMPORTED_MODULE_48__["InternationalcompanyComponent"],
                _admin_components_advirtesment_advirtesment_component__WEBPACK_IMPORTED_MODULE_49__["AdvirtesmentComponent"],
                _admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_50__["UsersComponent"],
                _admin_components_services_hiringlaborsadmin_hiringlaborsadmin_component__WEBPACK_IMPORTED_MODULE_55__["HiringlaborsadminComponent"],
                _admin_components_services_employmentadmin_employmentadmin_component__WEBPACK_IMPORTED_MODULE_56__["EmploymentadminComponent"],
                _admin_components_services_shippingadmin_shippingadmin_component__WEBPACK_IMPORTED_MODULE_57__["ShippingadminComponent"],
                _admin_modalcomponent_changepic_changepic_component__WEBPACK_IMPORTED_MODULE_58__["ChangepicComponent"],
                _admin_modalcomponent_changepass_changepass_component__WEBPACK_IMPORTED_MODULE_59__["ChangepassComponent"],
                _component_find_job_find_job_component__WEBPACK_IMPORTED_MODULE_64__["FindJobComponent"],
                _component_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_65__["JobDetailsComponent"],
                _component_search_job_search_job_component__WEBPACK_IMPORTED_MODULE_66__["SearchJobComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"],
                ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_30__["DragScrollModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_16__["HttpModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]]
                    }
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_33__["ToastrModule"].forRoot(),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_32__["NgxSpinnerModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_35__["DeviceDetectorModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_54__["BrowserAnimationsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_51__["routing"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_52__["DataTableModule"]
            ],
            providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"], _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_2__["AuthentionService"], _services_shared_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"], _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_31__["SettingsService"], _services_global_service__WEBPACK_IMPORTED_MODULE_0__["GlobalService"], _services_shared_Company_service__WEBPACK_IMPORTED_MODULE_60__["CompanyServices"], _services_authguard_service__WEBPACK_IMPORTED_MODULE_61__["AuthguardService"], _services_shared_Services_service__WEBPACK_IMPORTED_MODULE_62__["ServiceServices"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [
                _component_loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_8__["LoginmodalComponent"],
                _component_forgetmodal_forgetmodal_component__WEBPACK_IMPORTED_MODULE_9__["ForgetmodalComponent"],
                _admin_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_53__["SidebarComponent"],
                _component_resetmodal_resetmodal_component__WEBPACK_IMPORTED_MODULE_10__["ResetmodalComponent"],
                _component_signupmodal_signupmodal_component__WEBPACK_IMPORTED_MODULE_11__["SignupmodalComponent"],
                _component_verfiymodal_verfiymodal_component__WEBPACK_IMPORTED_MODULE_12__["VerfiymodalComponent"],
                _component_upgrademodal_upgrademodal_component__WEBPACK_IMPORTED_MODULE_13__["UpgrademodalComponent"],
                _component_services_charter_charter_component__WEBPACK_IMPORTED_MODULE_18__["CharterComponent"],
                _component_services_hiring_hiring_component__WEBPACK_IMPORTED_MODULE_19__["HiringComponent"],
                _component_services_feasibility_feasibility_component__WEBPACK_IMPORTED_MODULE_20__["FeasibilityComponent"],
                _component_services_establish_establish_component__WEBPACK_IMPORTED_MODULE_21__["EstablishComponent"],
                _component_services_customs_customs_component__WEBPACK_IMPORTED_MODULE_22__["CustomsComponent"],
                _component_services_employment_employment_component__WEBPACK_IMPORTED_MODULE_63__["EmploymentComponent"],
                _component_services_office_office_component__WEBPACK_IMPORTED_MODULE_23__["OfficeComponent"],
                _component_services_trading_trading_component__WEBPACK_IMPORTED_MODULE_24__["TradingComponent"],
                _component_services_certified_certified_component__WEBPACK_IMPORTED_MODULE_25__["CertifiedComponent"],
                _component_services_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_26__["ShippingComponent"],
                _component_confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmPasswordComponent"],
                _admin_modalcomponent_changepic_changepic_component__WEBPACK_IMPORTED_MODULE_58__["ChangepicComponent"],
                _admin_modalcomponent_changepass_changepass_component__WEBPACK_IMPORTED_MODULE_59__["ChangepassComponent"],
            ],
            exports: [
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], _angular_common__WEBPACK_IMPORTED_MODULE_29__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/layout/layout.component */ "./src/app/admin/layout/layout.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/components/users/users.component */ "./src/app/admin/components/users/users.component.ts");
/* harmony import */ var _admin_components_advirtesment_advirtesment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/components/advirtesment/advirtesment.component */ "./src/app/admin/components/advirtesment/advirtesment.component.ts");
/* harmony import */ var _admin_components_services_certifiedtranslation_certifiedtranslation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/components/services/certifiedtranslation/certifiedtranslation.component */ "./src/app/admin/components/services/certifiedtranslation/certifiedtranslation.component.ts");
/* harmony import */ var _admin_components_services_chart_accounting_chart_accounting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/components/services/chart-accounting/chart-accounting.component */ "./src/app/admin/components/services/chart-accounting/chart-accounting.component.ts");
/* harmony import */ var _admin_components_services_customerclearance_customerclearance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/components/services/customerclearance/customerclearance.component */ "./src/app/admin/components/services/customerclearance/customerclearance.component.ts");
/* harmony import */ var _admin_components_services_establishcompany_establishcompany_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/components/services/establishcompany/establishcompany.component */ "./src/app/admin/components/services/establishcompany/establishcompany.component.ts");
/* harmony import */ var _admin_components_services_feasibilitystudy_feasibilitystudy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/components/services/feasibilitystudy/feasibilitystudy.component */ "./src/app/admin/components/services/feasibilitystudy/feasibilitystudy.component.ts");
/* harmony import */ var _admin_components_services_officeservices_officeservices_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/components/services/officeservices/officeservices.component */ "./src/app/admin/components/services/officeservices/officeservices.component.ts");
/* harmony import */ var _admin_components_services_tradingagencies_tradingagencies_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/components/services/tradingagencies/tradingagencies.component */ "./src/app/admin/components/services/tradingagencies/tradingagencies.component.ts");
/* harmony import */ var _admin_components_services_hiringlaborsadmin_hiringlaborsadmin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/components/services/hiringlaborsadmin/hiringlaborsadmin.component */ "./src/app/admin/components/services/hiringlaborsadmin/hiringlaborsadmin.component.ts");
/* harmony import */ var _admin_components_services_shippingadmin_shippingadmin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/components/services/shippingadmin/shippingadmin.component */ "./src/app/admin/components/services/shippingadmin/shippingadmin.component.ts");
/* harmony import */ var _admin_components_services_employmentadmin_employmentadmin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/components/services/employmentadmin/employmentadmin.component */ "./src/app/admin/components/services/employmentadmin/employmentadmin.component.ts");
/* harmony import */ var _admin_components_company_establishedcompany_establishedcompany_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/components/company/establishedcompany/establishedcompany.component */ "./src/app/admin/components/company/establishedcompany/establishedcompany.component.ts");
/* harmony import */ var _admin_components_company_internationalcompany_internationalcompany_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/components/company/internationalcompany/internationalcompany.component */ "./src/app/admin/components/company/internationalcompany/internationalcompany.component.ts");
/* harmony import */ var _admin_components_company_newinvestor_newinvestor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/components/company/newinvestor/newinvestor.component */ "./src/app/admin/components/company/newinvestor/newinvestor.component.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");



















var appRoutes = [
    //Site routes goes here 
    {
        path: 'layout', component: _admin_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_18__["AuthguardService"]],
        children: [
            // service
            { path: 'charter_accounting', component: _admin_components_services_chart_accounting_chart_accounting_component__WEBPACK_IMPORTED_MODULE_6__["ChartAccountingComponent"] },
            { path: 'hiringLabors', component: _admin_components_services_hiringlaborsadmin_hiringlaborsadmin_component__WEBPACK_IMPORTED_MODULE_12__["HiringlaborsadminComponent"] },
            { path: 'feasability_Study', component: _admin_components_services_feasibilitystudy_feasibilitystudy_component__WEBPACK_IMPORTED_MODULE_9__["FeasibilitystudyComponent"] },
            { path: 'establish_companies', component: _admin_components_services_establishcompany_establishcompany_component__WEBPACK_IMPORTED_MODULE_8__["EstablishcompanyComponent"] },
            { path: 'custom_clearance', component: _admin_components_services_customerclearance_customerclearance_component__WEBPACK_IMPORTED_MODULE_7__["CustomerclearanceComponent"] },
            { path: 'employment', component: _admin_components_services_employmentadmin_employmentadmin_component__WEBPACK_IMPORTED_MODULE_14__["EmploymentadminComponent"] },
            { path: 'office_services', component: _admin_components_services_officeservices_officeservices_component__WEBPACK_IMPORTED_MODULE_10__["OfficeservicesComponent"] },
            { path: 'trading_Agencies', component: _admin_components_services_tradingagencies_tradingagencies_component__WEBPACK_IMPORTED_MODULE_11__["TradingagenciesComponent"] },
            { path: 'certified_Translations', component: _admin_components_services_certifiedtranslation_certifiedtranslation_component__WEBPACK_IMPORTED_MODULE_5__["CertifiedtranslationComponent"] },
            { path: 'shipping', component: _admin_components_services_shippingadmin_shippingadmin_component__WEBPACK_IMPORTED_MODULE_13__["ShippingadminComponent"] },
            // company
            { path: 'established_Company', component: _admin_components_company_establishedcompany_establishedcompany_component__WEBPACK_IMPORTED_MODULE_15__["EstablishedcompanyComponent"] },
            { path: 'new_Investor', component: _admin_components_company_newinvestor_newinvestor_component__WEBPACK_IMPORTED_MODULE_17__["NewinvestorComponent"] },
            { path: 'International', component: _admin_components_company_internationalcompany_internationalcompany_component__WEBPACK_IMPORTED_MODULE_16__["InternationalcompanyComponent"] },
            { path: 'Users', component: _admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] },
            { path: 'advetis', component: _admin_components_advirtesment_advirtesment_component__WEBPACK_IMPORTED_MODULE_4__["AdvirtesmentComponent"] },
        ]
    },
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: '', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '**', redirectTo: 'home' },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/component/confirm-password/confirm-password.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/confirm-password/confirm-password.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n    border-color: #dc3545 !important;\r\n  }\r\n  \r\n  .is-valid {\r\n    border-color: #28a745 !important;\r\n  }\r\n  \r\n  .btn {\r\n    z-index: 100;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/component/confirm-password/confirm-password.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/confirm-password/confirm-password.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"comfirmPassForm\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\" id=\"exampleModalLabel\">\n      <div class=\"modal-icon\">\n\n      </div>\n      <h5>Change Password</h5>\n      <hr>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form forget\">\n      <input class=\"text\" type=\"text\" name=\"conf\" placeholder=\"Conformation code \" formControlName=\"concode\"\n        [(ngModel)]=\"conCode\" [ngClass]=\"{ 'is-invalid': comfirmPassForm.get('concode').touched && comfirmPassForm.get('concode').hasError('required') ,\n        'is-valid':comfirmPassForm.get('concode').touched && !comfirmPassForm.get('concode').hasError('required') }\" />\n\n      <input class=\"text\" type=\"password\" name=\"pass\" placeholder=\"Password\" formControlName=\"password\" [(ngModel)]=\"Password\"\n        [ngClass]=\"{ 'is-invalid': comfirmPassForm.get('password').touched && comfirmPassForm.get('password').hasError('required') || (comfirmPassForm.get('password').value != comfirmPassForm.get('confirm').value),\n      'is-valid':comfirmPassForm.get('password').touched && !comfirmPassForm.get('password').hasError('required') && (comfirmPassForm.get('password').value == comfirmPassForm.get('confirm').value) }\" />\n\n      <input class=\"text\" type=\"password\" name=\"conPass\" placeholder=\"Confirm Password\" formControlName=\"confirm\"\n        [(ngModel)]=\"confirmPassword\" [ngClass]=\"{ 'is-invalid': comfirmPassForm.get('confirm').touched && comfirmPassForm.get('confirm').hasError('required') || (comfirmPassForm.get('password').value != comfirmPassForm.get('confirm').value),\n      'is-valid':comfirmPassForm.get('confirm').touched && !comfirmPassForm.get('confirm').hasError('required') && (comfirmPassForm.get('password').value == comfirmPassForm.get('confirm').value) }\" />\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmChangePass()\" [disabled]=\"!comfirmPassForm.valid || (comfirmPassForm.get('password').value != comfirmPassForm.get('confirm').value)\">\n        Change</button>\n\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n\n\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/component/confirm-password/confirm-password.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/confirm-password/confirm-password.component.ts ***!
  \**************************************************************************/
/*! exports provided: ConfirmPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordComponent", function() { return ConfirmPasswordComponent; });
/* harmony import */ var _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/shared/authention.service */ "./src/app/services/shared/authention.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared/session.service */ "./src/app/services/shared/session.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfirmPasswordComponent = /** @class */ (function () {
    function ConfirmPasswordComponent(bsModalRef, autherService, builder, spinner, toastr) {
        this.bsModalRef = bsModalRef;
        this.autherService = autherService;
        this.builder = builder;
        this.spinner = spinner;
        this.toastr = toastr;
        // @ViewChild(ForgetmodalComponent) child;
        this.conCode = null;
        this.Password = null;
        this.confirmPassword = null;
        this.comfirmPassForm = this.builder.group({
            "concode": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            "password": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            'confirm': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // console.log(SessionService.userSessionData.userDetails.userName);
    }
    ConfirmPasswordComponent.prototype.ngOnInit = function () {
        // console.log(this.child.phoneNumber)
    };
    ConfirmPasswordComponent.prototype.confirmChangePass = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        var phone = _services_shared_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"].userSessionData.userDetails.userName;
        this.autherService.requestForgetPassword(this.conCode, phone, this.Password).subscribe(function (data) {
            console.log(data);
            _services_shared_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"].resetData();
            _this.bsModalRef.hide();
            _this.spinner.hide();
            _this.toastr.success('Password Changed', 'Successfully', option);
        }, function (error) {
            _this.toastr.error(error.errorCode, error.message, option);
            _this.spinner.hide();
        });
    };
    ConfirmPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-password',
            template: __webpack_require__(/*! ./confirm-password.component.html */ "./src/app/component/confirm-password/confirm-password.component.html"),
            styles: [__webpack_require__(/*! ./confirm-password.component.css */ "./src/app/component/confirm-password/confirm-password.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"], _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_0__["AuthentionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ConfirmPasswordComponent);
    return ConfirmPasswordComponent;
}());



/***/ }),

/***/ "./src/app/component/find-job/find-job.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/find-job/find-job.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ubber{\r\n  overflow:hidden;\r\n   background-color: #0e1010;\r\n   text-align: center;\r\n}\r\n.ubber .list-inline{\r\nmargin-bottom: 0;\r\n}\r\n.ubber .list-inline li{\r\ndisplay: inline-block;\r\n   color: #fff;\r\n   margin-right: 5%;\r\n   font-size: 14px;\r\n}\r\n.ubber .list-inline li a{\r\ncolor: #fff;\r\n}\r\n.ubber .list-inline .select{\r\n   border: none;\r\n   background-color: transparent;\r\n   color: #c3bdbd;\r\n}\r\n.ubber .list-inline li .profile::after{\r\n   content:'<img src=\"..limages/images.jpg\"/>' ;\r\n        background-color: #009999;position: absolute;\r\n   top: 0;\r\n   right: 0;\r\n   bottom: 0;\r\n   z-index: 3;\r\n   display: block;\r\n   height: 2.25rem;\r\n   padding: .375rem .75rem;\r\n   line-height: 1.5;\r\n   color: #fff;\r\n}\r\n@media (max-width:576px){\r\n.ubber .list-inline li{\r\nfont-size: 10px;\r\n}\r\n}\r\n@media (max-width:992px) and (min-width:768px){\r\n  .ubber .list-inline li{\r\n       margin-right: 2%;\r\n       font-size: 14px;\r\n    } \r\n}\r\n@media (max-width:768px) and (min-width:576px){\r\n  .ubber .list-inline li{\r\n       margin-right: 0;\r\n       font-size: 11px;\r\n    } \r\n}\r\n@media (max-width:576px) and (min-width:300px){\r\n  .ubber .list-inline li{\r\n      margin-right: 13px;\r\n      font-size: 11px;\r\n    } \r\n}\r\n.pageContent {\r\n  margin: 20px auto;\r\n}\r\n.pageContent .searchBar {\r\n  margin: 0;\r\n  background: #f9f9f9;\r\n  border: 1px solid #eee;\r\n  padding: 20px;\r\n}\r\n.pageContent .searchBar form input {\r\n  width: 60%;\r\n  border: 0;\r\n  box-shadow: 0 2px 6px 0px #ddd;\r\n}\r\n.pageContent .searchBar form button {\r\n  background: #099;\r\n  color: #fff;\r\n  height: 38px;\r\n  margin-left: -50px;\r\n  border-radius: 0 5px 5px 0;\r\n}\r\n.pageContent .searchBar .findPeople {\r\n  text-align: right;\r\n}\r\n.pageContent .searchBar .findPeople button {\r\n  color: #ab0005;\r\n  background: transparent;\r\n  border: 1px solid;\r\n  padding: 5px 35px;\r\n  box-shadow: 0 2px 6px 0px #ddd;\r\n}\r\n.pageContent .cardsContent .row {\r\n  margin: 0;\r\n}\r\n.pageContent .cardsContent .card {\r\n  margin: 50px 0 0;\r\n  border: 1px solid #eee;\r\n}\r\n.pageContent .cardsContent .card:hover {\r\n  box-shadow: 0 30px 20px -27px #d8d8d8;\r\n  cursor: pointer;\r\n}\r\n.pageContent .cardsContent .card-title {\r\n  padding: 25px 15px 0;\r\n  margin: 0;\r\n}\r\n.pageContent .cardsContent .card-title img {\r\n  width: 30%;\r\n  float: left;\r\n  margin-right: 15px;\r\n}\r\n.pageContent .cardsContent .card-title .userData {\r\n  margin-top: 13px;\r\n}\r\n.pageContent .cardsContent .card-title .userData h6 {\r\n  color: #000;\r\n  margin-bottom: 5px;\r\n}\r\n.pageContent .cardsContent .card-title .userData p {\r\n  margin-bottom: -3px;\r\n}\r\n.pageContent .cardsContent .card-body {\r\n  padding: 10px 20px;\r\n}\r\n.pageContent .cardsContent .card-links {\r\n  margin: 14px 0 0;\r\n}\r\n.pageContent .cardsContent .card-links .downloadName {\r\n  background: transparent;\r\n  color: #099;\r\n  padding: 0;\r\n  font-size: 14px;\r\n}\r\n.pageContent .cardsContent .card-links .downloadIcon {\r\n  color: #ab0005;\r\n  font-size: 14px;\r\n  float: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/find-job/find-job.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/find-job/find-job.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--upper bar-->\n<div class=\"ubber\">\n  <div class=\"container\">\n    <ul class=\"list-inline\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link sign\" (click)=\"openloginmodal()\">Log In </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link sign\"  (click)=\"openSignup()\">Sign Up</a>\n      </li>\n        <li class=\"nav-item\">\n        <a class=\"nav-link sign\" (click)=\"openSignup()\">Log out </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link sign\" (click)=\"openUpGrade()\">  Upgrate to company</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link sign\" href=\"#\" data-toggle=\"modal\" data-target=\"#\">  Search</a>\n      </li>\n      <li class=\"nav-item\">\n        <select class=\"text select\" name=\"country\" placeholder=\"Language\" value=\"English\">\n        <option>English</option>\n        <option>Arabic</option>\n      </select>\n    </li>      \n          </ul>\n      </div>\n</div>\n<!-- Start content section -->\n<div class=\"pageContent\">\n\n  <!-- Start searchBar -->\n  <div class=\"row searchBar\">\n    <div class=\" col-xs-12 col-sm-8\">\n      <form class=\"form-inline\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search by job name\" aria-label=\"Search\">\n        <button class=\"btn my-2 my-sm-0\" type=\"submit\">\n          <i class=\"fas fa-search\"></i>\n        </button>\n      </form>\n    </div>\n\n    <div class=\" col-xs-12 col-sm-4 findPeople\">\n\n      <button type=\"button\" class=\"btn btn-outline\">\n          <i class=\"fas fa-briefcase\"></i>&nbsp;&nbsp;&nbsp;Find Jobs\n      </button>\n\n    </div>\n  </div>\n  <!-- End searchBar -->\n\n  <!-- Start cards contant -->\n  <div class=\"container cardsContent\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-title\">\n            <img src=\"./assets/images/avater.png\">\n            <div class=\"userData\">\n              <h6>Ahmed Mohammed</h6>\n              <p>Frontend Developer</p>\n              <p>\n                <span>Salary</span>&nbsp; 6000 - 8000 egp</p>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"card-links\">\n              <div class=\"card-link\">\n                <span class=\"downloadName\">Frontend_CV.pdf</span>\n                <span class=\"downloadIcon\">\n                  <i class=\"fas fa-download\"></i>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-title\">\n            <img src=\"./assets/images/avater.png\">\n            <div class=\"userData\">\n              <h6>Ahmed Mohammed</h6>\n              <p>Frontend Developer</p>\n              <p>\n                <span>Salary</span>&nbsp; 6000 - 8000 egp</p>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"card-links\">\n              <div class=\"card-link\">\n                <span class=\"downloadName\">Frontend_CV.pdf</span>\n                <span class=\"downloadIcon\">\n                  <i class=\"fas fa-download\"></i>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-title\">\n            <img src=\"./assets/images/avater.png\">\n            <div class=\"userData\">\n              <h6>Ahmed Mohammed</h6>\n              <p>Frontend Developer</p>\n              <p>\n                <span>Salary</span>&nbsp; 6000 - 8000 egp</p>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"card-links\">\n              <div class=\"card-link\">\n                <span class=\"downloadName\">Frontend_CV.pdf</span>\n                <span class=\"downloadIcon\">\n                  <i class=\"fas fa-download\"></i>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-title\">\n            <img src=\"./assets/images/avater.png\">\n            <div class=\"userData\">\n              <h6>Ahmed Mohammed</h6>\n              <p>Frontend Developer</p>\n              <p>\n                <span>Salary</span>&nbsp; 6000 - 8000 egp</p>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"card-links\">\n              <div class=\"card-link\">\n                <span class=\"downloadName\">Frontend_CV.pdf</span>\n                <span class=\"downloadIcon\">\n                  <i class=\"fas fa-download\"></i>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-title\">\n            <img src=\"./assets/images/avater.png\">\n            <div class=\"userData\">\n              <h6>Ahmed Mohammed</h6>\n              <p>Frontend Developer</p>\n              <p>\n                <span>Salary</span>&nbsp; 6000 - 8000 egp</p>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"card-links\">\n              <div class=\"card-link\">\n                <span class=\"downloadName\">Frontend_CV.pdf</span>\n                <span class=\"downloadIcon\">\n                  <i class=\"fas fa-download\"></i>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-title\">\n            <img src=\"./assets/images/avater.png\">\n            <div class=\"userData\">\n              <h6>Ahmed Mohammed</h6>\n              <p>Frontend Developer</p>\n              <p>\n                <span>Salary</span>&nbsp; 6000 - 8000 egp</p>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"card-links\">\n              <div class=\"card-link\">\n                <span class=\"downloadName\">Frontend_CV.pdf</span>\n                <span class=\"downloadIcon\">\n                  <i class=\"fas fa-download\"></i>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <!-- End cards containt -->\n\n</div>\n<!-- End content section -->\n"

/***/ }),

/***/ "./src/app/component/find-job/find-job.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/find-job/find-job.component.ts ***!
  \**********************************************************/
/*! exports provided: FindJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindJobComponent", function() { return FindJobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FindJobComponent = /** @class */ (function () {
    function FindJobComponent() {
    }
    FindJobComponent.prototype.ngOnInit = function () {
    };
    FindJobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-find-job',
            template: __webpack_require__(/*! ./find-job.component.html */ "./src/app/component/find-job/find-job.component.html"),
            styles: [__webpack_require__(/*! ./find-job.component.css */ "./src/app/component/find-job/find-job.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FindJobComponent);
    return FindJobComponent;
}());



/***/ }),

/***/ "./src/app/component/forgetmodal/forgetmodal.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/forgetmodal/forgetmodal.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n  border-color: #dc3545 !important;\r\n}\r\n\r\n.is-valid {\r\n  border-color: #28a745 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/forgetmodal/forgetmodal.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/forgetmodal/forgetmodal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"forgetForm\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\" id=\"exampleModalLabel\">\n      <div class=\"modal-icon\">\n\n      </div>\n      <h5>Forget password</h5>\n      <hr>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form forget\">\n      <input class=\"text\" type=\"text\" name=\"phone\" placeholder=\"User name\" formControlName=\"phonen\" [(ngModel)]=\"phoneNumber\"\n        [ngClass]=\"{ 'is-invalid': forgetForm.get('phonen').touched && forgetForm.get('phonen').hasError('required'),\n        'is-valid':forgetForm.get('phonen').touched && !forgetForm.get('phonen').hasError('required') }\" />\n\n      <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!forgetForm.valid\" (click)=\"openforgetPasswordConfirmmodal()\">\n        Send</button>\n\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n\n\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/component/forgetmodal/forgetmodal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/forgetmodal/forgetmodal.component.ts ***!
  \****************************************************************/
/*! exports provided: ForgetmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetmodalComponent", function() { return ForgetmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm-password/confirm-password.component */ "./src/app/component/confirm-password/confirm-password.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared/authention.service */ "./src/app/services/shared/authention.service.ts");
/* harmony import */ var _services_shared_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared/session.service */ "./src/app/services/shared/session.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ForgetmodalComponent = /** @class */ (function () {
    function ForgetmodalComponent(bsModalRef, modalService, autherService, builder, spinner, toastr) {
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.autherService = autherService;
        this.builder = builder;
        this.spinner = spinner;
        this.toastr = toastr;
        this.phoneNumber = null;
        this.forgetForm = this.builder.group({
            "phonen": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
    }
    ForgetmodalComponent.prototype.ngOnInit = function () {
    };
    ForgetmodalComponent.prototype.openforgetPasswordConfirmmodal = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        this.autherService.forgetPassword(this.phoneNumber).subscribe(function (data) {
            _services_shared_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"].userSessionData.userDetails.userName = _this.phoneNumber;
            // console.log(SessionService.userSessionData.userDetails.userName);
            _this.bsModalRef.hide();
            _this.bsModalRef = _this.modalService.show(_confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmPasswordComponent"], { class: 'modal-sm' });
            _this.spinner.hide();
        }, function (error) {
            _this.toastr.error(error.errorCode, error.message, option);
            _this.spinner.hide();
        });
    };
    ForgetmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgetmodal',
            template: __webpack_require__(/*! ./forgetmodal.component.html */ "./src/app/component/forgetmodal/forgetmodal.component.html"),
            styles: [__webpack_require__(/*! ./forgetmodal.component.css */ "./src/app/component/forgetmodal/forgetmodal.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_4__["AuthentionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], ForgetmodalComponent);
    return ForgetmodalComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ubber {\r\n  overflow: hidden;\r\n  background-color: #0e1010;\r\n  text-align: center;\r\n}\r\n\r\n.ubber .list-inline {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.ubber .list-inline li {\r\n  display: inline-block;\r\n  color: #fff;\r\n  margin-right: 5%;\r\n  font-size: 14px;\r\n}\r\n\r\n.ubber .list-inline li a {\r\n  color: #fff;\r\n}\r\n\r\n.ubber .list-inline .select {\r\n  border: none;\r\n  background-color: transparent;\r\n  color: #c3bdbd;\r\n}\r\n\r\n.ubber .list-inline li .profile::after {\r\n  content: '<img src=\"..limages/images.jpg\"/>';\r\n  background-color: #009999;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 3;\r\n  display: block;\r\n  height: 2.25rem;\r\n  padding: .375rem .75rem;\r\n  line-height: 1.5;\r\n  color: #fff;\r\n}\r\n\r\n@media (max-width:576px) {\r\n  .ubber .list-inline li {\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\n@media (max-width:992px) and (min-width:768px) {\r\n  .ubber .list-inline li {\r\n    margin-right: 2%;\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media (max-width:768px) and (min-width:576px) {\r\n  .ubber .list-inline li {\r\n    margin-right: 0;\r\n    font-size: 11px;\r\n  }\r\n}\r\n\r\n@media (max-width:576px) and (min-width:300px) {\r\n  .ubber .list-inline li {\r\n    margin-right: 13px;\r\n    font-size: 11px;\r\n  }\r\n}\r\n\r\n.navbar .dropdown .btn {\r\n  width: 56px;\r\n  height: 38px;\r\n  border: none;\r\n  border-radius: 50%;\r\n  background-color: transparent;\r\n\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  margin-right: 104px;\r\n  z-index: 9999;\r\n}\r\n\r\n.navbar .dropdown-menu {\r\n  text-align: center;\r\n  width: 95%;\r\n}\r\n\r\n.navbar .dropdown p {\r\n  font-size: 15px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.navbar .user-image {\r\n  position: relative;\r\n}\r\n\r\n.navbar .user-image img {\r\n  width: 48%;\r\n  height: 33%;\r\n  border: 1px solid #d4d4d4;\r\n  border-radius: 50%;\r\n}\r\n\r\n.navbar .dropdown .user-image .over {\r\n  position: absolute;\r\n  top: 51px;\r\n  left: 45px;\r\n  width: 69px;\r\n  height: 25px;\r\n  font-size: 11px;\r\n  background-color: #099;\r\n  border-bottom-left-radius: 30px;\r\n  border-bottom-right-radius: 30px;\r\n\r\n}\r\n\r\n.navbar .dropdown .user-image .over a {\r\n  color: #fff;\r\n}\r\n\r\n.navbar .navbar-brand img {\r\n  width: 32%;\r\n  margin-top: 26px;\r\n}\r\n\r\n.navbar .dropdown .dropdown-item {\r\n  font-size: 11px;\r\n  text-decoration: underline;\r\n}\r\n\r\n@media (max-width:991px) {\r\n\r\n  .navbar .navbar-nav {\r\n    width: 125px;\r\n    /* margin-top: -4px; */\r\n    font-size: 7px;\r\n    background-color: #fff;\r\n    padding-top: 18px;\r\n    height: 216px;\r\n    padding-left: 4px;\r\n    border-radius: 7px;\r\n  }\r\n\r\n  .dropdown {\r\n    position: relative;\r\n    margin-right: 0px;\r\n  }\r\n\r\n  .navbar .navbar-nav .nav-item .nav-link {\r\n    color: #666 !important;\r\n    margin-top: -11px;\r\n    padding: 11px 9px 8px 10px;\r\n    width: 90%;\r\n  }\r\n\r\n  .navbar .navbar-nav .select {\r\n    color: #666;\r\n    padding: 0 9px 8px 10px;\r\n  }\r\n\r\n  .navbar .dropdown .btn {\r\n    width: 53%;\r\n    height: 56%;\r\n    margin: auto;\r\n    margin-left: 28px;\r\n  }\r\n}\r\n\r\n/* @media (max-width: 768px) and (min-width:576px) {\r\n    .navbar .navbar-toggler {\r\n      margin-left: 451px;\r\n    }\r\n  \r\n    .navbar .navbar-brand img {\r\n      width: 27%;\r\n      margin-top: 60px;\r\n    }\r\n  }\r\n  @media (max-width: 576px) and (min-width:400px) {\r\n    .navbar .navbar-toggler {\r\n        margin-left: 400px;\r\n    margin-top: 15px;\r\n    }\r\n  }\r\n  @media (max-width: 500px) and (min-width:400px) {\r\n    .navbar .navbar-toggler {\r\n        margin-left: 309px;\r\n  }\r\n  }\r\n  @media (max-width: 401px) and (min-width:363px) {\r\n    .navbar .navbar-toggler {\r\n      margin-left: 267px;\r\n      margin-top: 14px;\r\n        \r\n    }\r\n}\r\n@media (max-width: 576px) and (min-width:350px) {\r\n  .navbar{\r\n    margin-top:5px;\r\n}\r\n\r\n.navbar .navbar-brand img {\r\n  width: 36%;\r\n  margin-top: 75px;\r\n\r\n}\r\n} */\r\n\r\n@media(max-width:786px) and (min-width:576px) {\r\n  .navbar .navbar-brand img {\r\n    width: 28%;\r\n    margin-top: 45px;\r\n  }\r\n}\r\n\r\n@media(max-width:576px) and (min-width:400px) {\r\n  .navbar .navbar-brand img {\r\n    width: 30%;\r\n    margin-top: 55px;\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) and (min-width:274px) {\r\n\r\n  .navbar .dropdown .btn {\r\n    width: 46%;\r\n    height: 40px;\r\n  }\r\n\r\n  .navbar .dropdown .btn {\r\n    width: 47%;\r\n\r\n    height: 35%;\r\n  }\r\n}\r\n\r\n@media(max-width:401px) and (min-width:270px) {\r\n  .navbar {\r\n    margin-top: 33px;\r\n  }\r\n\r\n  .navbar .navbar-brand img {\r\n    width: 51%;\r\n    margin-top: 40px;\r\n  }\r\n}\r\n\r\n/* @media (max-width: 430px) and (min-width:200px) {\r\n    .navbar{\r\n        margin-top:10px;\r\n    }\r\n .navbar .navbar-brand img {\r\n  width: 45%;\r\n  margin-top: 62px;\r\n }\r\n  }\r\n  @media (max-width: 363px) and (min-width:270px) {\r\n    .navbar .navbar-toggler {\r\n      margin-left: 177px;\r\n      margin-top: 30px;\r\n        \r\n    }\r\n}\r\n  @media (max-width: 350px) and (min-width:270px) {\r\n    .navbar{\r\n      margin-top:5px;\r\n  }\r\n  \r\n  .navbar .navbar-brand img {\r\n    width: 59%;\r\n    margin-top: 73px;\r\n}\r\n  } */\r\n\r\n/*HEADER*/\r\n\r\n.header h4 {\r\n  font-size: 287px;\r\n  position: absolute;\r\n  top: -132px;\r\n  font-weight: 900;\r\n  left: -13px;\r\n  z-index: 0;\r\n  color: #fff;\r\n  opacity: 0.17;\r\n  -webkit-animation-duration: 0;\r\n  animation-duration: 0;\r\n  -webkit-animation-delay: .5s;\r\n  animation-delay: 0;\r\n\r\n}\r\n\r\n.header .info button {\r\n  background-color: #ab0005;\r\n  color: #fff;\r\n  font-weight: 500;\r\n  display: inline-block;\r\n  border: none;\r\n  height: 50px;\r\n  min-width: 167px;\r\n  line-height: 46px;\r\n  text-align: center;\r\n  border-radius: 24px 24px 24px 0px;\r\n  margin-left: 8px;\r\n  CURSOR: POINTER;\r\n  margin-top: -19px;\r\n}\r\n\r\n.header .info button a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\n.header .info button:hover {\r\n  background-color: #fff;\r\n  color: #ab0005;\r\n  transition-duration: 800ms;\r\n}\r\n\r\n.header .info button:hover a {\r\n  color: #ab0005;\r\n}\r\n\r\n@media(max-width:991px) and (min-width:786px) {\r\n  .header[_ngcontent-c1] h4[_ngcontent-c1] {\r\n    font-size: 257px;\r\n    position: absolute;\r\n    top: -111px;\r\n    font-weight: 900;\r\n    left: -11px;\r\n    z-index: 0;\r\n    color: #fff;\r\n    opacity: 0.17;\r\n    -webkit-animation-duration: 0;\r\n    animation-duration: 0;\r\n    -webkit-animation-delay: .5s;\r\n    animation-delay: 0;\r\n  }\r\n}\r\n\r\n@media(max-width:786px) and (min-width:576px) {\r\n  .header .info button {\r\n    height: 41px;\r\n    min-width: 129px;\r\n    line-height: 41px;\r\n  }\r\n\r\n  .header h4 {\r\n    font-size: 207px;\r\n    position: absolute;\r\n    top: -78px;\r\n    font-weight: 900;\r\n    left: -8px;\r\n    z-index: 0;\r\n    color: #fff;\r\n    opacity: 0.17;\r\n  }\r\n}\r\n\r\n@media(max-width:576px) and (min-width:270px) {\r\n  .app-download-btn:first-child {\r\n    margin-right: 0;\r\n  }\r\n\r\n  .app-download-area {\r\n    display: block;\r\n  }\r\n\r\n  .app-download-btn {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .header h4 {\r\n    font-size: 207px;\r\n    position: absolute;\r\n    top: -32px;\r\n    font-weight: 900;\r\n    left: 21px;\r\n    z-index: 0;\r\n    color: #fff;\r\n    opacity: 0.17;\r\n  }\r\n\r\n  .header .info button {\r\n    height: 41px;\r\n    min-width: 129px;\r\n    line-height: 41px;\r\n    margin-top: -2px;\r\n    margin-bottom: 48px;\r\n\r\n    margin-left: -4px;\r\n  }\r\n}\r\n\r\n/*END HEADER*/\r\n\r\n/*start footer*/\r\n\r\n/* .footer {\r\n  background-color: #3b4444;\r\n  color: #fff;\r\n  padding: 18px;\r\n  padding-bottom: 0px; */\r\n\r\n/* .footer .contact {\r\n  margin: auto;\r\n\r\n}\r\n\r\n.footer p {\r\n  display: inline-block;\r\n  margin-left: 23px;\r\n  overflow: hidden;\r\n}\r\n\r\n.footer .contact p span {\r\n  color: #d0cdcd;\r\n  font-size: 13px;\r\n}\r\n\r\n.footer .social {\r\n  margin-left: 56px;\r\n  display: inline-block;\r\n  float: right;\r\n}\r\n\r\n.footer svg {\r\n  margin-right: 4px;\r\n  color: #179e9c;\r\n  font-size: 16px;\r\n  font-size: 16px;\r\n    margin-right: 6px;\r\n}\r\n\r\n.footer .social-icon {\r\n  \r\n  color: #888787;\r\n    font-size: 23px;\r\n    margin-right: 15px;\r\n}\r\n\r\n\r\n.footer .social-icon:hover {\r\n  color: #099;\r\n}\r\n.footer .contact .fas {\r\n  font-family: 'Font Awesome 5 Free';\r\n  font-weight: 900;\r\n  font-size: 16px;\r\n  margin-right: 7px;\r\n}\r\n@media (max-width: 992px) {\r\n  .footer .contact p {\r\n    margin-left: 9px;\r\n  }\r\n}\r\n  @media (max-width: 768px) {\r\n    .footer {\r\n      padding-bottom: 33px;\r\n    }\r\n\r\n    .footer .contact p {\r\n\r\n      display: block;\r\n      margin-top: -10px;\r\n    }\r\n\r\n    .footer .social {\r\n      margin-left: 4px;\r\n    }\r\n\r\n  }\r\n\r\n  @media (max-width: 576px) {\r\n    .footer {\r\n      padding-bottom: 33px;\r\n    }\r\n\r\n    .footer .contact p {\r\n      margin-top: -14px;\r\n\r\n    }\r\n\r\n    .footer .social {\r\n      float: none;\r\n    }\r\n\r\n    .footer .social-icon {\r\n      font-size: 20px;\r\n      margin-top: -11px;\r\n    }\r\n  }\r\n   */\r\n\r\n/* ----\r\n 4.0 Special Area CSS\r\n--- */\r\n\r\n.single-icon>i {\r\n  font-size: 40px;\r\n  color: #076d6d;\r\n}\r\n\r\n.single-special>h4 {\r\n  font-size: 22px;\r\n  color: #5b32b4;\r\n}\r\n\r\n.single-icon {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.single-special>h4 {\r\n  font-size: 18px;\r\n  color: #ab0005;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.single-special {\r\n  border: 1px solid #e6e6e6;\r\n  padding: 40px;\r\n  border-radius: 40px 40px 40px 0px;\r\n  transition-duration: 800ms;\r\n  margin-bottom: 30px;\r\n  /* background-color: hsl(0, 0%, 96%); */\r\n}\r\n\r\n/* .special-area{\r\n \r\n} */\r\n\r\n/* .fa-globe-americas:before {\r\n  content: \"\\f0ac\";\r\n} */\r\n\r\n.special-area .section-heading h2 {\r\n  color: #ab0005;\r\n  margin-top: 50px;\r\n}\r\n\r\n.special-area .section-heading h2 span {\r\n  color: #000;\r\n}\r\n\r\n.special-area .section-heading hr {\r\n  color: #099;\r\n  width: 13%;\r\n  height: 0px;\r\n  margin-top: 40px;\r\n  background-color: #099;\r\n  /* margin-bottom: 46px; */\r\n  margin: 11px auto;\r\n}\r\n\r\n.special-area .section-heading p {\r\n  width: 72%;\r\n  margin: 25px auto;\r\n  margin-top: 9px;\r\n  margin-bottom: 45px;\r\n\r\n}\r\n\r\n.special_description_content>h2 {\r\n  color: #ab0004;\r\n  font-size: 27px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.special_description_content h2 span {\r\n  color: #000;\r\n}\r\n\r\n.special_description_content hr {\r\n  color: #099;\r\n  width: 32%;\r\n  height: 0px;\r\n  margin-top: -15px;\r\n  background-color: #099;\r\n  margin-bottom: 41px;\r\n  margin-left: 4px;\r\n\r\n}\r\n\r\n.single-special:hover {\r\n  box-shadow: 0 10px 90px rgba(0, 0, 0, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.single-special p {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.app-download-area {\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: -o-flex;\r\n  display: flex;\r\n  flex-basis: 1;\r\n  margin-top: 50px;\r\n}\r\n\r\n.app-download-btn a {\r\n  border: 1px solid #ddd;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 15px 30px;\r\n  border-radius: 30px 30px 30px 0;\r\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\r\n  justify-content: center;\r\n}\r\n\r\n.app-download-btn.active a,\r\n.app-download-btn a:hover {\r\n  border-color: transparent;\r\n  background-color: #ab0005;\r\n  text-decoration: none;\r\n}\r\n\r\n.app-download-btn a i {\r\n  color: #47425d;\r\n  font-size: 24px;\r\n  margin-right: 15px;\r\n  transition-duration: 500ms;\r\n}\r\n\r\n.app-download-btn a p {\r\n  font-size: 16px;\r\n  line-height: 1;\r\n  transition-duration: 500ms;\r\n}\r\n\r\n.app-download-btn a p span {\r\n  font-size: 12px;\r\n  display: block;\r\n}\r\n\r\n.app-download-btn:first-child {\r\n  margin-right: 20px;\r\n}\r\n\r\n.app-download-btn a:hover i,\r\n.app-download-btn.active a i,\r\n.app-download-btn.active a p,\r\n.app-download-btn a:hover p {\r\n  color: #fff;\r\n}\r\n\r\n.special_description_img {\r\n  width: 96%;\r\n  height: 100%;\r\n}\r\n\r\n.special_description_area {\r\n  padding: 50px 0;\r\n}\r\n\r\n.special_description_img img {\r\n  width: 99%;\r\n  height: 108%;\r\n  margin-left: -15px;\r\n  margin-top: -23px;\r\n}\r\n\r\n.special-area .section-heading hr {\r\n  color: #099;\r\n  width: 13%;\r\n  height: 0px;\r\n  /* border: 1px solid #099; */\r\n  margin-top: 18px;\r\n  background-color: #099;\r\n  margin-bottom: 27px;\r\n\r\n}\r\n\r\n@media(max-width:576px) and (min-width:270px) {\r\n  .special-area .section-heading p {\r\n    font-size: 7px;\r\n    font-weight: 400;\r\n    margin-top: -16px;\r\n    line-height: 15px;\r\n  }\r\n\r\n  .app-download-btn a {\r\n    border: 1px solid #ddd;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 15px 11px;\r\n  }\r\n\r\n  .special_description_img img {\r\n\r\n    margin-left: -7px;\r\n\r\n  }\r\n\r\n  .special-area[_ngcontent-c1] .section-heading[_ngcontent-c1] h2[_ngcontent-c1] {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .special_description_content[_ngcontent-c1]>h2[_ngcontent-c1] {\r\n    font-size: 19px;\r\n  }\r\n\r\n  .single-special[_ngcontent-c1] p[_ngcontent-c1] {\r\n    font-size: 12px;\r\n  }\r\n\r\n  .special_description_content p {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n/* --------------------------\r\n:: 8.0 Screenshots Area CSS\r\n-------------------------- */\r\n\r\n/* .app_screenshots_slides {\r\n  padding: 0 6%;\r\n}\r\n\r\n.app_screenshots_slides .single-shot {\r\n  opacity: 0.7;\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)\";\r\n  -webkit-transform: scale(0.85);\r\n  -ms-transform: scale(0.85);\r\n  transform: scale(0.85)\r\n}\r\n\r\n.app_screenshots_slides .center .single-shot {\r\n  opacity: 1;\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\r\n  -webkit-transform: scale(1);\r\n  -ms-transform: scale(1);\r\n  transform: scale(1)\r\n}\r\n\r\n.app-screenshots-area .owl-dot {\r\n  height: 11px;\r\n  width: 11px;\r\n  border: 2px solid #a49fba;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin: 0 6px;\r\n  margin-top: 50px;\r\n}\r\n\r\n.app-screenshots-area .owl-dot.active {\r\n  background-color: #fb397d;\r\n  border: transparent;\r\n}\r\n\r\n.app-screenshots-area .owl-dots {\r\n  height: 100%;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n/*slider*/\r\n\r\n/* Slider\r\n/* Slider */\r\n\r\n/* .slick-slider {\r\n  position: relative;\r\n\r\n  display: block;\r\n  box-sizing: border-box;\r\n\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n\r\n  -webkit-touch-callout: none;\r\n  -khtml-user-select: none;\r\n  -ms-touch-action: pan-y;\r\n  touch-action: pan-y;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.slick-list {\r\n  position: relative;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.slick-list:focus {\r\n  outline: none;\r\n}\r\n\r\n.slick-list.dragging {\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\n.slick-slider .slick-track,\r\n.slick-slider .slick-list {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  -moz-transform: translate3d(0, 0, 0);\r\n  -ms-transform: translate3d(0, 0, 0);\r\n  -o-transform: translate3d(0, 0, 0);\r\n  transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.slick-track {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.slick-track:before,\r\n.slick-track:after {\r\n  display: table;\r\n\r\n  content: '';\r\n}\r\n\r\n.slick-track:after {\r\n  clear: both;\r\n}\r\n\r\n.slick-loading .slick-track {\r\n  visibility: hidden;\r\n}\r\n\r\n.slick-slide {\r\n  display: none;\r\n  float: left;\r\n\r\n  height: 100%;\r\n  min-height: 1px;\r\n}\r\n\r\n[dir='rtl'] .slick-slide {\r\n  float: right;\r\n}\r\n\r\n.slick-slide img {\r\n  display: block;\r\n}\r\n\r\n.slick-slide.slick-loading img {\r\n  display: none;\r\n}\r\n\r\n.slick-slide.dragging img {\r\n  pointer-events: none;\r\n}\r\n\r\n.slick-initialized .slick-slide {\r\n  display: block;\r\n}\r\n\r\n.slick-loading .slick-slide {\r\n  visibility: hidden;\r\n}\r\n\r\n.slick-vertical .slick-slide {\r\n  display: block;\r\n\r\n  height: auto;\r\n\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.slick-arrow.slick-hidden {\r\n  display: none;\r\n} */\r\n\r\n/* --------------------------\r\n:: 14.0 Footer Area CSS Start\r\n-------------------------- */\r\n\r\n.footer {\r\n  z-index: -101;\r\n  position: fixed;\r\n  bottom: 0px;\r\n  width: 100%;\r\n}\r\n\r\n.footer-text>h2 {\r\n  color: #ab0005;\r\n  font-size: 48px;\r\n  font-weight: 700;\r\n}\r\n\r\n.footer-social-icon>a>i {\r\n  background: #169c9b;\r\n  font-size: 14px;\r\n  color: #ffffff;\r\n  height: 34px;\r\n  width: 33px;\r\n  line-height: 35px;\r\n  font-weight: 500;\r\n  border-radius: 10px 10px 10px 0px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.footer-social-icon>a>i:hover {\r\n  background: #ab0005;\r\n  color: #fff;\r\n  transition-duration: 500ms;\r\n}\r\n\r\n.social-icon {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.footer-text {\r\n  margin-bottom: 15px;\r\n  margin-top: 34px;\r\n}\r\n\r\n.footer-menu ul li {\r\n  display: inline-block;\r\n}\r\n\r\n.footer-menu ul li a {\r\n  border-right: 2px solid #726a84;\r\n  display: block;\r\n  padding: 0 7.5px;\r\n  color: #726a84;\r\n}\r\n\r\n.footer-menu ul li span {\r\n  font-size: 14px;\r\n}\r\n\r\n.footer-menu ul li a:hover {\r\n  text-decoration: none;\r\n  cursor: default;\r\n}\r\n\r\n.footer-social-icon>a .active {\r\n  background: #fb397d;\r\n}\r\n\r\n.footer-menu ul li:last-child a {\r\n  border-right: 0 solid #ddd;\r\n}\r\n\r\n.footer-social-icon {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.footer-menu {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.copyright-text>p {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.footer-menu i {\r\n  color: #6d6a6a;\r\n  font-size: 15px;\r\n  margin-right: 6px;\r\n}\r\n\r\n@media(max-width:576px) {\r\n  .footer-menu[_ngcontent-c1] ul[_ngcontent-c1] li[_ngcontent-c1] span[_ngcontent-c1] {\r\n    font-size: 11px;\r\n  }\r\n\r\n  .copyright-text[_ngcontent-c1]>p[_ngcontent-c1] {\r\n    margin-bottom: 0;\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\n/* slider*/\r\n\r\n.adv {\r\n  margin: 53px 0;\r\n}\r\n\r\n.adv .adv-title {\r\n  text-align: center;\r\n}\r\n\r\n.adv .adv-title h2 span {\r\n  color: #ab0005;\r\n}\r\n\r\n.adv .adv-title p {\r\n  width: 70%;\r\n  margin: auto;\r\n}\r\n\r\n.adv hr {\r\n  color: #099;\r\n  width: 13%;\r\n  height: 0px;\r\n  margin-top: 5px;\r\n  background-color: #099;\r\n}\r\n\r\n.carousel {\r\n  margin-top: 40px;\r\n  -webkit-animation-delay: 1s;\r\n          animation-delay: 1s;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n}\r\n\r\n.carousel .carousel-item img {\r\n  width: 222px !important;\r\n  height: 183px;\r\n}\r\n\r\n.carousel-indicators {\r\n  bottom: -37px;\r\n  display: none;\r\n}\r\n\r\n.carousel-control-prev-icon,\r\n.carousel-control-next-icon {\r\n  background-color: #686969fa;\r\n\r\n  height: 25px;\r\n  width: 25px;\r\n  outline: black;\r\n  background-size: 100%, 100%;\r\n  border-radius: 50%;\r\n  border: 1px solid black;\r\n}\r\n\r\n/* .carousel-indicators li.active{\r\n  background-color: #ab0005;\r\n}\r\n.carousel-indicators li{\r\n  border:1px solid #ab0005;\r\n  border-radius:50%;\r\n  width: 10px;\r\n  height:10px;\r\n} */\r\n\r\n@media(max-width:576px) and (min-width:270px) {\r\n  .carousel[_ngcontent-c1] .carousel-item[_ngcontent-c1] img[_ngcontent-c1] {\r\n    width: 124% !important;\r\n    height: 70px;\r\n  }\r\n\r\n  .adv .adv-title p {\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    line-height: 16px;\r\n  }\r\n\r\n  .adv .adv-title h2 {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .carousel-control-prev-icon,\r\n  .carousel-control-next-icon {\r\n    background-color: transparent;\r\n    border: none;\r\n    height: 15px;\r\n    width: 15px;\r\n  }\r\n}\r\n\r\n/* \r\n.carousel-indicators li.active{\r\n  background-color: #ab0005;\r\n}\r\n.carousel-indicators li{\r\n  border:1px solid #ab0005;\r\n  border-radius:50%;\r\n  width:13px;\r\n  height:13px;\r\n}\r\n.carousel-control-prev-icon ,.carousel-control-next-icon{\r\n  background-color: #099;\r\n  \r\n  height: 25px;\r\n  width: 25px;\r\n  outline: black;\r\n  background-size: 100%, 100%;\r\n  border-radius: 50%;\r\n  border: 1px solid black;\r\n  /* background-image: none; */\r\n\r\n/* .carousel-control-next-icon:after\r\n{\r\n  content: '>';\r\n  font-size: 31px;\r\n    color: #000;\r\n    height: 55px;\r\n    line-height: 23px;\r\n}\r\n\r\n.carousel-control-prev-icon:after {\r\n  content: '<';\r\n  font-size: 31px;\r\n    color: #000;\r\n    height: 55px;\r\n    line-height: 23px;\r\n} */\r\n\r\n/* .carousel-control-next, .carousel-control-prev {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: -110px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 15%;\r\n  color: #fff;\r\n  text-align: center;\r\n  opacity: .5;\r\n \r\n}\r\n.carousel-control-prev {\r\n  left: 370px;\r\n}\r\n.carousel-control-next{\r\nright: 370px;\r\n} */\r\n\r\n.is-invalid {\r\n  border-color: #dc3545 !important;\r\n}\r\n\r\n.is-valid {\r\n  border-color: #28a745 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"openloginmodal()\">Create modal with component</button> -->\n<!--change image-->\n<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-spin\"></ngx-spinner>\n\n<div class=\"modal fade bd-example-modal-sm\" id=\"profile\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <div class=\"modal-title\" id=\"exampleModalLabel\">\n          <div class=\"modal-icon\">\n\n          </div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form profile\">\n          <img *ngIf=\"pictureName2 == ''\" src=\"./assets/images/images.jpg\" />\n          <img *ngIf=\"pictureName2 != ''\" src=\"{{imageForURl}}\" />\n          <span>choose photo :</span>\n          <div class=\"custom-file\">\n            <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\" accept=\"image/*\" [(ngModel)]=\"imageBlob2\"\n              (change)=\"processFile($event,2)\">\n            <label class=\"custom-file-label\" *ngIf=\"pictureName2 == ''\" for=\"inputGroupFile02\">no image choosen</label>\n            <label class=\"custom-file-label\" *ngIf=\"pictureName2 != ''\" for=\"inputGroupFile02\"> {{pictureName2}}</label>\n\n          </div>\n\n        </div>\n        <div class=\"modal-footer foot\">\n\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"changeProfileImage()\"\n            [disabled]=\"pictureName2 == ''\">Change</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!--start reset pass-->\n<!-- <div class=\"modal fade bd-example-modal-sm\" id=\"pass\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <div class=\"modal-title\" id=\"exampleModalLabel\">\n          <div class=\"modal-icon\">\n\n          </div>\n          <h5>Reset</h5>\n          <hr>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form reset\">\n          <input class=\"text\" type=\"password\" name=\"text\" placeholder=\"password\" />\n          <input class=\"text\" type=\"password\" name=\"text\" placeholder=\"New Password\" />\n          <input class=\"text\" type=\"password\" name=\"text\" placeholder=\" Confirm Password\" /> <a href=\"#\" data-toggle=\"modal\"\n            data-target=\"#verify\">Change</a>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div> -->\n<!--upper bar-->\n<div class=\"ubber\">\n  <div class=\"container\">\n    <ul class=\"list-inline\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link sign\" *ngIf=\"!checkDisplay\" (click)=\"openmodal('LoginmodalComponent')\">Log In\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link sign\" *ngIf=\"!checkDisplay\" (click)=\"openmodal('SignupmodalComponent')\">Sign Up</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link sign\" *ngIf=\"checkDisplay\" (click)=\"logOut()\">Log out </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link sign\" *ngIf=\"checkDisplay && userType != 'Company'\" (click)=\"openmodal('UpgrademodalComponent')\">\n          Upgrate to company</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link sign\"> Search</a>\n      </li>\n      <li class=\"nav-item\">\n        <select class=\"text select\" name=\"country\" placeholder=\"Language\" [(ngModel)]=\"lang\" (ngModelChange)=\"changeLanguage(lang)\">\n          <option value=\"en\">English</option>\n          <option value=\"ar\">Arabic</option>\n        </select>\n      </li>\n    </ul>\n  </div>\n</div>\n<!--start nav-->\n<nav class=\"navbar navbar-expand-lg navbar-light \">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"./assets/images/rafal-logo1.png\" /></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link \">{{'home'|translate}} <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"{{urlActive}}#about\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"{{urlActive}}#services\">Services</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"{{urlActive}}#adver\">Advertisment</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"{{urlActive}}#contact\"> Contact</a>\n        </li>\n\n\n        <li>\n          <div class=\"dropdown\" *ngIf=\"checkDisplay\">\n            <img *ngIf=\"userData == null\" class=\"btn btn-secondary dropdown-toggle\" src=\"./assets/images/images.jpg\" id=\"dropdownMenuButton\"\n              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" />\n            <img *ngIf=\"userData != null\" class=\"btn btn-secondary dropdown-toggle\" src=\"{{profileImage+userData}}\" id=\"dropdownMenuButton\"\n              data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" />\n\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <div class=\"user-image\">\n                <img class=\"user\" *ngIf=\"userData == null\" src=\"./assets/images/images.jpg\" />\n                <img class=\"user\" *ngIf=\"userData != null\" src=\"{{profileImage+userData}}\" />\n                <div class=\"over\">\n                  <a class=\"chan\" href=\"#\" data-toggle=\"modal\" data-target=\"#profile\">change</a>\n                </div>\n              </div>\n\n              <p>{{userName}}</p>\n              <a class=\"dropdown-item\" (click)=\"openmodal('ResetmodalComponent')\"> Change password</a>\n\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!--end nav-->\n\n\n<!--start header-->\n<div class=\"header\">\n  <div class=\"back\">\n    <img src=\"./../assets/images/header-bg.png\" />\n  </div>\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"header-content\">\n          <h4>R</h4>\n          <div class=\"info wow fadeInUp\">\n            <h3> <span>Rafal Group</span> </h3>\n            <!-- <h4>R</h4> -->\n            <p>Our company is considered as one of the leading international services supplier of Commercial and\n              administrative rendered services. </p>\n            <button><a href=\"#about\">Get Started</a></button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"image wow fadeInUp\">\n          <img src=\"./../assets/images/ORSFZA1 [Converted].png\" />\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--end header-->\n\n\n<!-- ***** Special Area Start ***** -->\n<section class=\"special-area bg-white section_padding_100\" id=\"about\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <!-- Section Heading Area -->\n        <div class=\"section-heading text-center\">\n          <h2>Why We Are <span>Special</span></h2>\n          <hr>\n          <p>The company does provide the most influential and comprehensive essential services particularly in\n            providing high quality professional management to those new organizations and business entities. This is to\n            cover all other related products such as commercial services, commercial agents and other commercial\n            related business between businesses.\n          </p>\n          <div class=\"line-shape\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <!-- Single Special Area -->\n      <div class=\"col-12 col-md-4\">\n        <div class=\"single-special text-center wow fadeInUp\" data-wow-delay=\"0.2s\">\n          <div class=\"single-icon\">\n            <i class=\"fas fa-desktop\"></i>\n          </div>\n          <h4>Development</h4>\n          <p>The role is responsible for designing, coding and modifying websites, from layout to function and\n            according to a client's specifications. Strive to create visually appealing sites that feature\n            user-friendly design and clear navigation. We are happy to serve you.</p>\n        </div>\n      </div>\n      <!-- Single Special Area -->\n      <div class=\"col-12 col-md-4\">\n        <div class=\"single-special text-center wow fadeInUp\" data-wow-delay=\"0.4s\">\n          <div class=\"single-icon\">\n            <i class=\"fas fa-globe\"></i>\n\n          </div>\n          <h4>Importing and Exporting</h4>\n          <p>An import export business is a company that facilitates trades of goods and commodities between domestic\n            and foreign companies. In other words, it’s a company that buys goods internationally and ships them in for\n            domestic purchases and vise versa.</p>\n        </div>\n      </div>\n      <!-- Single Special Area -->\n      <div class=\"col-12 col-md-4\">\n        <div class=\"single-special text-center wow fadeInUp\" data-wow-delay=\"0.6s\">\n          <div class=\"single-icon\">\n            <i class=\"fas fa-user-tie\"></i>\n          </div>\n          <h4>Hiring Labors</h4>\n          <p>Through a database prepared carefully for all fields and have been rehabilitated and developed to keep\n            pace with the external labor market with the possibility of providing visas to transfer the worker directly\n            or to hire workers through cooperation with enterprises outside Egypt</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--start about-->\n  <!-- <div id=\"about\" class=\"about \">\n  <div class=\"container\">\n     <div class=\"intro\">\n                <h2>Welcome to<span> Rafal Group</span></h2>\n              <p>There are many variations of passages of Lorem Ipsum available, but<br> the majority have suffered alteration in some form, by injected </p>\n            </div>-->\n  <!-- <div class=\"row\">\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6\">\n        <div class=\"info wow fadeInLeft\">\n          <h3>About us</h3>\n          <hr>\n          <p>There are many variations of passages of Lorem Ipsum available, but the majority have\n            suffered alteration in some form, by injected There are many variations of passages of\n            Lorem Ipsum available, but the majority have suffered alteration in some form, by injected\n            There are many variations of passages of Lorem Ipsum available, but the majority have\n            suffered alteration in some form, by injected </p>\n        </div>\n      </div>\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6\">\n        <div class=\"image wow fadeInRight\">\n          <img src=\"./../assets/images/about2.png\" alt=\"\" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n  <!--end about-->\n\n  <!-- Special Description Area -->\n  <div class=\"special_description_area mt-150\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <div class=\"special_description_img wow fadeInUp\">\n            <img src=\"./../assets/images/App Screen Front View MockUp.png\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-xl-5 ml-xl-auto\">\n          <div class=\"special_description_content\">\n            <h2>Try Our <span>Mobile Application</span> Now</h2>\n            <hr>\n            <p>A mobile application, most commonly referred to as an app, is a type of application software designed to\n              run on a mobile device, such as a smartphone or tablet computer. Mobile applications frequently serve to\n              provide users with similar services to those accessed on PCs.In order to facilitate the service to our\n              customers we offer you the mobile application for our company so that it can communicate with us faster\n              and easier.</p>\n            <div class=\"app-download-area\">\n              <div class=\"app-download-btn wow fadeInUp\" data-wow-delay=\"0.2s\">\n                <!-- Google Store Btn -->\n                <a href=\"#\">\n                  <i class=\"fab fa-android\"></i>\n                  <p class=\"mb-0\"><span>available on</span> Google Store</p>\n                </a>\n              </div>\n              <div class=\"app-download-btn wow fadeInDown\" data-wow-delay=\"0.4s\">\n                <!-- Apple Store Btn -->\n                <a href=\"#\">\n                  <i class=\"fab fa-apple\"></i>\n                  <p class=\"mb-0\"><span>available on</span> Apple Store</p>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--  Special Area End  -->\n\n  <!--start services-->\n  <div id=\"services\" class=\"services\">\n    <div class=\"container\">\n      <div class=\"intro wow fadeInUp\">\n        <h2>Our<span> Services</span></h2>\n        <hr>\n        <p>Our role is also to represent commercially any firm in other various countries. We then reduce the\n          difficulty by providing our clients all administrative solutions and different services due to our vast\n          professional experiences in these targeted countries and due to our deep understanding of these countries\n          trade and administrative rules and regulations. </p>\n\n      </div>\n      <div class=\"main\">\n        <div class=\"row first\">\n          <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6\">\n            <div class=\"our-services-wrapper mb-60\">\n              <div class=\"services-inner wow fadeInLeft\" style=\"cursor: pointer;\" (click)=\"openmodal('CharterComponent')\">\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <div class=\"our-services-img\">\n                      <i class=\" htfy fas fa-calculator\"></i>\n                    </div>\n                  </div>\n                  <div class=\"col-9\">\n                    <div class=\"our-services-text\">\n                      <h4><span>Charter</span> Accounting</h4>\n                      <a href=\"#\" data-toggle=\"modal\" data-target=\"#accounting\"> Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6\">\n            <div class=\"our-services-wrapper mb-60\">\n              <div class=\"services-inner wow fadeInUp\" style=\"cursor: pointer;\" (click)=\"openmodal('HiringComponent')\">\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <div class=\"our-services-img\">\n                      <i class=\"htfy fas fa-briefcase\"></i>\n                    </div>\n                  </div>\n                  <div class=\"col-9\">\n                    <div class=\"our-services-text\">\n                      <h4><span>Hiring</span> Labors</h4>\n                      <a href=\"#\" data-toggle=\"modal\" data-target=\"#hiring\"> Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6\">\n            <div class=\"our-services-wrapper mb-60\">\n              <div class=\"services-inner wow fadeInUp\" style=\"cursor: pointer;\" (click)=\"openmodal('FeasibilityComponent')\">\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <div class=\"our-services-img\">\n                      <i class=\"htfy fas fa-paste\"></i>\n                    </div>\n                  </div>\n                  <div class=\"col-9\">\n                    <div class=\"our-services-text\">\n                      <h4><span>Feasibility</span> Study</h4>\n                      <a href=\"#\" data-toggle=\"modal\" data-target=\"#study\"> Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6\">\n            <div class=\"our-services-wrapper mb-60\">\n              <div class=\"services-inner wow fadeInRight\" style=\"cursor: pointer;\" (click)=\"openmodal('EstablishComponent')\">\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <div class=\"our-services-img\">\n                      <i class=\" htfy fas fa-building\"></i>\n                    </div>\n                  </div>\n                  <div class=\"col-9\">\n                    <div class=\"our-services-text\">\n                      <h4><span>Establishing</span> Companies</h4>\n                      <a href=\"#\" data-toggle=\"modal\" data-target=\"#company\"> Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6\">\n            <div class=\"our-services-wrapper mb-60\">\n              <div class=\"services-inner wow fadeInLeft\" style=\"cursor: pointer;\" (click)=\"openmodal('CustomsComponent')\">\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <div class=\"our-services-img\">\n                      <i class=\"htfy fab fa-accusoft\"></i>\n                    </div>\n                  </div>\n                  <div class=\"col-9\">\n                    <div class=\"our-services-text\">\n                      <h4><span>Customs </span>Clearance</h4>\n                      <a href=\"#\" data-toggle=\"modal\" data-target=\"#custom\"> Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6\">\n            <div class=\"our-services-wrapper mb-60\">\n              <div class=\"services-inner wow fadeInUp\" style=\"cursor: pointer;\" (click)=\"openmodal('EmploymentComponent')\">\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <div class=\"our-services-img\">\n                      <i class=\"htfy fas fa-handshake\"></i>\n                    </div>\n                  </div>\n                  <div class=\"col-9\">\n                    <div class=\"our-services-text\">\n                      <h4>Employment</h4>\n                      <a href=\"#\" data-toggle=\"modal\" data-target=\"#employ\"> Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6\">\n            <div class=\"our-services-wrapper mb-60\">\n              <div class=\"services-inner wow fadeInUp\" style=\"cursor: pointer;\" (click)=\"openmodal('OfficeComponent')\">\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <div class=\"our-services-img\">\n                      <i class=\"htfy fas fa-chalkboard-teacher\"></i>\n                    </div>\n                  </div>\n                  <div class=\"col-9\">\n                    <div class=\"our-services-text\">\n                      <h4><span>Office </span>Services</h4>\n                      <a href=\"#\" data-toggle=\"modal\" data-target=\"#office\"> Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6\">\n            <div class=\"our-services-wrapper mb-60\">\n              <div class=\"services-inner wow fadeInRight\" style=\"cursor: pointer;\" (click)=\"openmodal('TradingComponent')\">\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <div class=\"our-services-img\">\n                      <i class=\" htfy fas fa-globe\"></i>\n                    </div>\n                  </div>\n                  <div class=\"col-9\">\n                    <div class=\"our-services-text\">\n                      <h4><span>Trading</span> Agencies</h4>\n                      <a href=\"#\" data-toggle=\"modal\" data-target=\"#trade\"> Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6 offset-lg-3 offset-md-3\">\n            <div class=\"our-services-wrapper mb-60\">\n              <div class=\"services-inner wow fadeInLeft\" style=\"cursor: pointer;\" (click)=\"openmodal('CertifiedComponent')\">\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <div class=\"our-services-img\">\n                      <i class=\"htfy fas fa-language\"></i>\n                    </div>\n                  </div>\n                  <div class=\"col-9\">\n                    <div class=\"our-services-text\">\n                      <h4><span>Certified</span> Translation</h4>\n                      <a href=\"#\" data-toggle=\"modal\" data-target=\"#translation\"> Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-6 \">\n            <div class=\"our-services-wrapper mb-60\">\n              <div class=\"services-inner wow fadeInRight\" style=\"cursor: pointer;\" (click)=\"openmodal('ShippingComponent')\">\n                <div class=\"row\">\n                  <div class=\"col-3\">\n                    <div class=\"our-services-img\">\n                      <i class=\"htfy fas fa-ship\"></i>\n                    </div>\n                  </div>\n                  <div class=\"col-9\">\n                    <div class=\"our-services-text\">\n                      <h4>Shipping</h4>\n                      <a href=\"#\" data-toggle=\"modal\" data-target=\"#ship\"> Apply</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--end forms-->\n\n  <!-- ***** App Screenshots Area Start ***** -->\n  <!-- <section class=\"app-screenshots-area bg-white section_padding_0_100 clearfix\" id=\"screenshot\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-12 text-center\">\n              <!-- Heading Text  -->\n  <!-- <div class=\"section-heading\">\n                  <h2>App Screenshots</h2>\n                  <div class=\"line-shape\"></div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-12\">\n              <!-- App Screenshots Slides  -->\n  <!-- <div class=\"app_screenshots_slides owl-carousel\">\n                  <div class=\"single-shot\">\n                      <img src=\"./../assets/images/app-1.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"single-shot\">\n                      <img src=\"./../assets/images/app-1.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"single-shot\">\n                      <img src=\"./../assets/images/app-1.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"single-shot\">\n                      <img src=\"./../assets/images/app-1.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"single-shot\">\n                      <img src=\"./../assets/images/app-1.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"single-shot\">\n                      <img src=\"./../assets/images/app-1.jpg\" alt=\"\">\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section> -->\n  <!-- ***** App Screenshots Area End *****====== -->\n  <div class=\"adv\" id=\"adver\">\n    <div class=\"container\">\n      <div class=\"adv-title\">\n        <h2>Free <span>Advertisement</span> by our users</h2>\n        <hr>\n        <p> Because our goal is to serve our customers and cooperate with them in finding their goal, we offer you a\n          service to raise their advertisement for free, which also helps you to find a suitable business opportunity\n          for you. These are part of the ads to inform you about.\n        </p>\n      </div>\n      <div id=\"carouselExampleIndicators\" class=\"carousel slide wow zoomIn\" data-ride=\"carousel\">\n        <!-- <ol class=\"carousel-indicators\">\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n        </ol> -->\n        <div class=\"carousel-inner\">\n\n          <ng-container *ngFor=\"let item of arrays;let i=index\">\n            <div class=\"carousel-item  \" [ngClass]=\"{ 'active': i == 0 }\">\n              <div class=\"row\">\n                <div class=\"col-3\" *ngFor=\"let img of item\">\n                  <img class=\"d-block w-100\" src=\"{{imgUrl+img}}\" alt=\"Third slide\">\n                </div>\n                <!-- <div class=\"col-3\">\n                  <img class=\"d-block w-100\" src=\"./../assets/images/2.jpg\" alt=\"Third slide\">\n                </div>\n                <div class=\"col-3\">\n                  <img class=\"d-block w-100\" src=\"./../assets/images/3.jpg\" alt=\"Third slide\">\n                </div>\n                <div class=\"col-3\">\n                  <img class=\"d-block w-100\" src=\"./../assets/images/4.jpg\" alt=\"Third slide\">\n                </div> -->\n              </div>\n            </div>\n          </ng-container>\n          <!-- <div class=\"carousel-item\">\n            <div class=\"row\">\n              <div class=\"col-3\">\n                <img class=\"d-block w-100 \" src=\"./../assets/images/5.jpg\" alt=\"Third slide\">\n              </div>\n              <div class=\"col-3\">\n                <img class=\"d-block w-100\" src=\"./../assets/images/6.jpg\" alt=\"Third slide\">\n              </div>\n              <div class=\"col-3\">\n                <img class=\"d-block w-100\" src=\"./../assets/images/7.jpg\" alt=\"Third slide\">\n              </div>\n              <div class=\"col-3\">\n                <img class=\"d-block w-100\" src=\"./../assets/images/8.jpg\" alt=\"Third slide\">\n              </div>\n            </div>\n\n          </div>\n          <div class=\"carousel-item\">\n            <div class=\"row\">\n              <div class=\"col-3\">\n                <img class=\"d-block w-100\" src=\"./../assets/images/9.jpg\" alt=\"Third slide\">\n              </div>\n              <div class=\"col-3\">\n                <img class=\"d-block w-100\" src=\"./../assets/images/10.jpg\" alt=\"Third slide\">\n              </div>\n              <div class=\"col-3\">\n                <img class=\"d-block w-100\" src=\"./../assets/images/3.jpg\" alt=\"Third slide\">\n              </div>\n              <div class=\"col-3\">\n                <img class=\"d-block w-100\" src=\"./../assets/images/4.jpg\" alt=\"Third slide\">\n              </div>\n            </div>\n          </div> -->\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <!-- <h2 style=\"text-align:center\">Slideshow Gallery</h2>\n\n<div class=\"container\">\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">1 / 6</div>\n    <img src=\"./../assets/images/slide.jpeg\" style=\"width:100%\">\n  </div>\n\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">2 / 6</div>\n    <img src=\"./../assets/images/slide2.jpeg\" style=\"width:100%\">\n  </div>\n\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">3 / 6</div>\n    <img src=\"./../assets/images/slide.jpeg\" style=\"width:100%\">\n  </div>\n    \n  <div class=\"mySlides\">\n    <div class=\"numbertext\">4 / 6</div>\n    <img src=\"./../assets/images/slide.jpeg\" style=\"width:100%\">\n  </div>\n\n  <div class=\"mySlides\">\n    <div class=\"numbertext\">5 / 6</div>\n    <img src=\"./../assets/images/slide2.jpeg\" style=\"width:100%\">\n  </div>\n    \n  <div class=\"mySlides\">\n    <div class=\"numbertext\">6 / 6</div>\n    <img src=\"./../assets/images/slide.jpeg\" style=\"width:100%\">\n  </div>\n    \n  <a class=\"prev\" onclick=\"plusSlides(-1)\">❮</a>\n  <a class=\"next\" onclick=\"plusSlides(1)\">❯</a>\n\n  <div class=\"caption-container\">\n    <p id=\"caption\"></p>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"./../assets/images/slide2.jpeg\" style=\"width:100%\" onclick=\"currentSlide(1)\" alt=\"The Woods\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"./../assets/images/slide.jpeg\" style=\"width:100%\" onclick=\"currentSlide(2)\" alt=\"Cinque Terre\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"./../assets/images/slide.jpeg\" style=\"width:100%\" onclick=\"currentSlide(3)\" alt=\"Mountains and fjords\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"./../assets/images/slide2.jpeg\" style=\"width:100%\" onclick=\"currentSlide(4)\" alt=\"Northern Lights\">\n    </div>\n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"./../assets/images/slide.jpeg\" style=\"width:100%\" onclick=\"currentSlide(5)\" alt=\"Nature and sunrise\">\n    </div>    \n    <div class=\"column\">\n      <img class=\"demo cursor\" src=\"./../assets/images/slide2.jpeg\" style=\"width:100%\" onclick=\"currentSlide(6)\" alt=\"Snowy Mountains\">\n    </div>\n  </div>\n</div> -->\n\n\n\n  <!-- |<div class=\"container\">\n  <div class=\"row\">\n    <h2>Media Slider Carousel BS3</h2>\n  </div>\n  <div class='row'>\n    <div class='col-md-8'>\n      <div class=\"carousel slide media-carousel\" id=\"media\">\n        <div class=\"carousel-inner\">\n          <div class=\"item  active\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"http://placehold.it/150x150\"></a>\n              </div>          \n              <div class=\"col-md-4\">\n                <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"http://placehold.it/150x150\"></a>\n              </div>\n              <div class=\"col-md-4\">\n                <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"http://placehold.it/150x150\"></a>\n              </div>        \n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"http://placehold.it/150x150\"></a>\n              </div>          \n              <div class=\"col-md-4\">\n                <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"http://placehold.it/150x150\"></a>\n              </div>\n              <div class=\"col-md-4\">\n                <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"http://placehold.it/150x150\"></a>\n              </div>        \n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"http://placehold.it/150x150\"></a>\n              </div>          \n              <div class=\"col-md-4\">\n                <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"http://placehold.it/150x150\"></a>\n              </div>\n              <div class=\"col-md-4\">\n                <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"http://placehold.it/150x150\"></a>\n              </div>      \n            </div>\n          </div>\n        </div>\n        <a data-slide=\"prev\" href=\"#media\" class=\"left carousel-control\">‹</a>\n        <a data-slide=\"next\" href=\"#media\" class=\"right carousel-control\">›</a>\n      </div>                          \n    </div>\n  </div>\n</div> -->\n\n  <!-- <drag-scroll class=\"drag\">\n  <img  drag-scroll-item src=\"./../assets/images/slide.jpeg\" />\n  <img drag-scroll-item src=\"./../assets/images/slide.jpeg\" />\n  <img drag-scroll-item src=\"./../assets/images/slide.jpeg\" />\n  <img  drag-scroll-item src=\"./../assets/images/slide.jpeg\" />\n  <img drag-scroll-item src=\"./../assets/images/slide.jpeg\" />\n  <img drag-scroll-item src=\"./../assets/images/slide.jpeg\" />\n  <img  drag-scroll-item src=\"./../assets/images/slide.jpeg\" />\n  <img drag-scroll-item src=\"./../assets/images/slide.jpeg\" />\n  <img drag-scroll-item src=\"./../assets/images/slide.jpeg\" />\n</drag-scroll>\n<button (click)=\"moveLeft()\">Left</button>\n<button (click)=\"moveRight()\">Right</button>  -->\n\n  <!-- <legend align=\"center\">Our Happy Client's</legend>\n<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Wrapper for slides -->\n  <!-- <div class=\"carousel-inner\">\n  \n    <div class=\"item active container\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n    </div>\n    \n    <div class=\"item container\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n      </div>\n    \n    <div class=\"item container\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n        <img class=\"col-md-2 col-sm-2 col-xs-2 logo img-responsive\" src=\"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1010549_378823185552943_1788436797_n.png\" alt=\"...\">\n     </div>\n    \n  </div>\n\n    <div align=\"center\" style=\"margin-top:20px;\">\n    <!-- Controls -->\n  <!-- <a class=\"left\" href=\"#carousel-example-generic\" data-slide=\"prev\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n          <a class=\"right\" href=\"#carousel-example-generic\" data-slide=\"next\">\n            <span class=\"glyphicon glyphicon-chevron-right\"></span>\n          </a>\n    </div>\n  \n</div> -->\n\n  <!--start main form-->\n  <div id=\"contact\" class=\"main-form\">\n    <div class=\"main-back\">\n      <img src=\"./../assets/images/pexels-photo-433639.jpeg\" />\n    </div>\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n          <div class=\"title wow fadeInLeft\">\n            <h3>Submit A Free <span>Advertisement</span></h3>\n            <p>Your Advertisement will be sent to the admin for review and we will get back to you as soon as\n              possible.</p>\n          </div>\n        </div>\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n\n\n\n          <form class=\"wow fadeInRight\" [formGroup]=\"addadvertismentForm\">\n\n            <select class=\"text select\" type=\"text\" name=\"text\" placeholder=\"Job Title\" formControlName=\"job\"\n              [(ngModel)]=\"Job\" [ngClass]=\"{ 'is-invalid': hasError('job','required'),'is-valid':addadvertismentForm.get('job').touched && !hasError('job','required')  }\"\n              required>\n              <option *ngFor=\"let job of jobTitle\" value=\"{{job.code}}\">{{job.value}}</option>\n\n            </select>\n\n            <textarea class=\"text second\" type=\"text\" name=\"description\" placeholder=\"Your Description\" formControlName=\"discription\"\n              [(ngModel)]=\"Discription\"></textarea>\n            <div class=\"custom-file\">\n              <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" formControlName=\"imageblob1\"\n                [(ngModel)]=\"imageBlob1\" [ngClass]=\"{ 'is-invalid': addadvertismentForm.get('imageblob1').touched && addadvertismentForm.get('imageblob1').hasError('required'),\n                  'is-valid':addadvertismentForm.get('imageblob1').touched && !addadvertismentForm.get('imageblob1').hasError('required') }\"\n                (change)=\"processFile($event,1)\" accept=\"image/*\" required>\n              <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 == ''\">no image choosen\n              </label>\n              <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 != ''\">{{pictureName1}}\n              </label>\n            </div>\n\n            <button type=\"button\" (click)=\"addAdvertsService()\" [disabled]=\"!addadvertismentForm.valid \">Submit</button>\n          </form>\n\n\n\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--end main form-->\n\n\n\n  <!-- footer -->\n\n  <!-- <div class=\"footer\">\n  <div class=\"container\">\n    <div class=\"contact\">\n      <div class=\"row\">\n        <div class=\" col-9\">\n\n          <p>\n            <i class=\"fas fa-map-marker-alt\"></i>\n            <span>Egypt monufiya ,shebin-elkom</span>\n          </p>\n          <p>\n            <i class=\"fas fa-at\"></i>\n            <span>Rafalmasr@gmail.com</span>\n          </p>\n          <p>\n            <i class=\"fas fa-phone\"></i>\n            <span>010009874655</span>\n          </p>\n        </div>\n        <div class=\"col-3 \">\n          <div class=\"social\">\n            <a href=\"https://www.facebook.com/RafalGroup/\" target=\"_blank\"><i class=\" social-icon fab fa-facebook\"></i></a>\n            <i class=\" social-icon fab fa-facebook\"></i>-->\n  <!-- <a href=\"https://twitter.com/MasrRafal\" target=\"_blank\"> <i class=\"social-icon fab fa-twitter-square\"></i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n  <!-- end footer -->\n\n\n  <!-- ***** Footer Area Start ***** -->\n  <footer class=\" footer footer-social-icon text-center section_padding_70 clearfix\">\n    <!-- footer logo -->\n    <div class=\"footer-text\">\n      <h2>R.G</h2>\n    </div>\n    <!-- social icon-->\n    <div class=\"footer-social-icon\">\n      <a href=\"https://www.facebook.com/RafalGroup/\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a>\n      <a href=\"https://twitter.com/MasrRafal\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a>\n      <a href=\"https://www.instagram.com/rafal_group/\" target=\"_blank\"> <i class=\"fab fa-instagram\"></i></a>\n      <a href=\"https://www.youtube.com/channel/UCq7SJ-GAMs-ZXIqNdIen9bg\" target=\"_blank\"><i class=\"fab fa-youtube\"></i></a>\n    </div>\n    <div class=\"footer-menu\">\n      <nav>\n        <ul>\n          <li> <a href=\"#\"><i class=\"fas fa-map-marker-alt\"></i>\n              <span>Egypt, Menoufia ,Shebin-Elkom, AL Galaa AL Bahari Road Hilton Tower 6th floor</span>\n            </a></li>\n          <li><a href=\"#\"><i class=\"fas fa-at\"></i>\n              <span>rafalmasr@gmail.com</span>\n            </a></li>\n          <li> <a href=\"#\"><i class=\"fas fa-phone\"></i>\n              <span>01094132184 / 01113115264</span></a></li>\n\n        </ul>\n      </nav>\n      <!-- <p>\n        <i class=\"fas fa-map-marker-alt\"></i>\n        <span>Egypt monufiya ,shebin-elkom</span>\n      </p>\n      <p>\n        <i class=\"fas fa-at\"></i>\n        <span>Rafalmasr@gmail.com</span>\n      </p>\n      <p>\n        <i class=\"fas fa-phone\"></i>\n        <span>010009874655</span>\n      </p> -->\n    </div>\n    <!-- Foooter Text-->\n    <div class=\"copyright-text\">\n      <!-- ***** Removing this text is now allowed! This template is licensed under CC BY 3.0 ***** -->\n      <p>Copyright ©2018 Rafal Group Designed by <a href=\"#\" target=\"_blank\">Rafal Group</a></p>\n    </div>\n  </footer>\n"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _services_certified_certified_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/certified/certified.component */ "./src/app/component/services/certified/certified.component.ts");
/* harmony import */ var _services_hiring_hiring_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/hiring/hiring.component */ "./src/app/component/services/hiring/hiring.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loginmodal/loginmodal.component */ "./src/app/component/loginmodal/loginmodal.component.ts");
/* harmony import */ var _signupmodal_signupmodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../signupmodal/signupmodal.component */ "./src/app/component/signupmodal/signupmodal.component.ts");
/* harmony import */ var _upgrademodal_upgrademodal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../upgrademodal/upgrademodal.component */ "./src/app/component/upgrademodal/upgrademodal.component.ts");
/* harmony import */ var _services_charter_charter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/charter/charter.component */ "./src/app/component/services/charter/charter.component.ts");
/* harmony import */ var _services_feasibility_feasibility_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/feasibility/feasibility.component */ "./src/app/component/services/feasibility/feasibility.component.ts");
/* harmony import */ var _services_establish_establish_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/establish/establish.component */ "./src/app/component/services/establish/establish.component.ts");
/* harmony import */ var _services_customs_customs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/customs/customs.component */ "./src/app/component/services/customs/customs.component.ts");
/* harmony import */ var _services_employment_employment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/employment/employment.component */ "./src/app/component/services/employment/employment.component.ts");
/* harmony import */ var _services_office_office_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/office/office.component */ "./src/app/component/services/office/office.component.ts");
/* harmony import */ var _services_trading_trading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/trading/trading.component */ "./src/app/component/services/trading/trading.component.ts");
/* harmony import */ var _services_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/shipping/shipping.component */ "./src/app/component/services/shipping/shipping.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _verfiymodal_verfiymodal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../verfiymodal/verfiymodal.component */ "./src/app/component/verfiymodal/verfiymodal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/shared/companyservice.service */ "./src/app/services/shared/companyservice.service.ts");
/* harmony import */ var _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/shared/settings.service */ "./src/app/services/shared/settings.service.ts");
/* harmony import */ var _services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/shared/session.service */ "./src/app/services/shared/session.service.ts");
/* harmony import */ var _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/shared/authention.service */ "./src/app/services/shared/authention.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _resetmodal_resetmodal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../resetmodal/resetmodal.component */ "./src/app/component/resetmodal/resetmodal.component.ts");
/* harmony import */ var _services_shared_user_data_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../services/shared/user-data.service */ "./src/app/services/shared/user-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function HomeComponent(modalService, translate, builder, companyService, AuthService, spinner, toastr, userService, router) {
        var _this = this;
        this.modalService = modalService;
        this.translate = translate;
        this.builder = builder;
        this.companyService = companyService;
        this.AuthService = AuthService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.jobTitle = [];
        this.Job = null;
        this.Discription = null;
        this.pictureName1 = '';
        this.pictureName2 = '';
        this.imaArray = [];
        this.profileImage = _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_19__["SettingsService"].imageUrlProfile;
        this.imgUrl = _services_shared_settings_service__WEBPACK_IMPORTED_MODULE_19__["SettingsService"].DOMAIN_ImgeURLAdver;
        this.title = 'testproject';
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };
        this.arrays = [];
        this.size = 4;
        this.lang = localStorage.getItem("lang");
        this.addadvertismentForm = this.builder.group({
            job: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required],
            "imageblob1": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required])],
            discription: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required]
        });
        var lang1 = localStorage.getItem("lang");
        if (lang1 == "en") {
            lang1 = "English";
        }
        else {
            lang1 = "Arabic";
        }
        this.companyService.getPickListCCJ("Job_Title", lang1).subscribe(function (data) {
            // console.log(data[0].code);
            _this.jobTitle = data;
        }, function (error) { });
        this.getAllAdver();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.urlActive = this.router.url.substring(this.router.url.lastIndexOf('/') + 1, this.router.url.lastIndexOf('#'));
        console.log(this.urlActive);
        var token = localStorage.getItem('token');
        if (token != null && !_services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].userSessionData.is_log) {
            this.spinner.show();
            this.AuthService.validateSession().subscribe(function (data) {
                _services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].saveInSession(data);
                _this.spinner.hide();
                _services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].saveDataInLocalStorage(data);
                console.log(data, _services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].userSessionData);
                localStorage.setItem("token", data.tkn);
                _this.userData = _services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].userSessionData.userDetails.picture_url;
                _this.userName = data.userDetails.userName;
                var islog = _services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].userSessionData.is_log;
                _this.checkDisplay = islog;
                _this.userType = _services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].userSessionData.userDetails.type;
                console.log(_this.checkDisplay);
            }, function (error) {
                _this.spinner.hide();
            });
        }
        else {
            console.log(_services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].userSessionData.userDetails.picture_url);
            this.userData = _services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].userSessionData.userDetails.picture_url;
            var islog = _services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].userSessionData.is_log;
            this.checkDisplay = islog;
            this.userName = _services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].userSessionData.userDetails.userName;
            this.userType = _services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].userSessionData.userDetails.type;
        }
    };
    HomeComponent.prototype.changeLanguage = function (lang) {
        console.log(lang);
        this.translate.use(lang);
    };
    HomeComponent.prototype.openmodal = function (componentTo) {
        var _this = this;
        // console.log(componentTo);
        var comp;
        if (componentTo == 'LoginmodalComponent') {
            comp = _loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_4__["LoginmodalComponent"];
        }
        else if (componentTo == 'SignupmodalComponent') {
            comp = _signupmodal_signupmodal_component__WEBPACK_IMPORTED_MODULE_5__["SignupmodalComponent"];
        }
        else if (componentTo == 'UpgrademodalComponent') {
            comp = _upgrademodal_upgrademodal_component__WEBPACK_IMPORTED_MODULE_6__["UpgrademodalComponent"];
        }
        else if (componentTo == 'CharterComponent') {
            comp = _services_charter_charter_component__WEBPACK_IMPORTED_MODULE_7__["CharterComponent"];
        }
        else if (componentTo == 'HiringComponent') {
            comp = _services_hiring_hiring_component__WEBPACK_IMPORTED_MODULE_1__["HiringComponent"];
        }
        else if (componentTo == 'FeasibilityComponent') {
            comp = _services_feasibility_feasibility_component__WEBPACK_IMPORTED_MODULE_8__["FeasibilityComponent"];
        }
        else if (componentTo == 'EstablishComponent') {
            comp = _services_establish_establish_component__WEBPACK_IMPORTED_MODULE_9__["EstablishComponent"];
        }
        else if (componentTo == 'CustomsComponent') {
            comp = _services_customs_customs_component__WEBPACK_IMPORTED_MODULE_10__["CustomsComponent"];
        }
        else if (componentTo == 'EmploymentComponent') {
            comp = _services_employment_employment_component__WEBPACK_IMPORTED_MODULE_11__["EmploymentComponent"];
        }
        else if (componentTo == 'OfficeComponent') {
            comp = _services_office_office_component__WEBPACK_IMPORTED_MODULE_12__["OfficeComponent"];
        }
        else if (componentTo == 'TradingComponent') {
            comp = _services_trading_trading_component__WEBPACK_IMPORTED_MODULE_13__["TradingComponent"];
        }
        else if (componentTo == 'CertifiedComponent') {
            comp = _services_certified_certified_component__WEBPACK_IMPORTED_MODULE_0__["CertifiedComponent"];
        }
        else if (componentTo == 'ShippingComponent') {
            comp = _services_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_14__["ShippingComponent"];
        }
        else if (componentTo == 'ResetmodalComponent') {
            comp = _resetmodal_resetmodal_component__WEBPACK_IMPORTED_MODULE_24__["ResetmodalComponent"];
        }
        console.log("true");
        var getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
        var getUsertoken = localStorage.getItem("token");
        if (getUserVerfiy != null) {
            console.log("1");
            this.bsModalRef = this.modalService.show(_verfiymodal_verfiymodal_component__WEBPACK_IMPORTED_MODULE_16__["VerfiymodalComponent"], { class: 'modal-sm' });
            this.bsModalRef.content.actionVerfiy.take(1).subscribe(function (value) {
                _this.userData = value.userDetails.picture_url;
                _this.userName = value.userDetails.userName;
                _this.userType = value.userDetails.type;
                var islog = true;
                _this.checkDisplay = islog;
            });
        }
        else if (getUsertoken != null) {
            console.log("2");
            if (componentTo == 'LoginmodalComponent' || componentTo == 'SignupmodalComponent' || componentTo == 'ResetmodalComponent') {
                this.bsModalRef = this.modalService.show(comp, { class: 'modal-sm' });
                // to get data session from modal
                if (componentTo == 'LoginmodalComponent') {
                    this.bsModalRef.content.action.take(1).subscribe(function (value) {
                        console.log("ahmed :", value); // here you will get the value;
                        _this.userData = value.userDetails.picture_url;
                        _this.userName = value.userDetails.userName;
                        _this.userType = value.userDetails.type;
                        console.log(_this.userData);
                        var islog = true;
                        _this.checkDisplay = islog;
                    });
                }
            }
            else {
                console.log("3");
                this.bsModalRef = this.modalService.show(comp);
                if (componentTo == 'LoginmodalComponent') {
                    this.bsModalRef.content.action.take(1).subscribe(function (value) {
                        console.log("ahmed :", value); // here you will get the value;
                        _this.userData = value.userDetails.picture_url;
                        _this.userName = value.userDetails.userName;
                        _this.userType = value.userDetails.type;
                        console.log(_this.userData);
                        var islog = true;
                        _this.checkDisplay = islog;
                    });
                }
            }
        }
        else if (getUsertoken == null) {
            console.log("4");
            if (componentTo == 'LoginmodalComponent' || componentTo == 'SignupmodalComponent') {
                this.bsModalRef = this.modalService.show(comp, { class: 'modal-sm' });
                // to get data session from modal
                if (componentTo == 'LoginmodalComponent') {
                    this.bsModalRef.content.action.take(1).subscribe(function (value) {
                        _this.userData = value.userDetails.picture_url;
                        _this.userName = value.userDetails.userName;
                        var islog = true;
                        _this.checkDisplay = islog;
                        _this.userType = value.userDetails.type;
                    });
                }
            }
            else {
                console.log("5");
                this.bsModalRef = this.modalService.show(_loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_4__["LoginmodalComponent"], { class: 'modal-sm' });
                this.bsModalRef.content.action.take(1).subscribe(function (value) {
                    console.log("ahmed2 :", value); // here you will get the value;
                    _this.userData = value.userDetails.picture_url;
                    _this.userName = value.userDetails.userName;
                    var islog = true;
                    _this.checkDisplay = islog;
                    _this.userType = value.userDetails.type;
                });
            }
        }
    };
    HomeComponent.prototype.addSlide = function () {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    };
    HomeComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    HomeComponent.prototype.slickInit = function (e) {
        console.log('slick initialized');
    };
    HomeComponent.prototype.breakpoint = function (e) {
        console.log('breakpoint');
    };
    HomeComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    HomeComponent.prototype.beforeChange = function (e) {
        console.log('beforeChange');
    };
    // add service
    HomeComponent.prototype.addAdvertsService = function () {
        var _this = this;
        var getUserVerfiy = JSON.parse(localStorage.getItem("userSignupData"));
        var getUserlogin = localStorage.getItem("token");
        if (getUserVerfiy != null) {
            this.bsModalRef = this.modalService.show(_verfiymodal_verfiymodal_component__WEBPACK_IMPORTED_MODULE_16__["VerfiymodalComponent"], { class: 'modal-sm' });
            this.bsModalRef.content.actionVerfiy.take(1).subscribe(function (value) {
                console.log("ahmed 111111111:", value); // here you will get the value;
                _this.userData = value.userDetails.picture_url;
                _this.userName = value.userDetails.userName;
                _this.userType = value.userDetails.type;
                console.log(_this.userData);
                var islog = true;
                _this.checkDisplay = islog;
            });
        }
        else if (getUserlogin == null) {
            console.log("done");
            this.bsModalRef = this.modalService.show(_loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_4__["LoginmodalComponent"], { class: 'modal-sm' });
            this.bsModalRef.content.action.take(1).subscribe(function (value) {
                console.log("ahmed2 :", value); // here you will get the value;
                _this.userData = value.userDetails.picture_url;
                _this.userName = value.userDetails.userName;
                var islog = true;
                _this.checkDisplay = islog;
                _this.userType = value.userDetails.type;
            });
        }
        else {
            this.spinner.show();
            var option_1 = {
                timeOut: 5000,
                progressBar: true
            };
            this.companyService.addAdvertisment(this.file1, this.Job, this.Discription).subscribe(function (data) {
                _this.toastr.success('Submitted ', 'successfully', option_1);
                _this.addadvertismentForm.reset();
                _this.pictureName1 = '';
                _this.spinner.hide();
            }, function (error) {
                _this.toastr.error(error.errorCode, error.message, option_1);
                _this.spinner.hide();
            });
        }
    };
    // get all advertisment
    HomeComponent.prototype.getAllAdver = function () {
        var _this = this;
        this.companyService.getalladvertienttoken().subscribe(function (data) {
            _this.imaArray = data;
            while (_this.imaArray.length > 0) {
                _this.arrays.push(_this.imaArray.splice(0, _this.size));
            }
        }, function (error) {
            console.log(error);
        });
    };
    // get image
    HomeComponent.prototype.processFile = function (event, num) {
        var _this = this;
        if (num == 1) {
            var reader_1 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_1 = event.target.files[0];
                reader_1.readAsArrayBuffer(file_1);
                reader_1.onload = function (e) {
                    var imgBlob = new Blob([reader_1.result], { type: file_1.type });
                    _this.file1 = imgBlob;
                };
            }
            if (this.imageBlob1 != '') {
                var currentName = this.imageBlob1.substring(this.imageBlob1.lastIndexOf('\\') + 1, this.imageBlob1.length);
                this.pictureName1 = currentName;
            }
            else {
                this.pictureName1 = '';
            }
        }
        else if (num == 2) {
            var reader_2 = new FileReader();
            console.log(event.target.files);
            if (event.target.files && event.target.files.length > 0) {
                var file_2 = event.target.files[0];
                reader_2.readAsArrayBuffer(file_2);
                reader_2.onload = function (e) {
                    // console.log(e.target.result);
                    var imgBlob = new Blob([reader_2.result], { type: file_2.type });
                    _this.file2 = imgBlob;
                    reader_2.readAsDataURL(file_2);
                    reader_2.onload = function (e) {
                        _this.imageForURl = e.target.result;
                    };
                };
            }
            if (this.imageBlob2 != '') {
                var currentName = this.imageBlob2.substring(this.imageBlob2.lastIndexOf('\\') + 1, this.imageBlob2.length);
                this.pictureName2 = currentName;
            }
            else {
                this.pictureName2 = '';
            }
        }
    };
    HomeComponent.prototype.hasError = function (field, error) {
        var ctrl = this.addadvertismentForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    // change image(){}
    HomeComponent.prototype.changeProfileImage = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        this.userService.uploadImage(this.file2).subscribe(function (data) {
            _this.userData = data.imageToken;
            _this.toastr.success('Image is uploaded ', 'successfully', option);
            _this.spinner.hide();
            _this.file2 = null;
            _this.imageForURl = null;
            _this.pictureName2 = '';
        }, function (err) {
            _this.spinner.hide();
            _this.toastr.error(err.errorCode, err.message, option);
        });
    };
    HomeComponent.prototype.logOut = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        this.AuthService.logOut().subscribe(function (data) {
            _this.toastr.success('^-^', 'Logout successfully', option);
            _services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].clearDateFromLocalStorage();
            _services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].resetData();
            _this.spinner.hide();
            var islog = _services_shared_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"].userSessionData.is_log;
            _this.checkDisplay = islog;
        }, function (error) {
            _this.toastr.error(error.errorCode, error.message, option);
            _this.spinner.hide();
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"],
            _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_18__["CompanyserviceService"],
            _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_21__["AuthentionService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_22__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrService"],
            _services_shared_user_data_service__WEBPACK_IMPORTED_MODULE_25__["UserDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_26__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/job-details/job-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/job-details/job-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pageContent {\r\n    margin: 20px auto;\r\n  }\r\n  \r\n  .pageContent .searchBar {\r\n    margin: 0;\r\n    background: #f9f9f9;\r\n    border: 1px solid #eee;\r\n    padding: 20px;\r\n  }\r\n  \r\n  .pageContent .searchBar h5 {\r\n    color: #099;\r\n    margin-top: 4px;\r\n  }\r\n  \r\n  .pageContent .searchBar .findPeople {\r\n    text-align: right;\r\n  }\r\n  \r\n  .pageContent .searchBar .findPeople button {\r\n    color: #ab0005;\r\n    background: transparent;\r\n    border: 1px solid;\r\n    padding: 5px 35px;\r\n    box-shadow: 0 2px 6px 0px #ddd;\r\n  }\r\n  \r\n  .pageContent .JobDetails .row {\r\n    margin: 0;\r\n  }\r\n  \r\n  .pageContent .JobDetails .job-title {\r\n    padding: 40px 0 10px;\r\n  }\r\n  \r\n  .pageContent .JobDetails .job-title i {\r\n    width: 20px;\r\n    color: #099;\r\n  }\r\n  \r\n  .pageContent .JobDetails .job-title h6 {\r\n    color: #099;\r\n    margin-bottom: 7px;\r\n  }\r\n  \r\n  .pageContent .JobDetails .job-title p {\r\n    color: #000;\r\n    margin-bottom: 7px;\r\n  }\r\n  \r\n  .pageContent .JobDetails h5 {\r\n    color: #ab0005;\r\n  }\r\n  \r\n  .pageContent .JobDetails ul li {\r\n    color: #797878;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .pageContent .JobDetails .contactData .contactTitle {\r\n    color: #099;    \r\n    margin: 25px 0 0;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .pageContent .JobDetails .contactData p {\r\n    color: #000;\r\n    font-size: 15px;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/component/job-details/job-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/job-details/job-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start content section -->\n<div class=\"pageContent\">\n\n  <!-- Start searchBar -->\n  <div class=\"row searchBar\">\n    <div class=\" col-xs-12 col-sm-8\">\n      <h5>\n        <i class=\"fas fa-briefcase\"></i>&nbsp;&nbsp;Frontend Developer\n      </h5>\n    </div>\n\n    <div class=\" col-xs-12 col-sm-4 findPeople\">\n\n      <button type=\"button\" class=\"btn btn-outline\">\n        <i class=\"fas fa-briefcase\"></i>&nbsp;&nbsp;&nbsp;Find Other Jobs\n      </button>\n\n    </div>\n  </div>\n  <!-- End searchBar -->\n\n  <!-- Start cards contant -->\n  <div class=\"container\">\n\n    <div class=\"JobDetails\">\n\n      <div class=\"job-title\">\n        <p>\n          <i class=\"fas fa-map-marker-alt\"></i>&nbsp;&nbsp;Egypt\n        </p>\n        <p>\n          <i class=\"far fa-calendar-alt\"></i>&nbsp;&nbsp;\n          <span>Experience Years:</span>&nbsp; 3 - 5 years\n        </p>\n        <p>\n          <i class=\"far fa-money-bill-alt\"></i>&nbsp;&nbsp;\n          <span>Salary:</span>&nbsp; 6000 - 8000 egp\n        </p>\n        <p>\n            <i class=\"far fa-clock\"></i>&nbsp;&nbsp;\n            <span>Daily Hours:</span>&nbsp;\n            9 am - 5 pm\n          </p>\n      </div>\n\n      <hr>\n\n      <div class=\"jobDescription\">\n        <h5>Job Description</h5>\n        <p>We are looking for a dedicated, resourceful, and friendly Customer Success Specialist to join our team. We are a\n          small team and need a self-starter, and highly motivated person to learn all the ins and outs of Parent.\n        </p>\n      </div>\n\n      <hr>\n\n      <div class=\"skills\">\n        <h5>Skills</h5>\n        <ul>\n          <li>Fully understand the current and future Parent™ system</li>\n          <li>Act as liaison between customers and the technical team</li>\n          <li>Onboard new customers</li>\n          <li>Increase interaction with current customers</li>\n          <li>Respond to customer inquiries via phone, email, or chat in a timely manner</li>\n          <li>Create, manage, and follow up on customer tickets until they are resolved</li>\n          <li>Record all activities using our current CRM to enhance visibility</li>\n          <li>Follow the current internal customer success process and improve on it</li>\n        </ul>\n      </div>\n\n      <hr>\n\n      <div class=\"requireQualification\">\n        <h5>Required Qualification</h5>\n        <ul>\n          <li>Bachelor’s Degree</li>\n          <li>Previous customer support experience preferred</li>\n          <li>Excellent written and verbal communication skills</li>\n          <li>Strong organizational skills</li>\n        </ul>\n      </div>\n\n      <hr>\n\n      <div class=\"contactData\">\n        <h6 class=\"contactTitle\">\n          <i class=\"fas fa-globe\"></i>&nbsp; Website\n        </h6>\n        <p>www.rafalgroup.net</p>\n\n        <h6 class=\"contactTitle\">\n          <i class=\"fas fa-mobile-alt\"></i>&nbsp; Phone\n        </h6>\n        <p>+20 109 413 2184</p>\n\n        <h6 class=\"contactTitle\">\n          <i class=\"fas fa-at\"></i>&nbsp; Email\n        </h6>\n        <p>admin@rafalgroup.net</p>\n\n        <h6 class=\"contactTitle\">\n          <i class=\"fas fa-map-marker-alt\"></i>&nbsp; Address\n        </h6>\n        <p>شبين الكوم شارع الجلاء البحري برج هيلتون.الدور السادس</p>\n      </div>\n\n\n    </div>\n\n  </div>\n  <!-- End cards containt -->\n\n</div>\n<!-- End content section -->\n"

/***/ }),

/***/ "./src/app/component/job-details/job-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/job-details/job-details.component.ts ***!
  \****************************************************************/
/*! exports provided: JobDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsComponent", function() { return JobDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobDetailsComponent = /** @class */ (function () {
    function JobDetailsComponent() {
    }
    JobDetailsComponent.prototype.ngOnInit = function () {
    };
    JobDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-details',
            template: __webpack_require__(/*! ./job-details.component.html */ "./src/app/component/job-details/job-details.component.html"),
            styles: [__webpack_require__(/*! ./job-details.component.css */ "./src/app/component/job-details/job-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JobDetailsComponent);
    return JobDetailsComponent;
}());



/***/ }),

/***/ "./src/app/component/loginmodal/loginmodal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/loginmodal/loginmodal.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.modal-sm .modal-content {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 67%;\r\n    pointer-events: auto;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0,0,0,.2);\r\n    border-radius: .3rem;\r\n    outline: 0;\r\n    margin: auto;\r\n}\r\n.modal-content {\r\n    border: none;\r\n}*/\r\n\r\n.modal-dialog {\r\n  max-width: 285px;\r\n}\r\n\r\n.is-invalid {\r\n  border-color: #dc3545 !important;\r\n}\r\n\r\n.is-valid {\r\n  border-color: #28a745 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/loginmodal/loginmodal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/loginmodal/loginmodal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"large\" color=\"#fff\" type=\"ball-spin\"></ngx-spinner> -->\n\n\n<form [formGroup]=\"loginForm\">\n  <div class=\"modal-header\">\n\n    <div id=\"dialog-sizes-name2\" class=\"modal-title pull-top\">\n      <div class=\"modal-icon\">\n        <i class=\"ic fas fa-lock-open\"></i>\n      </div>\n      <h5>Log In</h5>\n      <hr>\n      <!-- <div class=\"modal-icon\">\n              <i class=\"ic fas fa-lock-open\"></i>\n            </div>\n         <h4 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\">Log in</h4> \n         <hr> -->\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form log\">\n\n      <input class=\"text\" type=\"text\" name=\"phone\" placeholder=\"User name\" formControlName=\"phonen\" [(ngModel)]=\"phoneNumber\"\n        [ngClass]=\"{ 'is-invalid': loginForm.get('phonen').touched && loginForm.get('phonen').hasError('required'),\n        'is-valid':loginForm.get('phonen').touched && !loginForm.get('phonen').hasError('required') }\" />\n      <input class=\"text\" type=\"password\" name=\"password\" placeholder=\"Password\" formControlName=\"pass\" [(ngModel)]=\"Password\"\n        [ngClass]=\"{ 'is-invalid': loginForm.get('pass').touched && loginForm.get('pass').hasError('required'),\n      'is-valid':loginForm.get('pass').touched && !loginForm.get('pass').hasError('required') }\" />\n      <select formControlName=\"countrycode\" [(ngModel)]=\"contryCode\">\n        <option value=\"{{country}}\" *ngFor=\"let country of countries\">{{country}}</option>\n      </select>\n      <a class=\"sign\" (click)=\"openforgetmodal()\">forget password?</a>\n      <a class=\"nav-link sign\" (click)=\"opensignupmodal()\">Dont have\n        account.Sign Up</a>\n    </div>\n    <div class=\"modal-footer\">\n\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"loginData()\" [disabled]=\"!loginForm.valid \">Log in</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/component/loginmodal/loginmodal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/loginmodal/loginmodal.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginmodalComponent", function() { return LoginmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _forgetmodal_forgetmodal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forgetmodal/forgetmodal.component */ "./src/app/component/forgetmodal/forgetmodal.component.ts");
/* harmony import */ var _signupmodal_signupmodal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signupmodal/signupmodal.component */ "./src/app/component/signupmodal/signupmodal.component.ts");
/* harmony import */ var _verfiymodal_verfiymodal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../verfiymodal/verfiymodal.component */ "./src/app/component/verfiymodal/verfiymodal.component.ts");
/* harmony import */ var _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared/authention.service */ "./src/app/services/shared/authention.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_user_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/shared/user-data.service */ "./src/app/services/shared/user-data.service.ts");
/* harmony import */ var _services_shared_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/shared/session.service */ "./src/app/services/shared/session.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var LoginmodalComponent = /** @class */ (function () {
    function LoginmodalComponent(bsModalRef, modalService, autherService, builder, userService, deviceService, spinner, router, toastr) {
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.autherService = autherService;
        this.builder = builder;
        this.userService = userService;
        this.deviceService = deviceService;
        this.spinner = spinner;
        this.router = router;
        this.toastr = toastr;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Password = null;
        this.phoneNumber = null;
        this.countries = [];
        this.loginForm = this.builder.group({
            "phonen": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
            'pass': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            "countrycode": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.getCountryCode();
        this.DeviceTypeFunction();
    }
    LoginmodalComponent.prototype.ngOnInit = function () {
    };
    LoginmodalComponent.prototype.openforgetmodal = function () {
        this.bsModalRef.hide();
        this.bsModalRef = this.modalService.show(_forgetmodal_forgetmodal_component__WEBPACK_IMPORTED_MODULE_2__["ForgetmodalComponent"], { class: 'modal-sm' });
    };
    LoginmodalComponent.prototype.opensignupmodal = function () {
        this.bsModalRef.hide();
        this.bsModalRef = this.modalService.show(_signupmodal_signupmodal_component__WEBPACK_IMPORTED_MODULE_3__["SignupmodalComponent"], { class: 'modal-sm' });
    };
    LoginmodalComponent.prototype.openverfiy = function () {
        this.bsModalRef.hide();
        this.bsModalRef = this.modalService.show(_verfiymodal_verfiymodal_component__WEBPACK_IMPORTED_MODULE_4__["VerfiymodalComponent"], { class: 'modal-sm' });
    };
    LoginmodalComponent.prototype.loginData = function () {
        var _this = this;
        console.log(this.loginForm);
        var lang;
        if (localStorage.getItem('lang') == 'en') {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        var data = {
            "userName": this.phoneNumber,
            "password": this.Password,
            "lang": lang,
            "code": this.contryCode,
            "deviceType": this.deviceType,
            "bowerType": this.bowerType,
            "OS": this.OS
        };
        this.spinner.show();
        this.autherService.Signin(data).subscribe(function (data) {
            _this.action.emit(data);
            console.log(data);
            _services_shared_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"].saveDataInLocalStorage(data);
            // console.log();
            localStorage.setItem('type', data.userDetails.type);
            _this.bsModalRef.hide();
            _this.spinner.hide();
            if (data.userDetails.type == 'Company') {
                _this.router.navigate(['layout/Users']);
            }
            var option = {
                timeOut: 5000,
                progressBar: true
            };
            _this.toastr.success('Login successfully!', 'Welcome', option);
        }, function (error) {
            var option = {
                timeOut: 5000,
                progressBar: true
            };
            console.log(error);
            if (error.errorCode == "4000") {
                _services_shared_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"].singinSaveData(_this.phoneNumber, _this.Password, _this.contryCode);
                _this.openverfiy();
            }
            else if (error.errorCode == "4001") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4002") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4003") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4004") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4005") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4006") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4007") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4009") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4010") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4011") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4012") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4013") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4014") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4015") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4016") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4018") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4023") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4037") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4041") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4043") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4044") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "1013") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "3004") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "3009") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            _this.spinner.hide();
        });
    };
    LoginmodalComponent.prototype.getCountryCode = function () {
        var _this = this;
        this.userService.getcountriesphpicklistcodes().subscribe(function (data) {
            console.log(data);
            _this.countries = data;
            _this.contryCode = _this.countries[0];
        }, function (error) {
        });
    };
    LoginmodalComponent.prototype.DeviceTypeFunction = function () {
        var deviceInfo = this.deviceService.getDeviceInfo();
        var isMobile = this.deviceService.isMobile();
        var isTablet = this.deviceService.isTablet();
        var isDesktopDevice = this.deviceService.isDesktop();
        if (isMobile) {
            this.deviceType = "Mobile";
        }
        else if (isTablet) {
            this.deviceType = "Tablet";
        }
        else if (isDesktopDevice) {
            this.deviceType = "DesktopDevice";
        }
        this.bowerType = deviceInfo.browser + '-' + deviceInfo.browser_version;
        this.OS = deviceInfo.os + '-' + deviceInfo.os_version;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginmodalComponent.prototype, "action", void 0);
    LoginmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginmodal',
            template: __webpack_require__(/*! ./loginmodal.component.html */ "./src/app/component/loginmodal/loginmodal.component.html"),
            styles: [__webpack_require__(/*! ./loginmodal.component.css */ "./src/app/component/loginmodal/loginmodal.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_5__["AuthentionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _services_shared_user_data_service__WEBPACK_IMPORTED_MODULE_7__["UserDataService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__["DeviceDetectorService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]])
    ], LoginmodalComponent);
    return LoginmodalComponent;
}());



/***/ }),

/***/ "./src/app/component/resetmodal/resetmodal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/resetmodal/resetmodal.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n    border-color: #dc3545 !important;\r\n  }\r\n  \r\n  .is-valid {\r\n    border-color: #28a745 !important;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/component/resetmodal/resetmodal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/resetmodal/resetmodal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"editFormPass\">\n  <div class=\" bd-example-modal-sm\" id=\"reset\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\">\n      <div class=\"modal-content\">\n\n        <div class=\"modal-header\">\n          <div class=\"modal-title\" id=\"exampleModalLabel\">\n            <div class=\"modal-icon\">\n\n            </div>\n            <h5>Reset</h5>\n            <hr>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form reset\">\n            <input class=\"text\" type=\"password\" name=\"text\" placeholder=\"Old Password\" formControlName=\"oldpass\" [(ngModel)]=\"Oldpass\"\n              [ngClass]=\"{ 'is-invalid': hasError('oldpass','required'),\n          'is-valid':editFormPass.get('oldpass').touched && !hasError('oldpass','required')  }\"\n              required />\n            <input class=\"text\" type=\"password\" name=\"text\" placeholder=\"New Password\" formControlName=\"newpass\"\n              [(ngModel)]=\"Newpass\" [ngClass]=\"{ 'is-invalid': hasError('newpass','required'),\n          'is-valid':editFormPass.get('newpass').touched && !hasError('newpass','required')  }\"\n              required />\n            <input class=\"text\" type=\"password\" name=\"text\" placeholder=\" Confirm Password\" formControlName=\"confirmnewpass\"\n              [(ngModel)]=\"Confirmnewpass\" [ngClass]=\"{ 'is-invalid': hasError('confirmnewpass','required'),\n          'is-valid':editFormPass.get('confirmnewpass').touched && !hasError('confirmnewpass','required')  }\"\n              required />\n            <button type=\"button\" class=\"btn btn-secondary\" [disabled]=\"!editFormPass.valid || (editFormPass.value.newpass !== editFormPass.value.confirmnewpass) \"\n              (click)=\"changePass()\">Change</button>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/component/resetmodal/resetmodal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/resetmodal/resetmodal.component.ts ***!
  \**************************************************************/
/*! exports provided: ResetmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetmodalComponent", function() { return ResetmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shared/authention.service */ "./src/app/services/shared/authention.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetmodalComponent = /** @class */ (function () {
    function ResetmodalComponent(bsModalRef, builder, autherService, spinner, toastr) {
        this.bsModalRef = bsModalRef;
        this.builder = builder;
        this.autherService = autherService;
        this.spinner = spinner;
        this.toastr = toastr;
        console.log("ddddd");
        this.editFormPass = this.builder.group({
            oldpass: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newpass: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmnewpass: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ResetmodalComponent.prototype.ngOnInit = function () {
    };
    ResetmodalComponent.prototype.changePass = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        this.autherService.changePassword(this.Oldpass, this.Newpass).subscribe(function (data) {
            _this.toastr.success('Password Changeed', 'successfully', option);
            localStorage.setItem("token", data.tkn);
            _this.spinner.hide();
            _this.bsModalRef.hide();
        }, function (error) {
            _this.toastr.error(error.errorCode, error.message, option);
            _this.spinner.hide();
        });
    };
    ResetmodalComponent.prototype.hasError = function (field, error) {
        var ctrl = this.editFormPass.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    ResetmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resetmodal',
            template: __webpack_require__(/*! ./resetmodal.component.html */ "./src/app/component/resetmodal/resetmodal.component.html"),
            styles: [__webpack_require__(/*! ./resetmodal.component.css */ "./src/app/component/resetmodal/resetmodal.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_3__["AuthentionService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ResetmodalComponent);
    return ResetmodalComponent;
}());



/***/ }),

/***/ "./src/app/component/search-job/search-job.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/search-job/search-job.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pageContent {\r\n  margin: 20px auto;\r\n}\r\n\r\n.pageContent .searchBar {\r\n  margin: 0;\r\n  background: #f9f9f9;\r\n  border: 1px solid #eee;\r\n  padding: 20px;\r\n}\r\n\r\n.pageContent .searchBar form input {\r\n  width: 60%;\r\n  border: 0;\r\n  box-shadow: 0 2px 6px 0px #ddd;\r\n}\r\n\r\n.pageContent .searchBar form button {\r\n  background: #099;\r\n  color: #fff;\r\n  height: 38px;\r\n  margin-left: -50px;\r\n  border-radius: 0 5px 5px 0;\r\n}\r\n\r\n.pageContent .searchBar .findPeople {\r\n  text-align: right;\r\n}\r\n\r\n.pageContent .searchBar .findPeople button {\r\n  color: #ab0005;\r\n  background: transparent;\r\n  border: 1px solid;\r\n  padding: 5px 35px;\r\n  box-shadow: 0 2px 6px 0px #ddd;\r\n}\r\n\r\n.pageContent .cardsContent .row {\r\n  margin: 0;\r\n}\r\n\r\n.pageContent .cardsContent .card {\r\n  margin: 50px 0 0;\r\n  border: 1px solid #eee;\r\n}\r\n\r\n.pageContent .cardsContent .card:hover {\r\n  box-shadow: 0 30px 20px -27px #d8d8d8;\r\n  cursor: pointer;\r\n}\r\n\r\n.pageContent .cardsContent .card-title {\r\n  background: #f9f9f9;\r\n  padding: 25px 30px 10px;\r\n  margin: 0;\r\n}\r\n\r\n.pageContent .cardsContent .card-title i {\r\n  width: 20px;\r\n  color: #099;\r\n}\r\n\r\n.pageContent .cardsContent .card-title h6 {\r\n  color: #099;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.pageContent .cardsContent .card-title p {\r\n  color: #000;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.pageContent .cardsContent .card-body {\r\n  padding: 10px 20px;\r\n}\r\n\r\n.pageContent .cardsContent .card-body .card-text {\r\n  text-align: justify;\r\n  height: 130px;\r\n  overflow: hidden;\r\n}\r\n\r\n.pageContent .cardsContent .card-links {\r\n  margin: 14px 0 0;\r\n}\r\n\r\n.pageContent .cardsContent .card-links .moreBtn {\r\n  background: transparent;\r\n  color: #ab0005;\r\n  padding: 0;\r\n}\r\n\r\n.pageContent .cardsContent .card-links .moreBtn i {\r\n  font-size: 12px;\r\n  border: 1px solid;\r\n  border-radius: 50%;\r\n  width: 25px;\r\n  height: 25px;\r\n  line-height: 23px;\r\n}\r\n\r\n.pageContent .cardsContent .card-links .card-date {\r\n  color: #cecece;\r\n  font-size: 15px;\r\n  float: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/search-job/search-job.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/search-job/search-job.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start content section -->\n<div class=\"pageContent\">\n\n  <!-- Start searchBar -->\n  <div class=\"row searchBar\">\n    <div class=\" col-xs-12 col-sm-8\">\n      <form class=\"form-inline\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search by job name\" aria-label=\"Search\">\n        <button class=\"btn my-2 my-sm-0\" type=\"submit\">\n          <i class=\"fas fa-search\"></i>\n        </button>\n      </form>\n    </div>\n\n    <div class=\" col-xs-12 col-sm-4 findPeople\">\n\n      <button type=\"button\" class=\"btn btn-outline\">\n        <i class=\"fas fa-users\"></i>&nbsp;&nbsp;&nbsp;Find Employees\n      </button>\n\n    </div>\n  </div>\n  <!-- End searchBar -->\n\n  <!-- Start cards contant -->\n  <div class=\"container cardsContent\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-4\">\n        <div class=\"card\">\n\n\n          <div class=\"card-title\">\n            <h6>\n              <i class=\"fas fa-briefcase\"></i>&nbsp;&nbsp;Frontend Developer\n            </h6>\n            <p>\n              <i class=\"fas fa-map-marker-alt\"></i>&nbsp;&nbsp;Egypt\n            </p>\n            <p>\n              <i class=\"far fa-calendar-alt\"></i>&nbsp;&nbsp;\n              <span>Experience Years</span>&nbsp; 3 - 5 year\n            </p>\n            <p>\n              <i class=\"far fa-money-bill-alt\"></i>&nbsp;&nbsp;\n              <span>Salary</span>&nbsp; 6000 - 8000 egp\n            </p>\n          </div>\n          <div class=\"card-body\">\n\n            <div class=\"card-text\">\n              <p>Designing and developing static or dynamic responsive website. Using CMS like Wordpress, Joomla, opencart and\n                e-commerce when needed. Using 5/CSS3 jquery, javascript.. Designing PSD when required, slicing and coding.\n                PHP when required. Managing Hosting server and mail servers. Using SEO, Google analytic, when required</p>\n            </div>\n\n            <div class=\"card-links\">\n              <div class=\"card-link\">\n                <button type=\"button\" class=\"btn btn-outline moreBtn\">\n                  <i class=\"fas fa-ellipsis-h\"></i>&nbsp; More\n                </button>\n                <span class=\"card-date\">11h ago</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-title\">\n            <h6>\n              <i class=\"fas fa-briefcase\"></i>&nbsp;&nbsp;Frontend Developer\n            </h6>\n            <p>\n              <i class=\"fas fa-map-marker-alt\"></i>&nbsp;&nbsp;Egypt\n            </p>\n            <p>\n              <i class=\"far fa-calendar-alt\"></i>&nbsp;&nbsp;\n              <span>Experience Years</span>&nbsp; 3 - 5 year\n            </p>\n            <p>\n              <i class=\"far fa-money-bill-alt\"></i>&nbsp;&nbsp;\n              <span>Salary</span>&nbsp; 6000 - 8000 egp\n            </p>\n          </div>\n          <div class=\"card-body\">\n\n            <div class=\"card-text\">\n              <p>Designing and developing static or dynamic responsive website. Using CMS like Wordpress, Joomla, opencart and\n                e-commerce when needed. Using 5/CSS3 jquery, javascript.. Designing PSD when required, slicing and coding.\n                PHP when required. Managing Hosting server and mail servers. Using SEO, Google analytic, when required</p>\n            </div>\n\n            <div class=\"card-links\">\n              <div class=\"card-link\">\n                <button type=\"button\" class=\"btn btn-outline moreBtn\">\n                  <i class=\"fas fa-ellipsis-h\"></i>&nbsp; More\n                </button>\n                <span class=\"card-date\">11h ago</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-title\">\n            <h6>\n              <i class=\"fas fa-briefcase\"></i>&nbsp;&nbsp;Frontend Developer\n            </h6>\n            <p>\n              <i class=\"fas fa-map-marker-alt\"></i>&nbsp;&nbsp;Egypt\n            </p>\n            <p>\n              <i class=\"far fa-calendar-alt\"></i>&nbsp;&nbsp;\n              <span>Experience Years</span>&nbsp; 3 - 5 year\n            </p>\n            <p>\n              <i class=\"far fa-money-bill-alt\"></i>&nbsp;&nbsp;\n              <span>Salary</span>&nbsp; 6000 - 8000 egp\n            </p>\n          </div>\n          <div class=\"card-body\">\n\n            <div class=\"card-text\">\n              <p>Designing and developing static or dynamic responsive website. Using CMS like Wordpress, Joomla, opencart and\n                e-commerce when needed. Using 5/CSS3 jquery, javascript.. Designing PSD when required, slicing and coding.\n                PHP when required. Managing Hosting server and mail servers. Using SEO, Google analytic, when required</p>\n            </div>\n\n            <div class=\"card-links\">\n              <div class=\"card-link\">\n                <button type=\"button\" class=\"btn btn-outline moreBtn\">\n                  <i class=\"fas fa-ellipsis-h\"></i>&nbsp; More\n                </button>\n                <span class=\"card-date\">11h ago</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-title\">\n            <h6>\n              <i class=\"fas fa-briefcase\"></i>&nbsp;&nbsp;Frontend Developer\n            </h6>\n            <p>\n              <i class=\"fas fa-map-marker-alt\"></i>&nbsp;&nbsp;Egypt\n            </p>\n            <p>\n              <i class=\"far fa-calendar-alt\"></i>&nbsp;&nbsp;\n              <span>Experience Years</span>&nbsp; 3 - 5 year\n            </p>\n            <p>\n              <i class=\"far fa-money-bill-alt\"></i>&nbsp;&nbsp;\n              <span>Salary</span>&nbsp; 6000 - 8000 egp\n            </p>\n          </div>\n          <div class=\"card-body\">\n\n            <div class=\"card-text\">\n              <p>Designing and developing static or dynamic responsive website. Using CMS like Wordpress, Joomla, opencart and\n                e-commerce when needed. Using 5/CSS3 jquery, javascript.. Designing PSD when required, slicing and coding.\n                PHP when required. Managing Hosting server and mail servers. Using SEO, Google analytic, when required</p>\n            </div>\n\n            <div class=\"card-links\">\n              <div class=\"card-link\">\n                <button type=\"button\" class=\"btn btn-outline moreBtn\">\n                  <i class=\"fas fa-ellipsis-h\"></i>&nbsp; More\n                </button>\n                <span class=\"card-date\">11h ago</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4\">\n        <div class=\"card\">\n          <div class=\"card-title\">\n            <h6>\n              <i class=\"fas fa-briefcase\"></i>&nbsp;&nbsp;Frontend Developer\n            </h6>\n            <p>\n              <i class=\"fas fa-map-marker-alt\"></i>&nbsp;&nbsp;Egypt\n            </p>\n            <p>\n              <i class=\"far fa-calendar-alt\"></i>&nbsp;&nbsp;\n              <span>Experience Years</span>&nbsp; 3 - 5 year\n            </p>\n            <p>\n              <i class=\"far fa-money-bill-alt\"></i>&nbsp;&nbsp;\n              <span>Salary</span>&nbsp; 6000 - 8000 egp\n            </p>\n          </div>\n          <div class=\"card-body\">\n\n            <div class=\"card-text\">\n              <p>Designing and developing static or dynamic responsive website. Using CMS like Wordpress, Joomla, opencart and\n                e-commerce when needed. Using 5/CSS3 jquery, javascript.. Designing PSD when required, slicing and coding.\n                PHP when required. Managing Hosting server and mail servers. Using SEO, Google analytic, when required</p>\n            </div>\n\n            <div class=\"card-links\">\n              <div class=\"card-link\">\n                <button type=\"button\" class=\"btn btn-outline moreBtn\">\n                  <i class=\"fas fa-ellipsis-h\"></i>&nbsp; More\n                </button>\n                <span class=\"card-date\">11h ago</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End cards containt -->\n\n</div>\n<!-- End content section -->\n"

/***/ }),

/***/ "./src/app/component/search-job/search-job.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/search-job/search-job.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchJobComponent", function() { return SearchJobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchJobComponent = /** @class */ (function () {
    function SearchJobComponent() {
    }
    SearchJobComponent.prototype.ngOnInit = function () {
    };
    SearchJobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-job',
            template: __webpack_require__(/*! ./search-job.component.html */ "./src/app/component/search-job/search-job.component.html"),
            styles: [__webpack_require__(/*! ./search-job.component.css */ "./src/app/component/search-job/search-job.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchJobComponent);
    return SearchJobComponent;
}());



/***/ }),

/***/ "./src/app/component/services/certified/certified.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/component/services/certified/certified.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n    border-color: #dc3545 !important;\r\n  }\r\n  \r\n  .is-valid {\r\n    border-color: #28a745 !important;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/component/services/certified/certified.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/component/services/certified/certified.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"certifiedForm\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\" id=\"exampleModalLabel\">\n      <div class=\"modal-icon\">\n        <i class=\"ic fas fa-language\"></i>\n      </div>\n      <h5><span>Certified</span> Translation</h5>\n      <hr>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form translation\">\n      <span>Upload the translation file :</span>\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" formControlName=\"imageblob1\" [(ngModel)]=\"imageBlob1\"\n          [ngClass]=\"{ 'is-invalid': certifiedForm.get('imageblob1').touched && certifiedForm.get('imageblob1').hasError('required'),\n          'is-valid':certifiedForm.get('imageblob1').touched && !certifiedForm.get('imageblob1').hasError('required') }\"\n          (change)=\"processFile($event,1)\" accept=\"image/* , .doc , .docx ,.pdf\" required aria-describedby=\"inputGroupFileAddon01\">\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 == ''\">no file choosen</label>\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 != ''\">{{pictureName1}} </label>\n      </div>\n\n\n\n\n      <select class=\"text select\" type=\"text\" name=\"text\" placeholder=\"Type of Translation\" formControlName=\"typeOfTranslate\"\n        [(ngModel)]=\"TypeOfTranslate\" [ngClass]=\"{ 'is-invalid': hasError('typeOfTranslate','required'),'is-valid':certifiedForm.get('typeOfTranslate').touched && !hasError('typeOfTranslate','required')  }\"\n        required>\n        <option *ngFor=\"let type of arrayTypeLang\" value=\"{{type.code}}\">{{type.value}}</option>\n\n      </select>\n\n      <select class=\"text select\" type=\"text\" name=\"text\" placeholder=\"To which Language\" formControlName=\"toLang\"\n        [(ngModel)]=\"ToLang\" [ngClass]=\"{ 'is-invalid': hasError('toLang','required'),'is-valid':certifiedForm.get('toLang').touched && !hasError('toLang','required')  }\"\n        required>\n        <option *ngFor=\"let type of arrayLang\" value=\"{{type.code}}\">{{type.value}}</option>\n\n      </select>\n\n\n\n\n      <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Responsible Of Recieving\" formControlName=\"responsibleOfRecieving\"\n        [(ngModel)]=\"ResponsibleOfRecieving\" [ngClass]=\"{ 'is-invalid': hasError('responsibleOfRecieving','required') ||  hasError('responsibleOfRecieving','maxlength'),\n      'is-valid':certifiedForm.get('responsibleOfRecieving').touched && !hasError('responsibleOfRecieving','required') &&  ! hasError('responsibleOfRecieving','maxlength')}\"\n        required />\n\n      <textarea type=\"text\" name=\"text\" placeholder=\"Other (optional)\" formControlName=\"others\" [(ngModel)]=\"Others\"></textarea>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bsModalRef.hide()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"Certified()\" [disabled]=\"!certifiedForm.valid \">Submit</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/component/services/certified/certified.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/services/certified/certified.component.ts ***!
  \*********************************************************************/
/*! exports provided: CertifiedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertifiedComponent", function() { return CertifiedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared/companyservice.service */ "./src/app/services/shared/companyservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CertifiedComponent = /** @class */ (function () {
    function CertifiedComponent(bsModalRef, builder, companyService, toastr, spinner) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.builder = builder;
        this.companyService = companyService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.TypeOfTranslate = null;
        this.ToLang = null;
        this.ResponsibleOfRecieving = null;
        this.Others = null;
        this.fileExtension = "";
        this.pictureName1 = '';
        this.arrayLang = [];
        this.arrayTypeLang = [];
        console.log("ddddd");
        this.certifiedForm = this.builder.group({
            typeOfTranslate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toLang: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            responsibleOfRecieving: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            "imageblob1": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            others: [""]
        });
        var langLocal = localStorage.getItem("lang");
        if (langLocal == "en") {
            langLocal = "English";
        }
        else {
            langLocal = "Arabic";
        }
        this.companyService.getPickListCCJ("Language", langLocal).subscribe(function (data) {
            _this.arrayLang = data;
            _this.ToLang = _this.arrayLang[0].code;
        }, function (error) {
            console.log(error);
        });
        this.companyService.getPickListCCJ("Translation_Type", langLocal).subscribe(function (data) {
            _this.arrayTypeLang = data;
            _this.TypeOfTranslate = _this.arrayTypeLang[0].code;
        }, function (error) {
            console.log(error);
        });
    }
    CertifiedComponent.prototype.ngOnInit = function () {
    };
    CertifiedComponent.prototype.Certified = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        this.companyService.CertifiedService(this.TypeOfTranslate, this.ToLang, this.ResponsibleOfRecieving, this.Others, this.fileExtension, this.file1).subscribe(function (data) {
            _this.toastr.success('Uploaded ', 'successfully', option);
            _this.spinner.hide();
            _this.bsModalRef.hide();
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error(error.errorCode, error.message, option);
        });
    };
    // get image
    CertifiedComponent.prototype.processFile = function (event, num) {
        var _this = this;
        if (num == 1) {
            var reader_1 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_1 = event.target.files[0];
                reader_1.readAsArrayBuffer(file_1);
                reader_1.onload = function () {
                    var imgBlob = new Blob([reader_1.result], { type: file_1.type });
                    _this.file1 = imgBlob;
                };
            }
            if (this.imageBlob1 != '') {
                var currentName = this.imageBlob1.substring(this.imageBlob1.lastIndexOf('\\') + 1, this.imageBlob1.length);
                this.pictureName1 = currentName;
                this.fileExtension = currentName.substring(currentName.lastIndexOf('.') + 1, currentName.length);
                console.log("ssss : ", this.fileExtension);
            }
            else {
                this.pictureName1 = '';
                this.fileExtension = '';
            }
        }
    };
    CertifiedComponent.prototype.hasError = function (field, error) {
        var ctrl = this.certifiedForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    CertifiedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-certified',
            template: __webpack_require__(/*! ./certified.component.html */ "./src/app/component/services/certified/certified.component.html"),
            styles: [__webpack_require__(/*! ./certified.component.css */ "./src/app/component/services/certified/certified.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__["CompanyserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], CertifiedComponent);
    return CertifiedComponent;
}());



/***/ }),

/***/ "./src/app/component/services/charter/charter.component.css":
/*!******************************************************************!*\
  !*** ./src/app/component/services/charter/charter.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n  border-color: #dc3545 !important;\r\n}\r\n\r\n.is-valid {\r\n  border-color: #28a745 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/services/charter/charter.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/component/services/charter/charter.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"accountingForm\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\" id=\"exampleModalLabel\">\n      <div class=\"modal-icon\">\n        <i class=\"ic fas fa-calculator\"></i>\n      </div>\n      <h5><span>Charter</span> Accounting</h5>\n      <hr>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form account\">\n      <input class=\"text\" type=\"number\" name=\"phone\" placeholder=\"Year of Budget\" formControlName=\"yearofbudget\"\n        [(ngModel)]=\"yearofBudget\" [ngClass]=\"{ 'is-invalid': accountingForm.get('yearofbudget').touched && accountingForm.get('yearofbudget').hasError('required'),\n        'is-valid':accountingForm.get('yearofbudget').touched && !accountingForm.get('yearofbudget').hasError('required') }\" />\n\n\n      <span>Accounting of the year :</span>\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" formControlName=\"imageblob1\" [(ngModel)]=\"imageBlob1\"\n          [ngClass]=\"{ 'is-invalid': accountingForm.get('imageblob1').touched && accountingForm.get('imageblob1').hasError('required'),\n        'is-valid':accountingForm.get('imageblob1').touched && !accountingForm.get('imageblob1').hasError('required') }\"\n          (change)=\"processFile($event,1)\" accept=\"image/*\" required>\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 == ''\">no image choosen </label>\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 != ''\">{{pictureName1}} </label>\n      </div>\n\n\n      <span>Bank statement : </span>\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\" formControlName=\"imageblob2\" [(ngModel)]=\"imageBlob2\"\n          [ngClass]=\"{ 'is-invalid': accountingForm.get('imageblob2').touched && accountingForm.get('imageblob2').hasError('required'),\n      'is-valid':accountingForm.get('imageblob2').touched && !accountingForm.get('imageblob2').hasError('required') }\"\n          (change)=\"processFile($event,2)\" accept=\"image/*\" required>\n        <label class=\"custom-file-label\" for=\"inputGroupFile02\" *ngIf=\"pictureName2 == ''\">no image choosen </label>\n        <label class=\"custom-file-label\" for=\"inputGroupFile02\" *ngIf=\"pictureName2 != ''\">{{pictureName2}} </label>\n      </div>\n\n\n      <span>Company accounts :</span>\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile03\" formControlName=\"imageblob3\" [(ngModel)]=\"imageBlob3\"\n          [ngClass]=\"{ 'is-invalid': accountingForm.get('imageblob3').touched && accountingForm.get('imageblob3').hasError('required'),\n        'is-valid':accountingForm.get('imageblob3').touched && !accountingForm.get('imageblob3').hasError('required') }\"\n          (change)=\"processFile($event,3)\" accept=\"image/*\" required>\n        <label class=\"custom-file-label\" for=\"inputGroupFile03\" *ngIf=\"pictureName3 == ''\">no image choosen </label>\n        <label class=\"custom-file-label\" for=\"inputGroupFile03\" *ngIf=\"pictureName3 != ''\">{{pictureName3}} </label>\n\n        <textarea type=\"text\" name=\"text\" placeholder=\"Other (optional)\" formControlName=\"other\" [(ngModel)]=\"Other\"></textarea>\n      </div>\n\n\n    </div>\n  </div>\n  <div class=\"modal-footer account-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bsModalRef.hide()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"CharterService()\" [disabled]=\"!accountingForm.valid \">Submit</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/component/services/charter/charter.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/services/charter/charter.component.ts ***!
  \*****************************************************************/
/*! exports provided: CharterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharterComponent", function() { return CharterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared/companyservice.service */ "./src/app/services/shared/companyservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CharterComponent = /** @class */ (function () {
    function CharterComponent(bsModalRef, builder, companyService, toastr, spinner) {
        this.bsModalRef = bsModalRef;
        this.builder = builder;
        this.companyService = companyService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.yearofBudget = null;
        this.Other = null;
        this.pictureName1 = '';
        this.pictureName2 = '';
        this.pictureName3 = '';
        this.accountingForm = this.builder.group({
            "yearofbudget": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            "imageblob1": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            "imageblob2": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            "imageblob3": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            "other": ['']
        });
    }
    CharterComponent.prototype.ngOnInit = function () {
    };
    CharterComponent.prototype.CharterService = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        this.companyService.charterService(this.file1, this.file2, this.file3, this.yearofBudget).subscribe(function (data) {
            _this.bsModalRef.hide();
            _this.spinner.hide();
            _this.toastr.success('Uploaded ', 'successfully', option);
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error(error.errorCode, error.message, option);
        });
    };
    CharterComponent.prototype.processFile = function (event, num) {
        var _this = this;
        if (num == 1) {
            var reader_1 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_1 = event.target.files[0];
                reader_1.readAsArrayBuffer(file_1);
                reader_1.onload = function () {
                    var imgBlob = new Blob([reader_1.result], { type: file_1.type });
                    _this.file1 = imgBlob;
                };
            }
            if (this.imageBlob1 != '') {
                var currentName = this.imageBlob1.substring(this.imageBlob1.lastIndexOf('\\') + 1, this.imageBlob1.length);
                this.pictureName1 = currentName;
            }
            else {
                this.pictureName1 = '';
            }
            // console.log("currentName : ", currentName);
            // console.log("imageBlob1 : ", this.imageBlob1);
        }
        else if (num == 2) {
            var reader_2 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_2 = event.target.files[0];
                reader_2.readAsArrayBuffer(file_2);
                reader_2.onload = function () {
                    var imgBlob = new Blob([reader_2.result], { type: file_2.type });
                    _this.file2 = imgBlob;
                };
            }
            if (this.imageBlob2 != '') {
                var currentName = this.imageBlob2.substring(this.imageBlob2.lastIndexOf('\\') + 1, this.imageBlob2.length);
                this.pictureName2 = currentName;
            }
            else {
                this.pictureName2 = '';
            }
            console.log("file2 : ", this.file2);
        }
        else if (num == 3) {
            var reader_3 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_3 = event.target.files[0];
                reader_3.readAsArrayBuffer(file_3);
                reader_3.onload = function () {
                    var imgBlob = new Blob([reader_3.result], { type: file_3.type });
                    _this.file3 = imgBlob;
                };
            }
            if (this.imageBlob3 != '') {
                var currentName = this.imageBlob3.substring(this.imageBlob3.lastIndexOf('\\') + 1, this.imageBlob3.length);
                this.pictureName3 = currentName;
            }
            else {
                this.pictureName3 = '';
            }
            console.log("file3 : ", this.file3);
        }
    };
    CharterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charter',
            template: __webpack_require__(/*! ./charter.component.html */ "./src/app/component/services/charter/charter.component.html"),
            styles: [__webpack_require__(/*! ./charter.component.css */ "./src/app/component/services/charter/charter.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__["CompanyserviceService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], CharterComponent);
    return CharterComponent;
}());



/***/ }),

/***/ "./src/app/component/services/customs/customs.component.css":
/*!******************************************************************!*\
  !*** ./src/app/component/services/customs/customs.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n  border-color: #dc3545 !important;\r\n}\r\n\r\n.is-valid {\r\n  border-color: #28a745 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/services/customs/customs.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/component/services/customs/customs.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"customsForm\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\" id=\"exampleModalLabel\">\n      <div class=\"modal-icon\">\n        <i class=\"ic fab fa-accusoft\"></i>\n      </div>\n      <h5><span>Customs </span>Clearance</h5>\n      <hr>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form customs\">\n      <span>Upload a copy of the bill of shipment :</span>\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" formControlName=\"imageblob1\" [(ngModel)]=\"imageBlob1\"\n          [ngClass]=\"{ 'is-invalid': customsForm.get('imageblob1').touched && customsForm.get('imageblob1').hasError('required'),\n          'is-valid':customsForm.get('imageblob1').touched && !customsForm.get('imageblob1').hasError('required') }\"\n          (change)=\"processFile($event,1)\" accept=\"image/*\" required>\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 == ''\">no image choosen </label>\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 != ''\">{{pictureName1}} </label>\n      </div>\n      <span>Upload a copy of the authorization :</span>\n\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\" formControlName=\"imageblob2\" [(ngModel)]=\"imageBlob2\"\n          [ngClass]=\"{ 'is-invalid': customsForm.get('imageblob2').touched && customsForm.get('imageblob2').hasError('required'),\n          'is-valid':customsForm.get('imageblob2').touched && !customsForm.get('imageblob2').hasError('required') }\"\n          (change)=\"processFile($event,2)\" accept=\"image/*\" required>\n        <label class=\"custom-file-label\" for=\"inputGroupFile02\" *ngIf=\"pictureName2 == ''\">no image choosen </label>\n        <label class=\"custom-file-label\" for=\"inputGroupFile02\" *ngIf=\"pictureName2 != ''\">{{pictureName2}} </label>\n      </div>\n      <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Port of Shipment\" formControlName=\"shipmentPort\"\n        [(ngModel)]=\"ShipmentPort\" [ngClass]=\"{ 'is-invalid': hasError('shipmentPort','required')|| hasError('shipmentPort','maxlength'),\n        'is-valid':customsForm.get('shipmentPort').touched && !hasError('shipmentPort','required') &&   !hasError('shipmentPort','maxlength') }\"\n        required />\n      <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Shipment Description\" formControlName=\"shipmentDescription\"\n        [(ngModel)]=\"ShipmentDescription\" [ngClass]=\"{ 'is-invalid': hasError('shipmentDescription','required')|| hasError('shipmentDescription','maxlength'),\n        'is-valid':customsForm.get('shipmentDescription').touched && !hasError('shipmentDescription','required') &&   !hasError('shipmentDescription','maxlength') }\"\n        required />\n      <textarea type=\"text\" name=\"text\" placeholder=\"Other (optional)\" formControlName=\"others\" [(ngModel)]=\"Others\"></textarea>\n\n\n\n\n    </div>\n  </div>\n  <div class=\"modal-footer \">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bsModalRef.hide()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!customsForm.valid \" (click)=\"customsService()\">Submit</button>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/component/services/customs/customs.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/services/customs/customs.component.ts ***!
  \*****************************************************************/
/*! exports provided: CustomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomsComponent", function() { return CustomsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared/companyservice.service */ "./src/app/services/shared/companyservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomsComponent = /** @class */ (function () {
    function CustomsComponent(bsModalRef, builder, companyService, toastr, spinner) {
        this.bsModalRef = bsModalRef;
        this.builder = builder;
        this.companyService = companyService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.Other = null;
        this.pictureName1 = '';
        this.pictureName2 = '';
        this.ShipmentPort = null;
        this.ShipmentDescription = null;
        this.Others = null;
        console.log("ddddd");
        this.customsForm = this.builder.group({
            "imageblob1": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            "imageblob2": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            shipmentPort: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            shipmentDescription: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            "others": ['']
        });
    }
    CustomsComponent.prototype.ngOnInit = function () {
    };
    CustomsComponent.prototype.customsService = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        this.companyService.CustomClearanceService(this.ShipmentPort, this.ShipmentDescription, this.Others, this.file1, this.file2).subscribe(function (data) {
            _this.bsModalRef.hide();
            _this.spinner.hide();
            _this.toastr.success('Uploaded ', 'successfully', option);
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error(error.errorCode, error.message, option);
        });
    };
    CustomsComponent.prototype.processFile = function (event, num) {
        var _this = this;
        if (num == 1) {
            var reader_1 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_1 = event.target.files[0];
                reader_1.readAsArrayBuffer(file_1);
                reader_1.onload = function () {
                    var imgBlob = new Blob([reader_1.result], { type: file_1.type });
                    _this.file1 = imgBlob;
                };
            }
            if (this.imageBlob1 != '') {
                var currentName = this.imageBlob1.substring(this.imageBlob1.lastIndexOf('\\') + 1, this.imageBlob1.length);
                this.pictureName1 = currentName;
            }
            else {
                this.pictureName1 = '';
            }
        }
        else if (num == 2) {
            var reader_2 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_2 = event.target.files[0];
                reader_2.readAsArrayBuffer(file_2);
                reader_2.onload = function () {
                    var imgBlob = new Blob([reader_2.result], { type: file_2.type });
                    _this.file2 = imgBlob;
                };
            }
            if (this.imageBlob2 != '') {
                var currentName = this.imageBlob2.substring(this.imageBlob2.lastIndexOf('\\') + 1, this.imageBlob2.length);
                this.pictureName2 = currentName;
            }
            else {
                this.pictureName2 = '';
            }
        }
    };
    CustomsComponent.prototype.hasError = function (field, error) {
        var ctrl = this.customsForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    CustomsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customs',
            template: __webpack_require__(/*! ./customs.component.html */ "./src/app/component/services/customs/customs.component.html"),
            styles: [__webpack_require__(/*! ./customs.component.css */ "./src/app/component/services/customs/customs.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__["CompanyserviceService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], CustomsComponent);
    return CustomsComponent;
}());



/***/ }),

/***/ "./src/app/component/services/employment/employment.component.css":
/*!************************************************************************!*\
  !*** ./src/app/component/services/employment/employment.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n    border-color: #dc3545 !important;\r\n  }\r\n  \r\n  .is-valid {\r\n    border-color: #28a745 !important;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/component/services/employment/employment.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/component/services/employment/employment.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"employmentForm\">\n    <div class=\"modal-header\">\n      <div class=\"modal-title\" id=\"exampleModalLabel\">\n        <div class=\"modal-icon\">\n          <i class=\"ic fas fa-handshake\"></i>\n        </div>\n        <h5>Employment</h5>\n        <hr>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form employ\">\n        <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Activity\" \n        formControlName=\"activity\" [(ngModel)]=\"Activity\"\n        [ngClass]=\"{ 'is-invalid': hasError('activity','required') || hasError('activity','maxlength'),\n        'is-valid':employmentForm.get('activity').touched && !hasError('activity','required') &&  !hasError('activity','maxlength')}\"\n        required />\n        <select class=\"text select\" type=\"text\" name=\"text\" placeholder=\"Job Title\"  \n        formControlName=\"job\" [(ngModel)]=\"Job\" \n        [ngClass]=\"{ 'is-invalid': hasError('job','required'),'is-valid':employmentForm.get('job').touched && !hasError('job','required')  }\"\n        required>\n          <option  *ngFor=\"let job of jobTitle\" value=\"{{job.code}}\">{{job.value}}</option>\n         \n       </select>\n        <input class=\"text\" type=\"number\" name=\"text\" placeholder=\"Salary\" \n        formControlName=\"salary\" [(ngModel)]=\"Salary\"\n        [ngClass]=\"{ 'is-invalid': hasError('salary','required') || employmentForm.get('salary').minlength,\n        'is-valid':employmentForm.get('salary').touched && !hasError('salary','required') &&  ! employmentForm.get('salary').minlength}\"\n        required/>\n        <span>Upload your CV :</span>\n        <div class=\"custom-file\">\n          <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" \n          formControlName=\"imageblob1\" [(ngModel)]=\"imageBlob1\"\n          [ngClass]=\"{ 'is-invalid': employmentForm.get('imageblob1').touched && employmentForm.get('imageblob1').hasError('required'),\n          'is-valid':employmentForm.get('imageblob1').touched && !employmentForm.get('imageblob1').hasError('required') }\"\n          (change)=\"processFile($event,1)\"\n          accept=\"image/* , .doc , .docx ,.pdf\"\n          required\n          aria-describedby=\"inputGroupFileAddon01\">\n          <label class=\"custom-file-label\" for=\"inputGroupFile01\"  *ngIf=\"pictureName1 == ''\">no file choosen</label>\n          <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 != ''\">{{pictureName1}} </label>\n        </div>\n        <textarea type=\"text\" name=\"text\" placeholder=\"Other (optional)\" formControlName=\"others\" [(ngModel)]=\"Others\"></textarea>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bsModalRef.hide()\">Cancel </button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"employmentService()\" [disabled]=\"!employmentForm.valid \">Submit</button>\n    </div>\n  </form>\n"

/***/ }),

/***/ "./src/app/component/services/employment/employment.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/services/employment/employment.component.ts ***!
  \***********************************************************************/
/*! exports provided: EmploymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentComponent", function() { return EmploymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared/companyservice.service */ "./src/app/services/shared/companyservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmploymentComponent = /** @class */ (function () {
    function EmploymentComponent(bsModalRef, builder, companyService, toastr, spinner) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.builder = builder;
        this.companyService = companyService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.Activity = null;
        this.job = null;
        this.Salary = null;
        this.fileExtension = "";
        this.jobTitle = [];
        this.pictureName1 = '';
        console.log("ddddd");
        this.employmentForm = this.builder.group({
            activity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            job: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            salary: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            "imageblob1": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            others: [""]
        });
        var lang = localStorage.getItem("lang");
        if (lang == "en") {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        this.companyService.getPickListCCJ("Job_Title", lang).subscribe(function (data) {
            // console.log(data[0].code);
            _this.jobTitle = data;
        }, function (error) { });
    }
    EmploymentComponent.prototype.ngOnInit = function () {
    };
    EmploymentComponent.prototype.employmentService = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        this.companyService.EmploymentService(this.Activity, this.job, this.Salary, this.fileExtension, this.file1).subscribe(function (data) {
            _this.bsModalRef.hide();
            _this.spinner.hide();
            _this.toastr.success('Uploaded ', 'successfully', option);
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error(error.errorCode, error.message, option);
        });
    };
    // get image
    EmploymentComponent.prototype.processFile = function (event, num) {
        var _this = this;
        if (num == 1) {
            var reader_1 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_1 = event.target.files[0];
                reader_1.readAsArrayBuffer(file_1);
                reader_1.onload = function () {
                    var imgBlob = new Blob([reader_1.result], { type: file_1.type });
                    _this.file1 = imgBlob;
                };
            }
            if (this.imageBlob1 != '') {
                var currentName = this.imageBlob1.substring(this.imageBlob1.lastIndexOf('\\') + 1, this.imageBlob1.length);
                this.pictureName1 = currentName;
                this.fileExtension = currentName.substring(currentName.lastIndexOf('.') + 1, currentName.length);
                console.log("ssss : ", this.fileExtension);
            }
            else {
                this.pictureName1 = '';
                this.fileExtension = '';
            }
        }
    };
    EmploymentComponent.prototype.hasError = function (field, error) {
        var ctrl = this.employmentForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    EmploymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employment',
            template: __webpack_require__(/*! ./employment.component.html */ "./src/app/component/services/employment/employment.component.html"),
            styles: [__webpack_require__(/*! ./employment.component.css */ "./src/app/component/services/employment/employment.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__["CompanyserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], EmploymentComponent);
    return EmploymentComponent;
}());



/***/ }),

/***/ "./src/app/component/services/establish/establish.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/component/services/establish/establish.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n  border-color: #dc3545 !important;\r\n}\r\n\r\n.is-valid {\r\n  border-color: #28a745 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/services/establish/establish.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/component/services/establish/establish.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"establishingForm\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\" id=\"exampleModalLabel\">\n      <div class=\"modal-icon\">\n        <i class=\" ic fas fa-building\"></i>\n      </div>\n      <h5><span>Establishing</span> Companies</h5>\n      <hr>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form company\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n          <select class=\"text select\" name=\"country\" placeholder=\"country\" formControlName=\"country\" [(ngModel)]=\"Country\"\n            (change)=\"getRegionValue()\" [ngClass]=\"{ 'is-invalid': hasError('country','required'),'is-valid':establishingForm.get('country').touched && !hasError('country','required')  }\"\n            required>\n            <option *ngFor=\"let country of countryArr\" value=\"{{country.code}}\">{{country.value}}</option>\n          </select>\n        </div>\n        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n          <select class=\"text select\" type=\"text\" name=\"text\" placeholder=\"Region\" formControlName=\"region\" [(ngModel)]=\"Region\"\n            [ngClass]=\"{ 'is-invalid': hasError('region','required'),'is-valid':establishingForm.get('region').touched && !hasError('region','required')  }\"\n            required>\n            <option *ngFor=\"let region of RegionArr\" value=\"{{region.code}}\">{{region.value}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Activity\" formControlName=\"activity\" [(ngModel)]=\"Activity\"\n            [ngClass]=\"{ 'is-invalid': hasError('activity','required')|| hasError('activity','maxlength') || hasError('activity','minlength'),\n            'is-valid':establishingForm.get('activity').touched && !hasError('activity','required') &&   !hasError('activity','maxlength') &&   !hasError('activity','minlength')  }\"\n            required />\n        </div>\n        <div class=\" col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"number\" name=\"text\" placeholder=\"Capital Currency Ex:100:Usd\" formControlName=\"capital\"\n            [(ngModel)]=\"Capital\" [ngClass]=\"{ 'is-invalid': hasError('capital','required') || hasError('capital','minlength'),\n          'is-valid':establishingForm.get('capital').touched && !hasError('capital','required') &&  !hasError('capital','minlength')}\"\n            required />\n        </div>\n      </div>\n\n      <span>Upload copies of your partners ID cards :</span>\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" formControlName=\"imageblob1\" [(ngModel)]=\"imageBlob1\"\n          [ngClass]=\"{ 'is-invalid': establishingForm.get('imageblob1').touched && establishingForm.get('imageblob1').hasError('required'),\n        'is-valid':establishingForm.get('imageblob1').touched && !establishingForm.get('imageblob1').hasError('required') }\"\n          (change)=\"processFile($event,1)\" accept=\"image/*\" required>\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 == ''\">no image choosen </label>\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 != ''\">{{pictureName1}} </label>\n      </div>\n\n      <span>Upload your authorization copy :</span>\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\" formControlName=\"imageblob2\" [(ngModel)]=\"imageBlob2\"\n          [ngClass]=\"{ 'is-invalid': establishingForm.get('imageblob2').touched && establishingForm.get('imageblob2').hasError('required'),\n        'is-valid':establishingForm.get('imageblob2').touched && !establishingForm.get('imageblob2').hasError('required') }\"\n          (change)=\"processFile($event,2)\" accept=\"image/*\" required>\n        <label class=\"custom-file-label\" for=\"inputGroupFile02\" *ngIf=\"pictureName2 == ''\">no image choosen </label>\n        <label class=\"custom-file-label\" for=\"inputGroupFile02\" *ngIf=\"pictureName2 != ''\">{{pictureName2}} </label>\n      </div>\n      <span>Upload your rental agreement copy :</span>\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile03\" formControlName=\"imageblob3\" [(ngModel)]=\"imageBlob3\"\n          [ngClass]=\"{ 'is-invalid': establishingForm.get('imageblob3').touched && establishingForm.get('imageblob3').hasError('required'),\n        'is-valid':establishingForm.get('imageblob3').touched && !establishingForm.get('imageblob3').hasError('required') }\"\n          (change)=\"processFile($event,3)\" accept=\"image/*\" required>\n        <label class=\"custom-file-label\" for=\"inputGroupFile03\" *ngIf=\"pictureName3 == ''\">no image choosen </label>\n        <label class=\"custom-file-label\" for=\"inputGroupFile03\" *ngIf=\"pictureName3 != ''\">{{pictureName3}} </label>\n        <textarea type=\"text\" name=\"text\" placeholder=\"Other (optional)\"></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer account-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bsModalRef.hide()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"establishingService()\" [disabled]=\"!establishingForm.valid \">Submit</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/component/services/establish/establish.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/services/establish/establish.component.ts ***!
  \*********************************************************************/
/*! exports provided: EstablishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishComponent", function() { return EstablishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared/companyservice.service */ "./src/app/services/shared/companyservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EstablishComponent = /** @class */ (function () {
    function EstablishComponent(bsModalRef, builder, companyService, toastr, spinner) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.builder = builder;
        this.companyService = companyService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.Other = null;
        this.pictureName1 = '';
        this.pictureName2 = '';
        this.pictureName3 = '';
        this.countryArr = [];
        this.RegionArr = [];
        this.Country = null;
        this.Region = null;
        this.Activity = null;
        this.Capital = null;
        this.Others = null;
        this.establishingForm = this.builder.group({
            country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            region: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            activity: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]
            ],
            // idNo: ["", Validators.required],
            capital: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            others: [""],
            "imageblob1": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            "imageblob2": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            "imageblob3": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
        var lang = localStorage.getItem("lang");
        if (lang == "en") {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        this.companyService.getPickListCCJ("Country", lang).subscribe(function (data) {
            // console.log("alne", data);
            _this.countryArr = data;
        }, function (error) { });
    }
    EstablishComponent.prototype.ngOnInit = function () {
    };
    EstablishComponent.prototype.establishingService = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        this.companyService.establishingService(this.Country, this.Activity, this.Region, this.Capital, this.Others, this.file1, this.file2, this.file3).subscribe(function (data) {
            _this.bsModalRef.hide();
            _this.spinner.hide();
            _this.toastr.success('Uploaded ', 'successfully', option);
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error(error.errorCode, error.message, option);
        });
    };
    // get region
    EstablishComponent.prototype.getRegionValue = function () {
        var _this = this;
        var lang = localStorage.getItem("lang");
        if (lang == "en") {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        this.RegionArr = [];
        this.Region = "";
        if (this.Country != null) {
            this.companyService.getPickListRegion(this.Country, lang).subscribe(function (data) {
                _this.RegionArr = data;
            }, function (error) {
            });
        }
    };
    // get image
    EstablishComponent.prototype.processFile = function (event, num) {
        var _this = this;
        if (num == 1) {
            var reader_1 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_1 = event.target.files[0];
                reader_1.readAsArrayBuffer(file_1);
                reader_1.onload = function () {
                    var imgBlob = new Blob([reader_1.result], { type: file_1.type });
                    _this.file1 = imgBlob;
                };
            }
            if (this.imageBlob1 != '') {
                var currentName = this.imageBlob1.substring(this.imageBlob1.lastIndexOf('\\') + 1, this.imageBlob1.length);
                this.pictureName1 = currentName;
            }
            else {
                this.pictureName1 = '';
            }
            // console.log("currentName : ", currentName);
            // console.log("imageBlob1 : ", this.imageBlob1);
        }
        else if (num == 2) {
            var reader_2 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_2 = event.target.files[0];
                reader_2.readAsArrayBuffer(file_2);
                reader_2.onload = function () {
                    var imgBlob = new Blob([reader_2.result], { type: file_2.type });
                    _this.file2 = imgBlob;
                };
            }
            if (this.imageBlob2 != '') {
                var currentName = this.imageBlob2.substring(this.imageBlob2.lastIndexOf('\\') + 1, this.imageBlob2.length);
                this.pictureName2 = currentName;
            }
            else {
                this.pictureName2 = '';
            }
            console.log("file2 : ", this.file2);
        }
        else if (num == 3) {
            var reader_3 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_3 = event.target.files[0];
                reader_3.readAsArrayBuffer(file_3);
                reader_3.onload = function () {
                    var imgBlob = new Blob([reader_3.result], { type: file_3.type });
                    _this.file3 = imgBlob;
                };
            }
            if (this.imageBlob3 != '') {
                var currentName = this.imageBlob3.substring(this.imageBlob3.lastIndexOf('\\') + 1, this.imageBlob3.length);
                this.pictureName3 = currentName;
            }
            else {
                this.pictureName3 = '';
            }
            console.log("file3 : ", this.file3);
        }
    };
    EstablishComponent.prototype.hasError = function (field, error) {
        var ctrl = this.establishingForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    EstablishComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-establish',
            template: __webpack_require__(/*! ./establish.component.html */ "./src/app/component/services/establish/establish.component.html"),
            styles: [__webpack_require__(/*! ./establish.component.css */ "./src/app/component/services/establish/establish.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__["CompanyserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], EstablishComponent);
    return EstablishComponent;
}());



/***/ }),

/***/ "./src/app/component/services/feasibility/feasibility.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/component/services/feasibility/feasibility.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n  border-color: #dc3545 !important;\r\n}\r\n\r\n.is-valid {\r\n  border-color: #28a745 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/services/feasibility/feasibility.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/component/services/feasibility/feasibility.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"FeasibilityForm\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\" id=\"exampleModalLabel\">\n      <div class=\"modal-icon\">\n        <i class=\"ic fas fa-paste\"></i>\n      </div>\n      <h5>Fesability study</h5>\n      <hr>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form study\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n          <select class=\"text select\" name=\"country\" placeholder=\"country\" formControlName=\"country\" [(ngModel)]=\"Country\"\n            (change)=\"getRegionValue()\" [ngClass]=\"{ 'is-invalid': hasError('country','required'),'is-valid':FeasibilityForm.get('country').touched && !hasError('country','required')  }\"\n            required>\n            <option *ngFor=\"let country of countryArr\" value=\"{{country.code}}\">{{country.value}}</option>\n\n          </select>\n        </div>\n        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n          <select class=\"text select\" name=\"company\" placeholder=\"company type\" formControlName=\"compType\" [(ngModel)]=\"CompType\"\n            [ngClass]=\"{ 'is-invalid': hasError('compType','required'),'is-valid':FeasibilityForm.get('compType').touched && !hasError('compType','required')  }\"\n            required>\n            <option *ngFor=\"let company of CompanyArr\" value=\"{{company.code}}\">{{company.value}}</option>\n\n\n          </select>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Activity\" formControlName=\"activity\" [(ngModel)]=\"Activity\"\n            [ngClass]=\"{ 'is-invalid': hasError('activity','required')|| hasError('activity','maxlength'),\n            'is-valid':FeasibilityForm.get('activity').touched && !hasError('activity','required') &&   !hasError('activity','maxlength') }\"\n            required />\n        </div>\n        <div class=\"col\">\n          <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Detailed Address\" formControlName=\"address\"\n            [(ngModel)]=\"Address\" [ngClass]=\"{ 'is-invalid': hasError('address','required')|| hasError('address','maxlength'),\n            'is-valid':FeasibilityForm.get('address').touched && !hasError('address','required') &&   !hasError('address','maxlength') }\"\n            required />\n        </div>\n      </div>\n      <div class=\"row\">\n\n        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n          <select class=\"text select\" type=\"text\" name=\"text\" placeholder=\"Region\" formControlName=\"region\" [(ngModel)]=\"Region\"\n            [ngClass]=\"{ 'is-invalid': hasError('region','required'),'is-valid':FeasibilityForm.get('region').touched && !hasError('region','required')  }\"\n            required>\n            <option *ngFor=\"let region of RegionArr\" value=\"{{region.code}}\">{{region.value}}</option>\n\n          </select>\n        </div>\n        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"number\" name=\"text\" placeholder=\"Capital Currency Ex:100:Usd\" formControlName=\"capital\"\n            [(ngModel)]=\"Capital\" [ngClass]=\"{ 'is-invalid': hasError('capital','required'),\n            'is-valid':FeasibilityForm.get('capital').touched && !hasError('capital','required') }\"\n            required />\n        </div>\n      </div>\n      <!-- <textarea type=\"text\" name=\"text\" placeholder=\"Other (optional)\"></textarea> -->\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"bsModalRef.hide()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!FeasibilityForm.valid \" (click)=\"FeasibilityService()\">Submit</button>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/component/services/feasibility/feasibility.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/component/services/feasibility/feasibility.component.ts ***!
  \*************************************************************************/
/*! exports provided: FeasibilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeasibilityComponent", function() { return FeasibilityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared/companyservice.service */ "./src/app/services/shared/companyservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeasibilityComponent = /** @class */ (function () {
    function FeasibilityComponent(bsModalRef, builder, companyService, toastr, spinner) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.builder = builder;
        this.companyService = companyService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.countryArr = [];
        this.CompanyArr = [];
        this.RegionArr = [];
        this.Country = null;
        this.Region = null;
        this.Address = null;
        this.Activity = null;
        this.CompType = null;
        this.Capital = null;
        console.log("ddddd");
        this.FeasibilityForm = this.builder.group({
            country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            region: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            activity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            compType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            capital: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        var lang = localStorage.getItem("lang");
        if (lang == "en") {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        this.companyService.getPickListCCJ("Country", lang).subscribe(function (data) {
            _this.countryArr = data;
        }, function (error) { });
        this.companyService.getPickListCCJ("Company", lang).subscribe(function (data) {
            _this.CompanyArr = data;
        }, function (error) { });
    }
    FeasibilityComponent.prototype.ngOnInit = function () {
    };
    FeasibilityComponent.prototype.FeasibilityService = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        var data = {
            countryCode: this.Country,
            companyTypeCode: this.CompType,
            activity: this.Activity,
            detailedAdress: this.Address,
            capitalCurrency: this.Capital,
            province: this.Region
        };
        this.companyService.fesabilitystudy(data).subscribe(function (data) {
            _this.bsModalRef.hide();
            _this.spinner.hide();
            _this.toastr.success('Uploaded ', 'successfully', option);
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error(error.errorCode, error.message, option);
        });
    };
    FeasibilityComponent.prototype.getRegionValue = function () {
        var _this = this;
        var lang = localStorage.getItem("lang");
        if (lang == "en") {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        this.RegionArr = [];
        this.Region = "";
        if (this.Country != null) {
            this.companyService.getPickListRegion(this.Country, lang).subscribe(function (data) {
                _this.RegionArr = data;
            }, function (error) {
            });
        }
    };
    FeasibilityComponent.prototype.hasError = function (field, error) {
        var ctrl = this.FeasibilityForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    FeasibilityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feasibility',
            template: __webpack_require__(/*! ./feasibility.component.html */ "./src/app/component/services/feasibility/feasibility.component.html"),
            styles: [__webpack_require__(/*! ./feasibility.component.css */ "./src/app/component/services/feasibility/feasibility.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__["CompanyserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], FeasibilityComponent);
    return FeasibilityComponent;
}());



/***/ }),

/***/ "./src/app/component/services/hiring/hiring.component.css":
/*!****************************************************************!*\
  !*** ./src/app/component/services/hiring/hiring.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n  border-color: #dc3545 !important;\r\n}\r\n\r\n.is-valid {\r\n  border-color: #28a745 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/services/hiring/hiring.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/component/services/hiring/hiring.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"hiringForm\">\n\n  <div class=\"modal-header\">\n    <div class=\"modal-title\" id=\"exampleModalLabel\">\n      <div class=\"modal-icon\">\n        <i class=\"ic fas fa-briefcase\"></i>\n      </div>\n      <h5><span>Hiring</span> Labors</h5>\n      <hr>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form hiring\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12 col-sm-12 left\">\n          <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Activity\" formControlName=\"active\" [(ngModel)]=\"Active\"\n            [ngClass]=\"{ 'is-invalid': hasError('active','required')|| hasError('active','minlength')|| hasError('active','maxlength'),\n            'is-valid':hiringForm.get('active').touched && !hasError('active','required') &&  !hasError('active','minlength') &&  !hasError('active','maxlength') }\" />\n        </div>\n        <div class=\"col-lg-6 col-md-12 col-sm-12 right\">\n          <select class=\"text select\" type=\"text\" name=\"text\" placeholder=\"Job Title\" formControlName=\"job\" [(ngModel)]=\"Job\"\n            [ngClass]=\"{ 'is-invalid': hasError('job','required'),'is-valid':!hasError('job','required')  }\" required>\n            <option *ngFor=\"let job of jobTitle\" value=\"{{job.code}}\">{{job.value}}</option>\n\n          </select>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n          <select class=\"text select\" type=\"text\" name=\"text\" placeholder=\"Region\" formControlName=\"region\" [(ngModel)]=\"Region\"\n            [ngClass]=\"{ 'is-invalid': hasError('region','required'),'is-valid':!hasError('region','required')  }\"\n            required>\n            <option *ngFor=\"let region of RegionArr\" value=\"{{region.code}}\">{{region.value}}</option>\n          </select>\n        </div>\n        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"number\" name=\"quantity\" placeholder=\"Age\" formControlName=\"age\" [(ngModel)]=\"Age\"\n            (change)=\"calAge()\" [ngClass]=\"{ 'is-invalid': hasError('age','required')|| hasError('age','maxlength') || ageFlag,\n          'is-valid':hiringForm.get('age').touched && !hasError('age','required') &&  !hasError('age','maxlength') && !ageFlag }\" />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"number\" name=\"text\" placeholder=\"Number of Years\" formControlName=\"noYears\"\n            [(ngModel)]=\"NoYears\" [ngClass]=\"{ 'is-invalid': hasError('noYears','required')|| hasError('noYears','minlength')|| hasError('noYears','maxlength'),\n            'is-valid':hiringForm.get('noYears').touched && !hasError('noYears','required') &&  !hasError('noYears','minlength') &&  !hasError('noYears','maxlength') }\" />\n        </div>\n        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n          <select class=\"text select\" type=\"text\" name=\"text\" placeholder=\"Status of Visa \" formControlName=\"statusOfVisa\"\n            [(ngModel)]=\"StatusOfVisa\" [ngClass]=\"{ 'is-invalid': hasError('statusOfVisa','required'),'is-valid':!hasError('statusOfVisa','required')  }\"\n            required>\n            <option value=\"Available\">avaliable</option>\n            <option value=\"Unavailable\">unavaliable</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"number\" name=\"text\" placeholder=\"Daily Hours\" (change)=\"calDayHour()\"\n            formControlName=\"dailyHours\" [(ngModel)]=\"DailyHours\" [ngClass]=\"{ 'is-invalid': hasError('dailyHours','required') || dayFlag,\n          'is-valid':hiringForm.get('dailyHours').touched && !hasError('dailyHours','required') && !dayFlag }\" />\n        </div>\n        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"number\" name=\"text\" placeholder=\"Salary\" formControlName=\"salary\" [(ngModel)]=\"Salary\"\n            [ngClass]=\"{ 'is-invalid': hasError('salary','required') || hasError('salary','minlength'),\n          'is-valid':hiringForm.get('salary').touched && !hasError('salary','required') &&  !hasError('salary','minlength') }\"\n            required />\n        </div>\n      </div>\n      <textarea type=\"text\" name=\"text\" placeholder=\"Skills\" formControlName=\"skills\" [(ngModel)]=\"Skills\" [ngClass]=\"{ 'is-invalid': hasError('skills','required'),\n      'is-valid':hiringForm.get('skills').touched && !hasError('skills','required')  }\"></textarea>\n      <input class=\"text big\" type=\"text\" name=\"text\" placeholder=\"Required Qualifications\" formControlName=\"requireQualification\"\n        [(ngModel)]=\"RequireQualification\" [ngClass]=\"{ 'is-invalid': hasError('requireQualification','required'),\n      'is-valid':hiringForm.get('requireQualification').touched && !hasError('requireQualification','required')  }\"\n        required />\n\n      <textarea type=\"text\" name=\"text\" placeholder=\"Other (optional)\" formControlName=\"others\" [(ngModel)]=\"Others\"\n        [ngClass]=\"{  'is-valid':hiringForm.get('others').touched } \"></textarea>\n    </div>\n  </div>\n  <div class=\"modal-footer \">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bsModalRef.hide()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"hiringService()\" [disabled]=\"!hiringForm.valid || ageFlag ||dayFlag\">Submit</button>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/component/services/hiring/hiring.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/services/hiring/hiring.component.ts ***!
  \***************************************************************/
/*! exports provided: HiringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiringComponent", function() { return HiringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared/companyservice.service */ "./src/app/services/shared/companyservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HiringComponent = /** @class */ (function () {
    function HiringComponent(bsModalRef, builder, companyService, toastr, spinner) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.builder = builder;
        this.companyService = companyService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.jobTitle = [];
        this.RegionArr = [];
        this.Active = null;
        this.Job = null;
        this.Region = null;
        this.Age = null;
        this.Skills = null;
        this.NoYears = null;
        this.DailyHours = null;
        this.Salary = null;
        this.StatusOfVisa = 'Available';
        this.RequireQualification = null;
        this.Others = null;
        console.log("ddddd");
        this.hiringForm = this.builder.group({
            active: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]
            ],
            job: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            region: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)
                    // Validators.pattern("^d+$")
                ]
            ],
            skills: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            noYears: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)]
            ],
            dailyHours: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            salary: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            statusOfVisa: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            requireQualification: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            others: [""]
        });
        var lang = localStorage.getItem("lang");
        if (lang == "en") {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        this.companyService.getPickListCCJ("Job_Title", lang).subscribe(function (data) {
            // console.log(data[0].code);
            _this.jobTitle = data;
            _this.Job = _this.jobTitle[0].code;
        }, function (error) { });
        this.companyService.getPickListRegion("EGY", lang).subscribe(function (data) {
            // console.log("ddd", data);
            _this.RegionArr = data;
            _this.Region = _this.RegionArr[0].code;
        }, function (error) { });
    }
    HiringComponent.prototype.ngOnInit = function () {
    };
    HiringComponent.prototype.hiringService = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        var data = {
            activity: this.Active,
            region: this.Region,
            jobTitleCode: this.Job,
            age: this.Age,
            yearsOfExperience: this.NoYears,
            visaStatus: this.StatusOfVisa,
            dailyWorkHours: this.DailyHours,
            salary: this.Salary,
            requiredQualifications: this.RequireQualification,
            skills: this.Skills,
            other: this.Others
        };
        this.companyService.hiringService(data).subscribe(function (data) {
            _this.bsModalRef.hide();
            _this.spinner.hide();
            _this.toastr.success('Uploaded ', 'successfully', option);
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error(error.errorCode, error.message, option);
        });
    };
    HiringComponent.prototype.hasError = function (field, error) {
        var ctrl = this.hiringForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    HiringComponent.prototype.calDayHour = function () {
        if (parseInt(this.DailyHours) > 16) {
            this.dayFlag = true;
        }
        else {
            this.dayFlag = false;
        }
    };
    HiringComponent.prototype.calAge = function () {
        if (parseInt(this.Age) > 17 && parseInt(this.Age) <= 70) {
            this.ageFlag = false;
        }
        else {
            this.ageFlag = true;
        }
    };
    HiringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hiring',
            template: __webpack_require__(/*! ./hiring.component.html */ "./src/app/component/services/hiring/hiring.component.html"),
            styles: [__webpack_require__(/*! ./hiring.component.css */ "./src/app/component/services/hiring/hiring.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__["CompanyserviceService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], HiringComponent);
    return HiringComponent;
}());



/***/ }),

/***/ "./src/app/component/services/office/office.component.css":
/*!****************************************************************!*\
  !*** ./src/app/component/services/office/office.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n  border-color: #dc3545 !important;\r\n}\r\n\r\n.is-valid {\r\n  border-color: #28a745 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/services/office/office.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/component/services/office/office.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"OfficeForm\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\" id=\"exampleModalLabel\">\n      <div class=\"modal-icon\">\n        <i class=\"ic fas fa-chalkboard-teacher\"></i>\n      </div>\n      <h5><span>Office </span>Services</h5>\n      <hr>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\" form office\">\n      <div class=\"row\">\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Address\" formControlName=\"address\" [(ngModel)]=\"Address\"\n            [ngClass]=\"{ 'is-invalid': hasError('address','required')|| hasError('address','maxlength'),\n          'is-valid':OfficeForm.get('address').touched && !hasError('address','required') &&   !hasError('address','maxlength') }\"\n            required>\n        </div>\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Renting Offices\" formControlName=\"rentingOffices\"\n            [(ngModel)]=\"RentingOffices\" [ngClass]=\"{ 'is-invalid': hasError('rentingOffices','required')|| hasError('rentingOffices','maxlength'),\n          'is-valid':OfficeForm.get('rentingOffices').touched && !hasError('rentingOffices','required') &&   !hasError('rentingOffices','maxlength') }\"\n            required>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Furniture of Office\" formControlName=\"officeFurniture\"\n            [ngClass]=\"{ 'is-invalid': hasError('officeFurniture','required')|| hasError('officeFurniture','maxlength'),\n          'is-valid':OfficeForm.get('officeFurniture').touched && !hasError('officeFurniture','required') &&   !hasError('officeFurniture','maxlength') }\"\n            [(ngModel)]=\"OfficeFurniture\" required>\n        </div>\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Devices\" formControlName=\"devices\" [(ngModel)]=\"Devices\"\n            [ngClass]=\"{ 'is-invalid': hasError('devices','required')|| hasError('devices','maxlength'),\n          'is-valid':OfficeForm.get('devices').touched && !hasError('devices','required') &&   !hasError('devices','maxlength') }\"\n            required />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Cameras CCTV\" formControlName=\"cameras\" [(ngModel)]=\"Cameras\"\n            [ngClass]=\"{ 'is-invalid': hasError('cameras','required')|| hasError('cameras','maxlength'),\n          'is-valid':OfficeForm.get('cameras').touched && !hasError('cameras','required') &&   !hasError('cameras','maxlength') }\"\n            required />\n        </div>\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Inks\" formControlName=\"inks\" [(ngModel)]=\"Inks\"\n            [ngClass]=\"{ 'is-invalid': hasError('inks','required')|| hasError('inks','maxlength'),\n          'is-valid':OfficeForm.get('inks').touched && !hasError('inks','required') &&   !hasError('inks','maxlength') }\"\n            required />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Papers\" formControlName=\"papers\" [(ngModel)]=\"Papers\"\n            [ngClass]=\"{ 'is-invalid': hasError('papers','required')|| hasError('papers','maxlength'),\n          'is-valid':OfficeForm.get('papers').touched && !hasError('papers','required') &&   !hasError('papers','maxlength') }\"\n            required />\n        </div>\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n          <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Web Designs\" formControlName=\"webDesign\" [(ngModel)]=\"WebDesign\"\n            [ngClass]=\"{ 'is-invalid': hasError('webDesign','required')|| hasError('webDesign','maxlength'),\n          'is-valid':OfficeForm.get('webDesign').touched && !hasError('webDesign','required') &&   !hasError('webDesign','maxlength') }\"\n            required />\n        </div>\n      </div>\n\n      <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Digital marketing\" formControlName=\"dMarketing\"\n        [ngClass]=\"{ 'is-invalid': hasError('dMarketing','required')|| hasError('dMarketing','maxlength'),\n      'is-valid':OfficeForm.get('dMarketing').touched && !hasError('dMarketing','required') &&   !hasError('dMarketing','maxlength') }\"\n        [(ngModel)]=\"DMarketing\" required />\n\n      <textarea type=\"text\" name=\"text\" placeholder=\"Other (optional)\" formControlName=\"others\" [(ngModel)]=\"Others\"></textarea>\n\n\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bsModalRef.hide()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"OfficeService()\" [disabled]=\"!OfficeForm.valid \">Submit</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/component/services/office/office.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/services/office/office.component.ts ***!
  \***************************************************************/
/*! exports provided: OfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeComponent", function() { return OfficeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared/companyservice.service */ "./src/app/services/shared/companyservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OfficeComponent = /** @class */ (function () {
    function OfficeComponent(bsModalRef, builder, companyService, toastr, spinner) {
        this.bsModalRef = bsModalRef;
        this.builder = builder;
        this.companyService = companyService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.Address = null;
        this.RentingOffices = null;
        this.OfficeFurniture = null;
        this.Devices = null;
        this.Cameras = null;
        this.Inks = null;
        this.Papers = null;
        this.WebDesign = null;
        this.DMarketing = null;
        this.Others = null;
        console.log("ddddd");
        this.OfficeForm = this.builder.group({
            address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            rentingOffices: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            officeFurniture: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            devices: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            cameras: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            inks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            papers: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            webDesign: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            dMarketing: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            others: [""]
        });
    }
    OfficeComponent.prototype.ngOnInit = function () {
    };
    OfficeComponent.prototype.OfficeService = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        var data = {
            address: this.Address,
            rentingOffices: this.RentingOffices,
            officeFurnuture: this.OfficeFurniture,
            devices: this.Devices,
            cameras: this.Cameras,
            inks: this.Inks,
            papers: this.Papers,
            webDesigns: this.WebDesign,
            degitalMarketting: this.DMarketing,
            other: this.Others
        };
        this.companyService.officeserv(data).subscribe(function (data) {
            _this.bsModalRef.hide();
            _this.spinner.hide();
            _this.toastr.success('Uploaded ', 'successfully', option);
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error(error.errorCode, error.message, option);
        });
    };
    OfficeComponent.prototype.hasError = function (field, error) {
        var ctrl = this.OfficeForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    OfficeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-office',
            template: __webpack_require__(/*! ./office.component.html */ "./src/app/component/services/office/office.component.html"),
            styles: [__webpack_require__(/*! ./office.component.css */ "./src/app/component/services/office/office.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__["CompanyserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], OfficeComponent);
    return OfficeComponent;
}());



/***/ }),

/***/ "./src/app/component/services/shipping/shipping.component.css":
/*!********************************************************************!*\
  !*** ./src/app/component/services/shipping/shipping.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n  border-color: #dc3545 !important;\r\n}\r\n\r\n.is-valid {\r\n  border-color: #28a745 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/services/shipping/shipping.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/component/services/shipping/shipping.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"shippingForm\">\n<div class=\"modal-header\">\n  <div class=\"modal-title\" id=\"exampleModalLabel\">\n    <div class=\"modal-icon\">\n      <i class=\"ic fas fa-ship\"></i>\n    </div>\n    <h5>Shipping</h5>\n    <hr>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n</div>\n<div class=\"modal-body\">\n  <div class=\"form ship\">\n    <span>Upload a copy of the bill of the authorization :</span>\n\n    <div class=\"custom-file\">\n      <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" formControlName=\"imageblob1\" [(ngModel)]=\"imageBlob1\"\n      [ngClass]=\"{ 'is-invalid': shippingForm.get('imageblob1').touched && shippingForm.get('imageblob1').hasError('required'),\n    'is-valid':shippingForm.get('imageblob1').touched && !shippingForm.get('imageblob1').hasError('required') }\"\n      (change)=\"processFile($event,1)\" accept=\"image/*\" required>\n    <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 == ''\">no image choosen </label>\n    <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 != ''\">{{pictureName1}} </label>\n    </div>\n    <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Port of shipment\" formControlName=\"shipmentPort\" [(ngModel)]=\"ShipmentPort\"\n    [ngClass]=\"{ 'is-invalid': hasError('shipmentPort','required') || hasError('shipmentPort','maxlength'),\n      'is-valid':shippingForm.get('shipmentPort').touched && !hasError('shipmentPort','required') &&  !hasError('shipmentPort','maxlength')}\"\n    required/>\n    <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"name of the responsible of recieving\" \n    formControlName=\"responsibleOfRecievingName\" [(ngModel)]=\"ResponsibleOfRecievingName\" \n    [ngClass]=\"{ 'is-invalid': hasError('responsibleOfRecievingName','required') || hasError('responsibleOfRecievingName','maxlength'),\n      'is-valid':shippingForm.get('responsibleOfRecievingName').touched && !hasError('responsibleOfRecievingName','required') &&  !hasError('responsibleOfRecievingName','maxlength')}\"\n    required/>\n    <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"type of goods\" \n    formControlName=\"typeOfGoods\" [(ngModel)]=\"TypeOfGoods\" \n    [ngClass]=\"{ 'is-invalid': hasError('typeOfGoods','required') || hasError('typeOfGoods','maxlength'),\n    'is-valid':shippingForm.get('typeOfGoods').touched && !hasError('typeOfGoods','required') &&  !hasError('typeOfGoods','maxlength')}\"\n    required />\n    <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"delivery street address\" \n    formControlName=\"dStreetaddress\" [(ngModel)]=\"DStreetaddress\"\n    [ngClass]=\"{ 'is-invalid': hasError('dStreetaddress','required') || hasError('dStreetaddress','maxlength'),\n    'is-valid':shippingForm.get('dStreetaddress').touched && !hasError('dStreetaddress','required') &&  !hasError('dStreetaddress','maxlength')}\"\n    required/>\n    <textarea type=\"text\" name=\"text\" placeholder=\"Other (optional)\" formControlName=\"others\" [(ngModel)]=\"Others\"></textarea>\n\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bsModalRef.hide()\">Cancel</button>\n  <button type=\"button\" class=\"btn btn-primary\"  [disabled]=\"!shippingForm.valid \" (click)=\"shippingService()\">Submit</button>\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/component/services/shipping/shipping.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/component/services/shipping/shipping.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingComponent", function() { return ShippingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared/companyservice.service */ "./src/app/services/shared/companyservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShippingComponent = /** @class */ (function () {
    function ShippingComponent(bsModalRef, builder, companyService, toastr, spinner) {
        this.bsModalRef = bsModalRef;
        this.builder = builder;
        this.companyService = companyService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.ShipmentPort = null;
        this.ResponsibleOfRecievingName = null;
        this.TypeOfGoods = null;
        this.DStreetaddress = null;
        this.pictureName1 = '';
        console.log("ddddd");
        this.shippingForm = this.builder.group({
            shipmentPort: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            responsibleOfRecievingName: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]
            ],
            typeOfGoods: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            dStreetaddress: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            "imageblob1": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            others: [""]
        });
    }
    ShippingComponent.prototype.ngOnInit = function () {
    };
    ShippingComponent.prototype.shippingService = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        this.companyService.ShippingService(this.ShipmentPort, this.ResponsibleOfRecievingName, this.TypeOfGoods, this.DStreetaddress, this.file1).subscribe(function (data) {
            _this.bsModalRef.hide();
            _this.spinner.hide();
            _this.toastr.success('Uploaded ', 'successfully', option);
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error(error.errorCode, error.message, option);
        });
    };
    // get image
    ShippingComponent.prototype.processFile = function (event, num) {
        var _this = this;
        if (num == 1) {
            var reader_1 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_1 = event.target.files[0];
                reader_1.readAsArrayBuffer(file_1);
                reader_1.onload = function () {
                    var imgBlob = new Blob([reader_1.result], { type: file_1.type });
                    _this.file1 = imgBlob;
                };
            }
            if (this.imageBlob1 != '') {
                var currentName = this.imageBlob1.substring(this.imageBlob1.lastIndexOf('\\') + 1, this.imageBlob1.length);
                this.pictureName1 = currentName;
            }
            else {
                this.pictureName1 = '';
            }
        }
    };
    ShippingComponent.prototype.hasError = function (field, error) {
        var ctrl = this.shippingForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    ShippingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipping',
            template: __webpack_require__(/*! ./shipping.component.html */ "./src/app/component/services/shipping/shipping.component.html"),
            styles: [__webpack_require__(/*! ./shipping.component.css */ "./src/app/component/services/shipping/shipping.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__["CompanyserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], ShippingComponent);
    return ShippingComponent;
}());



/***/ }),

/***/ "./src/app/component/services/trading/trading.component.css":
/*!******************************************************************!*\
  !*** ./src/app/component/services/trading/trading.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n  border-color: #dc3545 !important;\r\n}\r\n\r\n.is-valid {\r\n  border-color: #28a745 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/services/trading/trading.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/component/services/trading/trading.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"tradingForm\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\" id=\"exampleModalLabel\">\n      <div class=\"modal-icon\">\n        <i class=\"ic fas fa-globe\"></i>\n      </div>\n      <h5><span>Trading</span> Agencies</h5>\n      <hr>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form trade\">\n      <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Activity \" formControlName=\"activity\" [(ngModel)]=\"Activity\"\n        [ngClass]=\"{ 'is-invalid': hasError('activity','required') || hasError('activity','maxlength'),\n          'is-valid':tradingForm.get('activity').touched && !hasError('activity','required') &&  !hasError('activity','maxlength')}\"\n        required />\n      <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Required Brand\" formControlName=\"requiredBrand\"\n        [(ngModel)]=\"RequiredBrand\" [ngClass]=\"{ 'is-invalid': hasError('requiredBrand','required') || hasError('requiredBrand','maxlength'),\n        'is-valid':tradingForm.get('requiredBrand').touched && !hasError('requiredBrand','required') &&  !hasError('requiredBrand','maxlength')}\"\n        required />\n      <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"product Description\" formControlName=\"productDescription\"\n        [(ngModel)]=\"ProductDescription\" [ngClass]=\"{ 'is-invalid': hasError('productDescription','required') || hasError('productDescription','maxlength'),\n        'is-valid':tradingForm.get('productDescription').touched && !hasError('productDescription','required') &&  !hasError('productDescription','maxlength')}\"\n        required />\n      <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"Location\" formControlName=\"location\" [(ngModel)]=\"Location\"\n        [ngClass]=\"{ 'is-invalid': hasError('location','required') || hasError('location','maxlength'),\n      'is-valid':tradingForm.get('location').touched && !hasError('location','required') &&  !hasError('location','maxlength')}\"\n        required />\n      <span> Upload the image of the product :</span>\n      <div class=\"custom-file\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" formControlName=\"imageblob1\" [(ngModel)]=\"imageBlob1\"\n          [ngClass]=\"{ 'is-invalid': tradingForm.get('imageblob1').touched && tradingForm.get('imageblob1').hasError('required'),\n        'is-valid':tradingForm.get('imageblob1').touched && !tradingForm.get('imageblob1').hasError('required') }\"\n          (change)=\"processFile($event,1)\" accept=\"image/*\" required>\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 == ''\">no image choosen </label>\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 != ''\">{{pictureName1}} </label>\n      </div>\n      <textarea type=\"text\" name=\"text\" placeholder=\"Other (optional)\" formControlName=\"others\" [(ngModel)]=\"Others\"></textarea>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bsModalRef.hide()\" data-dismiss=\"modal\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"tradingService()\" [disabled]=\"!tradingForm.valid \">Submit</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/component/services/trading/trading.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/services/trading/trading.component.ts ***!
  \*****************************************************************/
/*! exports provided: TradingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingComponent", function() { return TradingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared/companyservice.service */ "./src/app/services/shared/companyservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TradingComponent = /** @class */ (function () {
    function TradingComponent(bsModalRef, builder, companyService, toastr, spinner) {
        this.bsModalRef = bsModalRef;
        this.builder = builder;
        this.companyService = companyService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.Activity = null;
        this.RequiredBrand = null;
        this.Location = null;
        this.ProductDescription = null;
        this.Others = null;
        this.pictureName1 = '';
        console.log("ddddd");
        this.tradingForm = this.builder.group({
            activity: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            requiredBrand: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            location: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]],
            productDescription: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)]
            ],
            "imageblob1": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            others: [""]
        });
    }
    TradingComponent.prototype.ngOnInit = function () {
    };
    TradingComponent.prototype.tradingService = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        this.companyService.TradingagencyService(this.Activity, this.RequiredBrand, this.ProductDescription, this.Location, this.Others, this.file1).subscribe(function (data) {
            _this.bsModalRef.hide();
            _this.spinner.hide();
            _this.toastr.success('Uploaded ', 'successfully', option);
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error(error.errorCode, error.message, option);
        });
    };
    // get image
    TradingComponent.prototype.processFile = function (event, num) {
        var _this = this;
        if (num == 1) {
            var reader_1 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_1 = event.target.files[0];
                reader_1.readAsArrayBuffer(file_1);
                reader_1.onload = function () {
                    var imgBlob = new Blob([reader_1.result], { type: file_1.type });
                    _this.file1 = imgBlob;
                };
            }
            if (this.imageBlob1 != '') {
                var currentName = this.imageBlob1.substring(this.imageBlob1.lastIndexOf('\\') + 1, this.imageBlob1.length);
                this.pictureName1 = currentName;
            }
            else {
                this.pictureName1 = '';
            }
        }
    };
    TradingComponent.prototype.hasError = function (field, error) {
        var ctrl = this.tradingForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    TradingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trading',
            template: __webpack_require__(/*! ./trading.component.html */ "./src/app/component/services/trading/trading.component.html"),
            styles: [__webpack_require__(/*! ./trading.component.css */ "./src/app/component/services/trading/trading.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_shared_companyservice_service__WEBPACK_IMPORTED_MODULE_3__["CompanyserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], TradingComponent);
    return TradingComponent;
}());



/***/ }),

/***/ "./src/app/component/signupmodal/signupmodal.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/signupmodal/signupmodal.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n  border-color: #dc3545 !important;\r\n}\r\n\r\n.is-valid {\r\n  border-color: #28a745 !important;\r\n}\r\n\r\n.btn {\r\n  z-index: 100;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/signupmodal/signupmodal.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/signupmodal/signupmodal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div role=\"document\" class=\"modal-dialog-log\">\n    <div class=\"modal-content\"> -->\n<!--<div class=\"bd-example-modal-sm\" id=\"sign\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">-->\n<!-- <div class=\"modal-content\"> -->\n<form [formGroup]=\"signupForm\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\" id=\"exampleModalLabel\">\n      <div class=\"modal-icon\">\n        <i class=\" ic fas fa-user-plus\"></i>\n      </div>\n      <h5>Sign Up</h5>\n      <hr>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form log\">\n      <input class=\"text\" type=\"text\" name=\"text\" placeholder=\"name\" formControlName=\"name\" [(ngModel)]=\"Name\"\n        [ngClass]=\"{ 'is-invalid': signupForm.get('name').touched && signupForm.get('name').hasError('required'),\n          'is-valid':signupForm.get('name').touched && !signupForm.get('name').hasError('required') }\" />\n\n      <input class=\"text\" type=\"number\" name=\"text\" placeholder=\"Phone\" formControlName=\"phonen\" [(ngModel)]=\"phoneNumber\"\n        [ngClass]=\"{ 'is-invalid': signupForm.get('phonen').touched && signupForm.get('phonen').hasError('required'),\n          'is-valid':signupForm.get('phonen').touched && !signupForm.get('phonen').hasError('required') }\" />\n\n      <input class=\"text\" type=\"number\" name=\"text\" placeholder=\"ID number\" formControlName=\"national\" [(ngModel)]=\"nationalId\"\n        [ngClass]=\"{ 'is-invalid': signupForm.get('national').touched && signupForm.get('national').hasError('required'),\n          'is-valid':signupForm.get('national').touched && !signupForm.get('national').hasError('required') }\" />\n\n      <input class=\"text\" type=\"password\" name=\"text\" placeholder=\"Password\" formControlName=\"password\" [(ngModel)]=\"Password\"\n        [ngClass]=\"{ 'is-invalid': signupForm.get('password').touched && signupForm.get('password').hasError('required') || (signupForm.get('password').value != signupForm.get('confirm').value),\n          'is-valid':signupForm.get('password').touched && !signupForm.get('password').hasError('required') && (signupForm.get('password').value == signupForm.get('confirm').value) }\" />\n\n      <input class=\"text\" type=\"password\" name=\"text\" placeholder=\"Confirm Password\" formControlName=\"confirm\"\n        [(ngModel)]=\"confirmPassword\" [ngClass]=\"{ 'is-invalid': signupForm.get('confirm').touched && signupForm.get('confirm').hasError('required') || (signupForm.get('password').value != signupForm.get('confirm').value),\n          'is-valid':signupForm.get('confirm').touched && !signupForm.get('confirm').hasError('required') && (signupForm.get('password').value == signupForm.get('confirm').value) }\" />\n\n      <select formControlName=\"countrycode\" [(ngModel)]=\"contryCode\">\n        <option value=\"{{country}}\" *ngFor=\"let country of countries\">{{country}}</option>\n      </select>\n\n\n\n      <a class=\"nav-link sign\" (click)=\"openloginmodal()\">Already have\n        account.log in </a>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"signUp()\" [disabled]=\"!signupForm.valid || (signupForm.get('password').value != signupForm.get('confirm').value)\">Sign\n      up</button>\n  </div>\n\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/component/signupmodal/signupmodal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/signupmodal/signupmodal.component.ts ***!
  \****************************************************************/
/*! exports provided: SignupmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupmodalComponent", function() { return SignupmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../loginmodal/loginmodal.component */ "./src/app/component/loginmodal/loginmodal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared/authention.service */ "./src/app/services/shared/authention.service.ts");
/* harmony import */ var _verfiymodal_verfiymodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../verfiymodal/verfiymodal.component */ "./src/app/component/verfiymodal/verfiymodal.component.ts");
/* harmony import */ var _services_shared_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shared/user-data.service */ "./src/app/services/shared/user-data.service.ts");
/* harmony import */ var _services_shared_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/shared/session.service */ "./src/app/services/shared/session.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SignupmodalComponent = /** @class */ (function () {
    function SignupmodalComponent(bsModalRef, modalService, autherService, builder, userService, spinner, toastr) {
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.autherService = autherService;
        this.builder = builder;
        this.userService = userService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.Password = null;
        this.phoneNumber = null;
        this.Name = null;
        this.nationalId = null;
        this.confirmPassword = null;
        this.countries = [];
        console.log("ddddd");
        this.signupForm = this.builder.group({
            "phonen": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            "name": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            "national": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            "password": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            "countrycode": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'confirm': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.getCountryCode();
    }
    SignupmodalComponent.prototype.ngOnInit = function () {
    };
    SignupmodalComponent.prototype.openloginmodal = function () {
        this.bsModalRef.hide();
        this.bsModalRef = this.modalService.show(_loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_2__["LoginmodalComponent"], { class: 'modal-sm' });
    };
    SignupmodalComponent.prototype.openverfiy = function () {
        this.bsModalRef.hide();
        this.bsModalRef = this.modalService.show(_verfiymodal_verfiymodal_component__WEBPACK_IMPORTED_MODULE_5__["VerfiymodalComponent"], { class: 'modal-sm' });
    };
    SignupmodalComponent.prototype.signUp = function () {
        var _this = this;
        console.log(this.signupForm);
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        var data = {
            code: this.contryCode,
            userName: this.phoneNumber,
            Password: this.Password,
            Name: this.Name,
            nationalId: this.nationalId
        };
        this.autherService.signup(data).subscribe(function (data) {
            // this.toastr.success('Sign up successfully!', 'Done', option);
            _this.spinner.hide();
            _services_shared_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"].singinSaveData(_this.phoneNumber, _this.Password, _this.contryCode);
            _this.openverfiy();
            console.log(data);
        }, function (error) {
            if (error.errorCode == "4000") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4001") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4002") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4003") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4004") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4005") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4006") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4007") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4009") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4010") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4011") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4012") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4013") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4014") {
                // this.toastr.error(error.errorCode, error.message, option);
                _this.openverfiy();
            }
            else if (error.errorCode == "4015") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4016") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4018") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4023") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4037") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4041") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4043") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4044") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "1013") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "3004") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "3009") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            _this.spinner.hide();
        });
    };
    SignupmodalComponent.prototype.getCountryCode = function () {
        var _this = this;
        this.spinner.show();
        this.userService.getcountriesphpicklistcodes().subscribe(function (data) {
            console.log(data);
            _this.countries = data;
            _this.contryCode = _this.countries[0];
            _this.spinner.hide();
        }, function (error) {
            _this.spinner.hide();
        });
    };
    SignupmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signupmodal',
            template: __webpack_require__(/*! ./signupmodal.component.html */ "./src/app/component/signupmodal/signupmodal.component.html"),
            styles: [__webpack_require__(/*! ./signupmodal.component.css */ "./src/app/component/signupmodal/signupmodal.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_4__["AuthentionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_shared_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])
    ], SignupmodalComponent);
    return SignupmodalComponent;
}());



/***/ }),

/***/ "./src/app/component/upgrademodal/upgrademodal.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/upgrademodal/upgrademodal.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .upgrate-foot {\r\n   margin-top: 31px;\r\n }\r\n\r\n .is-invalid {\r\n   border-color: #dc3545 !important;\r\n }\r\n\r\n .is-valid {\r\n   border-color: #28a745 !important;\r\n }\r\n"

/***/ }),

/***/ "./src/app/component/upgrademodal/upgrademodal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/upgrademodal/upgrademodal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"mydForm\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\" id=\"exampleModalLabel\">\n      <div class=\"modal-icon\">\n\n      </div>\n      <h5>Upgrate to company</h5>\n      <hr>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <!--establishing-->\n  <div class=\"modal-body\">\n    <div class=\"form upgrate\">\n      <select class=\"text select\" [(ngModel)]=\"company\" formControlName=\"Company\" name=\"country\" [ngClass]=\"{ 'is-invalid': hasError('Company','required'),'is-valid':mydForm.get('Company').touched && !hasError('Company','required')  }\"\n        placeholder=\"country\">\n        <option *ngFor=\"let company of CompanyArr\" value=\"{{company.code}}\">{{ company.value }}</option>\n      </select>\n\n      <!--Esta comany  -->\n      <select class=\" text select form-control\" *ngIf=\"company == 'Esta'\" formControlName=\"countryCode\"\n        [(ngModel)]=\"CountryCode\" [ngClass]=\"{ 'is-invalid': hasError('countryCode','required'),'is-valid':mydForm.get('countryCode').touched && !hasError('countryCode','required')  }\">\n        <option *ngFor=\"let country of countryArr\" value=\"{{country.code}}\">{{ country.value }}</option>\n      </select>\n\n      <input class=\"text\" type=\"text\" name=\"text\" *ngIf=\"company != 'Inverst' \" formControlName=\"companyName\"\n        [(ngModel)]=\"CompanyName\" [ngClass]=\"{ 'is-invalid': hasError('companyName','required')|| hasError('companyName','maxlength'),\n            'is-valid':mydForm.get('companyName').touched && !hasError('companyName','required') &&   !hasError('companyName','maxlength')   }\"\n        placeholder=\"Company name\" />\n\n      <input class=\"text\" type=\"date\" name=\"text\" *ngIf=\"company == 'Esta'\" formControlName=\"expireDate\"\n        [(ngModel)]=\"ExpireDate\" [ngClass]=\"{ 'is-invalid': hasError('expireDate','required'),\n      'is-valid':mydForm.get('expireDate').touched && !hasError('expireDate','required')   }\"\n        placeholder=\"Expiry date:\" />\n\n      <input class=\"text\" type=\"text\" name=\"text\" *ngIf=\"company == 'Esta' ||company == 'Inter' \"\n        formControlName=\"websiteLink\" [(ngModel)]=\"WebsiteLink\" [ngClass]=\"{ 'is-invalid': hasError('websiteLink','required')|| hasError('websiteLink','maxlength'),\n        'is-valid':mydForm.get('websiteLink').touched && !hasError('websiteLink','required') &&   !hasError('websiteLink','maxlength')   }\"\n        placeholder=\"company websit \" />\n\n      <input class=\"text\" type=\"email\" name=\"text\" formControlName=\"mail\" [(ngModel)]=\"Mail\" [ngClass]=\"{ 'is-invalid': hasError('mail','required')|| hasError('mail','maxlength') || hasError('mail','pattern'),\n      'is-valid':mydForm.get('mail').touched && !hasError('mail','required') &&   !hasError('mail','maxlength') &&   !hasError('mail','pattern')  }\"\n        placeholder=\"Email addres \" />\n\n\n      <!--New investor  -->\n      <input class=\"text\" type=\"text\" name=\"text\" *ngIf=\"company == 'Inverst'\" formControlName=\"investnentType\"\n        [(ngModel)]=\"InvestnentType\" placeholder=\"Investment type\" [ngClass]=\"{ 'is-invalid': hasError('investnentType','required') ,\n        'is-valid':mydForm.get('investnentType').touched && !hasError('investnentType','required')  }\" />\n      <select class=\" text select form-control\" *ngIf=\"company == 'Inverst'\" formControlName=\"investor\"\n        [(ngModel)]=\"Investor\" [ngClass]=\"{ 'is-invalid': hasError('investor','required'),'is-valid':mydForm.get('investor').touched && !hasError('investor','required')  }\">\n        <option *ngFor=\"let country of countryArr\" value=\"{{country.code}}\">{{ country.value }}</option>\n\n      </select>\n\n      <!-- internal -->\n      <select class=\" text select form-control\" *ngIf=\"company == 'Inter'\" formControlName=\"investmentCountryCode\"\n        [(ngModel)]=\"InvestmentCountryCode\" [ngClass]=\"{ 'is-invalid': hasError('investmentCountryCode','required'),'is-valid':mydForm.get('investmentCountryCode').touched && !hasError('investmentCountryCode','required')  }\">\n        <option *ngFor=\"let region of RegionArr2\" value=\"{{region.code}}\">{{ region.value }}</option>\n\n      </select>\n\n\n\n\n      <!--Inter company activity -->\n      <input class=\"text\" type=\"text\" name=\"text\" *ngIf=\"company == 'Inter'\" formControlName=\"activity\"\n        [(ngModel)]=\"Activity\" [ngClass]=\"{ 'is-invalid': hasError('activity','required') ,\n      'is-valid':mydForm.get('activity').touched && !hasError('activity','required')  }\"\n        placeholder=\"Activity\" />\n\n\n      <input class=\"text\" type=\"number\" name=\"text\" *ngIf=\"company == 'Inverst'\" formControlName=\"capital\"\n        [(ngModel)]=\"Capital\" [ngClass]=\"{ 'is-invalid': hasError('capital','required') ,\n      'is-valid':mydForm.get('capital').touched && !hasError('capital','required')  }\"\n        placeholder=\"Capital ($)\" />\n\n      <!--nationality-->\n      <select class=\" text select form-control\" *ngIf=\"company != 'Esta'\" (change)=\"getRegionValue2()\"\n        formControlName=\"nationality\" [(ngModel)]=\"Nationality\" [ngClass]=\"{ 'is-invalid': hasError('nationality','required'),'is-valid':mydForm.get('nationality').touched && !hasError('nationality','required')  }\">\n        <option *ngFor=\"let company of countryArr\" value=\"{{company.code}}\">{{ company.value }}</option>\n\n      </select>\n\n\n\n      <span *ngIf=\"company != 'Inverst'\">C.R Image</span>\n      <div class=\"custom-file\" *ngIf=\"company != 'Inverst'\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" formControlName=\"imageblob1\" [(ngModel)]=\"imageBlob1\"\n          [ngClass]=\"{ 'is-invalid': mydForm.get('imageblob1').touched && mydForm.get('imageblob1').hasError('required'),\n      'is-valid':mydForm.get('imageblob1').touched && !mydForm.get('imageblob1').hasError('required') }\"\n          (change)=\"processFile($event,1)\" accept=\"image/*\" required>\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 == ''\">no image choosen </label>\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\" *ngIf=\"pictureName1 != ''\">{{pictureName1}} </label>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"modal-footer upgrate-foot\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bsModalRef.hide()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"company == 'Esta'\" (click)=\"upgradeService()\"\n      [disabled]=\"\n        mydForm.get('countryCode').hasError('required')||\n        mydForm.get('companyName').hasError('required')|| mydForm.get('companyName').hasError('maxlength')||\n        mydForm.get('expireDate').hasError('required')||\n        mydForm.get('websiteLink').hasError('required')||  mydForm.get('websiteLink').hasError('maxlength')||\n        mydForm.get('mail').hasError('required')|| mydForm.get('mail').hasError('maxlength') ||  mydForm.get('mail').hasError('pattern')||\n        mydForm.get('imageblob1').hasError('required')\n\n    \">Send\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"company == 'Inter'\" (click)=\"upgradeService()\"\n      [disabled]=\"\n        mydForm.get('companyName').hasError('required')|| mydForm.get('companyName').hasError('maxlength')||\n        mydForm.get('websiteLink').hasError('required')||  mydForm.get('websiteLink').hasError('maxlength')||\n        mydForm.get('mail').hasError('required')|| mydForm.get('mail').hasError('maxlength') ||  mydForm.get('mail').hasError('pattern')||\n        mydForm.get('imageblob1').hasError('required')||\n        mydForm.get('investmentCountryCode').hasError('required')||\n        mydForm.get('activity').hasError('required')||\n        mydForm.get('nationality').hasError('required')\n        \n    \">Send</button>\n    <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"company == 'Inverst'\" (click)=\"upgradeService()\"\n      [disabled]=\"\n        mydForm.get('mail').hasError('required')|| mydForm.get('mail').hasError('maxlength') ||  mydForm.get('mail').hasError('pattern')||\n        mydForm.get('investnentType').hasError('required')||\n        mydForm.get('investor').hasError('required')||\n        mydForm.get('capital').hasError('required')||\n        mydForm.get('nationality').hasError('required')\n    \">Send</button>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/component/upgrademodal/upgrademodal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/upgrademodal/upgrademodal.component.ts ***!
  \******************************************************************/
/*! exports provided: UpgrademodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgrademodalComponent", function() { return UpgrademodalComponent; });
/* harmony import */ var _services_shared_user_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/shared/user-data.service */ "./src/app/services/shared/user-data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpgrademodalComponent = /** @class */ (function () {
    function UpgrademodalComponent(bsModalRef, UserService, builder, toastr, spinner) {
        var _this = this;
        this.bsModalRef = bsModalRef;
        this.UserService = UserService;
        this.builder = builder;
        this.toastr = toastr;
        this.spinner = spinner;
        this.countryArr = [];
        this.CompanyArr = [];
        this.RegionArr2 = [];
        this.pictureName1 = '';
        console.log("ddddd");
        console.log(this.company);
        this.mydForm = this.builder.group({
            Company: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            countryCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            companyName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]],
            expireDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            websiteLink: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]],
            mail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]],
            activity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nationality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            investmentCountryCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            investor: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            investnentType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            capital: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            "imageblob1": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
        var lang = localStorage.getItem("lang");
        if (lang == "en") {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        this.UserService.getPickListCCJ("Country", lang).subscribe(function (data) {
            _this.countryArr = data;
            // this.CountryCode=this.countryArr[0].code;
        }, function (error) { });
        this.UserService.getPickListCCJ("Company", lang).subscribe(function (data) {
            _this.CompanyArr = data;
            _this.company = _this.CompanyArr[0].code;
        }, function (error) { });
    }
    UpgrademodalComponent.prototype.ngOnInit = function () {
    };
    UpgrademodalComponent.prototype.upgradeService = function () {
        var _this = this;
        var data = {};
        console.log("ah,e", this.company == 'Esta');
        if (this.company == 'Esta') {
            // establish
            data = {
                companyName: this.CompanyName,
                countryCode: this.CountryCode,
                investmentCountryCode: "",
                websiteLink: this.WebsiteLink,
                investnentType: "",
                type: this.company,
                expireDate: this.ExpireDate,
                capital: "",
                mail: this.Mail
            };
        }
        else if (this.company == 'Inverst') {
            // Investor form
            data = {
                companyName: "",
                countryCode: this.Nationality,
                investmentCountryCode: this.Investor,
                websiteLink: "",
                investnentType: this.InvestnentType,
                type: this.company,
                expireDate: null,
                capital: this.Capital,
                mail: this.Mail
            };
        }
        else if (this.company == 'Inter') {
            // inter compny form
            data = {
                companyName: this.CompanyName,
                countryCode: this.Nationality,
                investmentCountryCode: this.InvestmentCountryCode,
                websiteLink: this.WebsiteLink,
                investnentType: this.Activity,
                type: this.company,
                expireDate: null,
                capital: "",
                mail: this.Mail
            };
        }
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        this.UserService.companyupgradeservices(data).subscribe(function (data) {
            console.log(data.id);
            _this.UserService.UploadCompanyCR(_this.file1, data.id).subscribe(function (data) {
                _this.bsModalRef.hide();
                _this.spinner.hide();
                _this.toastr.success('Upgraded  ', 'successfully', option);
            }, function (error) {
                _this.spinner.hide();
                _this.toastr.error(error.errorCode, error.message, option);
            });
        }, function (error) {
        });
    };
    // get region for new
    UpgrademodalComponent.prototype.getRegionValue2 = function () {
        var _this = this;
        var lang = localStorage.getItem("lang");
        if (lang == "en") {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        this.RegionArr2 = [];
        this.InvestmentCountryCode = "";
        if (this.Nationality != null) {
            this.UserService.getPickListRegion(this.Nationality, lang)
                .subscribe(function (data) {
                _this.RegionArr2 = data;
                // console.log(this.RegionArr2);
            }, function (error) {
            });
        }
    };
    // get image
    UpgrademodalComponent.prototype.processFile = function (event, num) {
        var _this = this;
        if (num == 1) {
            var reader_1 = new FileReader();
            if (event.target.files && event.target.files.length > 0) {
                var file_1 = event.target.files[0];
                reader_1.readAsArrayBuffer(file_1);
                reader_1.onload = function () {
                    var imgBlob = new Blob([reader_1.result], { type: file_1.type });
                    _this.file1 = imgBlob;
                };
            }
            if (this.imageBlob1 != '') {
                var currentName = this.imageBlob1.substring(this.imageBlob1.lastIndexOf('\\') + 1, this.imageBlob1.length);
                this.pictureName1 = currentName;
            }
            else {
                this.pictureName1 = '';
            }
        }
    };
    UpgrademodalComponent.prototype.hasError = function (field, error) {
        var ctrl = this.mydForm.get(field);
        return (ctrl.dirty || ctrl.touched) && ctrl.hasError(error);
    };
    UpgrademodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upgrademodal',
            template: __webpack_require__(/*! ./upgrademodal.component.html */ "./src/app/component/upgrademodal/upgrademodal.component.html"),
            styles: [__webpack_require__(/*! ./upgrademodal.component.css */ "./src/app/component/upgrademodal/upgrademodal.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"], _services_shared_user_data_service__WEBPACK_IMPORTED_MODULE_0__["UserDataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], UpgrademodalComponent);
    return UpgrademodalComponent;
}());



/***/ }),

/***/ "./src/app/component/verfiymodal/verfiymodal.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/verfiymodal/verfiymodal.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".is-invalid {\r\n  border-color: #dc3545 !important;\r\n}\r\n\r\n.is-valid {\r\n  border-color: #28a745 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/verfiymodal/verfiymodal.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/verfiymodal/verfiymodal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"verfiyForm\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\" id=\"exampleModalLabel\">\n      <div class=\"modal-icon\">\n\n      </div>\n      <h5>Verify</h5>\n      <hr>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form verify\">\n\n\n      <input class=\"text\" type=\"text\" name=\"phone\" placeholder=\"Code\" formControlName=\"code\" [(ngModel)]=\"Code\"\n        [ngClass]=\"{ 'is-invalid': verfiyForm.get('code').touched && verfiyForm.get('code').hasError('required'),\n          'is-valid':verfiyForm.get('code').touched && !verfiyForm.get('code').hasError('required') }\" />\n\n      <button class=\"btn btn-primary\" (click)=\"verfiyEmail()\" [disabled]=\"!verfiyForm.valid \">Verify</button>\n      <a class=\"link\" (click)=\"resendCode()\">Resend code</a>\n    </div>\n\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/component/verfiymodal/verfiymodal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/verfiymodal/verfiymodal.component.ts ***!
  \****************************************************************/
/*! exports provided: VerfiymodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerfiymodalComponent", function() { return VerfiymodalComponent; });
/* harmony import */ var _services_shared_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/shared/session.service */ "./src/app/services/shared/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared/authention.service */ "./src/app/services/shared/authention.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var VerfiymodalComponent = /** @class */ (function () {
    function VerfiymodalComponent(bsModalRef, autherService, deviceService, router, builder, spinner, toastr) {
        this.bsModalRef = bsModalRef;
        this.autherService = autherService;
        this.deviceService = deviceService;
        this.router = router;
        this.builder = builder;
        this.spinner = spinner;
        this.toastr = toastr;
        this.actionVerfiy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.verfiyForm = this.builder.group({
            "code": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        console.log("ddddd");
        var data = JSON.parse(localStorage.getItem("userSignupData"));
        this.getSignupData = data;
        console.log(this.getSignupData);
        this.DeviceTypeFunction();
    }
    VerfiymodalComponent.prototype.ngOnInit = function () {
    };
    VerfiymodalComponent.prototype.verfiyEmail = function () {
        var _this = this;
        this.spinner.show();
        var option = {
            timeOut: 5000,
            progressBar: true
        };
        var lang = localStorage.getItem("lang");
        if (lang == "en") {
            lang = "English";
        }
        else {
            lang = "Arabic";
        }
        this.autherService.userVerifyCode(this.Code, this.getSignupData.userName, this.getSignupData.password, lang, this.bowerType, this.OS, this.getSignupData.countryPhoneCode, this.deviceType).subscribe(function (data) {
            console.log(data);
            _this.toastr.success('Login successfully!', 'Welcome', option);
            _this.actionVerfiy.emit(data);
            console.log(data);
            localStorage.setItem('type', data.userDetails.type);
            _services_shared_session_service__WEBPACK_IMPORTED_MODULE_0__["SessionService"].saveDataInLocalStorage(data);
            _services_shared_session_service__WEBPACK_IMPORTED_MODULE_0__["SessionService"].clearsinginSaveData();
            localStorage.removeItem("userSignupData");
            _this.bsModalRef.hide();
            _this.spinner.hide();
            if (_this.router.url == '/home') {
                _this.router.navigate(['']);
            }
            else {
                _this.router.navigate(['home']);
            }
        }, function (error) {
            if (error.errorCode == "4000") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4001") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4002") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4003") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4004") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4005") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4006") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4007") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4009") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4010") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4011") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4012") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4013") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4014") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4015") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4016") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4018") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4023") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4037") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4041") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4043") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "4044") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "1013") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "3004") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            else if (error.errorCode == "3009") {
                _this.toastr.error(error.errorCode, error.message, option);
            }
            _this.spinner.hide();
        });
    };
    VerfiymodalComponent.prototype.DeviceTypeFunction = function () {
        var deviceInfo = this.deviceService.getDeviceInfo();
        var isMobile = this.deviceService.isMobile();
        var isTablet = this.deviceService.isTablet();
        var isDesktopDevice = this.deviceService.isDesktop();
        if (isMobile) {
            this.deviceType = "Mobile";
        }
        else if (isTablet) {
            this.deviceType = "Tablet";
        }
        else if (isDesktopDevice) {
            this.deviceType = "DesktopDevice";
        }
        this.bowerType = deviceInfo.browser + '-' + deviceInfo.browser_version;
        this.OS = deviceInfo.os + '-' + deviceInfo.os_version;
    };
    VerfiymodalComponent.prototype.resendCode = function () {
        var _this = this;
        this.spinner.show();
        this.autherService.ResendCode(this.getSignupData.userName).subscribe(function (data) {
            // console.log(data);
            _this.spinner.hide();
        }, function (error) {
            // console.log(error);
            _this.spinner.hide();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], VerfiymodalComponent.prototype, "actionVerfiy", void 0);
    VerfiymodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verfiymodal',
            template: __webpack_require__(/*! ./verfiymodal.component.html */ "./src/app/component/verfiymodal/verfiymodal.component.html"),
            styles: [__webpack_require__(/*! ./verfiymodal.component.css */ "./src/app/component/verfiymodal/verfiymodal.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"],
            _services_shared_authention_service__WEBPACK_IMPORTED_MODULE_4__["AuthentionService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__["DeviceDetectorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], VerfiymodalComponent);
    return VerfiymodalComponent;
}());



/***/ }),

/***/ "./src/app/services/authguard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/session.service */ "./src/app/services/shared/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardService = /** @class */ (function () {
    function AuthguardService(router) {
        this.router = router;
    }
    AuthguardService.prototype.canActivate = function () {
        // if (!SessionService.userSessionData.is_log) {
        // console.log(SessionService.userSessionData.userDetails.type, !SessionService.userSessionData.is_log && SessionService.userSessionData.userDetails.type != 'Company');
        if (!_shared_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].userSessionData.is_log || _shared_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].userSessionData.userDetails.type != 'Company') {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    };
    AuthguardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/services/global.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService, DataSourceClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceClass", function() { return DataSourceClass; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/* models */
/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */
var GlobalService = /** @class */ (function () {
    function GlobalService() {
        /*private sidebarToggleSource = new Subject<boolean>();
        sidebarToggle$ = this.sidebarToggleSource.asObservable();
        _sidebarToggleState(sidebarToggle: boolean) {
            this.sidebarToggleSource.next(sidebarToggle);
        }*/
        /* private tabsMenuSource = new Subject<TabMenuModel>();
        tabsMenu$ = this.tabsMenuSource.asObservable();
        _tabsMenu(tabsMenu: TabMenuModel) {
            this.tabsMenuSource.next(tabsMenu);
        }
        private tabsOrderSource = new Subject<Array<any>>();
        tabsOrder$ = this.tabsOrderSource.asObservable();
        _tabsOrder(tabsOrder: Array<any>) {
            this.tabsOrderSource.next(tabsOrder);
        }*/
        /* private notificationSource = new Subject<NotificationModel>();
        notification$ = this.notificationSource.asObservable();
        _notification(notification: NotificationModel) {
            this.notificationSource.next(notification);
        } */
        /* private isActivedSource = new Subject<any>();
        isActived$ = this.isActivedSource.asObservable();
        _isActived(isActived) {
            this.isActivedSource.next(isActived);
        }*/
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.data$ = this.dataSource.asObservable();
    }
    GlobalService.prototype.dataBusChanged = function (ev, value) {
        this.dataSource.next({
            ev: ev,
            value: value
        });
        console.log(this.data$);
    };
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], GlobalService);
    return GlobalService;
}());

var DataSourceClass = /** @class */ (function () {
    function DataSourceClass() {
    }
    return DataSourceClass;
}());



/***/ }),

/***/ "./src/app/services/menu.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/menu.service.ts ***!
  \******************************************/
/*! exports provided: menuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuService", function() { return menuService; });
/* harmony import */ var _admin_menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../admin/menu/menu */ "./src/app/admin/menu/menu.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global.service */ "./src/app/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var menuService = /** @class */ (function () {
    function menuService(_globalService, _router) {
        this._globalService = _globalService;
        this._router = _router;
        this.parent_node = null;
        this.node = null;
        this.path_item = [];
        this.getNodePath(_admin_menu_menu__WEBPACK_IMPORTED_MODULE_0__["MENU_ITEM"]);
    }
    menuService.prototype.queryParentNode = function (json, node_id) {
        for (var i = 0; i < json.length; i++) {
            if (this.node)
                break;
            var object = json[i];
            if (!object || !object.path)
                continue;
            if (object.path === node_id) {
                this.node = object;
                break;
            }
            else {
                if (object.children) {
                    this.parent_node = object;
                    this.queryParentNode(object.children, node_id);
                }
                else {
                    continue;
                }
            }
        }
        if (!this.node)
            this.parent_node = null;
        return {
            parent_node: this.parent_node,
            node: this.node
        };
    };
    menuService.prototype.creatRouterLink = function (nodeId) {
        this.node = null;
        this.parent_node = null;
        var menuObj = this.queryParentNode(_admin_menu_menu__WEBPACK_IMPORTED_MODULE_0__["MENU_ITEM"], nodeId);
        if (menuObj.parent_node && menuObj.parent_node.path) {
            this.path_item.unshift(menuObj.parent_node.path);
            return this.creatRouterLink(menuObj.parent_node.path);
        }
        else {
            return this.path_item;
        }
    };
    menuService.prototype.getNodePath = function (json) {
        var _this = this;
        json.forEach(function (index) {
            if (index.children) {
                //delete index.routerLink;
                _this.getNodePath(index.children);
                index.toggle = 'init';
            }
            else {
                _this.path_item = [index.path];
                index.routerLink = _this.creatRouterLink(index.path);
                index.routerLink.unshift('/', 'pages');
            }
        });
    };
    menuService.prototype.putSidebarJson = function () {
        return _admin_menu_menu__WEBPACK_IMPORTED_MODULE_0__["MENU_ITEM"];
    };
    menuService.prototype.selectItem = function (item) {
        var _this = this;
        item.forEach(function (element) {
            if (element.routerLink) {
                element.isActive = _this._router.isActive(_this._router.createUrlTree(element.routerLink), true);
                if (element.isActive)
                    //this._globalService._isActived(element);
                    _this._globalService.dataBusChanged('isActived', element);
            }
            else if (element.children)
                _this.selectItem(element.children);
        });
    };
    menuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], menuService);
    return menuService;
}());



/***/ }),

/***/ "./src/app/services/shared/Company.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/shared/Company.service.ts ***!
  \****************************************************/
/*! exports provided: CompanyServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyServices", function() { return CompanyServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/shared/settings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// General Classes /////////////////////////////////////////////
/*
  Generated class for the Services provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var CompanyServices = /** @class */ (function () {
    function CompanyServices(http) {
        this.http = http;
    }
    CompanyServices.prototype.GetCompany = function (pageSize, pageNumber, searchCriateria, type) {
        var data = {
            "pageSize": pageSize,
            "pageNumber": pageNumber,
            "searchCriateria": searchCriateria,
            "language": "English",
            "type": type,
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + 'companyservices/searchcompanies', data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(4000));
    };
    CompanyServices.prototype.GetFile = function (filename, formname) {
        return this.http.get(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + '/adminservices/getformsfiles?filename=' + filename + '&formname=' + formname, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonGetMethod6() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(4000));
    };
    CompanyServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CompanyServices);
    return CompanyServices;
}());



/***/ }),

/***/ "./src/app/services/shared/Services.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/shared/Services.service.ts ***!
  \*****************************************************/
/*! exports provided: ServiceServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceServices", function() { return ServiceServices; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/shared/settings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// General Classes /////////////////////////////////////////////
/*
  Generated class for the Services provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ServiceServices = /** @class */ (function () {
    function ServiceServices(http) {
        this.http = http;
    }
    ServiceServices.prototype.userLogin = function (userName, password) {
        var data = {
            "countryPhoneCode": "+2",
            "userName": userName,
            "password": password,
            "deviceType": "desktop",
            "browserType": "chrome",
            "osType": "windows",
            "timeZone": "GMT+0200",
            "language": "English",
            "location": "Egypt",
            "isMobileApp": false,
            "appName": "xx",
            "notificationId": "cccc"
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].DOMAIN_URL + 'userservices/signin', data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].getHeaderJson() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["timeout"])(4000));
    };
    ServiceServices.prototype.get_Charter_Accounting = function (pageSize, pageNumber, searchCriateria) {
        var data = {
            "pageSize": parseInt(pageSize),
            "pageNumber": pageNumber,
            "searchCriateria": searchCriateria
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].DOMAIN_URL + 'adminservices/getcharteraccounting', data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].getHeaderJsonGetMethod6() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["timeout"])(4000));
    };
    ServiceServices.prototype.GetEstablishCompnies = function (pageSize, pageNumber, searchCriateria) {
        var data = {
            "pageSize": pageSize,
            "pageNumber": pageNumber,
            "searchCriateria": searchCriateria,
            "language": "English"
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].DOMAIN_URL + 'adminservices/getestablishcompnies', data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].getHeaderJsonGetMethod6() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["timeout"])(4000));
    };
    ServiceServices.prototype.GetFeasabilityStudy = function (pageSize, pageNumber, searchCriateria) {
        var data = {
            "pageSize": pageSize,
            "pageNumber": pageNumber,
            "searchCriateria": searchCriateria,
            "language": "English"
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].DOMAIN_URL + 'adminservices/getfesabilitystudy', data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].getHeaderJsonGetMethod6() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["timeout"])(4000));
    };
    ServiceServices.prototype.GetCustomClearance = function (pageSize, pageNumber, searchCriateria) {
        var data = {
            "pageSize": pageSize,
            "pageNumber": pageNumber,
            "searchCriateria": searchCriateria,
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].DOMAIN_URL + 'adminservices/getcustomclearance', data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].getHeaderJsonGetMethod6() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["timeout"])(4000));
    };
    ServiceServices.prototype.GetOfficeServices = function (pageSize, pageNumber, searchCriateria) {
        var data = {
            "pageSize": pageSize,
            "pageNumber": pageNumber,
            "searchCriateria": searchCriateria,
            "language": "English"
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].DOMAIN_URL + 'adminservices/getofficeservices', data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].getHeaderJsonGetMethod6() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["timeout"])(4000));
    };
    ServiceServices.prototype.GetTradingAgencies = function (pageSize, pageNumber, searchCriateria) {
        var data = {
            "pageSize": pageSize,
            "pageNumber": pageNumber,
            "searchCriateria": searchCriateria,
            "language": "English"
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].DOMAIN_URL + 'adminservices/gettradingagencies', data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].getHeaderJsonGetMethod6() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["timeout"])(4000));
    };
    ServiceServices.prototype.GetCertifiedTranslations = function (pageSize, pageNumber, searchCriateria) {
        var data = {
            "pageSize": pageSize,
            "pageNumber": pageNumber,
            "searchCriateria": searchCriateria,
            "language": "English"
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].DOMAIN_URL + 'adminservices/getcertifiedtranslations', data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].getHeaderJsonGetMethod6() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["timeout"])(4000));
    };
    ServiceServices.prototype.GetShippings = function (pageSize, pageNumber, searchCriateria) {
        var data = {
            "pageSize": pageSize,
            "pageNumber": pageNumber,
            "searchCriateria": searchCriateria,
            "language": "English"
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].DOMAIN_URL + 'adminservices/getshippings', data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].getHeaderJsonGetMethod6() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["timeout"])(4000));
    };
    ServiceServices.prototype.GetHiringLabors = function (pageSize, pageNumber, jobTitleCode) {
        var data = {
            "pageSize": pageSize,
            "pageNumber": pageNumber,
            "jobTitleCode": jobTitleCode,
            "language": "English"
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].DOMAIN_URL + 'formservices/searchhiringlabors', data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].getHeaderJsonGetMethod() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["timeout"])(4000));
    };
    ServiceServices.prototype.GetEmployment = function (pageSize, pageNumber, jobTitleCode) {
        var data = {
            "pageSize": pageSize,
            "pageNumber": pageNumber,
            "jobTitleCode": jobTitleCode,
            "language": "English"
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].DOMAIN_URL + 'formservices/searchemployments', data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].getHeaderJsonGetMethod() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["timeout"])(4000));
    };
    ServiceServices.prototype.getJobTitlePickList = function () {
        return this.http.get(_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].DOMAIN_URL + 'picklistservices/getpicklist?type=Job_Title&language=English').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["timeout"])(4000));
    };
    ServiceServices.prototype.getFileByFormName = function (fileName, formname) {
        return this.http.get(_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].DOMAIN_URL + 'adminservices/getformsfiles?filename=' + fileName + '&formname=' + formname, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].getHeaderJsonWithTKN() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["timeout"])(4000));
    };
    ServiceServices.prototype.getImage = function (fileName, formname) {
        // return this.http.get(imageUrl, { responseType: ResponseContentType.Blob })
        //     .map((res: Response) => res.blob());
        return this.http.get(_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].DOMAIN_URL + 'adminservices/getformsfiles?filename=' + fileName + '&formname=' + formname, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"].getHeaderJsonWithTKN(), responseType: _angular_http__WEBPACK_IMPORTED_MODULE_3__["ResponseContentType"].Blob }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) { return res.blob(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["timeout"])(4000));
    };
    ServiceServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], ServiceServices);
    return ServiceServices;
}());



/***/ }),

/***/ "./src/app/services/shared/Users.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/shared/Users.service.ts ***!
  \**************************************************/
/*! exports provided: UsersServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersServices", function() { return UsersServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/shared/settings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersServices = /** @class */ (function () {
    function UsersServices(http) {
        this.http = http;
    }
    UsersServices.prototype.GetUsers = function (pageSize, pageNumber, searchCriateria) {
        var data = {
            "pageSize": pageSize,
            "pageNumber": pageNumber,
            "searchCriateria": searchCriateria,
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + 'userservices/getusersdata', data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonGetMethod6() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            // console.log("userData : ", error)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    UsersServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UsersServices);
    return UsersServices;
}());



/***/ }),

/***/ "./src/app/services/shared/authention.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/shared/authention.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthentionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentionService", function() { return AuthentionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/shared/settings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthentionService = /** @class */ (function () {
    function AuthentionService(http) {
        this.http = http;
    }
    // /////////////////////////////////////////////////////////////////////////////////////////
    // login service
    AuthentionService.prototype.Signin = function (data) {
        var dataObject = {
            "countryPhoneCode": data.code,
            "userName": data.userName,
            "password": data.password,
            "deviceType": data.deviceType,
            "browserType": data.bowerType,
            "osType": data.OS,
            "timeZone": "GMT+0200",
            "language": data.lang,
            "location": "Egypt",
            "isMobileApp": false,
            "appName": "Rafal Group WebSite",
            "notificationId": "cccc"
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + 'userservices/signin', dataObject, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJson() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            // console.log("userData : ", res)
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            // console.log("userData : ", error)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // /////////////////////////////////////////////////////////////////////////////////////////
    // signup service
    AuthentionService.prototype.signup = function (data) {
        var dataObject = {
            "countryPhoneCode": data.code,
            "userName": data.userName,
            "passWord": data.Password,
            "name": data.Name,
            "nationalId": data.nationalId,
            "notificationId": "gggg"
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + 'userservices/signup', dataObject, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJson() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            // console.log("userData : ", res)
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            // console.log("userData : ", error)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // /////////////////////////////////////////////////////////////////////////////////////////
    // forget pass
    AuthentionService.prototype.forgetPassword = function (userName) {
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "userservices/forgetpassword?username=" +
            userName, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonGetMethod() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            // console.log("userData : ", res)
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            // console.log("userData : ", error)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // /////////////////////////////////////////////////////////////////////////////////////////
    // request pass
    AuthentionService.prototype.requestForgetPassword = function (verificationcode, username, newpassword) {
        var data = new URLSearchParams();
        data.set("verificationcode", verificationcode);
        data.set("username", username);
        data.set("newpassword", newpassword);
        var body = data.toString();
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + "userservices/resetpasswordforget", body, {
            headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderXWFORM()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // /////////////////////////////////////////////////////////////////////////////////////////
    AuthentionService.prototype.userVerifyCode = function (verifyCode, userName, password, lang, browserType, osType, countryPhoneCode, devicetype
    // nationalId
    ) {
        var data = {
            userName: userName,
            password: password,
            deviceType: devicetype,
            browserType: browserType,
            osType: osType,
            timeZone: "GMT+0200",
            language: lang,
            location: "Egypt",
            isMobileApp: true,
            // nationalId: nationalId,
            countryPhoneCode: countryPhoneCode,
            appName: "Rafal Group WebSite"
        };
        return this.http
            .put(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "userservices/mobilevalidate?verificationcode=" +
            verifyCode, data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJson() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // /////////////////////////////////////////////////////////////////////////////////////////
    AuthentionService.prototype.ResendCode = function (userPhone) {
        return this.http
            .get(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + "userservices/resendcode?username=" + userPhone)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // /////////////////////////////////////////////////////////////////////////////////////////
    AuthentionService.prototype.changePassword = function (oldpass, newpass) {
        return this.http
            .put(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + "userservices/changepassword", null, {
            headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonFormData(oldpass, newpass)
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // /////////////////////////////////////////////////////////////////////////////////////////
    AuthentionService.prototype.logOut = function () {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN()
        });
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + "userservices/logout", null, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // /////////////////////////////////////////////////////////////////////////////////////////
    AuthentionService.prototype.validateSession = function () {
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + "usersessionservices/validatesession", null, {
            headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    AuthentionService.prototype.UploadProfileImage = function (imageBlob) {
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + 'userservices/uploadprofileimage', imageBlob, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    AuthentionService.prototype.getProfileImage = function (imageUrl) {
        return this.http.get(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + 'userservices/getprofileimage?imgetkn=' + imageUrl, { responseType: _angular_http__WEBPACK_IMPORTED_MODULE_1__["ResponseContentType"].Blob })
            // .map((res: Response) => res.blob());
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    AuthentionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthentionService);
    return AuthentionService;
}());



/***/ }),

/***/ "./src/app/services/shared/companyservice.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/shared/companyservice.service.ts ***!
  \***********************************************************/
/*! exports provided: CompanyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyserviceService", function() { return CompanyserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/shared/settings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyserviceService = /** @class */ (function () {
    function CompanyserviceService(http) {
        this.http = http;
    }
    // / formservices/add charter Service
    CompanyserviceService.prototype.charterService = function (accountyear, bank, company, yearofbudget) {
        var body = new FormData();
        body.append("accOfYear", accountyear);
        body.append("bankOfYear", bank);
        body.append("companyAcc", company);
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "formservices/addcharteracc?yearofbudget=" +
            yearofbudget, body, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN2() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // Hiring laborartory services
    CompanyserviceService.prototype.hiringService = function (service) {
        var data = service;
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + "formservices/addhiringlabors", data, {
            headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN2()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    //fesability study services
    CompanyserviceService.prototype.fesabilitystudy = function (service) {
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + "formservices/addfesabilitystudy", service, {
            headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN2()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // formservices/add office services
    CompanyserviceService.prototype.officeserv = function (service) {
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + "formservices/addofficeserv", service, {
            headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN2()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // formservices/add  Establishing Service
    CompanyserviceService.prototype.establishingService = function (countrycode, activity, region, capitalcurrency, other, idsimage, authorizationimage, agreementimage) {
        var body = new FormData();
        body.append("idsimage", idsimage);
        body.append("authorizationimage", authorizationimage);
        body.append("agreementimage", agreementimage);
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "formservices/addestablishcompany?countrycode=" +
            countrycode +
            "&activity=" +
            activity +
            "&region=" +
            region +
            "&capitalcurrency=" +
            capitalcurrency +
            "&other=" +
            other, body, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN2() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // formservices/add  Employment Service
    CompanyserviceService.prototype.EmploymentService = function (activity, jobtitle, salary, filetype, cv) {
        var body = new FormData();
        body.append("cv", cv);
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "formservices/addemplyment?activity=" +
            activity +
            "&jobtitle=" +
            jobtitle +
            "&salary=" +
            salary +
            "&filetype=" +
            filetype, body, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN2() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // formservices/add   Custom Clearance Service
    CompanyserviceService.prototype.CustomClearanceService = function (shipmentport, shipmentdescription, other, shipmentbill, authorization) {
        var body = new FormData();
        body.append("shipmentbill", shipmentbill);
        body.append("authorization", authorization);
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "formservices/addcustomclearance?shipmentport=" +
            shipmentport +
            "&shipmentdescription=" +
            shipmentdescription +
            "&other=" +
            other, body, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN2() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // formservices/add   Trading agency Service
    CompanyserviceService.prototype.TradingagencyService = function (activity, requiredband, productdesc, location, other, productimge) {
        var body = new FormData();
        body.append("productimge", productimge);
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "formservices/addtradingagency?activity=" +
            activity +
            "&requiredband=" +
            requiredband +
            "&productdesc=" +
            productdesc +
            "&location=" +
            location +
            "&other=" +
            other, body, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN2() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // formservices/Add Shipping Service
    CompanyserviceService.prototype.ShippingService = function (shipmentport, responsablename, goodstype, streetadress, billauthorizationimge) {
        var body = new FormData();
        body.append("billauthorizationimge", billauthorizationimge);
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "formservices/addshipping?shipmentport=" +
            shipmentport +
            "&responsablename=" +
            responsablename +
            "&goodstype=" +
            goodstype +
            "&streetadress=" +
            streetadress, body, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN2() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // formservices/Add Certified Translation
    CompanyserviceService.prototype.CertifiedService = function (translationtype, language, responsiblereceiver, other, filetype, translationfile) {
        var body = new FormData();
        body.append("translationfile", translationfile);
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "formservices/addcertifiedtranslation?translationtype=" +
            translationtype +
            "&language=" +
            language +
            "&responsiblereceiver=" +
            responsiblereceiver +
            "&other=" +
            other +
            "&filetype=" +
            filetype, body, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN2() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // company upgrade services
    CompanyserviceService.prototype.companyupgradeservices = function (data) {
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + "companyservices/companyupgrade", data, {
            headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonGetMethod()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // image for upgrade
    CompanyserviceService.prototype.UploadCompanyCR = function (crimage, compid) {
        var body = new FormData();
        body.append("crimage", crimage);
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "companyservices/uploadcompanycr?compid=" +
            compid, body, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN2() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    /////////////////////////////////////////////////////////////////////////////////.
    //add advertisment
    CompanyserviceService.prototype.addAdvertisment = function (adimage, title, description) {
        var body = new FormData();
        body.append("adimage", adimage);
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "advertisementservices/addadvertisement?title=" +
            title +
            "&description=" +
            description, body, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN2() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // get all advertient token
    CompanyserviceService.prototype.getalladvertienttoken = function () {
        return this.http
            .get(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + "advertisementservices/getadds")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // get image by  token
    CompanyserviceService.prototype.getimagebytoken = function (token) {
        return this.http
            .get(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "advertisementservices/getaddimage?imgetkn=" +
            token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // pick list company country job-title
    CompanyserviceService.prototype.getPickListCCJ = function (type, lang) {
        return this.http
            .get(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "picklistservices/getpicklist?type=" +
            type +
            "&language=" +
            lang)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // pick list Region
    CompanyserviceService.prototype.getPickListRegion = function (parentcode, lang) {
        return this.http
            .get(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "picklistservices/getregionpicklist?parentcode=" +
            parentcode +
            "&language=" +
            lang)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    CompanyserviceService.prototype.GetAdds = function (pageSize, pageNumber, searchCriateria) {
        var data = {
            "pageSize": pageSize,
            "pageNumber": pageNumber,
            "searchCriateria": searchCriateria,
        };
        return this.http.post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + 'advertisementservices/searchadds', data, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonGetMethod6() }).map(function (res) {
            return res.json();
        });
    };
    CompanyserviceService.prototype.DeleteAds = function (id) {
        return this.http.delete(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + 'advertisementservices/deleteadd?addid=' + id, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonGetMethod6() }).map(function (res) {
            return res.json();
        });
    };
    CompanyserviceService.prototype.toggleAds = function (id, status) {
        return this.http.put(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + 'advertisementservices/updateadd?isactive=' + status + '&addid=' + id, null, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN() }).map(function (res) {
            return res.json();
        });
    };
    CompanyserviceService.prototype.getImageByToken = function (token) {
        var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        contentHeaders.append("imgetkn", token);
        return this.http.get(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + 'advertisementservices/getaddimage?imgetkn=' + token, { headers: token, responseType: _angular_http__WEBPACK_IMPORTED_MODULE_1__["ResponseContentType"].Blob }).map(function (res) {
            return res.blob();
        });
    };
    CompanyserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CompanyserviceService);
    return CompanyserviceService;
}());



/***/ }),

/***/ "./src/app/services/shared/session.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/shared/session.service.ts ***!
  \****************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    SessionService_1 = SessionService;
    SessionService.saveDataInLocalStorage = function (data) {
        SessionService_1.userSessionData = data;
        SessionService_1.userSessionData.is_log = true;
        localStorage.setItem("token", data.tkn);
        localStorage.setItem("imgToken", data.userDetails.picture_url);
        localStorage.setItem("userName", data.userDetails.userName);
    };
    SessionService.saveInSession = function (data) {
        SessionService_1.userSessionData = data;
        SessionService_1.userSessionData.is_log = true;
    };
    SessionService.getDataFromLocalstorage = function () {
        SessionService_1.userSessionData.tkn = JSON.parse(localStorage.getItem("token"));
    };
    SessionService.clearDateFromLocalStorage = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("type");
    };
    SessionService.singinSaveData = function (userName, pass, countryPhoneCode) {
        this.signupData.userName = userName;
        this.signupData.password = pass;
        this.signupData.countryPhoneCode = countryPhoneCode;
        localStorage.setItem("userSignupData", JSON.stringify(this.signupData));
    };
    SessionService.clearsinginSaveData = function () {
        SessionService_1.signupData = {
            userName: "",
            password: "",
            countryPhoneCode: ""
        };
    };
    SessionService.resetData = function () {
        SessionService_1.userSessionData = {
            tkn: "",
            language: "",
            userDetails: {
                userId: 0,
                phone: "",
                picture_url: null,
                type: "",
                userName: "",
                blocked: false,
                resetPasswordNeeded: false,
                validMobile: false,
                gender: null,
                numOfVerification: 0,
                notificationId: null,
                numOfNotifications: null,
                status: null,
                language: null,
                cityCountryService: false,
                notificationService: false
            },
            is_log: false
        };
    };
    var SessionService_1;
    SessionService.userSessionData = {
        tkn: "",
        language: "",
        userDetails: {
            userId: 0,
            phone: "",
            picture_url: null,
            type: "",
            userName: "",
            blocked: false,
            resetPasswordNeeded: false,
            validMobile: false,
            gender: null,
            numOfVerification: 0,
            notificationId: null,
            numOfNotifications: null,
            status: null,
            language: null,
            cityCountryService: false,
            notificationService: false
        },
        is_log: false
    };
    SessionService.signupData = {
        userName: "",
        password: "",
        countryPhoneCode: ""
        // nationalId: ""
    };
    SessionService = SessionService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/services/shared/settings.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/shared/settings.service.ts ***!
  \*****************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.service */ "./src/app/services/shared/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsService = /** @class */ (function () {
    function SettingsService(http) {
        this.http = http;
    }
    SettingsService.getHeaderJson = function () {
        var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        contentHeaders.append('Content-Type', 'application/json');
        return contentHeaders;
    };
    SettingsService.getHeaderJsonFormData = function (oldpass, newpass) {
        var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        contentHeaders.append('oldpassword', oldpass);
        contentHeaders.append('newpassword', newpass);
        contentHeaders.append('tkn', _session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].userSessionData.tkn);
        return contentHeaders;
    };
    SettingsService.getHeaderJsonGetMethod = function () {
        var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        return contentHeaders;
    };
    SettingsService.getHeaderJsonGetMethod2 = function () {
        var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        return contentHeaders;
    };
    SettingsService.getHeaderJsonGetMethod6 = function () {
        var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        contentHeaders.append("Content-Type", "application/json");
        contentHeaders.append('tkn', _session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].userSessionData.tkn);
        return contentHeaders;
    };
    SettingsService.getHeaderJsonWithTKN = function () {
        var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        contentHeaders.append('tkn', _session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].userSessionData.tkn);
        return contentHeaders;
    };
    SettingsService.getHeaderJsonWithTKN2 = function () {
        var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        contentHeaders.append('tkn', _session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].userSessionData.tkn);
        return contentHeaders;
    };
    SettingsService.getHeaderXWFORM = function () {
        var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        contentHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        return contentHeaders;
    };
    SettingsService.getHeaderJsonWithTKNImgeUpload = function () {
        var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        contentHeaders.append('Accept', 'application/json');
        return contentHeaders;
    };
    SettingsService.getHeaderJsonWithTKN3 = function () {
        var contentHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        // console.log(sessionData.userSessionData.tkn);
        contentHeaders.append("tkn", _session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"].userSessionData.tkn);
        contentHeaders.append("Accept", "application/json");
        return contentHeaders;
    };
    SettingsService.DOMAIN_URL = 
    // "http://localhost:8080/Dolphin_Services/";
    "http://rafalgroups.com/Dolphin_Services/";
    SettingsService.DOMAIN_ImgeURLAdver = 
    // "http://localhost:8080/Dolphin_Services/advertisementservices/getaddimage?imgetkn=";
    "http://rafalgroups.com/Dolphin_Services/advertisementservices/getaddimage?imgetkn=";
    SettingsService.imageUrlCompany = 
    // 'http://localhost:8080/Dolphin_Services/companyservices/getcompanyimage?imgetkn='
    'http://rafalgroups.com/Dolphin_Services/companyservices/getcompanyimage?imgetkn=';
    SettingsService.imageUrlProfile = 
    // "http://localhost:8080/Dolphin_Services/userservices/getprofileimage?imgetkn=";
    "http://rafalgroups.com/Dolphin_Services/userservices/getprofileimage?imgetkn=";
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/services/shared/user-data.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/shared/user-data.service.ts ***!
  \******************************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/shared/settings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDataService = /** @class */ (function () {
    function UserDataService(http) {
        this.http = http;
    }
    // pick list company country job-title
    UserDataService.prototype.getPickListCCJ = function (type, lang) {
        return this.http
            .get(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "picklistservices/getpicklist?type=" +
            type +
            "&language=" +
            lang)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            // console.log("userData : ", error)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // pick list Region
    UserDataService.prototype.getPickListRegion = function (parentcode, lang) {
        return this.http
            .get(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "picklistservices/getregionpicklist?parentcode=" +
            parentcode +
            "&language=" +
            lang)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            // console.log("userData : ", error)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // pick list get countries 
    UserDataService.prototype.getcountriesphpicklistcodes = function () {
        return this.http
            .get(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + "picklistservices/getcountriesphpicklistcodes")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            // console.log("userData : ", error)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // company upgrade services
    UserDataService.prototype.companyupgradeservices = function (data) {
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + "companyservices/companyupgrade", data, {
            headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonGetMethod6()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // image for upgrade
    UserDataService.prototype.UploadCompanyCR = function (crimage, compid) {
        var body = new FormData();
        body.append("crimage", crimage);
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL +
            "companyservices/uploadcompanycr?compid=" +
            compid, body, { headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN2() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    // upload user profile image
    UserDataService.prototype.uploadImage = function (file) {
        var formData = new FormData();
        formData.append("profileimage", file);
        // console.log("form ", formData);
        return this.http
            .post(_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].DOMAIN_URL + "userservices/uploadprofileimage", formData, {
            headers: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"].getHeaderJsonWithTKN3()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.json());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(4000));
    };
    UserDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserDataService);
    return UserDataService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! E:\Doliphn\ahmedandashraf\New folder\rafal.git\trunk\rafalProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map