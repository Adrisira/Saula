import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor(private http: HttpClient) { }
  crearMatricula(matricula: any): Observable <any>{
    return this.http.post("http://localhost:8081/crearMatricula", matricula)
  }

  getCursosUsuario(idUsuario: any): Observable<any>{
    return this.http.get(`http://localhost:8081/matriculaUsuario/${idUsuario}`)
  }

  deteleMatricula(id : any): Observable<any>{
    return this.http.delete(`http://localhost:8081/deleteMatricula/${id}`)
  }
}
