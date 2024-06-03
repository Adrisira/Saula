import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }
  crearCurso(curso : any): Observable<any>{
    return this.http.post("http://localhost:8081/crearCurso", curso);
  }

  getCurso (id: any): Observable<any>{
    return this.http.get(`http://localhost:8081/curso/${id}`)
  }

  getCursoCodigo(codigo : any): Observable<any>{
    return this.http.get(`http://localhost:8081/codigoCurso/${codigo}`)
  }
  modifyCurso (id: any, curso : any): Observable<any>{
    return this.http.put(`http://localhost:8081/modifyCurso/${id}`, curso)
  }

  deleteCurso (id: any): Observable<any>{
    return this.http.delete(`http://localhost:8081/deleteCurso/${id}`)
  }
}
