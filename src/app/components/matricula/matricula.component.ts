import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { MatriculaService } from '../../_services/matricula.service';
import { LoginService } from '../../_services/login.service';
import { CursoService } from '../../_services/curso.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-matricula',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './matricula.component.html',
  styleUrl: './matricula.component.css',
})
export class MatriculaComponent implements OnInit {
  idUsuario = Number(this.loginService.getToken());
  curso: any [] = [];
  codigo : String = "";
  constructor(
    private router: Router,
    private matriculaService: MatriculaService,
    private loginService: LoginService,
    private CursoService : CursoService
  ) {}
  ngOnInit(): void {
    this.idUsuario = Number(this.loginService.getToken())
  }


  crearMatricula(curso: any) {
    console.log(this.idUsuario)
    const contenido = {
      rol: false,
      idUsuario: this.idUsuario,
      idCurso : curso?.id 
    };
    this.matriculaService.crearMatricula(contenido).subscribe((data) => {
      this.router.navigate(['../vistaCursos', Number(this.loginService.getToken())]);
    });

    
  }

  getCurso(): any{
    console.log(this.codigo)
    this.CursoService.getCursoCodigo(this.codigo).subscribe((data: any) => {
      this.curso = data;
      console.log(this.curso)
      this.crearMatricula(data)
    })
    
  }
}
