import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-quote',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './view-quote.component.html',
  styleUrl: './view-quote.component.css',
  providers: [    
    ApiService,
    AuthService,   
  ],
 
})
export class ViewQuoteComponent{

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) {}

  QuoteList: any[] = [];  
  token: any;
  showTable: boolean = false;


  ViewQuote() {
    this.login();
  }

  login() {
    this.showTable = !this.showTable;
    this.authService.login().subscribe(
      (response) => {       
       this.authService.saveToken(response.authorisation.token);  
       this.token = this.authService.getToken();
       this.loadQuoteInfo(this.token);       
      },
      (error) => {
        console.log('Login failed', error);
      }
    );
  }

    // Method to fetch the products (protected API)
    loadQuoteInfo(token : any): void {
      this.apiService.getData(token).subscribe(response => {
        this.QuoteList = response.message;
        console.log(response);
      }, error => {
        console.log('Error:', error);
      });

    }

    AddQuote(){
      this.router.navigate(['addquote']);
    }

  

 


 


  
 
  
 
}

