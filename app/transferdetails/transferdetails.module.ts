import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {HTTP_PROVIDERS,Headers} from '@angular/http';
import {TransferDetailsService} from './transferdetails.service';
import {TransferDetailsComponent} from './transferdetails.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        TransferDetailsComponent
    ],
    exports: [
        TransferDetailsComponent
    ],
    providers: [
        TransferDetailsService,HTTP_PROVIDERS
    ]
})
export class TransferDetailsModule {
    
}