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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<clr-alert [clrAlertType]=\"a.type\" *ngFor=\"let a of alerts\">\n  <clr-alert-item>\n    <span class=\"alert-text\">{{ a.text }}</span>\n  </clr-alert-item>\n</clr-alert>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header-1\">\n  <div class=\"branding\">\n    <a *ngIf=\"!isSuperAdmin()\" class=\"nav-link\" [routerLink]=\"['/s3', bucket]\">\n      <clr-icon shape=\"cloud\"></clr-icon>\n      <span class=\"title\"> Huios</span>\n    </a>\n    <span *ngIf=\"isSuperAdmin()\" class=\"title\">\n      <clr-icon shape=\"cloud\"></clr-icon>\n      Huios\n    </span>\n  </div>\n\n  <div class=\"header-actions\">\n    <clr-dropdown>\n      <button class=\"nav-icon\" clrDropdownTrigger aria-label=\"toggle settings menu\">\n        <clr-icon shape=\"user\"></clr-icon>\n        <clr-icon shape=\"caret down\"></clr-icon>\n      </button>\n      <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n        <!--<button clrDropdownItem *ngIf=\"pass()\" (click)=\"pmodal = true\">Changer mot de passe</button>-->\n        <button clrDropdownItem (click)=\"logout()\">Se Déconnecter</button>\n      </clr-dropdown-menu>\n    </clr-dropdown>\n  </div>\n</header>\n<!-- <nav class=\"subnav\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/s3\">S3</a>\n    </li>\n  </ul>\n</nav> -->\n<clr-modal [(clrModalOpen)]=\"pmodal\">\n  <h3 class=\"modal-title\">Change password</h3>\n  <div class=\"modal-body\">\n    <form clrForm clrLayout=\"horizontal\" [clrLabelSize]=\"4\">\n      <clr-password-container>\n        <label>Old password</label>\n        <input clrPassword name=\"oldPassword\" [(ngModel)]=\"oldPassword\" />\n      </clr-password-container>\n      <clr-password-container>\n        <label>New password</label>\n        <input clrPassword name=\"newPassword\" [(ngModel)]=\"newPassword\" />\n      </clr-password-container>\n      <clr-password-container>\n        <label>Confirm new password</label>\n        <input clrPassword name=\"confirmPassword\" [(ngModel)]=\"confirmPassword\" />\n      </clr-password-container>\n    </form>\n    <clr-alert *ngIf=\"msg\" [clrAlertType]=\"'danger'\" [clrAlertClosable]=\"false\">\n      <clr-alert-item>\n        <span class=\"alert-text\">\n          {{ msg }}\n        </span>\n      </clr-alert-item>\n    </clr-alert>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline btn-sm\" (click)=\"close()\">Cancel</button>\n    <button\n      type=\"button\"\n      class=\"btn btn-primary btn-sm\"\n      (click)=\"changePassword()\"\n      [disabled]=\"!oldPassword || !newPassword || !confirmPassword\"\n    >\n      Ok\n    </button>\n  </div>\n</clr-modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<clr-main-container>\n  <app-header></app-header>\n  <div class=\"content-container\">\n    <router-outlet *ngIf=\"side\" name=\"sidebar\"></router-outlet>\n    <div class=\"content-area\">\n      <app-alert></app-alert>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</clr-main-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper\">\n  <form #loginForm=\"ngForm\" class=\"login\" (ngSubmit)=\"onSubmitLogin()\">\n    <section class=\" title\">\n      <h3 class=\"welcome\"> Huios Nation World</h3>\n    </section>\n    <div class=\"login-group\">\n<!--      <clr-select-container>-->\n<!--        <label class=\"clr-sr-only\">Auth</label>-->\n<!--        <select clrSelect name=\"type\" [(ngModel)]=\"form.type\" required>-->\n<!--          <option *ngFor=\"let l of logins; let i = index\" [value]=\"i\">{{ l.name }}</option>-->\n<!--        </select>-->\n<!--      </clr-select-container>-->\n      <clr-input-container>\n        <label class=\"clr-sr-only\">Nom d'utilisateur</label>\n        <input\n          type=\"text\"\n          name=\"username\"\n          clrInput\n          [placeholder]=\"placeholders[form.type][0]\"\n          [(ngModel)]=\"form.username\"\n          required\n        />\n      </clr-input-container>\n      <clr-password-container>\n        <label class=\"clr-sr-only\">Mot de passe</label>\n        <input\n          type=\"password\"\n          name=\"password\"\n          clrPassword\n          [placeholder]=\"placeholders[form.type][1]\"\n          [(ngModel)]=\"form.password\"\n          required\n        />\n      </clr-password-container>\n      <div [hidden]=\"!msg\" class=\"error active\">{{ msg }}</div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"loginForm.form.invalid\">SE CONNECTER</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Page ou élément introuvable</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<audio #audio\n       controls\n       *ngIf=\"url && isAudioFile()\"\n       autoplay=\"autoplay\"\n       (play)=\"play($event)\">\n  <source [src]=\"url\">\n</audio>\n<em *ngIf=\"isAudioFile()\">{{ basename(url) }}</em>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/s3/s3.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/s3/s3.component.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"bucket\" class=\"breadcrumb\">\n  <a [routerLink]=\"['/s3', param]\">{{ display }}</a>\n  <span class=\"separator\">/</span>\n  <ng-container *ngFor=\"let p of breadcrumb; index as i; let l = last\">\n    <a *ngIf=\"!l\" [routerLink]=\"p.link\">{{ p.name }}</a>\n    <span *ngIf=\"l\">{{ p.name }}</span>\n    <span class=\"separator\">/</span>\n  </ng-container>\n</div>\n<div class=\"menu\" *ngIf=\"bucket\">\n  <button class=\"btn btn-sm btn-primary\" (click)=\"dlSelected()\" [disabled]=\"selected.length == 0\">\n    <clr-icon shape=\"download\"></clr-icon> Télécharger\n  </button>\n  <router-outlet></router-outlet>\n\n<!--  We want to hide Upload/Create/Delete buttons-->\n  <label *ngIf=\"isSuperAdmin()\" class=\"btn btn-sm btn-primary btn-file\">\n    <input type=\"file\" #up (change)=\"upload(up.files)\" accept=\"*\" multiple />\n    <clr-icon shape=\"upload\"></clr-icon> upload\n  </label>\n  <clr-input-container *ngIf=\"isSuperAdmin()\">\n    <input clrInput placeholder=\"folder name\" name=\"folder\" [(ngModel)]=\"folder\" />\n  </clr-input-container>\n  <button *ngIf=\"isSuperAdmin()\" class=\"btn btn-sm btn-primary\" (click)=\"createFolder()\" [disabled]=\"folder.length == 0\">create</button>\n  <clr-signpost *ngIf=\"isSuperAdmin()\">\n    <button clrSignpostTrigger class=\"btn btn-sm btn-primary\" [disabled]=\"selected.length == 0\">\n      <clr-icon shape=\"trash\"></clr-icon> delete\n    </button>\n    <ng-template [(clrIfOpen)]=\"isOpen\">\n      <clr-signpost-content [clrPosition]=\"'bottom-middle'\">\n        <p *ngFor=\"let s of selected\">{{ basename(s.Key) }}</p>\n        <button class=\"btn btn-sm\" (click)=\"delete()\">OK</button>\n      </clr-signpost-content>\n    </ng-template>\n  </clr-signpost>\n\n  <clr-dropdown class=\"bottom-right\">\n    <button class=\"btn btn-sm btn-link\" clrDropdownTrigger>\n      EFFACER\n      <clr-icon shape=\"caret down\"></clr-icon>\n    </button>\n    <clr-dropdown-menu clrPosition=\"bottom-right\">\n      <div (click)=\"clearSort()\" clrDropdownItem>TRI</div>\n      <div (click)=\"clearFilter()\" clrDropdownItem>FILTRE</div>\n    </clr-dropdown-menu>\n  </clr-dropdown>\n  <button type=\"button\" class=\"btn btn-link btn-icon\" (click)=\"refresh()\" aria-label=\"refresh\">\n    <clr-icon shape=\"refresh\"></clr-icon>\n  </button>\n</div>\n<clr-datagrid *ngIf=\"bucket\" [(clrDgSelected)]=\"selected\" [clrDgLoading]=\"loading\">\n  <clr-dg-placeholder>Il n'y a aucun objet dans ce repertoire.</clr-dg-placeholder>\n  <clr-dg-column\n    *ngFor=\"let c of columns\"\n    [clrDgField]=\"c.field\"\n    [(clrDgSortOrder)]=\"c.sort\"\n    [(clrFilterValue)]=\"c.filter\"\n    [style.width.px]=\"c.width\"\n    >{{ c.label }}</clr-dg-column\n  >\n\n  <clr-dg-row *clrDgItems=\"let c of contents\" [clrDgItem]=\"c\" [clrDgSelectable]=\"c.Key.slice(-1) != '/'\">\n    <clr-dg-cell class=\"cell-name\">\n      <a *ngIf=\"c.Key.slice(-1) == '/'\" [routerLink]=\"['/s3', param, c.Key]\"> <clr-icon shape=\"folder\"></clr-icon>{{ dirname(c.Key) }} </a>\n      <a *ngIf=\"c.Key.slice(-1) != '/'\" [routerLink]=\"['.', 'play', basename(c.Key)]\">\n        <clr-icon shape=\"file\"></clr-icon>{{ basename(c.Key) }}\n      </a>\n    </clr-dg-cell>\n    <clr-dg-cell>{{ filesize(c.Size) }}</clr-dg-cell>\n    <clr-dg-cell>{{ (c.LastModified | date: 'yyyy/MM/dd HH:mm:ss') || '--' }}</clr-dg-cell>\n    <!-- <clr-dg-cell>{{ c.StorageClass || '--' }}</clr-dg-cell> -->\n  </clr-dg-row>\n  <clr-dg-footer>\n    <clr-dg-pagination #pagination [clrDgPageSize]=\"20\">\n      <clr-dg-page-size [clrPageSizeOptions]=\"[10, 20, 50, 100]\">Fichiers par page</clr-dg-page-size>\n      {{ pagination.firstItem + 1 }} - {{ pagination.lastItem + 1 }} of {{ pagination.totalItems }} files\n    </clr-dg-pagination>\n  </clr-dg-footer>\n</clr-datagrid>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/s3/sidebar/sidebar.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/s3/sidebar/sidebar.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <section class=\"sidenav-content\">-->\n<!--    <section class=\"nav-group collapsible\">-->\n<!--        <input id=\"tabexample1\" type=\"checkbox\">-->\n<!--        <label for=\"tabexample1\">Buckets</label>-->\n<!--        <ul class=\"nav-list\">-->\n<!--            <li *ngFor=\"let b of buckets\"><a class=\"nav-link\" routerLinkActive=\"active\"-->\n<!--                    [routerLink]=\"['/s3',b]\">{{ b }}</a></li>-->\n<!--        </ul>-->\n<!--    </section>-->\n<!--</section>-->\n<clr-vertical-nav *ngIf=\"isSuperAdmin()\">\n  <clr-vertical-nav-group routerLinkActive=\"active\" [clrVerticalNavGroupExpanded]=\"true\">\n    <clr-icon shape=\"list\" clrVerticalNavIcon></clr-icon>\n    Dossiers\n    <clr-vertical-nav-group-children>\n      <a\n        [routerLink]=\"['/s3', b]\"\n        routerLinkActive=\"active\"\n        clrVerticalNavLink\n        [title]=\"disp(b)\"\n        *ngFor=\"let b of buckets\"\n      >\n        {{ disp(b) }}\n      </a>\n    </clr-vertical-nav-group-children>\n  </clr-vertical-nav-group>\n<!--  <div class=\"nav-divider\"></div>-->\n<!--  <clr-vertical-nav-group [clrVerticalNavGroupExpanded]=\"false\">-->\n<!--    <clr-icon shape=\"cog\" clrVerticalNavIcon></clr-icon>-->\n<!--    Settings-->\n<!--    <clr-vertical-nav-group-children>-->\n<!--      <div class=\"add-container\">-->\n<!--        <p>Add Link</p>-->\n<!--        <input clrInput placeholder=\"Bucket\" name=\"bucket\" [(ngModel)]=\"bucketa\" />-->\n<!--        <input clrInput placeholder=\"Prefix\" name=\"prefix\" [(ngModel)]=\"prefix\" />-->\n<!--        <input clrInput placeholder=\"Display\" name=\"display\" [(ngModel)]=\"display\" />-->\n<!--        <button class=\"btn btn-sm btn-icon btn-secondary\" (click)=\"addBucket()\" [disabled]=\"!bucketa\">-->\n<!--          &lt;!&ndash; <clr-icon shape=\"plus-circle\"></clr-icon> &ndash;&gt;-->\n<!--          <clr-icon shape=\"plus\"></clr-icon> add-->\n<!--        </button>-->\n<!--      </div>-->\n<!--      <div class=\"remove-container\">-->\n<!--        <p>Remove Link</p>-->\n<!--        <select clrSelect name=\"bucket\" [(ngModel)]=\"bucketr\">-->\n<!--          <option [value]=\"b\" *ngFor=\"let b of buckets\">{{ b }}</option>-->\n<!--        </select>-->\n<!--        <button class=\"btn btn-sm btn-icon btn-secondary\" (click)=\"removeBucket()\" [disabled]=\"!bucketr\">-->\n<!--          <clr-icon shape=\"minus\"></clr-icon> remove-->\n<!--        </button>-->\n<!--      </div>-->\n<!--    </clr-vertical-nav-group-children>-->\n<!--  </clr-vertical-nav-group>-->\n</clr-vertical-nav>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/alert/alert.component.scss":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .close {\n  height: initial;\n}\n::ng-deep clr-alert:first-child .alert {\n  margin-top: 0;\n}\n::ng-deep clr-alert:last-child .alert {\n  margin-bottom: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxlcnQvQzpcXFVzZXJzXFxFbG9oaW1cXERvd25sb2Fkc1xcczNtYW5hZ2VyLWZyLW1haW4gKDEpXFxzM21hbmFnZXItZnItbWFpbi9zcmNcXGFwcFxcYWxlcnRcXGFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUNBSjtBREdJO0VBQ0UsYUFBQTtBQ0ROO0FES0k7RUFDRSxxQkFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAuY2xvc2Uge1xuICAgIGhlaWdodDogaW5pdGlhbDtcbiAgfVxuICBjbHItYWxlcnQ6Zmlyc3QtY2hpbGQge1xuICAgIC5hbGVydCB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgfVxuICBjbHItYWxlcnQ6bGFzdC1jaGlsZCB7XG4gICAgLmFsZXJ0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcbiAgICB9XG4gIH1cbn1cbiIsIjo6bmctZGVlcCAuY2xvc2Uge1xuICBoZWlnaHQ6IGluaXRpYWw7XG59XG46Om5nLWRlZXAgY2xyLWFsZXJ0OmZpcnN0LWNoaWxkIC5hbGVydCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG46Om5nLWRlZXAgY2xyLWFsZXJ0Omxhc3QtY2hpbGQgLmFsZXJ0IHtcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "./src/app/alert/alert.service.ts");



let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    ngOnInit() {
        this.subscription = this.alertService.onAlert(this.id).subscribe(alert => {
            if (!alert.text) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
        });
    }
};
AlertComponent.ctorParameters = () => [
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "id", void 0);
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert.component.scss */ "./src/app/alert/alert.component.scss")).default]
    })
], AlertComponent);



/***/ }),

/***/ "./src/app/alert/alert.service.ts":
/*!****************************************!*\
  !*** ./src/app/alert/alert.service.ts ***!
  \****************************************/
/*! exports provided: AlertService, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");





let AlertService = class AlertService {
    constructor() {
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    onAlert(id) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(x => x && x.id === id));
    }
    success(message, id) {
        this.alert({ text: message, type: AlertType.success, id });
    }
    danger(message, id) {
        this.alert({ text: message, type: AlertType.danger, id });
    }
    info(message, id) {
        this.alert({ text: message, type: AlertType.info, id });
    }
    warn(message, id) {
        this.alert({ text: message, type: AlertType.warning, id });
    }
    alert(alert) {
        console.log(alert);
        this.subject.next(alert);
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AlertService);

var AlertType;
(function (AlertType) {
    AlertType["danger"] = "danger";
    AlertType["warning"] = "warning";
    AlertType["info"] = "info";
    AlertType["success"] = "success";
})(AlertType || (AlertType = {}));


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
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _s3_s3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./s3/s3.component */ "./src/app/s3/s3.component.ts");
/* harmony import */ var _s3_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./s3/sidebar/sidebar.component */ "./src/app/s3/sidebar/sidebar.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");










const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 's3',
    },
    {
        path: 's3',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: { side: true },
        children: [
            {
                path: '',
                component: _s3_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["S3SidebarComponent"],
                outlet: 'sidebar',
            },
            {
                path: ':bucket',
                component: _s3_s3_component__WEBPACK_IMPORTED_MODULE_7__["S3Component"],
            },
            {
                path: ':bucket/:prefix',
                component: _s3_s3_component__WEBPACK_IMPORTED_MODULE_7__["S3Component"],
                children: [
                    {
                        path: 'play/:filename',
                        component: _player_player_component__WEBPACK_IMPORTED_MODULE_9__["PlayerComponent"],
                    }
                ]
            },
        ],
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_secret_secret_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/secret/secret.service */ "./src/secret/secret.service.ts");
/* harmony import */ var _datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datasharing/datasharing.service */ "./src/app/datasharing/datasharing.service.ts");
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node-forge */ "./node_modules/node-forge/lib/index.js");
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_forge__WEBPACK_IMPORTED_MODULE_6__);







let AppComponent = class AppComponent {
    constructor(title, secretService, dataSharingService) {
        this.title = title;
        this.secretService = secretService;
        this.dataSharingService = dataSharingService;
        this.privateKey = `-----BEGIN RSA PRIVATE KEY-----
  MIIEowIBAAKCAQEA5ws4cvC0JR+sVbunTaeSquRw4Aq9h+SlEc/y0TnUqCh59bVn
  3gISeKGcLOwl7z+2EivbWZ6IBa56kK88j2zpNSgIPjB+XzAyQA45kHaeWtJqhE6V
  CEtbpijecvK80hvBxbuGQpWUs5grqRKhAskXtImIDnsrEf1m944RzZx9HbDwwqlj
  //YdU32TAsOqNq2cmyNcnX7GiENQwcXY/WAfTfpUxsmdyu6Q0g+V/P7HBLWvsUAF
  Kigp7UZ5plf2feLzinOz08qAqBO9frL8vJVXiMAqsrSwSGXo70nzO/QAKY2MXrR+
  Tut10fqL679Z3hTxEEl0qQmps6LyDuvDkn6xzwIDAQABAoIBAAmCaB4uLNjDHZG6
  k1LaTQQYB1LnvkNKNHnjAc7j8kFb+rqtO76WF6W7z4GRB3XgcAfLCR0xx2fZQmKT
  UKSXY/kNhVrut6GgimdU7o01BKS4uMYEG5UBNp8RJ/Uga1S7UokAt31YFyW8Y3E/
  1HBL6VwQT3d6t4KApOzj5EGyAvt//KO4tmI+QEg1xHKERt5BByVT3H0vwQMH7sZ+
  XQ+glWvR27QGhSlWb8FZx5fIUgUfYqcKDThC8cUtuKU3+IGDT7bDVBJdEfVKOoxZ
  K8fVjcIxWEiuxlwrgy3Mj3E8P9I+QcBky7g98D4Jbruo4pX2SG01KEd0wycD4Ehk
  SLtM6+ECgYEA+/fs4R28UN2NcsVnr4YAi5e8s4SHi79ulaZhUxuQjuOgGCSWHyFH
  6wX8TeUcSNTJNsxNKVK5GvrsrQrwSmwqYUEvneqHi4wrGIDyLYqgNvYcNCT/Gsqi
  YfVCwdGOXktflXUk+zfvmUbijOQy87yeoFsBZR8lB3m0fIHj7WtN8rECgYEA6r2W
  QQq/Vru1Vekgs8hkup1qBMW6movZecCJBziblsE9tyFuIQqu6iZbNPa7lMVTFlKJ
  ViB++wrsPLwlZZV8s7ldeqyCE9frUTXP+2vC+r+PK96GnswciP9A8vLh5aj8mERf
  Maz31FiFRimUf+cbeN0kxC6NKtYgGtVGv2VjDH8CgYB6xp34O4MNbEeGS0Zwsr0F
  SBS87LEXmVoLNZ1q352a4rOZ0AoOdSsUDECavC8CFh1NxFM89YAY83fsAc6AlSA5
  b4gCTMtrZguBzyMyqb/TyCyKBBUCOwbQ8K9sve2/aL7UltZES0dGytGNkYx6U8h/
  npiZa4mhkN4vZSNpBsZeoQKBgQCY1s4xFT1VzKwZ/suTI0QqmXnBF7kTDUGRW4Ic
  2Ie9lZ6IUVTyYJFY1ZaHGqsyB3S80QqosEndTNRaCyrSRI3IO0YZLJ8ZKnoGC2Ka
  0iRGvVkL+DxwwndF3+S7Ctd4gBnPTp0oq/VFJknIUCRnTuN9Q4e/0IuLu5V1wy3o
  Sqw+IwKBgGv/r/aLjkdyejwOkGOTxtHSeA464vvUcaf3FcuAB1MgDPxQNNUO5pVI
  Py5KoiobmUKJAllGPBzMtqqSk3J/YO2hKNWCpry3PMdLIvXIJRRZPNIcP4roy37s
  y6IlihEFTYp6rCOttA1+d6jmccpmiupfK40VUdyilp8tzwkjmG3u
  -----END RSA PRIVATE KEY-----
  `;
        this.secretsLoaded = false;
        this.logins = []; // Initialisez la variable
        this.title.setTitle(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].title);
    }
    ngOnInit() {
        this.secretService.getSecret().subscribe((response) => {
            // Remplacer les valeurs d'environnement par les secrets obtenus du backend
            // Récupérer les secrets chiffrés depuis l'API
            console.log("response", response);
            const encryptedData = response.encryptedData;
            // Déchiffrer les secrets avec la clé privée
            const decryptedSecrets = this.decryptSecrets(encryptedData);
            // Mettre à jour les secrets dans `environment` après déchiffrement
            src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].accessKey = decryptedSecrets.accessKey;
            src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].secretKey = decryptedSecrets.secretKey;
            src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].username = decryptedSecrets.username;
            src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].password = decryptedSecrets.password;
            this.dataSharingService.setSecrets(decryptedSecrets);
            this.logins = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].logins;
            console.log('Secrets chargés et déchiffrés:', decryptedSecrets);
            this.secretsLoaded = true; // Indique que les secrets sont ch
        }, (error) => {
            console.error('Erreur lors de la récupération des secrets:', error);
        });
    }
    // decryptSecrets(encryptedData: string): any {
    //   try {
    //     // Convertir les données chiffrées de base64 en Buffer
    //     const buffer = Buffer.from(encryptedData, 'base64');
    //     // Déchiffrer les données à l'aide de la clé privée
    //     const decrypted = privateDecrypt(
    //       {
    //         key: this.privateKey,
    //         passphrase: '',  // Si votre clé est protégée par un mot de passe, ajoutez-le ici
    //       },
    //       buffer
    //     );
    //     // Retourner les secrets déchiffrés sous forme d'objet JSON
    //     return JSON.parse(decrypted.toString());
    //   } catch (error) {
    //     console.error('Erreur lors du déchiffrement des secrets:', error);
    //     return null;
    //   }
    // }
    // decryptSecrets(encryptedData: string): any {
    //   try {
    //     const jsEncrypt = new JSEncrypt();
    //     jsEncrypt.setPrivateKey(this.privateKey);
    //     // Déchiffrer les données
    //     const decrypted = jsEncrypt.decrypt(encryptedData);
    //     if (!decrypted) {
    //       throw new Error('Le déchiffrement a échoué.');
    //     }
    //     return JSON.parse(decrypted);
    //   } catch (error) {
    //     console.error('Erreur lors du déchiffrement des secrets:', error);
    //     return null;
    //   }
    // }
    decryptSecrets(encryptedData) {
        try {
            // Décode la chaîne chiffrée base64 en bytes
            const encryptedBytes = node_forge__WEBPACK_IMPORTED_MODULE_6__["util"].decode64(encryptedData);
            // Convertir en un buffer utilisable par forge
            const encryptedBuffer = node_forge__WEBPACK_IMPORTED_MODULE_6__["util"].createBuffer(encryptedBytes, 'raw');
            // Charger la clé privée
            const privateKey = node_forge__WEBPACK_IMPORTED_MODULE_6__["pki"].privateKeyFromPem(this.privateKey);
            // Déchiffrer les données
            const decrypted = privateKey.decrypt(encryptedBuffer.getBytes(), 'RSA-OAEP');
            // Retourner les données déchiffrées en JSON (si nécessaire)
            return JSON.parse(decrypted);
        }
        catch (error) {
            console.error('Erreur lors du déchiffrement des secrets:', error);
            return null;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: src_secret_secret_service__WEBPACK_IMPORTED_MODULE_4__["SecretService"] },
    { type: _datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_5__["DatasharingService"] }
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert/alert.service */ "./src/app/alert/alert.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _s3_s3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./s3/s3.component */ "./src/app/s3/s3.component.ts");
/* harmony import */ var _s3_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./s3/sidebar/sidebar.component */ "./src/app/s3/sidebar/sidebar.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"], _s3_s3_component__WEBPACK_IMPORTED_MODULE_12__["S3Component"], _s3_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["S3SidebarComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_14__["PlayerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]],
        providers: [_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _player_player_component__WEBPACK_IMPORTED_MODULE_14__["PlayerComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");





let AuthGuard = class AuthGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate(next, state) {
        return this.auth.isAuthenticated().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(loggedIn => {
            if (!loggedIn) {
                console.log('not login');
                this.router.navigate(['/login']);
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-sdk */ "./node_modules/aws-sdk/lib/browser.js");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constant */ "./src/app/constant.ts");








let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
    }
    signIn(email, password, login) {
        if (login.type === "0" /* cognito */) {
            aws_amplify__WEBPACK_IMPORTED_MODULE_3__["default"].configure({
                Auth: {
                    identityPoolId: login.identityPoolId,
                    region: login.region,
                    userPoolId: login.userPoolId,
                    userPoolWebClientId: login.userPoolWebClientId,
                },
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signIn(email, password)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(c => {
                console.log(JSON.stringify(c));
                this.loggedIn.next(true);
            }));
        }
        else {
            sessionStorage[_constant__WEBPACK_IMPORTED_MODULE_7__["SESSION_KEY_ACCESS_KEY"]] = JSON.stringify({
                accessKeyId: email,
                secretAccessKey: password,
            });
            this.loggedIn.next(true);
            return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](o => o.next());
        }
    }
    isAuthenticated() {
        if (localStorage[_constant__WEBPACK_IMPORTED_MODULE_7__["LOCAL_KEY_LOGIN_TYPE"]] === "0" /* cognito */) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(result => {
                this.loggedIn.next(true);
                return true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => {
                this.loggedIn.next(false);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
            }));
        }
        else {
            if (sessionStorage[_constant__WEBPACK_IMPORTED_MODULE_7__["SESSION_KEY_ACCESS_KEY"]]) {
                this.loggedIn.next(true);
                return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](o => {
                    o.next(true);
                });
            }
            else {
                this.loggedIn.next(false);
                return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](o => {
                    o.next(false);
                });
            }
        }
    }
    signOut() {
        this.credentials = null;
        if (localStorage[_constant__WEBPACK_IMPORTED_MODULE_7__["LOCAL_KEY_LOGIN_TYPE"]] === "0" /* cognito */) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut()).subscribe(result => {
                this.loggedIn.next(false);
                this.router.navigate(['/login']);
            }, error => console.log(error));
        }
        else {
            sessionStorage.removeItem(_constant__WEBPACK_IMPORTED_MODULE_7__["SESSION_KEY_ACCESS_KEY"]);
            this.router.navigate(['/login']);
        }
    }
    changePassword(oldPassword, newPassword) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser();
            return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].changePassword(user, oldPassword, newPassword);
        });
    }
    getCredentials() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (localStorage[_constant__WEBPACK_IMPORTED_MODULE_7__["LOCAL_KEY_LOGIN_TYPE"]] === "0" /* cognito */) {
                const c = yield aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentCredentials();
                console.log(c);
                return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].essentialCredentials(c);
            }
            else {
                const accessKey = JSON.parse(sessionStorage[_constant__WEBPACK_IMPORTED_MODULE_7__["SESSION_KEY_ACCESS_KEY"]]);
                return new aws_sdk__WEBPACK_IMPORTED_MODULE_4__["Credentials"]({
                    accessKeyId: accessKey.accessKeyId,
                    secretAccessKey: accessKey.secretAccessKey,
                });
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ "./src/app/aws/s3.service.ts":
/*!***********************************!*\
  !*** ./src/app/aws/s3.service.ts ***!
  \***********************************/
/*! exports provided: S3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S3Service", function() { return S3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-sdk */ "./node_modules/aws-sdk/lib/browser.js");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert/alert.service */ "./src/app/alert/alert.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant */ "./src/app/constant.ts");






let S3Service = class S3Service {
    constructor(auth, alert) {
        this.auth = auth;
        this.alert = alert;
    }
    s3() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new aws_sdk__WEBPACK_IMPORTED_MODULE_2__["S3"]({
                region: localStorage[_constant__WEBPACK_IMPORTED_MODULE_5__["LOCAL_KEY_REGION"]],
                credentials: yield this.auth.getCredentials(),
                maxRetries: 0,
            });
        });
    }
    listObjectsV2(params) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = {
                Contents: [],
                CommonPrefixes: [],
            };
            try {
                while (true) {
                    const output = yield (yield this.s3()).listObjectsV2(params).promise();
                    console.log(output);
                    result.Contents = result.Contents.concat(output.Contents);
                    result.CommonPrefixes = result.CommonPrefixes.concat(output.CommonPrefixes);
                    if (output.IsTruncated) {
                        params.ContinuationToken = output.NextContinuationToken;
                    }
                    else {
                        break;
                    }
                }
            }
            catch (e) {
                this.alert.danger(e.message || e.code);
            }
            return result;
        });
    }
    getObject(params) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let ret;
            try {
                ret = yield (yield this.s3()).getObject(params).promise();
                console.log(ret);
            }
            catch (e) {
                this.alert.danger(e.message || e.code);
            }
            return ret;
        });
    }
    getSignedUrl(params, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const signedUrl = (yield this.s3()).getSignedUrl('getObject', params);
                console.log(signedUrl);
                window.location.href = signedUrl;
                // const res = await fetch(signedUrl);
                // const blob = await res.blob();
                // const url = window.URL.createObjectURL(blob);
                // const a = document.createElement('a');
                // document.body.appendChild(a);
                // a.href = url;
                // a.download = name;
                // a.click();
                // window.URL.revokeObjectURL(url);
                // document.body.removeChild(a);
            }
            catch (e) {
                this.alert.danger(e.message || e.code);
            }
        });
    }
    upload(params, options, listener = p => {
        console.log(p);
    }) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let ret;
            try {
                ret = yield (yield this.s3())
                    .upload(params, options)
                    .on('httpUploadProgress', listener)
                    .promise();
                console.log(ret);
            }
            catch (e) {
                this.alert.danger(e.message || e.code);
            }
            return ret;
        });
    }
    putObject(params) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let ret;
            try {
                ret = yield (yield this.s3()).putObject(params).promise();
                console.log(ret);
            }
            catch (e) {
                this.alert.danger(e.message || e.code);
            }
            return ret;
        });
    }
    deleteObjects(params) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let ret;
            try {
                ret = yield (yield this.s3()).deleteObjects(params).promise();
                console.log(ret);
            }
            catch (e) {
                this.alert.danger(e.message || e.code);
            }
            return ret;
        });
    }
};
S3Service.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
S3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], S3Service);



/***/ }),

/***/ "./src/app/constant.ts":
/*!*****************************!*\
  !*** ./src/app/constant.ts ***!
  \*****************************/
/*! exports provided: SESSION_KEY_ACCESS_KEY, LOCAL_KEY_REGION, LOCAL_KEY_LOGIN_TYPE, LOCAL_KEY_LOGIN_INDEX, LOCAL_KEY_BUCKETS, LOCAL_KEY_USERNAME, SUPER_ADMIN_USERNAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_KEY_ACCESS_KEY", function() { return SESSION_KEY_ACCESS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_KEY_REGION", function() { return LOCAL_KEY_REGION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_KEY_LOGIN_TYPE", function() { return LOCAL_KEY_LOGIN_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_KEY_LOGIN_INDEX", function() { return LOCAL_KEY_LOGIN_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_KEY_BUCKETS", function() { return LOCAL_KEY_BUCKETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_KEY_USERNAME", function() { return LOCAL_KEY_USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPER_ADMIN_USERNAME", function() { return SUPER_ADMIN_USERNAME; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const SESSION_KEY_ACCESS_KEY = 's3manager.accessKey';
const LOCAL_KEY_REGION = 's3manager.region';
const LOCAL_KEY_LOGIN_TYPE = 's3manager.loginType';
const LOCAL_KEY_LOGIN_INDEX = 's3manager.loginIndex';
const LOCAL_KEY_BUCKETS = 's3manager.buckets';
const LOCAL_KEY_USERNAME = 's3manager.username';
const SUPER_ADMIN_USERNAME = 'super-admin';


/***/ }),

/***/ "./src/app/datasharing/datasharing.service.ts":
/*!****************************************************!*\
  !*** ./src/app/datasharing/datasharing.service.ts ***!
  \****************************************************/
/*! exports provided: DatasharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasharingService", function() { return DatasharingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);



let DatasharingService = class DatasharingService {
    constructor() {
        this.secretsSubject = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    setSecrets(secrets) {
        this.secretsSubject.next(secrets);
    }
    getSecrets() {
        return this.secretsSubject.asObservable();
    }
};
DatasharingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DatasharingService);



/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("clr-password-container:first-child {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9DOlxcVXNlcnNcXEVsb2hpbVxcRG93bmxvYWRzXFxzM21hbmFnZXItZnItbWFpbiAoMSlcXHMzbWFuYWdlci1mci1tYWluL3NyY1xcYXBwXFxsYXlvdXRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2xyLXBhc3N3b3JkLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4iLCJjbHItcGFzc3dvcmQtY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constant */ "./src/app/constant.ts");





let HeaderComponent = class HeaderComponent {
    constructor(auth, title) {
        this.auth = auth;
        this.title = title;
    }
    ngOnInit() {
        this.bucket = localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_4__["LOCAL_KEY_BUCKETS"]];
    }
    logout() {
        this.auth.signOut();
    }
    changePassword() {
        if (this.newPassword !== this.confirmPassword) {
            this.msg = "Password confirmation doesn't match the password";
            return;
        }
        this.auth
            .changePassword(this.oldPassword, this.newPassword)
            .then(d => {
            this.close();
        })
            .catch(e => {
            this.msg = e.message;
        });
    }
    pass() {
        return localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_4__["LOCAL_KEY_LOGIN_TYPE"]] === "0" /* cognito */;
    }
    close() {
        this.pmodal = false;
        this.oldPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
        this.msg = '';
    }
    isSuperAdmin() {
        return src_app_constant__WEBPACK_IMPORTED_MODULE_4__["SUPER_ADMIN_USERNAME"] === localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_4__["LOCAL_KEY_USERNAME"]];
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LayoutComponent = class LayoutComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.side = activatedRoute.snapshot.data.side;
    }
    ngOnInit() { }
    onActivate(event) {
        this.componentRef = event;
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")).default]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");









let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        exports: [_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"]],
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-wrapper {\n  background: none;\n  justify-content: center;\n}\n.login-wrapper .welcome {\n  margin: 0;\n}\n.login-wrapper .login {\n  padding: 1.2rem 3rem;\n  padding-bottom: 6rem;\n  background: none;\n}\n.login-wrapper .login .login-group {\n  padding: 1rem 0 0 0;\n}\n.login-wrapper .login:before,\n.login-wrapper .login:after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxFbG9oaW1cXERvd25sb2Fkc1xcczNtYW5hZ2VyLWZyLW1haW4gKDEpXFxzM21hbmFnZXItZnItbWFpbi9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUNDRjtBREFFO0VBQ0UsU0FBQTtBQ0VKO0FEQUU7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRERJO0VBQ0UsbUJBQUE7QUNHTjtBREFFOztFQUVFLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLndlbGNvbWUge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAubG9naW4ge1xuICAgIHBhZGRpbmc6IDEuMnJlbSAzcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA2cmVtO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgLmxvZ2luLWdyb3VwIHtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMCAwIDA7XG4gICAgfVxuICB9XG4gIC5sb2dpbjpiZWZvcmUsXG4gIC5sb2dpbjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiLmxvZ2luLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbi13cmFwcGVyIC53ZWxjb21lIHtcbiAgbWFyZ2luOiAwO1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luIHtcbiAgcGFkZGluZzogMS4ycmVtIDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luIC5sb2dpbi1ncm91cCB7XG4gIHBhZGRpbmc6IDFyZW0gMCAwIDA7XG59XG4ubG9naW4td3JhcHBlciAubG9naW46YmVmb3JlLFxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant */ "./src/app/constant.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../datasharing/datasharing.service */ "./src/app/datasharing/datasharing.service.ts");







let LoginComponent = class LoginComponent {
    constructor(router, auth, datasharing) {
        this.router = router;
        this.auth = auth;
        this.datasharing = datasharing;
        this.secretsLoaded = false; // Vérifier si les secrets ont été chargés
        this.secrets = {};
        this.form = {
            type: localStorage[_constant__WEBPACK_IMPORTED_MODULE_4__["LOCAL_KEY_LOGIN_INDEX"]] || '0',
            username: '',
            password: '',
        };
        this.patterns = {};
        this.placeholders = {};
    }
    ngOnInit() {
        // Charger les secrets chiffrés depuis le backend via SecretService
        // S'abonner à DatasharingService pour attendre les secrets
        this.datasharing.getSecrets().subscribe((secrets) => {
            if (secrets) {
                this.secrets = secrets;
                _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].accessKey = this.secrets.accessKey;
                _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].secretKey = this.secrets.secretKey;
                _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].username = this.secrets.username;
                _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].password = this.secrets.password;
                this.secretsLoaded = true;
                console.log('Secrets chargés:', this.secrets);
            }
        });
        // Définir les patterns et placeholders pour la validation des formulaires
        this.patterns["0" /* cognito */] = ['^.*$', '^^.*$'];
        this.patterns["1" /* accessKey */] = [
            '^(?<![A-Z0-9])[A-Z0-9]{20}(?![A-Z0-9])$',
            '^(?<![A-Za-z0-9/+=])[A-Za-z0-9/+=]{40}(?![A-Za-z0-9/+=])$',
        ];
        this.placeholders["0" /* cognito */] = ['Username', 'Password'];
        this.placeholders["1" /* accessKey */] = ['Access Key Id', 'Secret Access Key'];
    }
    onSubmitLogin() {
        // S'assurer que les secrets sont chargés avant de procéder
        if (!this.secretsLoaded) {
            this.msg = "Les informations d'authentification ne sont pas encore disponibles..... Veuillez réessayer.";
            return;
        }
        // Récupérer les secrets déchiffrés
        const { accessKey, secretKey, username, password } = this.secrets;
        const { username: un, password: pw } = this.form;
        // Vérifier les informations de connexion (username et password)
        if (!(username === un && password === pw)) {
            this.msg = "Échec de l'authentification. Veuillez vérifier vos informations.";
            return;
        }
        // Si les informations sont correctes, effectuer la connexion
        const login = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].logins["1" /* accessKey */];
        const bucketNames = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].bucketNames;
        const S3_PREFIX = "s3/";
        localStorage[_constant__WEBPACK_IMPORTED_MODULE_4__["LOCAL_KEY_LOGIN_INDEX"]] = this.form.type;
        localStorage[_constant__WEBPACK_IMPORTED_MODULE_4__["LOCAL_KEY_LOGIN_TYPE"]] = login.type;
        localStorage[_constant__WEBPACK_IMPORTED_MODULE_4__["LOCAL_KEY_REGION"]] = login.region;
        // Effectuer la connexion via AuthService en utilisant les credentials déchiffrés
        this.auth.signIn(accessKey, secretKey, login).subscribe(result => {
            console.log('login');
            // As there is only one bucket now we redirect directly to this bucket on successful login and we remove sidebar layout component.
            this.router.navigate(['/' + S3_PREFIX + bucketNames[0]]);
        }, error => {
            console.log(error);
            this.msg = error.message;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _datasharing_datasharing_service__WEBPACK_IMPORTED_MODULE_6__["DatasharingService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/player/player.component.scss":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let PlayerComponent = class PlayerComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        const parentRouteParams = this.activatedRoute.parent.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(params => params.bucket && params.prefix));
        const activeRouteParams = this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(params => params.filename));
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(parentRouteParams, activeRouteParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([{ bucket, prefix }, { filename }]) => ({ bucket, prefix, filename })))
            .subscribe(({ bucket, filename, prefix }) => {
            this.url = `https://${bucket}.s3.amazonaws.com/${prefix}${encodeURIComponent(filename)}`;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    basename(urlOrPath) {
        return urlOrPath.replace(/^.*\/([^/]+)$/, '$1');
    }
    play(event) {
        // TODO: Do something when it start play...
    }
    isAudioFile() {
        // Liste des extensions de fichiers audio courantes
        let audioExtensions = ['mp3', 'wav', 'aac', 'flac', 'ogg', 'm4a'];
        // Obtenir l'extension du fichier
        let extension = this.activatedRoute.snapshot.paramMap.get("filename").split('.').pop().toLowerCase();
        // Vérifier si l'extension est dans la liste
        return audioExtensions.includes(extension);
    }
};
PlayerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('audio', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], PlayerComponent.prototype, "audioRef", void 0);
PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html")).default,
        styles: ["\n    :host {\n      display: inline-grid;\n    }\n  ", tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.scss */ "./src/app/player/player.component.scss")).default]
    })
], PlayerComponent);



/***/ }),

/***/ "./src/app/s3/s3.component.scss":
/*!**************************************!*\
  !*** ./src/app/s3/s3.component.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".separator {\n  margin: 0 0.2rem;\n}\n\n.cell-name clr-icon {\n  margin-right: 0.2rem;\n}\n\n::ng-deep .datagrid-placeholder-image {\n  display: none;\n}\n\n.menu {\n  display: flex;\n  align-items: flex-end;\n}\n\n.menu button,\n.menu clr-button-group,\n.menu label {\n  margin: 0;\n  margin-right: 0.5rem;\n}\n\n.menu button:last-child,\n.menu clr-input-container {\n  margin: 0;\n}\n\n.menu clr-dropdown {\n  margin-left: auto;\n}\n\n.menu .btn-file input {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.menu input[name=folder] {\n  width: 100px;\n}\n\n.menu clr-signpost p {\n  margin: 0;\n  margin-bottom: 0.5rem;\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvczMvQzpcXFVzZXJzXFxFbG9oaW1cXERvd25sb2Fkc1xcczNtYW5hZ2VyLWZyLW1haW4gKDEpXFxzM21hbmFnZXItZnItbWFpbi9zcmNcXGFwcFxcczNcXHMzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zMy9zMy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUU7RUFDRSxvQkFBQTtBQ0NKOztBREdFO0VBQ0UsYUFBQTtBQ0FKOztBREdBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FDQUY7O0FEQ0U7OztFQUdFLFNBQUE7RUFDQSxvQkFBQTtBQ0NKOztBRENFOztFQUVFLFNBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0FDQ0o7O0FERUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FOOztBREdFO0VBQ0UsWUFBQTtBQ0RKOztBRElJO0VBQ0UsU0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL3MzL3MzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcGFyYXRvciB7XG4gIG1hcmdpbjogMCAwLjJyZW07XG59XG4uY2VsbC1uYW1lIHtcbiAgY2xyLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMC4ycmVtO1xuICB9XG59XG46Om5nLWRlZXAge1xuICAuZGF0YWdyaWQtcGxhY2Vob2xkZXItaW1hZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBidXR0b24sXG4gIGNsci1idXR0b24tZ3JvdXAsXG4gIGxhYmVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIH1cbiAgYnV0dG9uOmxhc3QtY2hpbGQsXG4gIGNsci1pbnB1dC1jb250YWluZXIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBjbHItZHJvcGRvd24ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG4gIC5idG4tZmlsZSB7XG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDAuMXB4O1xuICAgICAgaGVpZ2h0OiAwLjFweDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICB9XG4gIGlucHV0W25hbWU9J2ZvbGRlciddIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgY2xyLXNpZ25wb3N0IHtcbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB9XG4gIH1cbn1cbiIsIi5zZXBhcmF0b3Ige1xuICBtYXJnaW46IDAgMC4ycmVtO1xufVxuXG4uY2VsbC1uYW1lIGNsci1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XG59XG5cbjo6bmctZGVlcCAuZGF0YWdyaWQtcGxhY2Vob2xkZXItaW1hZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5tZW51IGJ1dHRvbixcbi5tZW51IGNsci1idXR0b24tZ3JvdXAsXG4ubWVudSBsYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4ubWVudSBidXR0b246bGFzdC1jaGlsZCxcbi5tZW51IGNsci1pbnB1dC1jb250YWluZXIge1xuICBtYXJnaW46IDA7XG59XG4ubWVudSBjbHItZHJvcGRvd24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5tZW51IC5idG4tZmlsZSBpbnB1dCB7XG4gIHdpZHRoOiAwLjFweDtcbiAgaGVpZ2h0OiAwLjFweDtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbn1cbi5tZW51IGlucHV0W25hbWU9Zm9sZGVyXSB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5tZW51IGNsci1zaWducG9zdCBwIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/s3/s3.component.ts":
/*!************************************!*\
  !*** ./src/app/s3/s3.component.ts ***!
  \************************************/
/*! exports provided: S3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S3Component", function() { return S3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! filesize */ "./node_modules/filesize/lib/filesize.min.js");
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aws_s3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../aws/s3.service */ "./src/app/aws/s3.service.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant */ "./src/app/constant.ts");






let S3Component = class S3Component {
    // downBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
    // upBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
    constructor(s3s, route, router) {
        this.s3s = s3s;
        this.route = route;
        this.router = router;
        this.columns = [
            { field: 'Key', label: 'Name', sort: 0, filter: '', width: 0 },
            { field: 'Size', label: 'Size', sort: 0, filter: '', width: 100 },
            { field: 'LastModified', label: 'LastModified', sort: 0, filter: '', width: 160 },
        ];
        this.loading = true;
        this.contents = [];
        this.selected = [];
        this.breadcrumb = [];
        this.folder = '';
        this.isOpen = false;
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
        console.log(route);
        this.param = this.route.snapshot.paramMap.get('bucket');
        if (this.param) {
            this.bucket = this.param.split(',')[0];
            this.bprefix = this.param.split(',')[1] || '';
            this.display = this.param.split(',')[2] || this.bucket + (this.bprefix ? '/' + this.bprefix : '');
        }
        this.prefix = this.route.snapshot.paramMap.get('prefix');
        console.log(this.bucket);
        console.log(this.prefix);
        console.log(this.bprefix);
        console.log(this.display);
        console.log(this.breadcrumb);
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.contents = [];
            this.selected = [];
            if (this.bucket) {
                const prefix = this.prefix || this.bprefix;
                this.loading = true;
                const data = yield this.s3s.listObjectsV2({ Bucket: this.bucket, Delimiter: '/', Prefix: prefix });
                console.log(data);
                data.CommonPrefixes.forEach(d => {
                    this.contents.push({ Key: d.Prefix });
                });
                data.Contents = data.Contents.filter(d => prefix !== d.Key);
                this.contents = this.contents.concat(data.Contents);
                this.loading = false;
                this.setBreadcrumb();
            }
        });
    }
    download(key) {
        console.log(key);
        // this.s3s.getObject({ Bucket: this.bucket, Key: key });
        this.s3s.getSignedUrl({ Bucket: this.bucket, Key: key }, this.basename(key));
    }
    upload(fl) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(fl);
            if (fl.length <= 0) {
                return;
            }
            for (let i = 0; i < fl.length; i++) {
                yield this.s3s.upload({
                    Bucket: this.bucket,
                    Key: this.pwd() + fl[i].name,
                    Body: fl[i],
                });
            }
            this.ngOnInit();
        });
    }
    pwd() {
        const p = this.prefix || this.bprefix || '';
        if (p.includes('/')) {
            return (p
                .split('/')
                .slice(0, -1)
                .join('/') + '/');
        }
        return '';
    }
    createFolder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const ret = yield this.s3s.putObject({
                Bucket: this.bucket,
                Key: this.pwd() + this.folder + '/',
            });
            this.folder = '';
            this.ngOnInit();
        });
    }
    dlSelected() {
        this.selected.forEach(c => {
            this.download(c.Key);
        });
    }
    refresh() {
        this.ngOnInit();
    }
    delete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const ret = yield this.s3s.deleteObjects({
                Bucket: this.bucket,
                Delete: {
                    Objects: this.selected.map(x => ({ Key: x.Key })),
                },
            });
            this.isOpen = false;
            this.ngOnInit();
        });
    }
    basename(path) {
        return path.replace(/.*\//, '');
    }
    dirname(path) {
        // return path.replace(this.prefix || this.bprefix, '');
        if (path.slice(-1) === '/') {
            return path.split('/').slice(-2)[0] + '/';
        }
        else if (!this.prefix && this.bprefix && this.bprefix.includes('/')) {
            const p = this.bprefix.replace(/\/.*/, '');
            return path.replace(p + '/', '');
        }
        return path.replace(this.prefix, '');
    }
    filesize(value) {
        if (isNaN(value)) {
            return '--';
        }
        return filesize__WEBPACK_IMPORTED_MODULE_3___default()(value);
    }
    setBreadcrumb() {
        this.breadcrumb = [];
        if (!this.prefix) {
            return;
        }
        let p = '';
        let b = this.bprefix || '';
        if (b.includes('/')) {
            b = this.bprefix.substring(0, this.bprefix.lastIndexOf('/') + 1);
        }
        console.log(b);
        this.prefix
            .replace(b, '')
            .split('/')
            .slice(0, -1)
            .forEach(e => {
            p = p + e + '/';
            this.breadcrumb.push({ name: e, link: ['/s3', this.param, b + p] });
        });
    }
    clearSort() {
        this.columns.forEach(c => (c.sort = 0));
    }
    clearFilter() {
        this.columns.forEach(c => (c.filter = ''));
    }
    isSuperAdmin() {
        return _constant__WEBPACK_IMPORTED_MODULE_5__["SUPER_ADMIN_USERNAME"] === localStorage[_constant__WEBPACK_IMPORTED_MODULE_5__["LOCAL_KEY_USERNAME"]];
    }
};
S3Component.ctorParameters = () => [
    { type: _aws_s3_service__WEBPACK_IMPORTED_MODULE_4__["S3Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
S3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-s3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./s3.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/s3/s3.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./s3.component.scss */ "./src/app/s3/s3.component.scss")).default]
    })
], S3Component);



/***/ }),

/***/ "./src/app/s3/sidebar/sidebar.component.scss":
/*!***************************************************!*\
  !*** ./src/app/s3/sidebar/sidebar.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("clr-vertical-nav {\n  height: 100%;\n  padding-top: 0;\n}\n\nform {\n  padding-left: 1rem;\n}\n\nform select {\n  width: 100%;\n}\n\n.add-container,\n.remove-container {\n  padding: 0 0.6rem 0 2rem;\n}\n\n.add-container p,\n.remove-container p {\n  margin-top: 0.5rem;\n}\n\n.add-container ::ng-deep clr-input-container,\n.add-container ::ng-deep clr-select-container,\n.remove-container ::ng-deep clr-input-container,\n.remove-container ::ng-deep clr-select-container {\n  margin: 0.5rem 0;\n}\n\n.add-container ::ng-deep .clr-control-container,\n.remove-container ::ng-deep .clr-control-container {\n  width: 100%;\n}\n\n.add-container select,\n.add-container input,\n.remove-container select,\n.remove-container input {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvczMvc2lkZWJhci9DOlxcVXNlcnNcXEVsb2hpbVxcRG93bmxvYWRzXFxzM21hbmFnZXItZnItbWFpbiAoMSlcXHMzbWFuYWdlci1mci1tYWluL3NyY1xcYXBwXFxzM1xcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvczMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNKRjs7QURNQTtFQUNFLGtCQUFBO0FDSEY7O0FESUU7RUFDRSxXQUFBO0FDRko7O0FETUE7O0VBS0Usd0JBQUE7QUNORjs7QURHRTs7RUFDRSxrQkFBQTtBQ0FKOztBRElJOzs7O0VBRUUsZ0JBQUE7QUNBTjs7QURFSTs7RUFDRSxXQUFBO0FDQ047O0FERUU7Ozs7RUFFRSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zMy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA6Om5nLWRlZXAge1xuLy8gICAuY2xyLWNvbnRyb2wtbGFiZWwge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgIH1cbi8vIH1cbmNsci12ZXJ0aWNhbC1uYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuZm9ybSB7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYWRkLWNvbnRhaW5lcixcbi5yZW1vdmUtY29udGFpbmVyIHtcbiAgcCB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICB9XG4gIHBhZGRpbmc6IDAgMC42cmVtIDAgMnJlbTtcbiAgOjpuZy1kZWVwIHtcbiAgICBjbHItaW5wdXQtY29udGFpbmVyLFxuICAgIGNsci1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgfVxuICAgIC5jbHItY29udHJvbC1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIHNlbGVjdCxcbiAgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCJjbHItdmVydGljYWwtbmF2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cbmZvcm0gc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZGQtY29udGFpbmVyLFxuLnJlbW92ZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDAuNnJlbSAwIDJyZW07XG59XG4uYWRkLWNvbnRhaW5lciBwLFxuLnJlbW92ZS1jb250YWluZXIgcCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5hZGQtY29udGFpbmVyIDo6bmctZGVlcCBjbHItaW5wdXQtY29udGFpbmVyLFxuLmFkZC1jb250YWluZXIgOjpuZy1kZWVwIGNsci1zZWxlY3QtY29udGFpbmVyLFxuLnJlbW92ZS1jb250YWluZXIgOjpuZy1kZWVwIGNsci1pbnB1dC1jb250YWluZXIsXG4ucmVtb3ZlLWNvbnRhaW5lciA6Om5nLWRlZXAgY2xyLXNlbGVjdC1jb250YWluZXIge1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuLmFkZC1jb250YWluZXIgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIsXG4ucmVtb3ZlLWNvbnRhaW5lciA6Om5nLWRlZXAgLmNsci1jb250cm9sLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFkZC1jb250YWluZXIgc2VsZWN0LFxuLmFkZC1jb250YWluZXIgaW5wdXQsXG4ucmVtb3ZlLWNvbnRhaW5lciBzZWxlY3QsXG4ucmVtb3ZlLWNvbnRhaW5lciBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/s3/sidebar/sidebar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/s3/sidebar/sidebar.component.ts ***!
  \*************************************************/
/*! exports provided: S3SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S3SidebarComponent", function() { return S3SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constant */ "./src/app/constant.ts");




let S3SidebarComponent = class S3SidebarComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.buckets = new Set();
        this.prefix = '';
        this.display = '';
        this.bucketPattern = '^[a-z0-9.-]{3,63}$';
        this.bucketNames = localStorage.getItem(src_app_constant__WEBPACK_IMPORTED_MODULE_3__["LOCAL_KEY_BUCKETS"]);
        if (activatedRoute.snapshot.data.buckets) {
            this.buckets = activatedRoute.snapshot.data.buckets;
        }
    }
    ngOnInit() {
        localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_3__["LOCAL_KEY_BUCKETS"]].split(',').forEach(segment => {
            this.buckets.add(segment);
        });
        //this.buckets = set;
    }
    addBucket() {
        const buckets = new Set(JSON.parse(localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_3__["LOCAL_KEY_BUCKETS"]] || '[]'));
        buckets.add(this.bucketa + ',' + this.prefix + ',' + this.display);
        console.log(buckets);
        localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_3__["LOCAL_KEY_BUCKETS"]] = JSON.stringify(Array.from(buckets));
        this.buckets = buckets;
        this.bucketa = '';
        this.prefix = '';
        this.display = '';
    }
    removeBucket() {
        console.log(this.bucketr);
        const buckets = new Set(JSON.parse(localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_3__["LOCAL_KEY_BUCKETS"]] || '[]'));
        buckets.delete(this.bucketr);
        localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_3__["LOCAL_KEY_BUCKETS"]] = JSON.stringify(Array.from(buckets));
        this.buckets = buckets;
    }
    disp(bucket) {
        const b = bucket.split(',');
        return b[2] || b[0] + (b[1] ? '/' + b[1] : '');
    }
    isSuperAdmin() {
        return src_app_constant__WEBPACK_IMPORTED_MODULE_3__["SUPER_ADMIN_USERNAME"] === localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_3__["LOCAL_KEY_USERNAME"]];
    }
};
S3SidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
S3SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/s3/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/s3/sidebar/sidebar.component.scss")).default]
    })
], S3SidebarComponent);



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

const environment = {
    production: false,
    title: 'S3 Manager',
    logins: [
        {
            type: "0" /* cognito */,
            name: 'Amazon Cognito',
            region: '',
            identityPoolId: '',
            userPoolId: '',
            userPoolWebClientId: '',
        },
        {
            type: "1" /* accessKey */,
            name: 'AWS Access Key',
            region: 'us-east-1',
        },
    ],
    accessKey: '',
    secretKey: '',
    username: '',
    password: '',
    bucketNames: [
        'recording-huios',
    ]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/constant */ "./src/app/constant.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");







if (localStorage[_app_constant__WEBPACK_IMPORTED_MODULE_5__["LOCAL_KEY_LOGIN_TYPE"]] == "0" /* cognito */) {
    const i = parseInt(localStorage[_app_constant__WEBPACK_IMPORTED_MODULE_5__["LOCAL_KEY_LOGIN_INDEX"]]);
    aws_amplify__WEBPACK_IMPORTED_MODULE_3__["default"].configure({
        Auth: {
            identityPoolId: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].logins[i].identityPoolId,
            region: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].logins[i].region,
            userPoolId: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].logins[i].userPoolId,
            userPoolWebClientId: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].logins[i].userPoolWebClientId,
        },
    });
}
if (_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    if (window) {
        window.console.log = () => { };
    }
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/secret/secret.service.ts":
/*!**************************************!*\
  !*** ./src/secret/secret.service.ts ***!
  \**************************************/
/*! exports provided: SecretService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretService", function() { return SecretService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SecretService = class SecretService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://ordercontrol.firstbackoffice.com:3002/api/secret';
    }
    getSecret() {
        return this.http.get(this.apiUrl);
    }
};
SecretService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SecretService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], SecretService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Elohim\Downloads\s3manager-fr-main (1)\s3manager-fr-main\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map