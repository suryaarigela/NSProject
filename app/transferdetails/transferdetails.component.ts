
import { Component,OnInit,OnDestroy } from '@angular/core';
import {TransferDetailsService} from './transferdetails.service';
import {TransportType} from './transporttype';
import {ActivatedRoute} from '@angular/router';
@Component({
    templateUrl: './app/transferdetails/transferdetails.component.html',
    providers:[TransferDetailsService],
    styleUrls:['app/transferdetails/table.css']
})
export class TransferDetailsComponent implements OnInit,OnDestroy{
subscription;
showDetailsDiv=false;
_from ;
mySource;
to;
id;
stationDetails;
haltDetails;

    options:string[];
    stations;
    transferList:TransportType[];
    constructor(private _transportService : TransferDetailsService,private _route: ActivatedRoute){
         this.subscription=this._route.params;
  
    }
getStationDetails(){
 this._transportService.getStations(this._from,this.to)
    .subscribe(stations => {
                    this.stationDetails=stations;
                    console.log("Statioms "+this.stationDetails)
                         });   
}

openModal(option){
  console.log(option.travelSectionList);
  this.haltDetails=option.travelSectionList;
}

   ngOnInit(){
    
    console.log('On init');   
   this.subscription
   .subscribe(params=>{
       this._from=params["from"];
       this.to=params["toAddress"];
    //   this._transportService.getStations(params["from"],params["toAddress"]);
       console.log('Hey We are here '+params["from"]);
   });
this._transportService.getStations(this._from,this.to)
    .subscribe(stations => {
                    this.stationDetails=stations;
                    console.log("Statioms "+this.stationDetails)
                         });   

    }

    ngOnDestroy(){
this.subscription.unsubscribe();
    }
}