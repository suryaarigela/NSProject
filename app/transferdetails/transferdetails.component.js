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
var transferdetails_service_1 = require('./transferdetails.service');
var router_1 = require('@angular/router');
var TransferDetailsComponent = (function () {
    function TransferDetailsComponent(_transportService, _route) {
        this._transportService = _transportService;
        this._route = _route;
        this.showDetailsDiv = false;
        this.subscription = this._route.params;
    }
    TransferDetailsComponent.prototype.getStationDetails = function () {
        var _this = this;
        this._transportService.getStations(this._from, this.to)
            .subscribe(function (stations) {
            _this.stationDetails = stations;
            console.log("Statioms " + _this.stationDetails);
        });
    };
    TransferDetailsComponent.prototype.openModal = function (option) {
        console.log(option.travelSectionList);
        this.haltDetails = option.travelSectionList;
    };
    TransferDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('On init');
        this.subscription
            .subscribe(function (params) {
            _this._from = params["from"];
            _this.to = params["toAddress"];
            //   this._transportService.getStations(params["from"],params["toAddress"]);
            console.log('Hey We are here ' + params["from"]);
        });
        this._transportService.getStations(this._from, this.to)
            .subscribe(function (stations) {
            _this.stationDetails = stations;
            console.log("Statioms " + _this.stationDetails);
        });
    };
    TransferDetailsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TransferDetailsComponent = __decorate([
        core_1.Component({
            templateUrl: './app/transferdetails/transferdetails.component.html',
            providers: [transferdetails_service_1.TransferDetailsService],
            styleUrls: ['app/transferdetails/table.css']
        }), 
        __metadata('design:paramtypes', [transferdetails_service_1.TransferDetailsService, router_1.ActivatedRoute])
    ], TransferDetailsComponent);
    return TransferDetailsComponent;
}());
exports.TransferDetailsComponent = TransferDetailsComponent;
//# sourceMappingURL=transferdetails.component.js.map