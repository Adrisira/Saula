import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { MatriculaService } from '../../_services/matricula.service';
import { LoginService } from '../../_services/login.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { RouterLink , Router} from '@angular/router';

@Component({
  selector: 'app-vista-cursos',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './vista-cursos.component.html',
  styleUrl: './vista-cursos.component.css',
})
export class VistaCursosComponent implements OnInit {
  cursos: any[] = [];
  @Output() cursoSeleccionado = new EventEmitter<number>();
  constructor(
    private matriculaService: MatriculaService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginService.getToken
      const tokenNumber = Number(this.loginService.getToken());
      this.cargarCursos(tokenNumber)
    }

  public cargarCursos(token: number): void {
    this.matriculaService.getCursosUsuario(token).subscribe(
      (data: any) => {
        this.cursos = data;
        
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

}
