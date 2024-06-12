import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  

  constructor(private http: HttpClient, private cookies : CookieService) {}
  login(usuario : any): Observable<any> {
    return this.http.post("http://localhost:8081/login", usuario);
  }
  register(usuario: any): Observable<any> {
    return this.http.post("http://localhost:8081/registrer", usuario);
  }
  setToken(token: string){
    this.cookies.set("usuario", token);
   
  }

   getToken(){
    return this.cookies.get("usuario")
  }

  getUsuario(id : any): Observable<any>{
    return this.http.get(`http://localhost:8081/usuario/${id}`, id)
  }

  comprobarEmail(email : any): Observable<any>{
    return this.http.post(`http://localhost:8081/existEmail`, email)
  }

  getAlluser(): Observable<any>{
    return this.http.get("http://localhost:8081/usuarios")
  }

  deleteUsuario(id : any) : Observable<any>{
    return this.http.delete(`http://localhost:8081/deleteUsuario/${id}`)
  }


}
