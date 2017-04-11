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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var http_3 = require('@angular/http');
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var TransferDetailsService = (function () {
    function TransferDetailsService(_http, _route) {
        this._http = _http;
        this._route = _route;
        this.header = new http_2.Headers();
        this._url1 = "http://jsonplaceholder.typicode.com/albums";
        this._url2 = "http://webservices.ns.nl/ns-api-stations-v2";
        var auth = "suri243@gmail.com" + ":" + "prDdOX81wFxHcyQIDdD77oNPD31TtPzRw01OsjZ-DKLG3KAY-MnpYQ";
        var options = new http_3.RequestOptions({
            headers: new http_2.Headers({
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "Authorization": auth
            })
        });
        // this._http.get(this._url2,options).map(res=>res.status).subscribe(res=>console.log(res));
    }
    TransferDetailsService.prototype.getStationsDetails = function () {
        return this._route.params;
    };
    TransferDetailsService.prototype.getStations = function (fromAddress, toAddress) {
        console.log('From Address ' + fromAddress);
        console.log('toAddress  ' + toAddress);
        console.log('calling For Stations');
        return this._http.get("http://192.168.2.7:8080/spring-rest/rest/stations/transferDetails/" + fromAddress + "/" + toAddress)
            .map(function (res) { return res.json(); });
        //return this._http.get("http://localhost:8080/spring-rest/rest/stations/list").map(res=>res.json());
    };
    TransferDetailsService.prototype.getTransportList = function () {
        return [
            {
                direction: '(direction Den Haag Centraal)',
                source: {
                    name: 'Station Leeuwarden',
                    time: '14:10',
                    platform: '4'
                },
                destination: {
                    name: 'Station Almere Centrum',
                    time: '15:57',
                    platform: '1'
                }
            },
            {
                direction: '(direction Amsterdam Centraal)',
                source: {
                    name: 'Station Almere Centrum',
                    time: '16:02',
                    platform: '2'
                },
                destination: {
                    name: 'Station Amsterdam Centraal',
                    time: '16:23',
                    platform: '11b'
                }
            }
        ];
    };
    TransferDetailsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute])
    ], TransferDetailsService);
    return TransferDetailsService;
}());
exports.TransferDetailsService = TransferDetailsService;
//# sourceMappingURL=transferdetails.service.js.map