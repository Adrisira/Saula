import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { MatriculaService } from '../../_services/matricula.service';
import { LoginService } from '../../_services/login.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { RouterLink , Router} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-vista-cursos',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, MatButtonModule, MatCardModule, NgOptimizedImage, MatDividerModule],
  templateUrl: './vista-cursos.component.html',
  styleUrl: './vista-cursos.component.css',
})
export class VistaCursosComponent implements OnInit {
  cursos: any[] = [];
  usuario: any[] = [];
  idUsuario = Number(this.loginService.getToken());
  @Output() cursoSeleccionado = new EventEmitter<number>();
  @Output() usuarioSeleccionado = new EventEmitter<number>();
  constructor(
    private matriculaService: MatriculaService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.cargarCursos(this.idUsuario)
      this.cargarUsuario(this.idUsuario)
    }


  public cargarCursos(token: number): void {
    this.matriculaService.getCursosUsuario(token).subscribe(
      (data: any) => {
        this.cursos = data;
        console.log(this.cursos)
      },
      (error) => {
        console.error('Fallo al cargar los cursos', error);
      }
    );
    
  }
  seleccionarCurso(id: number): void {
    this.cursoSeleccionado.emit(id);
    this.router.navigate(['../vistaContenidos', id])
  }
  cargarUsuario(id :number) : void {
    this.loginService.getUsuario(id).subscribe((data: any) => {
      this.usuario = data;
    })
  }

  navigateVistaCurso(id: number) : void {
    this.cursoSeleccionado.emit(id)
    this.router.navigate(['../vistaCurso', id])
  }


  navigateCurso(): void {
    this.router.navigate(['../curso'])
  }

  navigateMatricula(id: number) : void {
    this.router.navigate(['../UnirMatricula'])
  }


}
