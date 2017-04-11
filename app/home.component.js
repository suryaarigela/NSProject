"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var platform_browser_1 = require("@angular/platform-browser");
var home_service_1 = require('./home.service');
var HomeComponent = (function () {
    function HomeComponent(fb, _router, _sanitizer, _homeService) {
        var _this = this;
        this._router = _router;
        this._sanitizer = _sanitizer;
        this._homeService = _homeService;
        this.autocompleListFormatter = function (data) {
            var html = "<span>" + data.name + "</span>";
            return _this._sanitizer.bypassSecurityTrustHtml(html);
        };
        this.signupForm = fb.group({
            from: ['', forms_1.Validators.required],
            toAddress: ['', forms_1.Validators.required]
        });
        this.mySource = this._homeService.getStations().subscribe(function (stations) {
            _this.mySource = stations;
        });
    }
    HomeComponent.prototype.onSubmit = function () {
        this._router.navigate(['transferdetails', this.signupForm.get('from').value.code, this.signupForm.get('toAddress').value.code]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/home.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, platform_browser_1.DomSanitizationService, home_service_1.HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map