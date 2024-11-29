import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-quote',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './add-quote.component.html',
  styleUrl: './add-quote.component.css',
  providers: [    
    ApiService, 
    AuthService,
    ToastrService
  ],
})
export class AddQuoteComponent {

  isVisible: boolean = false;
  constructor(private apiservice: ApiService, private authservice : AuthService, private toastr : ToastrService){}
  



  custname : string | null | undefined = '';
  token : any;

   // Initialize the form group and controls
   QuoteForm = new FormGroup({
    quotename: new FormControl(''),
    custname: new FormControl(''),
    custtype: new FormControl(''),
    serialno: new FormControl(''),
    planno: new FormControl(''),
    warantyhrs: new FormControl(''),
    warantyterms: new FormControl(''),
    custid : new FormControl(''),

  
  });


  CheckExistsCust(){   

    this.custname = this.QuoteForm.value.custname;
      const queryParams = {
        customer: this.custname
      };
      
      this.token =  this.authservice.getToken();

      this.apiservice.getCustomerInfo(queryParams, this.token).subscribe(
        (response) => {
          if(response.message.length > 0)
          {
            const custid = response.message[0].id;
            this.QuoteForm.patchValue({ custid }); 

            const custtype = 'Used';
            this.QuoteForm.patchValue({ custtype }); 
            this.isVisible = false;

          }
          else{

            const custid = '';
            this.QuoteForm.patchValue({ custid });

            const custtype = 'New';
            this.QuoteForm.patchValue({ custtype }); 

            this.isVisible = true;
          }
        }
      );
  }

  saveQuotationInfo(){

   
    this.token = this.authservice.getToken(); 

    this.apiservice.submitQuotationData(this.QuoteForm.value, this.token).subscribe(
      (response) => {
        this.toastr.success('Quote Information saved successfully', 'Success');
      },
      (error) => {
        this.toastr.error('Quote Information not saved because '+ error.error.message, 'Error');
      }
    );

  }


}
