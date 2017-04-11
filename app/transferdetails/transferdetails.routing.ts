import {Router,RouterModule} from '@angular/router';
import{TransferDetailsComponent} from './transferdetails.component';



export const transferDetailsRouting=RouterModule.forRoot([
    {
        path:'transferdetails/:from/:toAddress',component:TransferDetailsComponent
    }
])