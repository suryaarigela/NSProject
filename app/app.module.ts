import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { MessagesModule } from './messages/messages.module'; 
import { PhotosModule } from './photos/photos.module';
import { TransferDetailsModule } from './transferdetails/transferdetails.module';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { transferDetailsRouting } from './transferdetails/transferdetails.routing';
import {appRouting} from './app.routing';

import { FormGroup,FormControl,ReactiveFormsModule  } from '@angular/forms';

import{HomeService} from './home.service';

@NgModule({
  imports: [
    BrowserModule,
    MessagesModule,
    PhotosModule,
    FormsModule,
    ReactiveFormsModule,
    transferDetailsRouting,
    TransferDetailsModule,
    appRouting,
    Ng2AutoCompleteModule
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    NotFoundComponent
    
  ],providers: [
        HomeService
    ],
 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }