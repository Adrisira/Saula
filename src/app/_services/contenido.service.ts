import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  constructor(private http: HttpClient) { }
  
  crearContenido(contenido : any) : Observable <any> {
    return this.http.post("http://localhost:8081/crearContenido", contenido)
  }

  getContenidoCurso(idCurso : any): Observable <any> {
    return this.http.get(`http://localhost:8081/contenidoCurso/${idCurso}`)
  }

  deleteContenido(id : any): Observable<any>{
    return this.http.delete(`http://localhost:8081/deleteContenido/${id}`)
  }
}
