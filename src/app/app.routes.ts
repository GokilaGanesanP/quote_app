import { Routes } from '@angular/router';
import { ViewQuoteComponent } from './view-quote/view-quote.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';

export const routes: Routes = [
    {path : '', component : ViewQuoteComponent},
    {path : 'addquote', component : AddQuoteComponent},
];
