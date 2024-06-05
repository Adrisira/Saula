import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { ContenidoService } from '../../_services/contenido.service';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, Router } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LoginService } from '../../_services/login.service';
import { MatriculaService } from '../../_services/matricula.service';

@Component({
  selector: 'app-vista-contenidos',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MatButtonModule,
    RouterLink,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './vista-contenidos.component.html',
  styleUrl: './vista-contenidos.component.css',
})
export class VistaContenidosComponent implements OnInit {
  contenidos: any[] = [];
  matriculas: any[] = [];
  rolesPorCurso: Map<number, boolean> = new Map();

  @Input() cursoId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private contenidoService: ContenidoService,
    private router: Router,
    private loginService: LoginService,
    private matriculaService: MatriculaService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      
      this.cursoId = +params['id'];
      this.cargarDatos();
    });
  }

  cargarDatos(): void {
    const idUsuario = Number(this.loginService.getToken());

    this.matriculaService.getCursosUsuario(idUsuario).subscribe(
      (data) => {
        this.matriculas = data;
        this.almacenarRolesPorCurso(idUsuario);
        this.cargaContenidos();
      },
      (error) => {
        console.error('Error al cargar las matrículas', error);
      }
    );
  }

  almacenarRolesPorCurso(idUsuario: number) {
    for (let matricula of this.matriculas) {
      if (matricula.usuario.id === idUsuario) {
        this.rolesPorCurso.set(matricula.curso.id, matricula.rol);
      }
    }
  }

  comprobarRol(cursoId: number): boolean {
    return this.rolesPorCurso.get(cursoId) || false;
  }

  cargaContenidos(): void {
    this.contenidoService.getContenidoCurso(this.cursoId).subscribe(
      (data: any) => {
        this.contenidos = data;
      },
      (error) => {
        console.error('Error al cargar los contenidos', error);
      }
    );
  }

  navegarContenido(): void {
    this.router.navigate(['../contenido', this.cursoId]);
  }

  eliminarContenido(id: number) {
    this.contenidoService.deleteContenido(id).subscribe((data) => {
      this.cargaContenidos();
    });
  }

  navigateVitaContenido(id: number) {
    this.router.navigate(['../vistaContenido', id]);
  }

  navigateVistaCursoss(){
    this.router.navigate(['../vistaCursos'])
  }
  async todos(){
    await this.salirCurso()
    this.navigateVistaCursoss()
  }

  async salirCurso(){
    const idUsuario = Number(this.loginService.getToken());
    let matriculasCursos : any[];
    this.matriculaService.getCursos(this.cursoId).subscribe(
      (data) => {
        matriculasCursos = data;
        for (let matricula of matriculasCursos){
          if(matricula.usuario.id === idUsuario){
            this.matriculaService.deteleMatricula(matricula.id).subscribe((data2) => {
  
            })
          }
        }
        
      })
  }
}
