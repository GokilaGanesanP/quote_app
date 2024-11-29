import { Routes } from '@angular/router';
import { ViewQuoteComponent } from './view-quote/view-quote.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { LoginQuoteComponent } from './login-quote/login-quote.component';

export const routes: Routes = [
    {path : '', component : LoginQuoteComponent},
    {path : 'viewQuote', component : ViewQuoteComponent},
    {path : 'addquote', component : AddQuoteComponent},
];
