import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormControlApiService {
  private apiUrl = 'http://localhost:3000/form';

  constructor(private http: HttpClient) {}

  submitForm(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  getForms(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
