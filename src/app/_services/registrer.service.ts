import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrerService {

  constructor(private http: HttpClient) { }

  register(usuario: any): Observable<any> {
    return this.http.post("http://localhost:8081/registrer", usuario);
  }
}
