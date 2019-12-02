(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar is-dark\">\n\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\">\n      <img [src]=\"authService.userProfilePicture\" [attr.login]=\"authService.isLoggedIn\" class=\"photoURL\">\n      <p *ngIf=\"authService.isLoggedIn\" class=\"display-name\">{{ authService.userName }}</p>  \n    </a>\n  </div>\n\n  <div class=\"navbar-menu\">\n    <div class=\"navbar-start\">\n      <div *ngIf=\"authService.isLoggedIn\">\n        <a class=\"navbar-item\" routerLink=\"home\">Home</a>\n        <a class=\"navbar-item\" routerLink=\"badges\">Badges</a>\n        <a class=\"navbar-item\" routerLink=\"profile/{{authService.uid}}\">Profile</a>\n        <a class=\"navbar-item\" routerLink=\"\">\n          <google-button text=\"Sign Out\" (buttonClick)='handleSignOut($event)'></google-button>\n        </a>\n      </div>\n      <div *ngIf=\"!authService.isLoggedIn\">\n        <google-button text=\"Sign in with Google\" (buttonClick)='handleSignIn($event)'></google-button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"content has-text-centered\">\n      <p>\n\n      </p>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/google-button/google-button.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/google-button/google-button.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"google-button\" (click)=\"buttonClicked()\">\n        <span class=\"google-button__icon\">\n          <svg viewBox=\"0 0 366 372\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z\"\n              id=\"Shape\" fill=\"#EA4335\" />\n            <path\n              d=\"M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z\"\n              id=\"Shape\" fill=\"#FBBC05\" />\n            <path\n              d=\"M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z\"\n              id=\"Shape\" fill=\"#4285F4\" />\n            <path\n              d=\"M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z\"\n              fill=\"#34A853\" /></svg>\n        </span>\n        <span class=\"google-button__text\">{{ text }}</span>\n      </button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/badges/badges.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/badges/badges.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"text-center\" style=\"margin-top: 50px\">Your Badges</h4>\n<mat-table class=\"course-table mat-elevation-z8 center\" [dataSource]=\"badges\">\n\n  <ng-container matColumnDef=\"course\">\n    <mat-header-cell *matHeaderCellDef>Course</mat-header-cell>\n    <mat-cell *matCellDef=\"let course\">{{ course.title }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"platform\">\n    <mat-header-cell *matHeaderCellDef>Platform</mat-header-cell>\n    <mat-cell class=\"description-cell\" *matCellDef=\"let course\">{{ course.platform }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"date\">\n    <mat-header-cell *matHeaderCellDef>Date</mat-header-cell>\n    <mat-cell class=\"duration-cell\" *matCellDef=\"let course\">{{ course.date.seconds * 1000 |  date: 'yyyy/MM/dd' }}\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"file\">\n    <mat-header-cell *matHeaderCellDef>Certification</mat-header-cell>\n    <mat-cell class=\"duration-cell\" *matCellDef=\"let course\">\n        <a target=\"_blank\" [href]=\"course.file\"><fa name=\"fas fa-file\"></fa></a>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"status\">\n    <mat-header-cell *matHeaderCellDef>Status</mat-header-cell>\n    <mat-cell class=\"duration-cell\" *matCellDef=\"let course\">\n      <a *ngIf=\"course.status.verified.code == 0\" class=\"noStyle times\"><fa name=\"fas fa-exclamation-triangle\"></fa></a>\n      <a *ngIf=\"course.status.verified.code == 1\" class=\"noStyle thumbs\"><fa name=\"fas fa-thumbs-up\"></fa></a>\n      <span *ngIf=\"course.status.verified.code == 1\" class=\"endorseBadge\" matBadge=\"{{ course.status.verified.endorsements }}\"></span>\n      <a *ngIf=\"course.status.verified.code == 2\" class=\"noStyle checks\"><fa name=\"fas fa-check\"></fa></a>\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"delete\">\n      <mat-header-cell *matHeaderCellDef></mat-header-cell>\n      <mat-cell class=\"duration-cell\" *matCellDef=\"let course\">\n          <a class=\"minus\" (click)=\"deleteBadge(course.id)\"><fa name=\"fas fa-minus-circle\"></fa></a>\n      </mat-cell>\n    </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n  <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\n</mat-table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/badge-modal.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/badge-modal.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{ data.title }}</h1>\n<div mat-dialog-content class=\"container\">\n  <div class=\"row\">Instructor: {{ data.instructor }}</div>\n  <div class=\"row\">Platform: {{ data.platform }}</div>\n  <div class=\"row\">Certificate: <a target=\"_blank\" href=\"{{ data.file }}\">View</a></div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Close</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <mat-card class=\"main col-xs-8 col-md-8 col-lg-8\">\n    <h4>Endorse A Friend</h4>\n    <span class=\"endorseBadge\" matBadge=\"{{ this.user.endorsements }}\">Endorsements Left</span>\n    <mat-table class=\"user-table mat-elevation-z8 center\" [dataSource]=\"users\">\n\n      <ng-container matColumnDef=\"photo\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell *matCellDef=\"let user\"><img [src]=\"user.photoURL\" class=\"userPhoto\"></mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n        <mat-cell class=\"description-cell\" *matCellDef=\"let user\">{{ user.displayName }}</mat-cell>\n      </ng-container>\n\n      <!-- <ng-container matColumnDef=\"email\">\n        <mat-header-cell *matHeaderCellDef>E-Mail</mat-header-cell>\n        <mat-cell class=\"duration-cell\" *matCellDef=\"let user\">{{ user.email }}\n        </mat-cell>\n      </ng-container> -->\n\n      <ng-container matColumnDef=\"profile\">\n        <mat-header-cell *matHeaderCellDef>Profile</mat-header-cell>\n        <mat-cell class=\"duration-cell\" *matCellDef=\"let course\">\n            <span class=\"fa-a \" (click)=\"navigateToProfile(course.uid)\"><fa name=\"fas fa-id-badge\"></fa></span>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n    </mat-table>\n  </mat-card>\n\n  <div class=\"col-xs-1 col-md-1 col-lg-1\"></div>\n  <mat-card class=\"sidenav-top col-xs-3 col-md-3 col-lg-3\">\n    <h4 class=\"sidenav__title\">Add Badge</h4>\n    <form [formGroup]=\"addCourse\" novalidate (ngSubmit)=\"onAddCourse(addCourse)\">\n\n      <!-- Title -->\n      <mat-form-field class=\"sidenav__form-field\"> <input formControlName=\"title\" matInput placeholder=\"Course Title\">\n      </mat-form-field>\n      <mat-error> <span class=\"sidenav__errorMessage\" *ngIf=\"isValidCourse('title')\">This field is required</span>\n      </mat-error>\n\n      <!-- Platform -->\n      <mat-form-field class=\"sidenav__form-field\"> <input formControlName=\"platform\" matInput\n          placeholder=\"Online Platform\"> </mat-form-field>\n      <mat-error> <span class=\"sidenav__errorMessage\" *ngIf=\"isValidCourse('platform')\">This field is required</span>\n      </mat-error>\n\n      <!-- Completion Date -->\n      <mat-form-field> <input matInput [matDatepicker]=\"date\" formControlName=\"date\" placeholder=\"Completion Date\">\n        <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\n        <mat-datepicker #date></mat-datepicker>\n      </mat-form-field>\n      <mat-error> <span class=\"sidenav__errorMessage\" *ngIf=\"isValidCourse('date')\">This\n          field is required</span> </mat-error>\n\n      <!-- Instructor -->\n      <mat-form-field class=\"sidenav__form-field\"> <input formControlName=\"instructor\" matInput\n          placeholder=\"Instructor\">\n      </mat-form-field>\n      <mat-error> <span class=\"sidenav__errorMessage\" *ngIf=\"isValidCourse('instructor')\">This field is required</span>\n      </mat-error>\n\n      <!-- Link to Course Offering -->\n      <mat-form-field class=\"sidenav__form-field\"> <input formControlName=\"url\" matInput placeholder=\"Course URL\">\n      </mat-form-field>\n      <mat-error> <span class=\"sidenav__errorMessage\" *ngIf=\"isValidCourse('url')\">This\n          field is required</span> </mat-error>\n\n      <!-- Certificate / Badge Upload -->\n      <input type=\"file\" accept=\"application/pdf\" (change)=\"onFileChange($event)\" />\n\n      <!-- Submit -->\n      <div class=\"text-center add_button\"> <button mat-raised-button color=\"primary\"\n          [disabled]=\"addCourse.invalid || addCourse.prestine || isFileUploaded()\">Add</button> </div>\n    </form>\n  </mat-card>\n</div>\n\n<div class=\"row\">\n  <mat-card class=\"main flex col-xs-8 col-md-8 col-lg-8\">\n    <h4>Badge Recommendations</h4>\n    <div class=\"row\">\n      <mat-card *ngFor=\"let badge of recommendations\" (click)=\"openModal(badge)\" class=\"col-xs-3 col-lg-3 col-md-3 card_rec\">\n        <div class=\"top-content\">\n            <span>{{ badge.title }}</span>\n        </div>\n        <div class=\"bottom-border\">\n          <span>{{ badge.platform }}</span>\n        </div>\n      </mat-card>\n    </div>\n  </mat-card>\n  <div class=\"col-xs-1 col-md-1 col-lg-1\"></div>\n\n  <mat-card class=\"sidenav-bottom col-xs-3 col-md-3 col-lg-3\">\n    <div style=\"text-align: center;\">\n      <h4>Import from Badger</h4>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"130\" height=\"40\" viewBox=\"0 0 130 40\" title=\"Badger.io\">\n        <g fill=\"none\" fill-rule=\"evenodd\">\n          <path d=\"M0 0h130v40H0z\" />\n          <path fill=\"#FFF\"\n            d=\"M74.756 10v2.343h1.59v2.147a8.15 8.15 0 0 0-2.48-.368c-2.673.065-4.264 1.431-4.264 4.577v2.104c0 2.711.87 4.815 4.093 4.815.806 0 2.016-.26 3.076-.824l.191.63h4.009V23.08h-1.464V10h-4.751zM72.72 21.128v-2.516c0-1.606.551-1.974 1.866-1.974.721 0 1.252.087 1.76.217v6.008c-.572.13-1.314.24-1.76.24-1.484 0-1.866-.543-1.866-1.975zM44 10v2.343h1.59V25.25a32.82 32.82 0 0 0 4.922.368c4.157 0 4.984-2.104 4.984-4.815v-2.104c0-3.146-1.59-4.512-4.263-4.577a8.15 8.15 0 0 0-2.482.368V10H44zm4.751 13.015v-6.16a6.736 6.736 0 0 1 1.76-.217c1.316 0 1.868.368 1.868 1.974v2.516c0 1.432-.382 1.974-1.867 1.974-.446 0-1.146 0-1.76-.087zm50.504-7.744l-.276-.954h-4.2v2.343h1.591v6.42H94.95v2.343h5.981V23.08h-1.4v-5.683c1.103-.347 2.991-.412 3.755-.434v-2.841c-1.379 0-2.715.672-4.03 1.15zm-17.011 3.666v2.104c0 3.146 1.59 4.512 4.263 4.577.997 0 1.782-.173 2.397-.347-.021.781-.234 1.519-1.04 1.8-1.102.413-3.181.391-5.111.391V30h.912c1.251 0 3.203 0 4.9-.39 3.563-.933 3.584-3.471 3.584-5.64v-7.31h1.591v-2.343h-4.136l-.191.629c-1.06-.564-2.27-.824-3.076-.824-3.224 0-4.093 2.104-4.093 4.815zm3.117 2.191v-2.516c0-1.432.382-1.974 1.867-1.974.446 0 1.188.108 1.76.238v6.009c-.508.13-1.039.217-1.76.217-1.315 0-1.867-.369-1.867-1.974zm-25.283-6.746c-2.927.716-3.012 2.993-3.012 4.317v2.256c0 2.71.87 4.663 4.094 4.663.806 0 1.93-.26 2.99-.824l.191.63h3.946V23.08h-1.4v-8.243c-1.718-.499-3.16-.715-4.752-.715-.742 0-1.315.086-2.057.26zm.148 6.724v-2.32c0-1.432.234-2.148 1.867-2.148.424 0 1.06.043 1.633.13v6.009c-.53.173-1.23.303-1.633.303-1.506 0-1.845-.542-1.867-1.974z\" />\n          <path d=\"M0 40h40V0H0z\" />\n          <path fill=\"#B5445B\"\n            d=\"M20.05 2.084L20 2.055 4.535 11l-.05.029v5.255l.125-.033 1.108-.29c.375-.099 1.28-.641 2.243-1.219 2.139-1.283 5.069-3.04 7.548-3.38a22.28 22.28 0 0 1 2.256-.19h.02l.018-.009c.174-.079.46-.257.852-.528.187-.13.369-.26.544-.386.888-.634 1.59-1.134 2.194-1.134.076 0 .15.008.222.023.675.15 1.957 1.098 2.568 1.783.363.407 1.347 1.242 2.404 1.83a.283.283 0 0 1 .048.028l.021.012c3.024 1.252 5.947 3.245 8.69 5.922l.17.166v-7.85L20.05 2.084zm2.49 31.287a23.045 23.045 0 0 0-7.807-8.152c-.205-.113-2.127-1.12-6.415-1.767l-.064-.01c-1.67-.249-2.795-.456-3.644-.674l-.125-.032v6.236l15.465 8.944.05.029 3.72-2.151-.047-.111a21.838 21.838 0 0 0-1.134-2.312z\" />\n          <path fill=\"#FFF\"\n            d=\"M25.524 17.435l.028.025c1.282 1.126 3.758 1.762 5.12 2.04 1.65.338 3.474.518 3.685.363a.118.118 0 0 0 .04-.145c-.145-.328-2.477-2.427-6.232-5.104-1.323-.942-2.984-1.681-4.94-2.197a31.172 31.172 0 0 0-1.894-.401 41.11 41.11 0 0 0-2.474-.32 23.495 23.495 0 0 0-1.439-.068h-.012a1.557 1.557 0 0 1-.286.01H17.107c-.515.035-1.033.087-1.54.156-2.39.327-5.275 2.058-7.383 3.322-1.072.644-1.92 1.152-2.356 1.266l-1.269.333-2.072.547.129.124c.182.174.631.617.868.982a.88.88 0 0 1 .14.3c.013.068.01.275-.153.888a30.078 30.078 0 0 1-.623 1.978l-.026.077.07.042c.183.11.392.212.638.313l.038-.092-.026.097.022.007a25.247 25.247 0 0 0 .258.047c.115.02.41.057.753.092.567.059 2.532.247 3.977.194.328-.012.643-.027.946-.042 1.338-.065 2.395-.116 3.16.175.047.018.07.07.053.117a.092.092 0 0 1-.117.053c-.73-.278-1.77-.227-3.087-.163l-.03.001c-.295.015-.6.03-.918.04-.683.025-1.62-.012-2.786-.112l-.029.197c.676.135 1.494.272 2.574.433.197.03.387.06.583.092 1.202.095 3.68.273 6.772.387 4.505.166 9.4 2.206 12.223 3.902 1.674 1.006 3.62 2.178 5.023 3.023l.05.03.969-.56.125-.072-.053-.087c-3.22-5.303-7.278-8.077-9.007-8.282l-.197-.024c-1.51-.179-2.51-.298-2.581-.514-.061-.183.143-.422.227-.5l-.12-.158c-.24.147-.534.126-.711.093.139-.2.163-.463.164-.477l.017-.213-.174.122c-.2.14-.705.251-1.02.306.103-.301.127-.676.128-.695l.016-.279-.19.205c-.326.352-1.99.895-4.686 1.53-1.902.449-5.714.102-7.15-.029-.181-.016-.324-.03-.417-.037-.724-.055-.818.03-.977.487a6.07 6.07 0 0 1-.078.214c-.05.128-.106.143-.125.148-.16.043-.474-.215-.75-.441a8.02 8.02 0 0 0-.372-.293c-.375-.271-.798-.782-.843-1.26A.773.773 0 0 1 5.385 19c.313-.33 1.52-1.028 3.003-1.738 1.025-.49 3.074-1.415 5.283-2.089 3.631-1.106 5.301-.86 6.41-.697.33.049.73.115 1.187.238l.032.009.03-.012c.103-.04.19-.07.278-.095a5.594 5.594 0 0 1 1.483-.23c1.189 0 1.658.544 1.843 1 .18.443.494 1.293.585 2.011l.005.038zm-13.388.896l-.228.205.305-.031a1.05 1.05 0 0 0 .404-.116 2.88 2.88 0 0 0 .41-.25c.048-.034.095-.067.142-.097.089-.058.16-.094.227-.119a.615.615 0 0 1 .113-.028l.29-.043-.257-.143a8.757 8.757 0 0 0-.735-.368l-.059-.025-.042-.018a1.784 1.784 0 0 0-.125-.049.833.833 0 0 0-.574-.013c-.094.032-.19.082-.282.149l-.31.223.38-.043.02-.002a.366.366 0 0 1 .168.02l-.24.174.393-.046a.144.144 0 0 1 .037 0 .442.442 0 0 1-.037.62zm11.923-1.165a.921.921 0 0 1-.31.206l-.136.05.094.11c.024.028.6.694 1.133.827.046.012.09.018.132.018.104 0 .291-.042.363-.319a.918.918 0 0 0 .019-.092c.008-.06.013-.13.012-.204a3.352 3.352 0 0 0-.073-.613 8.312 8.312 0 0 0-.163-.65 11.3 11.3 0 0 0-.364-1.045 1.262 1.262 0 0 0-.46-.575 1.527 1.527 0 0 0-.21-.12c-.337-.156-.779-.217-1.3-.179-.276.02-.572.069-.88.143a6.457 6.457 0 0 0-.258.068 2.913 2.913 0 0 0-1.663 1.238.678.678 0 0 0-.065.106.25.25 0 0 0-.025.126.174.174 0 0 0 .044.102c.085.094.259.1.583.022.341-.082.714-.26.966-.394.443-.237.85-.515 1.058-.72.005.024.009.051.013.08l.004.026c.027.215.017.41-.03.563l-.028.093.092.031s.027.01.072.018a.88.88 0 0 0 .173.018.703.703 0 0 0 .48-.181.396.396 0 0 1-.022.202l-.043.1.103.034.017.005c.05.012.207.038.373-.028l-.008.018a.993.993 0 0 1-.092.158.722.722 0 0 1-.185.178l-.13.082.128.085c.005.003.113.075.26.147.167.083.314.131.44.146a1.607 1.607 0 0 1-.114.12zm-5.27-5.802c.813 0 2.46-.32 2.712-.93l.014-.033.028.022a1.059 1.059 0 0 1 .233.269c.018.03.033.06.044.089.027.066.038.13.035.19l-.008.152.143-.053c.033-.013.075-.033.132-.064l.12-.07.014-.008c.066-.039.134-.079.196-.11l.034-.017.005.039c.001.011.042.286.209.377a.202.202 0 0 0 .095.027c.04 0 .113-.018.164-.135a.73.73 0 0 0 .05-.251l.004-.077a1.662 1.662 0 0 1 .033-.233l.016-.064-.052-.04a9.816 9.816 0 0 0-.203-.155c-.254-.188-.89-.637-1.287-.725-.269-.06-.643.077-1.241.466-.118.077-.249.166-.401.272-.132.092-.268.19-.408.289l-.019.013-.185.132-.163.115-.2.142-.157.11-.35.25.296.009.098.002z\" />\n          <path fill=\"#282C4C\"\n            d=\"M35.415 18.64c-2.749-2.684-5.681-4.684-8.72-5.942a.375.375 0 0 0-.066-.04c-1.04-.577-2.012-1.402-2.371-1.805-.621-.695-1.93-1.66-2.622-1.813a1.109 1.109 0 0 0-.243-.026c-.637 0-1.35.508-2.252 1.153-.175.125-.357.254-.544.385-.469.326-.71.463-.835.519-.115.004-.23.008-.346.014-.66.033-1.288.091-1.92.177-2.5.342-5.44 2.106-7.587 3.394-.954.571-1.854 1.112-2.217 1.207l-1.107.29v-5.068L20 2.171l15.415 8.914v7.556zm-16.72-7.378l.055-.039.054-.038.156-.11c.095-.066.183-.13.275-.195l.274-.194c.146-.105.289-.206.426-.302.138-.096.27-.187.398-.27.425-.276.79-.463 1.06-.463.038 0 .073.003.106.01.286.064.776.358 1.249.709.067.05.135.1.2.153a1.827 1.827 0 0 0-.036.252c0 .028-.002.055-.003.078a.62.62 0 0 1-.042.216c-.021.05-.048.075-.072.075a.107.107 0 0 1-.048-.015c-.1-.055-.148-.243-.157-.303l-.024-.177-.159.08c-.066.033-.137.075-.207.116l-.126.073a1.003 1.003 0 0 1-.119.058.541.541 0 0 0-.042-.232.761.761 0 0 0-.05-.103 1.076 1.076 0 0 0-.258-.296l-.11-.088-.022-.018-.064.157c-.216.521-1.72.868-2.62.868l-.093-.002zm-6.354 6.53a.541.541 0 0 0-.117-.173.34.34 0 0 0-.076-.01c-.012 0-.024.003-.036.004a.743.743 0 0 1 .06-.039.534.534 0 0 0-.331-.114c-.02 0-.038.004-.058.006a.98.98 0 0 1 .256-.136.704.704 0 0 1 .228-.038c.103 0 .197.023.28.052.043.014.082.03.12.046l.104.044c.258.104.723.362.723.362a.72.72 0 0 0-.131.033c-.086.03-.167.076-.249.13-.163.105-.33.24-.54.34a.983.983 0 0 1-.372.107.536.536 0 0 0 .138-.614zm11.909-.841c-.15 0-.33-.07-.473-.14a2.432 2.432 0 0 1-.248-.141.727.727 0 0 0 .212-.203.843.843 0 0 0 .101-.175c.027-.057.047-.112.062-.16l.013-.045c.008-.028.013-.053.017-.072l.008-.046a.51.51 0 0 1-.531.194l-.01-.003a.427.427 0 0 0 .027-.083.52.52 0 0 0-.006-.223c-.02-.083-.052-.14-.052-.14a.593.593 0 0 1-.185.194.61.61 0 0 1-.333.092.777.777 0 0 1-.153-.016c-.038-.007-.06-.015-.06-.015.062-.203.056-.428.033-.605l-.004-.028a2.288 2.288 0 0 0-.046-.234l-.01-.041a.831.831 0 0 0-.005-.015c-.004.011-.013.025-.022.039-.115.18-.6.533-1.134.818-.32.17-.658.316-.942.385-.15.036-.257.05-.334.05-.082 0-.129-.017-.152-.042a.073.073 0 0 1-.019-.044.156.156 0 0 1 .017-.076.38.38 0 0 1 .053-.086.391.391 0 0 1 .021-.025s.03-.054.092-.14a2.412 2.412 0 0 1 .196-.236 2.827 2.827 0 0 1 1.302-.802 5.435 5.435 0 0 1 1.12-.207c.095-.007.191-.011.286-.011.352 0 .685.052.962.181.069.033.134.07.196.112a1.152 1.152 0 0 1 .424.53 11.415 11.415 0 0 1 .361 1.036 8.447 8.447 0 0 1 .161.64c.044.22.07.423.071.595a1.286 1.286 0 0 1-.027.27c-.04.153-.124.244-.268.244a.441.441 0 0 1-.107-.015c-.509-.127-1.08-.796-1.08-.796.13-.048.248-.136.344-.227.064-.061.118-.124.16-.177.063-.079.1-.137.1-.137a.337.337 0 0 1-.138.026zm1.368.434c-.091-.727-.409-1.587-.591-2.037-.196-.484-.692-1.061-1.936-1.061-.576 0-1.14.126-1.51.232-.101.03-.196.063-.287.099-.471-.127-.88-.194-1.199-.24-1.08-.16-2.797-.415-6.453.7-3.656 1.114-7.693 3.184-8.33 3.853-.635.669.064 1.624.637 2.038.572.414 1.176 1.114 1.398.541.223-.573.127-.7.954-.637.826.064 5.436.574 7.598.064s4.324-1.114 4.737-1.56c0 0-.032.541-.19.828 0 0 .921-.128 1.239-.35 0 0-.032.382-.254.54 0 0 .54.192.953-.063 0 0-.35.318-.254.605.095.286.986.382 2.861.605 1.7.202 5.752 2.994 8.934 8.235l-.493.284.456-.263-.917.53c-1.404-.845-3.35-2.017-5.023-3.022-3.02-1.815-7.948-3.758-12.272-3.917a164.12 164.12 0 0 1-6.767-.387c-.188-.03-.379-.061-.576-.09a55.143 55.143 0 0 1-2.57-.433c.919.08 1.985.143 2.8.114.328-.012.645-.028.949-.042 1.305-.064 2.336-.114 3.046.157a.191.191 0 0 0 .136-.357c-.785-.299-1.85-.247-3.2-.182-.303.015-.618.03-.946.042-1.243.045-2.97-.09-3.963-.193a13.924 13.924 0 0 1-.843-.109l-.16-.029-.014-.006a4.61 4.61 0 0 1-.625-.307c.11-.32.428-1.246.625-1.985.11-.419.183-.778.155-.932a1.003 1.003 0 0 0-.155-.336c-.24-.369-.681-.808-.883-1 .224-.06.524-.14.883-.234l1.017-.268 1.268-.333c1.32-.346 6.132-4.094 9.728-4.586.47-.064.983-.118 1.532-.155a1.4 1.4 0 0 0 .304-.01c.316.004.812.02 1.432.068.98.092 1.974.24 2.466.319.42.067 1.12.22 1.888.4 1.665.438 3.417 1.12 4.904 2.18 3.86 2.753 6.072 4.777 6.2 5.064.121.276-6.368-.335-8.69-2.374zM20 37.829L4.585 28.915v-6.05c.92.236 2.098.444 3.654.676l.032.005.031.005c4.31.65 6.245 1.68 6.383 1.755a22.938 22.938 0 0 1 7.767 8.114c.425.753.805 1.527 1.129 2.301l.012.03L20 37.83zm15.924-27.626L20.509 1.288a1.015 1.015 0 0 0-1.018 0L4.076 10.203a1.02 1.02 0 0 0-.508.882v5.336l-1.497.396c-.87.227-1.399.606-1.62 1.16-.327.824.154 1.775.666 2.597.595.953 1.222 1.534 2.45 1.983v6.358c0 .364.194.7.51.882l15.414 8.915a1.015 1.015 0 0 0 1.018 0l15.415-8.915a1.02 1.02 0 0 0 .508-.882v-17.83c0-.364-.193-.7-.508-.882z\" />\n        </g>\n      </svg>\n    </div>\n    <form [formGroup]=\"loginBadger\" novalidate (ngSubmit)=\"onLoginBadger(loginBadger)\">\n      <!-- Username -->\n      <mat-form-field *ngIf=\"badger_access_token == null || badger_access_token == undefined\"\n        class=\"sidenav__form-field\">\n        <input formControlName=\"username\" matInput placeholder=\"Username\">\n      </mat-form-field>\n      <mat-error> <span class=\"sidenav__errorMessage\" *ngIf=\"isValidLogin('username')\">This field is required</span>\n      </mat-error>\n\n      <!-- Password -->\n      <mat-form-field *ngIf=\"badger_access_token == null || badger_access_token == undefined\"\n        class=\"sidenav__form-field\">\n        <input formControlName=\"password\" type=\"password\" matInput placeholder=\"Password\">\n      </mat-form-field>\n      <mat-error> <span class=\"sidenav__errorMessage\" *ngIf=\"isValidLogin('password')\">This field is required</span>\n      </mat-error>\n\n      <!-- Submit -->\n      <div class=\"text-center login_button\"> <button mat-raised-button color=\"primary\"\n          [disabled]=\"shouldDisableImport()\">Import</button> </div>\n    </form>\n  </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row title\"><h1>Anonymous Badger</h1></div>\n<div class=\"row subtitle\"><h4>Start Building your Online Education Portfolio Today.</h4></div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"profile-card\">\n    <div class=\"profile-card__header\">\n            <img class=\"profile-card__header--photo\" src=\"{{ this.user.photoURL }}\">\n            <h2 class=\"profile-card__header--name\">{{ this.user.displayName }}</h2>\n    </div>\n</mat-card>\n\n<mat-table class=\"course-table mat-elevation-z8 center\" [dataSource]=\"badges\">\n\n        <ng-container matColumnDef=\"course\">\n          <mat-header-cell *matHeaderCellDef>Course</mat-header-cell>\n          <mat-cell *matCellDef=\"let course\">{{ course.title }}</mat-cell>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"platform\">\n          <mat-header-cell *matHeaderCellDef>Platform</mat-header-cell>\n          <mat-cell class=\"description-cell\" *matCellDef=\"let course\">{{ course.platform }}</mat-cell>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"date\">\n          <mat-header-cell *matHeaderCellDef>Date</mat-header-cell>\n          <mat-cell class=\"duration-cell\" *matCellDef=\"let course\">{{ course.date.seconds * 1000 |  date: 'yyyy/MM/dd' }}\n          </mat-cell>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"file\">\n          <mat-header-cell *matHeaderCellDef>Certification</mat-header-cell>\n          <mat-cell class=\"duration-cell\" *matCellDef=\"let course\">\n              <a target=\"_blank\" [href]=\"course.file\"><fa name=\"fas fa-file\"></fa></a>\n          </mat-cell>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"status\">\n          <mat-header-cell *matHeaderCellDef>Status</mat-header-cell>\n          <mat-cell class=\"duration-cell\" *matCellDef=\"let course\">\n            <a *ngIf=\"course.status.verified.code == 0\" class=\"noStyle times\"><fa name=\"fas fa-exclamation-triangle\"></fa></a>\n            <a *ngIf=\"course.status.verified.code == 1\" class=\"noStyle thumbs\"><fa name=\"fas fa-thumbs-up\"></fa></a>\n            <span *ngIf=\"course.status.verified.code == 1\" class=\"endorseBadge\" matBadge=\"{{ course.status.verified.endorsements }}\"></span>\n            <a *ngIf=\"course.status.verified.code == 2\" class=\"noStyle checks\"><fa name=\"fas fa-check\"></fa></a>\n          </mat-cell>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"endorse\">\n            <mat-header-cell *matHeaderCellDef><div *ngIf=\"!isSameUser()\">Endorse</div></mat-header-cell>\n            <mat-cell class=\"duration-cell\" *matCellDef=\"let course\">\n              <div *ngIf=\"!isSameUser()\">\n                <a class=\"minus\" (click)=\"endorseBadge(course.id, course.status.verified.endorsements)\"><fa name=\"fas fa-plus-circle\"></fa></a>\n              </div>\n            </mat-cell>\n          </ng-container>\n      \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      \n        <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n      \n      </mat-table>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  border-bottom: solid 2px #f5f5f5;\n}\n\n.navbar-item {\n  padding: 20px;\n}\n\n.photoURL[login=true] {\n  width: 50px;\n  height: 50px;\n  background-size: cover;\n  background-position: bottom center;\n  border-radius: 50%;\n  vertical-align: bottom;\n}\n\n.display-name {\n  display: inline-block;\n  padding: 15px;\n  line-height: 0;\n}\n\n.spacer {\n  height: 100px;\n}\n\na {\n  font-weight: 500;\n  color: #673AB7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGl2L0RvY3VtZW50cy9HaXRIdWIvYW5vbnltb3VzLWJhZGdlci9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0ksZ0NBQUE7QUNDTjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURHSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNBTjs7QURJRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNESjs7QURJRTtFQUNFLGFBQUE7QUNESjs7QURJRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAubmF2YmFyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZjVmNWY1O1xuICB9XG5cbiAgLm5hdmJhci1pdGVtIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLnBob3RvVVJMIHtcbiAgICAmW2xvZ2luPSd0cnVlJ10ge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgfVxuICB9XG5cbiAgLmRpc3BsYXktbmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gIH1cblxuICAuc3BhY2VyIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5cbiAgYSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzY3M0FCNztcbiAgfVxuIiwiLm5hdmJhciB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZjVmNWY1O1xufVxuXG4ubmF2YmFyLWl0ZW0ge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ucGhvdG9VUkxbbG9naW49dHJ1ZV0ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5kaXNwbGF5LW5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuXG4uc3BhY2VyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuYSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNjczQUI3O1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/firestore.service */ "./src/app/services/firestore.service.ts");




let AppComponent = class AppComponent {
    constructor(authService, fs) {
        this.authService = authService;
        this.fs = fs;
        this.title = 'anonymous-badger';
    }
    handleSignOut() {
        console.log('Signing Out...');
        this.authService.SignOut();
    }
    handleSignIn() {
        console.log('Signing In...');
        this.authService.GoogleAuth();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FireStoreService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: rootRouterConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _guards_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/secure-inner-pages.guard */ "./src/app/guards/secure-inner-pages.guard.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_badges_badges_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/badges/badges.component */ "./src/app/pages/badges/badges.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _services_badger_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/badger.service */ "./src/app/services/badger.service.ts");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/snackbar.service */ "./src/app/services/snackbar.service.ts");



























const rootRouterConfig = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], canActivate: [_guards_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_16__["SecureInnerPagesGuard"]] },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'profile/:id', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"] },
    { path: 'badges', component: _pages_badges_badges_component__WEBPACK_IMPORTED_MODULE_22__["BadgesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
            _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
            _pages_badges_badges_component__WEBPACK_IMPORTED_MODULE_22__["BadgesComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__["BadgeModal"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(rootRouterConfig),
            _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorageModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_15__["CoreModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__["PdfViewerModule"]
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"], _services_firestore_service__WEBPACK_IMPORTED_MODULE_24__["FireStoreService"], _services_badger_service__WEBPACK_IMPORTED_MODULE_25__["BadgerService"], _services_snackbar_service__WEBPACK_IMPORTED_MODULE_26__["SnackbarService"],
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__["BadgeModal"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/components/google-button/google-button.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/core/components/google-button/google-button.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".google-button {\n  height: 40px;\n  border-width: 0;\n  background: white;\n  color: #737373;\n  border-radius: 5px;\n  white-space: nowrap;\n  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);\n  transition-property: background-color, box-shadow;\n  transition-duration: 150ms;\n  transition-timing-function: ease-in-out;\n  line-height: 0;\n  padding-left: 20px;\n}\n.google-button:focus, .google-button:hover {\n  box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);\n}\n.google-button:active {\n  background-color: #e5e5e5;\n  box-shadow: none;\n  transition-duration: 10ms;\n}\n.google-button__icon {\n  display: table-cell;\n  vertical-align: middle;\n  margin: 8px 0 8px 8px;\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n}\n.google-button__text {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 0 24px;\n  font-size: 14px;\n  font-weight: bold;\n  font-family: \"Roboto\", arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGl2L0RvY3VtZW50cy9HaXRIdWIvYW5vbnltb3VzLWJhZGdlci9zcmMvYXBwL2NvcmUvY29tcG9uZW50cy9nb29nbGUtYnV0dG9uL2dvb2dsZS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9nb29nbGUtYnV0dG9uL2dvb2dsZS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGlEQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFFRSw4Q0FBQTtBQ0FOO0FER0k7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNETjtBREtFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0ZKO0FES0U7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZ29vZ2xlLWJ1dHRvbi9nb29nbGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvb2dsZS1idXR0b24ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6ICM3MzczNzM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAwcHggMXB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIFxuICAgICY6Zm9jdXMsXG4gICAgJjpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiAxcHggNHB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIH1cbiAgICBcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwbXM7XG4gICAgfVxuICB9XG4gICAgICBcbiAgLmdvb2dsZS1idXR0b25fX2ljb24ge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDhweCAwIDhweCA4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIC5nb29nbGUtYnV0dG9uX190ZXh0IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogMCAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsYXJpYWwsc2Fucy1zZXJpZjtcbiAgfSIsIi5nb29nbGUtYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzczNzM3MztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5nb29nbGUtYnV0dG9uOmZvY3VzLCAuZ29vZ2xlLWJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDFweCA0cHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uZ29vZ2xlLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMG1zO1xufVxuXG4uZ29vZ2xlLWJ1dHRvbl9faWNvbiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogOHB4IDAgOHB4IDhweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmdvb2dsZS1idXR0b25fX3RleHQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBhcmlhbCwgc2Fucy1zZXJpZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/components/google-button/google-button.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/google-button/google-button.component.ts ***!
  \**************************************************************************/
/*! exports provided: GoogleButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleButtonComponent", function() { return GoogleButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GoogleButtonComponent = class GoogleButtonComponent {
    constructor() {
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    buttonClicked() {
        this.buttonClick.emit(true);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GoogleButtonComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GoogleButtonComponent.prototype, "buttonClick", void 0);
GoogleButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'google-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/google-button/google-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-button.component.scss */ "./src/app/core/components/google-button/google-button.component.scss")).default]
    })
], GoogleButtonComponent);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_google_button_google_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/google-button/google-button.component */ "./src/app/core/components/google-button/google-button.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");








let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]
        ],
        declarations: [_components_google_button_google_button_component__WEBPACK_IMPORTED_MODULE_6__["GoogleButtonComponent"]],
        exports: [
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _components_google_button_google_button_component__WEBPACK_IMPORTED_MODULE_6__["GoogleButtonComponent"]
        ],
        providers: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"]]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['login']);
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/guards/secure-inner-pages.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/guards/secure-inner-pages.guard.ts ***!
  \****************************************************/
/*! exports provided: SecureInnerPagesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureInnerPagesGuard", function() { return SecureInnerPagesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let SecureInnerPagesGuard = class SecureInnerPagesGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLoggedIn) {
            this.router.navigate(['home']);
        }
        return true;
    }
};
SecureInnerPagesGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SecureInnerPagesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SecureInnerPagesGuard);



/***/ }),

/***/ "./src/app/pages/badges/badges.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/badges/badges.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".course-table {\n  margin-top: 100px;\n  text-align: center !important;\n  width: 100%;\n}\n.course-table mat-header-cell {\n  display: inline;\n  min-height: auto;\n}\n.course-table mat-cell {\n  display: inline;\n  text-align: center;\n  min-height: auto;\n}\n.mat-elevation-z8 {\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\na {\n  color: #607D8B;\n  font-size: 25px;\n  text-shadow: 2px 2px #f5f5f5;\n}\na:hover {\n  color: #455A64;\n}\n.noStyle {\n  cursor: default;\n}\n.endorseBadge span {\n  left: 0;\n  margin-top: 10px;\n}\na.times {\n  color: #FFC107;\n}\na.times:hover {\n  color: #FFA000;\n}\na.minus {\n  cursor: pointer;\n  color: #F44336;\n}\na.minus:hover {\n  color: #D32F2F;\n}\na.thumbs {\n  color: #3F51B5;\n}\na.thumbs:hover {\n  color: #303F9F;\n}\na.checks {\n  color: #4CAF50;\n}\na.checks:hover {\n  color: #388E3C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGl2L0RvY3VtZW50cy9HaXRIdWIvYW5vbnltb3VzLWJhZGdlci9zcmMvYXBwL3BhZ2VzL2JhZGdlcy9iYWRnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhZGdlcy9iYWRnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQ0U7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBREVFO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBREtBO0VBQ0ksK0dBQUE7QUNGSjtBRE1BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0hGO0FES0U7RUFDRSxjQUFBO0FDSEo7QURPQTtFQUNJLGVBQUE7QUNKSjtBRFFJO0VBQ0ksT0FBQTtFQUNBLGdCQUFBO0FDTFI7QURTQTtFQUNJLGNBQUE7QUNOSjtBRFFJO0VBQ0ksY0FBQTtBQ05SO0FEVUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ1BKO0FEU0k7RUFDSSxjQUFBO0FDUFI7QURXQTtFQUNJLGNBQUE7QUNSSjtBRFVJO0VBQ0ksY0FBQTtBQ1JSO0FEWUE7RUFDSSxjQUFBO0FDVEo7QURXSTtFQUNJLGNBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhZGdlcy9iYWRnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291cnNlLXRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcblxuICBtYXQtaGVhZGVyLWNlbGwge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgbWF0LWNlbGwge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuXG59XG5cbi5tYXQtZWxldmF0aW9uLXo4IHtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XG4gIH1cblxuXG5hIHtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGZvbnQtc2l6ZTogMjVweDsgLy8geW91ciBmb250LXNpemUgaW4gcHgsIGVtIG9yICU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4ICNmNWY1ZjU7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICM0NTVBNjRcbiAgfVxufVxuXG4ubm9TdHlsZSB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uZW5kb3JzZUJhZGdlIHtcbiAgICBzcGFuIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG59XG5cbmEudGltZXMge1xuICAgIGNvbG9yOiAjRkZDMTA3O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjRkZBMDAwO1xuICAgIH1cbn1cblxuYS5taW51cyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjRjQ0MzM2O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjRDMyRjJGO1xuICAgIH1cbn1cblxuYS50aHVtYnMge1xuICAgIGNvbG9yOiAjM0Y1MUI1O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMzAzRjlGO1xuICAgIH1cbn1cblxuYS5jaGVja3Mge1xuICAgIGNvbG9yOiAjNENBRjUwO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMzg4RTNDO1xuICAgIH1cbn0iLCIuY291cnNlLXRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb3Vyc2UtdGFibGUgbWF0LWhlYWRlci1jZWxsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xufVxuLmNvdXJzZS10YWJsZSBtYXQtY2VsbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtc2hhZG93OiAycHggMnB4ICNmNWY1ZjU7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICM0NTVBNjQ7XG59XG5cbi5ub1N0eWxlIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uZW5kb3JzZUJhZGdlIHNwYW4ge1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5hLnRpbWVzIHtcbiAgY29sb3I6ICNGRkMxMDc7XG59XG5hLnRpbWVzOmhvdmVyIHtcbiAgY29sb3I6ICNGRkEwMDA7XG59XG5cbmEubWludXMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjRjQ0MzM2O1xufVxuYS5taW51czpob3ZlciB7XG4gIGNvbG9yOiAjRDMyRjJGO1xufVxuXG5hLnRodW1icyB7XG4gIGNvbG9yOiAjM0Y1MUI1O1xufVxuYS50aHVtYnM6aG92ZXIge1xuICBjb2xvcjogIzMwM0Y5Rjtcbn1cblxuYS5jaGVja3Mge1xuICBjb2xvcjogIzRDQUY1MDtcbn1cbmEuY2hlY2tzOmhvdmVyIHtcbiAgY29sb3I6ICMzODhFM0M7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/badges/badges.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/badges/badges.component.ts ***!
  \**************************************************/
/*! exports provided: BadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function() { return BadgesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let BadgesComponent = class BadgesComponent {
    constructor(fs, as) {
        this.fs = fs;
        this.as = as;
        this.displayedColumns = ["course", "platform", "date", "file", "status", "delete"];
        this.dateFormat = "yyyy/MM/dd h:mm:ss a";
    }
    ngOnInit() {
        this.getBadges();
    }
    getBadges() {
        let badges = [];
        this.fs.getBadges(this.as.uid).subscribe(res => {
            res.forEach(b => {
                let d = b.data;
                d.id = b.id;
                console.log(d);
                badges.push(d);
            });
            this.badges = badges;
            console.log(this.badges);
        });
    }
    deleteBadge(id) {
        console.log(id);
        this.fs.deleteBadge(id);
    }
};
BadgesComponent.ctorParameters = () => [
    { type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FireStoreService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
BadgesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-badges",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./badges.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/badges/badges.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./badges.component.scss */ "./src/app/pages/badges/badges.component.scss")).default]
    })
], BadgesComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* The sidenav */\n.sidenav-top {\n  margin-top: 25px;\n  display: block;\n  float: right;\n}\n.sidenav-top__title {\n  text-align: center;\n}\n.sidenav-top__form-field {\n  display: block;\n}\n.sidenav-top__errorMessage {\n  font-size: 12px;\n}\n/* The heart of the matter */\n.main > .row {\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.main > .row > .col-xs-3 {\n  display: inline-block;\n  float: none;\n}\n.card_rec {\n  padding: 0px;\n  text-align: center;\n  margin: 10px;\n  overflow: hidden;\n}\n.card_rec:hover {\n  cursor: pointer;\n  background-color: #f5f5f5;\n}\n.top-content {\n  padding: 20px;\n}\n.bottom-border {\n  background-color: #673AB7;\n  color: white;\n}\n.mat-elevation-z8 {\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -23px;\n  display: inline;\n}\n.sidenav-bottom {\n  float: right;\n  margin-top: 25px;\n  display: inline-block;\n}\n.main {\n  float: left;\n  margin-top: 25px;\n  display: inline-block;\n}\n.add_button {\n  padding: 10px;\n}\nsvg {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 90px;\n}\n.user-table {\n  margin-top: 50px;\n  text-align: center !important;\n  width: 100%;\n}\n.user-table mat-header-cell {\n  display: inline;\n  min-height: auto;\n}\n.user-table mat-cell {\n  display: inline;\n  text-align: center;\n  min-height: auto;\n}\n.fa-a {\n  font-size: 25px;\n  color: #673AB7;\n  text-shadow: 2px 2px #f5f5f5;\n  cursor: pointer;\n}\n.fa-a:hover {\n  color: #512DA8;\n}\n.userPhoto {\n  width: 30px;\n  height: 30px;\n  background-size: cover;\n  background-position: bottom center;\n  border-radius: 50%;\n  vertical-align: bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGl2L0RvY3VtZW50cy9HaXRIdWIvYW5vbnltb3VzLWJhZGdlci9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0FDQ0o7QURFRTtFQUNFLGNBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtBQ0RKO0FES0EsNEJBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNGRjtBRElBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RGO0FER0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNESjtBREtBO0VBQ0UsYUFBQTtBQ0ZGO0FES0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0UsK0dBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNGRjtBREtBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNGRjtBREtBO0VBQ0UsYUFBQTtBQ0ZGO0FES0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNGRjtBREtBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNGRjtBRElFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRko7QURLRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSEo7QURRQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDTEo7QURPSTtFQUNJLGNBQUE7QUNMUjtBRFNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhlIHNpZGVuYXYgKi9cbi5zaWRlbmF2LXRvcCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG5cbiAgJl9fdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICZfX2Zvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgJl9fZXJyb3JNZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cblxuLyogVGhlIGhlYXJ0IG9mIHRoZSBtYXR0ZXIgKi9cbi5tYWluID4gLnJvdyB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ubWFpbiA+IC5yb3cgPiAuY29sLXhzLTMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBub25lO1xufVxuXG4uY2FyZF9yZWMge1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICB9XG59XG5cbi50b3AtY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5ib3R0b20tYm9yZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M0FCNztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcbn1cblxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMjNweDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uc2lkZW5hdi1ib3R0b20ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1haW4ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYWRkX2J1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbnN2ZyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xufVxuXG4udXNlci10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcblxuICBtYXQtaGVhZGVyLWNlbGwge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgbWF0LWNlbGwge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuXG59XG5cbi5mYS1hIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICM2NzNBQjc7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggI2Y1ZjVmNTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM1MTJEQThcbiAgICAgIH1cbn1cblxuLnVzZXJQaG90byB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbiIsIi8qIFRoZSBzaWRlbmF2ICovXG4uc2lkZW5hdi10b3Age1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnNpZGVuYXYtdG9wX190aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaWRlbmF2LXRvcF9fZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNpZGVuYXYtdG9wX19lcnJvck1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi8qIFRoZSBoZWFydCBvZiB0aGUgbWF0dGVyICovXG4ubWFpbiA+IC5yb3cge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubWFpbiA+IC5yb3cgPiAuY29sLXhzLTMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBub25lO1xufVxuXG4uY2FyZF9yZWMge1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmRfcmVjOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4udG9wLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYm90dG9tLWJvcmRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNBQjc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejgge1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTIzcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnNpZGVuYXYtYm90dG9tIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYWluIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFkZF9idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5zdmcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogOTBweDtcbn1cblxuLnVzZXItdGFibGUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXNlci10YWJsZSBtYXQtaGVhZGVyLWNlbGwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG59XG4udXNlci10YWJsZSBtYXQtY2VsbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xufVxuXG4uZmEtYSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM2NzNBQjc7XG4gIHRleHQtc2hhZG93OiAycHggMnB4ICNmNWY1ZjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mYS1hOmhvdmVyIHtcbiAgY29sb3I6ICM1MTJEQTg7XG59XG5cbi51c2VyUGhvdG8ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent, BadgeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeModal", function() { return BadgeModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_badger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/badger.service */ "./src/app/services/badger.service.ts");
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/snackbar.service */ "./src/app/services/snackbar.service.ts");










let HomeComponent = class HomeComponent {
    constructor(as, bs, fs, afs, fb, sbs, dialog, router) {
        this.as = as;
        this.bs = bs;
        this.fs = fs;
        this.afs = afs;
        this.fb = fb;
        this.sbs = sbs;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ["photo", "name", "profile"];
        this.user = JSON.parse(localStorage.getItem("user"));
        console.log(this.user);
        this.createFormGroups();
    }
    ngOnInit() {
        this.badger_access_token = JSON.parse(localStorage.getItem('badger_access_token'));
        console.log(this.badger_access_token);
        this.getUser();
        this.getUsers();
        this.getRecommendations();
    }
    navigateToProfile(id) {
        this.router.navigate([`profile/${id}`]);
    }
    openModal(badge) {
        const dialogRef = this.dialog.open(BadgeModal, {
            width: '350px',
            data: badge
        });
        dialogRef.afterClosed().subscribe(result => { });
    }
    getRecommendations() {
        let recommendations = [];
        this.fs.getRecommendations().subscribe(res => {
            res.forEach(b => {
                let d = b.data;
                d.id = b.id;
                recommendations.push(d);
            });
            this.recommendations = recommendations;
            console.log(this.recommendations);
        });
    }
    getUser() {
        this.fs.getUser(this.as.uid).subscribe(res => {
            this.user = res;
        });
    }
    getUsers() {
        let users = [];
        this.fs.getUsers().subscribe(res => {
            res.forEach(b => {
                let d = b;
                if (this.as.uid != d.uid) {
                    users.push(b);
                }
            });
            console.log(users);
            this.users = users;
        });
    }
    // Initialize FormGroup
    createFormGroups() {
        this.addCourse = this.fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            platform: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            instructor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.loginBadger = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    }
    isValidCourse(fc) {
        return !this.addCourse.get(fc).valid && this.addCourse.get(fc).touched;
    }
    isValidLogin(fc) {
        return !this.loginBadger.get(fc).valid && this.loginBadger.get(fc).touched;
    }
    isFileUploaded() {
        return this.downloadableURL === undefined;
    }
    // Handle File Upload
    onFileChange(event) {
        if (event.target.files && event.target.files.length) {
            this.uploadFile(event.target.files[0]);
        }
    }
    uploadFile(file) {
        const path = `/badges/${Date.now()}_${Math.random()}`;
        const task = this.afs.upload(path, file).then(() => {
            const ref = this.afs.ref(path);
            ref.getDownloadURL().subscribe(url => {
                console.log(url);
                this.downloadableURL = url;
                console.log(this.addCourse.invalid);
            });
        });
    }
    // Handle Add Course Form Submission
    onAddCourse(form) {
        form.value.uid = this.as.userData.uid;
        form.value.file = this.downloadableURL;
        console.log(form.value);
        form.value.status = {
            verified: {
                code: 0,
                status: "Not Verified",
                endorsements: 0
            }
        };
        this.fs.addBadge(form.value).then(res => {
            console.log('added');
            this.sbs.viewBadges("Added Badge!", 'VIEW BADGES');
            this.addCourse.reset();
            this.markFormGroupPristine(this.addCourse);
        });
    }
    markFormGroupPristine(formGroup) {
        Object.values(formGroup.controls).forEach(control => {
            control.markAsPristine();
            if (control.controls) {
                this.markFormGroupPristine(control);
            }
        });
    }
    shouldDisableImport() {
        if (this.badger_access_token != null) {
            return false;
        }
        else if (this.loginBadger.invalid || this.loginBadger.pristine) {
            return true;
        }
    }
    // Handle Form Submission
    onLoginBadger(form) {
        if (this.badger_access_token === null || this.badger_access_token === undefined) {
            this.bs.getAccessToken(form.value.username, form.value.password).subscribe((data) => {
                this.badger_access_token = this.badger_access_token;
                localStorage.setItem('badger_access_token', JSON.stringify(data));
            });
        }
        this.bs.getBadges(this.badger_access_token);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_badger_service__WEBPACK_IMPORTED_MODULE_6__["BadgerService"] },
    { type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FireStoreService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["SnackbarService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);

let BadgeModal = class BadgeModal {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
BadgeModal.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
BadgeModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'badge-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./badge-modal.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/badge-modal.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], BadgeModal);



/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".google-button {\n  height: 40px;\n  border-width: 0;\n  background: white;\n  color: #737373;\n  border-radius: 5px;\n  white-space: nowrap;\n  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);\n  transition-property: background-color, box-shadow;\n  transition-duration: 150ms;\n  transition-timing-function: ease-in-out;\n  line-height: 0;\n  padding-left: 20px;\n}\n.google-button:focus, .google-button:hover {\n  box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);\n}\n.google-button:active {\n  background-color: #e5e5e5;\n  box-shadow: none;\n  transition-duration: 10ms;\n}\n.google-button__icon {\n  display: table-cell;\n  vertical-align: middle;\n  margin: 8px 0 8px 8px;\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n}\n.google-button__text {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 0 24px;\n  font-size: 14px;\n  font-weight: bold;\n  font-family: \"Roboto\", arial, sans-serif;\n}\nhtml, body {\n  height: 100%;\n}\nbody {\n  background-color: #f0f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nbutton ~ button {\n  margin-left: 20px;\n}\n.center {\n  margin: auto;\n  max-width: 225px;\n}\n.login {\n  margin-top: 100px;\n}\n.title {\n  margin-top: 50px;\n}\n.subtitle {\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGl2L0RvY3VtZW50cy9HaXRIdWIvYW5vbnltb3VzLWJhZGdlci9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsaURBQUE7RUFDQSwwQkFBQTtFQUNBLHVDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDREY7QURHRTtFQUVFLDhDQUFBO0FDRko7QURLRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0hKO0FET0E7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDSkY7QURPQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7QUNKRjtBRFNBO0VBQ0UsWUFBQTtBQ05GO0FEU0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDTkY7QURTQTtFQUNFLGlCQUFBO0FDTkY7QURTQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ05GO0FEU0E7RUFDRSxpQkFBQTtBQ05GO0FEU0E7RUFDRSxnQkFBQTtBQ05GO0FEU0E7RUFDRSxnQkFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHb29nbGUgSWRlbnRpdHkgYW5kIEdvb2dsZSsgU2lnbiBpbiBidXR0b25zXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS8rL2JyYW5kaW5nLWd1aWRlbGluZXNcbi5nb29nbGUtYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzczNzM3MztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDBweCAxcHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgXG4gICY6Zm9jdXMsXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDFweCA0cHggNXB4IDFweCByZ2JhKDAsMCwwLDAuMSk7XG4gIH1cbiAgXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTBtcztcbiAgfVxufVxuICAgIFxuLmdvb2dsZS1idXR0b25fX2ljb24ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDhweCAwIDhweCA4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5nb29nbGUtYnV0dG9uX190ZXh0IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsYXJpYWwsc2Fucy1zZXJpZjtcbn1cblxuLy8gQm9pbGVycGxhdGUgc3R1ZmZcblxuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5idXR0b24gfiBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmNlbnRlciB7IFxuICBtYXJnaW46IGF1dG87IFxuICBtYXgtd2lkdGg6IDIyNXB4O1xufVxuXG4ubG9naW4ge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn0iLCIuZ29vZ2xlLWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICM3MzczNzM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uZ29vZ2xlLWJ1dHRvbjpmb2N1cywgLmdvb2dsZS1idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAxcHggNHB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmdvb2dsZS1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTBtcztcbn1cblxuLmdvb2dsZS1idXR0b25fX2ljb24ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDhweCAwIDhweCA4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5nb29nbGUtYnV0dG9uX190ZXh0IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgYXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYnV0dG9uIH4gYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMjI1cHg7XG59XG5cbi5sb2dpbiB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-card {\n  margin-top: 50px;\n}\n.profile-card__header {\n  display: table;\n}\n.profile-card__header--name {\n  padding-left: 10px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.profile-card__header--photo {\n  display: table-cell;\n  vertical-align: middle;\n  width: 50px;\n  height: 50px;\n  background-size: cover;\n  background-position: bottom center;\n  border-radius: 50%;\n  vertical-align: bottom;\n}\n.course-table {\n  text-align: center !important;\n  width: 100%;\n}\n.course-table mat-header-cell {\n  display: inline;\n  min-height: auto;\n}\n.course-table mat-cell {\n  display: inline;\n  text-align: center;\n  min-height: auto;\n}\na {\n  color: #607D8B;\n  font-size: 25px;\n  text-shadow: 2px 2px #f5f5f5;\n}\na:hover {\n  color: #455A64;\n}\n.noStyle {\n  cursor: default;\n}\n.endorseBadge span {\n  left: 0;\n  margin-top: 10px;\n}\na.times {\n  color: #FFC107;\n}\na.times:hover {\n  color: #FFA000;\n}\na.minus {\n  cursor: pointer;\n  color: #3F51B5;\n}\na.minus:hover {\n  color: #303F9F;\n}\na.checks {\n  color: #4CAF50;\n}\na.checks:hover {\n  color: #388E3C;\n}\n.mat-elevation-z8 {\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGl2L0RvY3VtZW50cy9HaXRIdWIvYW5vbnltb3VzLWJhZGdlci9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBRENJO0VBQ0ksY0FBQTtBQ0NSO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDWjtBREVRO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNBWjtBREtBO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FDRko7QURJSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FES0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0hSO0FEU0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDTko7QURRSTtFQUNFLGNBQUE7QUNOTjtBRFVFO0VBQ0ksZUFBQTtBQ1BOO0FEV007RUFDSSxPQUFBO0VBQ0EsZ0JBQUE7QUNSVjtBRFlFO0VBQ0ksY0FBQTtBQ1ROO0FEV007RUFDSSxjQUFBO0FDVFY7QURhRTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDVk47QURZTTtFQUNJLGNBQUE7QUNWVjtBRGNFO0VBQ0ksY0FBQTtBQ1hOO0FEYU07RUFDSSxjQUFBO0FDWFY7QURlRTtFQUNFLCtHQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIFxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuXG4gICAgICAgICYtLW5hbWUge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJi0tcGhvdG8ge1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgICB9XG4gICAgfVxufVxuXG4uY291cnNlLXRhYmxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgXG4gICAgbWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICBcbiAgICBtYXQtY2VsbCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgXG4gIH1cbiAgXG4gIFxuICBhIHtcbiAgICBjb2xvcjogIzYwN0Q4QjtcbiAgICBmb250LXNpemU6IDI1cHg7IC8vIHlvdXIgZm9udC1zaXplIGluIHB4LCBlbSBvciAlO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICNmNWY1ZjU7XG4gIFxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICM0NTVBNjRcbiAgICB9XG4gIH1cbiAgXG4gIC5ub1N0eWxlIHtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuICBcbiAgLmVuZG9yc2VCYWRnZSB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG4gIH1cbiAgXG4gIGEudGltZXMge1xuICAgICAgY29sb3I6ICNGRkMxMDc7XG4gIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNGRkEwMDA7XG4gICAgICB9XG4gIH1cbiAgXG4gIGEubWludXMge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICMzRjUxQjU7XG4gIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMzMDNGOUY7XG4gICAgICB9XG4gIH1cbiAgXG4gIGEuY2hlY2tzIHtcbiAgICAgIGNvbG9yOiAjNENBRjUwO1xuICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjMzg4RTNDO1xuICAgICAgfVxuICB9XG5cbiAgLm1hdC1lbGV2YXRpb24tejgge1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgfVxuXG4iLCIucHJvZmlsZS1jYXJkIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5wcm9maWxlLWNhcmRfX2hlYWRlciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLnByb2ZpbGUtY2FyZF9faGVhZGVyLS1uYW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnByb2ZpbGUtY2FyZF9faGVhZGVyLS1waG90byB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cblxuLmNvdXJzZS10YWJsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb3Vyc2UtdGFibGUgbWF0LWhlYWRlci1jZWxsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xufVxuLmNvdXJzZS10YWJsZSBtYXQtY2VsbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xufVxuXG5hIHtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggI2Y1ZjVmNTtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogIzQ1NUE2NDtcbn1cblxuLm5vU3R5bGUge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5lbmRvcnNlQmFkZ2Ugc3BhbiB7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmEudGltZXMge1xuICBjb2xvcjogI0ZGQzEwNztcbn1cbmEudGltZXM6aG92ZXIge1xuICBjb2xvcjogI0ZGQTAwMDtcbn1cblxuYS5taW51cyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMzRjUxQjU7XG59XG5hLm1pbnVzOmhvdmVyIHtcbiAgY29sb3I6ICMzMDNGOUY7XG59XG5cbmEuY2hlY2tzIHtcbiAgY29sb3I6ICM0Q0FGNTA7XG59XG5hLmNoZWNrczpob3ZlciB7XG4gIGNvbG9yOiAjMzg4RTNDO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/snackbar.service */ "./src/app/services/snackbar.service.ts");






let ProfileComponent = class ProfileComponent {
    constructor(as, fs, sbs, route) {
        this.as = as;
        this.fs = fs;
        this.sbs = sbs;
        this.route = route;
        this.displayedColumns = ["course", "platform", "date", "file", "status", "endorse"];
    }
    ngOnInit() {
        this.getUID();
        this.getCurrUser();
        this.getUser();
        this.getBadges();
    }
    getCurrUser() {
        this.fs.getUser(this.as.uid).subscribe(res => {
            this.currUser = res;
        });
    }
    isSameUser() {
        return this.as.uid == this.uid;
    }
    getUID() {
        let d = this.route.params;
        this.uid = d._value.id;
        console.log(this.uid);
    }
    getBadges() {
        let badges = [];
        this.fs.getBadges(this.uid).subscribe(res => {
            res.forEach(b => {
                let d = b.data;
                d.id = b.id;
                badges.push(d);
            });
            this.badges = badges;
            console.log(this.badges);
        });
    }
    getUser() {
        this.fs.getUser(this.uid).subscribe(res => {
            this.user = res;
        });
    }
    endorseBadge(id, endorsement) {
        console.log(this.as.userData);
        if (this.as.isLoggedIn) {
            if (this.currUser.endorsements == 0) {
                this.sbs.dismiss('No more endorsement points left', 'DISMISS');
            }
            else {
                this.fs.endorseBadge(id, this.as.uid, endorsement + 1);
            }
        }
        else {
            this.sbs.dismiss('Login to Endorse', 'DISMISS');
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FireStoreService"] },
    { type: src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthService = class AuthService {
    constructor(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Returns true when user is looged in and email is verified
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false) ? true : false;
    }
    get userProfilePicture() {
        if (this.isLoggedIn && this.userData != null) {
            return this.userData.photoURL;
        }
        else {
            return '../favicon.ico';
        }
    }
    get userName() {
        if (this.isLoggedIn && this.userData != null) {
            return this.userData.displayName;
        }
        else {
            return JSON.parse(localStorage.getItem('user')).displayName;
        }
    }
    get uid() {
        if (this.isLoggedIn && this.userData != null) {
            return this.afAuth.auth.currentUser.uid;
        }
        else {
            return JSON.parse(localStorage.getItem('user')).uid;
        }
    }
    // Sign in with Google
    GoogleAuth() {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    }
    // Auth logic to run auth providers
    AuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['home']);
            });
            this.endorsementDoesNotExist(result.user).subscribe(res => {
                this.userData = res;
            });
            this.SetUserData(result.user);
        }).catch((error) => {
            window.alert(error);
        });
    }
    /* Setting up user data in Firestore database
    using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user) {
        return this.afs.collection('users').doc(user.uid).set(this.userData, { merge: true });
    }
    endorsementDoesNotExist(user) {
        return this.afs
            .collection("/users")
            .doc(user.uid)
            .valueChanges();
    }
    // Sign out 
    SignOut() {
        return this.afAuth.auth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['login']);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] // NgZone service to remove outside scope warning
     }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/badger.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/badger.service.ts ***!
  \********************************************/
/*! exports provided: BadgerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgerService", function() { return BadgerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/snackbar.service */ "./src/app/services/snackbar.service.ts");




let BadgerService = class BadgerService {
    constructor(http, sbs) {
        this.http = http;
        this.sbs = sbs;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("content-type", "application/json");
    }
    getAccessToken(username, password) {
        const url = `https://api.badgr.io/o/token?username=${username}&password=${password}`;
        return this.http.post(url, { headers: this.headers });
    }
    getRefreshToken(token) {
        const url = `https://api.badgr.io/o/token?grant_type=refresh_token&refresh_token=${token.access_token}`;
        return this.http.post(url, { headers: this.headers });
    }
    getBadges(token) {
        const url = `https://api.badgr.io/v2/backpack/assertions&token=${token.access_token}`;
        const _headers = {
            "Content-Type": "application/json",
            Authorization: token.access_token
        };
        return this.http
            .get(url, { headers: _headers })
            .subscribe(data => console.log(data), error => this.sbs.dismiss('No Badges to Import', 'DISMISS'));
    }
};
BadgerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"] }
];
BadgerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BadgerService);



/***/ }),

/***/ "./src/app/services/firestore.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/firestore.service.ts ***!
  \***********************************************/
/*! exports provided: FireStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireStoreService", function() { return FireStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






let FireStoreService = class FireStoreService {
    constructor(af, as) {
        this.af = af;
        this.as = as;
    }
    addBadge(data) {
        return this.af.collection("badges").add(data);
    }
    deleteBadge(id) {
        return this.af
            .collection("badges")
            .doc(id)
            .delete()
            .then(res => {
            window.location.reload();
        });
    }
    getBadges(uid) {
        return this.af
            .collection("/badges", ref => ref.where("uid", "==", uid))
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(a => {
            return { data: a.payload.doc.data(), id: a.payload.doc.id };
        })));
    }
    getUsers() {
        return this.af
            .collection("/users")
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(a => {
            return a.payload.doc.data();
        })));
    }
    getUser(id) {
        return this.af
            .collection("/users")
            .doc(id)
            .valueChanges();
    }
    getRecommendations() {
        return this.af
            .collection("/badges", ref => ref.where("status.verified.code", "==", 1))
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(a => {
            return { data: a.payload.doc.data(), id: a.payload.doc.id };
        })));
    }
    endorseBadge(badgeid, userid, endorsement) {
        this.updateUserPoints(userid);
        this.updateEndorsement(badgeid, userid, endorsement);
    }
    updateUserPoints(userid) {
        const decrement = firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.increment(-1);
        let ref = this.af.collection("/users").doc(userid);
        ref.update({ endorsements: decrement });
    }
    updateEndorsement(badgeid, userid, endorsement) {
        return this.af
            .collection("/badges")
            .doc(badgeid)
            .set({
            status: {
                verified: {
                    code: 1,
                    endorsements: endorsement,
                    status: "Endorsed"
                }
            },
            verifiedBy: [userid]
        }, { merge: true })
            .then(res => {
            window.location.reload();
        });
    }
};
FireStoreService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
FireStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], FireStoreService);



/***/ }),

/***/ "./src/app/services/snackbar.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/snackbar.service.ts ***!
  \**********************************************/
/*! exports provided: SnackbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarService", function() { return SnackbarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SnackbarService = class SnackbarService {
    constructor(snackBar, zone, router) {
        this.snackBar = snackBar;
        this.zone = zone;
        this.router = router;
    }
    viewBadges(message, action, duration = 50000) {
        this.zone.run(() => {
            let snackBarRef = this.snackBar.open(message, action, { duration });
            snackBarRef.onAction().subscribe(() => this.goToBadges());
        });
    }
    dismiss(message, action, duration = 50000) {
        this.zone.run(() => {
            let snackBarRef = this.snackBar.open(message, action, { duration });
            snackBarRef.onAction().subscribe(() => this.snackBar.dismiss());
        });
    }
    goToBadges() {
        this.router.navigate(['badges']);
    }
};
SnackbarService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SnackbarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], SnackbarService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCoo97CCaguKrFTIjJQh-DlaOHzO9jCI14",
        authDomain: "anonymous-badger.firebaseapp.com",
        databaseURL: "https://anonymous-badger.firebaseio.com",
        projectId: "anonymous-badger",
        storageBucket: "anonymous-badger.appspot.com",
        messagingSenderId: "806312132645",
        appId: "1:806312132645:web:c94bf1dea5d813f161bfcc",
        measurementId: "G-K0R60L1QEZ"
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shiv/Documents/GitHub/anonymous-badger/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map