import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormControlApiService {
  private apiUrl = 'http://localhost:3000/form';

  constructor(private http: HttpClient) {}

  getAllForms(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  submitForm(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
