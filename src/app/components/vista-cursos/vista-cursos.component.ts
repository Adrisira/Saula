import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatriculaService } from '../../_services/matricula.service';
import { LoginService } from '../../_services/login.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CursoService } from '../../_services/curso.service';
import { firstValueFrom } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-vista-cursos',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    NgOptimizedImage,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './vista-cursos.component.html',
  styleUrl: './vista-cursos.component.css',
})
export class VistaCursosComponent implements OnInit {
  cursos: any[] = [];
  usuarioId: number = 0;
  @Output() cursoSeleccionado = new EventEmitter<number>();
  constructor(
    private matriculaService: MatriculaService,
    private loginService: LoginService,
    private router: Router,
    private cursoService: CursoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      this.usuarioId= +params['id'];
      this.cargarCursos(this.usuarioId)
    });
    
  }

    cargarCursos(idUsuario : number) {
    this.matriculaService.getCursosUsuario(idUsuario).subscribe(
      (data: any) => {
        this.cursos = data;
      }
    );
  }
  seleccionarCurso(id: number): void {
    this.cursoSeleccionado.emit(id);
    this.router.navigate(['../vistaContenidos', id]);
  }

  navigateVistaCurso(id: number): void {
    this.cursoSeleccionado.emit(id);
    this.router.navigate(['../vistaCurso', id]);
  }

  navigateCurso(): void {
    this.router.navigate(['../curso']);
  }

  navigateMatricula(): void {
    this.router.navigate(['../UnirMatricula']);
  }

  navigateVistaCursos(): void {
    this.router.navigate(['../vistaCursos'])
  }

  async deleteCurso(idCurso: number) {
    await this.eliminarMatricula(idCurso)
    waitForAsync
    await this.eliminarCurso(idCurso)
    this.navigateVistaCursos()

    
  }

  async eliminarMatricula(idCurso : number) :Promise<void>{
    const idUsuario = Number(this.loginService.getToken());
    const data = await firstValueFrom(this.matriculaService.getCursosUsuario(idUsuario));
    
    const promesasEliminar = data
      .filter((matricula: any) => matricula.curso.id === idCurso)
      .map((matricula: any) => {
        return firstValueFrom(this.matriculaService.deteleMatricula(matricula.id));
      });

    await Promise.all(promesasEliminar);
  }
  async eliminarCurso(idCurso : number): Promise<void>{
    const data = await firstValueFrom(this.cursoService.deleteCurso(idCurso));
  }
}
