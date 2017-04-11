import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {RequestOptions} from '@angular/http';
import {OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class HomeService  {
stations;
constructor(private _http: Http){

}
getStationFromCache(){
    return this.stations;
}
getStations(){
  return this.fetchEvent();
  
}

fetchEvent(){
    return  this._http.get("http://192.168.2.7:8080/spring-rest/rest/stations/list").map(res=>res.json());          
 }

}