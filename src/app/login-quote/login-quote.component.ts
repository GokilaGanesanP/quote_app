import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-quote',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, HttpClientModule],
  templateUrl: './login-quote.component.html',
  styleUrl: './login-quote.component.css', 
  providers : [AuthService,ToastrService]
})
export class LoginQuoteComponent {

  constructor(private authService : AuthService, private toastr: ToastrService, private router : Router){}
  
    LoginForm = new FormGroup({
      inputLogin: new FormControl(''),
      inputPassword: new FormControl(''),
    });

    checkLoginInfo(){
    
      this.authService.login(this.LoginForm.value).subscribe(
        (response) => {   
          this.authService.saveToken(response.authorisation.token);
          this.router.navigate(['viewQuote']);
          this.toastr.success('Login Succesfully', 'Success');
        },
        (error) => {         
          this.toastr.error('Login Failed ' + error.error.messages, 'Error');
        }
      );
    }
}
