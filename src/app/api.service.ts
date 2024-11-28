import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'http://127.0.0.1:8000';

 

  constructor(private http: HttpClient) { }

  getData(token : string): Observable<any> {    

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    return this.http.get(this.baseURL + "/api/quote", { headers });
  }


  submitQuotationData(formData: any, token:string): Observable<any> {
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    return this.http.post(this.baseURL + "/api/quote", formData, { headers });
  }

  

  getCustomerInfo(params: any, token:string): Observable<any> {    
      
    let httpParams = new HttpParams();
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          httpParams = httpParams.set(key, params[key]);
        }
      }

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      });

  
    return this.http.post(this.baseURL + '/api/customer', {}, { params: httpParams, headers }); 
  }



}

