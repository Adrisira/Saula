import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private cookies : CookieService) {}
  login(usuario : any): Observable<any> {
    return this.http.post("http://localhost:8081/login", usuario);
  }
  setToken(token: string){
    this.cookies.set("token", token)
  }

  getToken(){
    return this.cookies.get("token")
  }


}
