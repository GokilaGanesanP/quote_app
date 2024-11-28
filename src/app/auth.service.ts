// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private apiUrl = 'http://127.0.0.1:8000/api';  
  private token: string | null = null;
  private credentials =  { email: "gokila@gmail.com", password: "p@ssw0rd" };

  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, this.credentials);
  }


  saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('authToken', token);  
  }

  
  getToken(): string | null {
    return this.token || localStorage.getItem('authToken');
  }

 
  logout(): void {
    this.token = null;
    localStorage.removeItem('authToken');  
  }
}


