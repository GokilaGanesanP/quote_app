import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-quote',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './view-quote.component.html',
  styleUrl: './view-quote.component.css',
  providers: [    
    ApiService,
    AuthService,
    ToastrService,
  ],
 
})

export class ViewQuoteComponent implements OnInit{

  constructor(private apiService: ApiService, private authService: AuthService, 
    private router: Router, private toastr: ToastrService){}
  
  QuoteList: any[] = [];  
  token: any;
  showTable: boolean = false;


    ngOnInit(): void {
      this.token = this.authService.getToken();
      this.loadQuoteInfo(this.token);      
    }

 // Method to fetch the products (protected API)
    loadQuoteInfo(token : any): void {
      this.apiService.getData(token).subscribe(response => {
        this.QuoteList = response.message;
        this.showTable = !this.showTable;
      }, error => {        
        this.toastr.error(error.error.message, 'Error');
        this.showTable = this.showTable;
      });

    }




    AddQuote(){
      this.router.navigate(['addquote']);
    }

  
 
}

