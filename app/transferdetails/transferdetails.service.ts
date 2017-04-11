import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {TransportType} from './transporttype';
import {Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {RequestOptions} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
@Injectable()
export class TransferDetailsService{
header = new Headers()
 private _url1 = "http://jsonplaceholder.typicode.com/albums";
 private _url2 = "http://webservices.ns.nl/ns-api-stations-v2";
 constructor(private _http: Http,private _route: ActivatedRoute){
var auth = "suri243@gmail.com" + ":" + "prDdOX81wFxHcyQIDdD77oNPD31TtPzRw01OsjZ-DKLG3KAY-MnpYQ"
     var  options = new RequestOptions({
        
      headers: new Headers({
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'*',
         "Authorization" : auth
      })
       });

   
   // this._http.get(this._url2,options).map(res=>res.status).subscribe(res=>console.log(res));

   
 }

 getStationsDetails(){
return this._route.params;
}

getStations(fromAddress,toAddress){
console.log('From Address '+fromAddress);
console.log('toAddress  '+toAddress);
console.log('calling For Stations');
  return  this._http.get("http://192.168.2.7:8080/spring-rest/rest/stations/transferDetails/"+fromAddress+"/"+toAddress)
  .map(res=>res.json());
  
 //return this._http.get("http://localhost:8080/spring-rest/rest/stations/list").map(res=>res.json());
}
 getTransportList():TransportType[]{
    
     
         return [
       {
            direction:'(direction Den Haag Centraal)',
             source:{
                 name:'Station Leeuwarden',
                 time:'14:10',
                 platform:'4'
             },
             destination:{
                 name:'Station Almere Centrum',
                  time:'15:57',
                 platform:'1'
                 }
        },
        {
            direction:'(direction Amsterdam Centraal)',
             source:{
                 name:'Station Almere Centrum',
                 time:'16:02',
                 platform:'2'
             },
             destination:{
                 name:'Station Amsterdam Centraal',
                  time:'16:23',
                 platform:'11b'
                 }
        }
         ];
    }

}