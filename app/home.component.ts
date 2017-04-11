import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators  } from '@angular/forms';
import {Router} from '@angular/router';
import { DomSanitizationService, SafeHtml } from "@angular/platform-browser";
import {HomeService} from './home.service';
@Component({
  templateUrl:'app/home.component.html'
})
export class HomeComponent {

public mySource;

signupForm: FormGroup;


constructor(fb: FormBuilder,
        private _router:Router,
        private _sanitizer: DomSanitizationService,
        private _homeService: HomeService){
      this.signupForm = fb.group({
                        from: ['', Validators.required],
                        toAddress:['', Validators.required]
                         });

      this.mySource=this._homeService.getStations().subscribe(stations => {
                    this.mySource=stations;
                         });
  }

 autocompleListFormatter = (data: any) : SafeHtml => {
    let html = `<span>${data.name}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }


  onSubmit(){
  
     this._router.navigate(['transferdetails',this.signupForm.get('from').value.code,this.signupForm.get('toAddress').value.code]);
    
  }


 }