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
    return this.http.get(`http://localhost:8081/curso/{$id}`)
  }
}
