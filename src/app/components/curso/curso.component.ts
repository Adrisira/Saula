import { Component } from '@angular/core';
import { Curso } from '../../_interfaces/curso';
import { CursoService } from '../../_services/curso.service';
import { LoginService } from '../../_services/login.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { MatriculaService } from '../../_services/matricula.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [FormsModule, RouterLink, MatInputModule, MatFormFieldModule],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css',
})
export class CursoComponent implements Curso {
  id: number = 0;
  nombre: string = '';
  codigo: string = '';
  descripcion: string = '';
  imagen: string = '';

  constructor(
    private cursoService: CursoService,
    private matriculaService: MatriculaService,
    private loginService: LoginService,
    private router: Router
  ) {}

  async todos() {
    await this.crearCurso();
    await this.crearMatricula();
    this.navigateVistaCursos()
  }
  crearCurso(): Promise<void> {
    const curso = {
      nombre: this.nombre,
      codigo: this.crearCodigoAleatorio(),
      descripcion: this.descripcion,
      imagen : this.asignarImagenAleatoria()
    };
    return new Promise((resolve, reject) => {
      this.cursoService.crearCurso(curso).subscribe((data) => {
        this.id = data.id;
        this.nombre = data.nombre;
        this.codigo = data.codigo;
        this.descripcion = data.codigo;
        this.imagen = data.imagen;
        resolve();
      });
    });
  }
  async crearMatricula() {
    const contenido = {
      rol: true,
      idUsuario: Number(this.loginService.getToken()),
      idCurso: this.id,
    };
    this.matriculaService.crearMatricula(contenido).subscribe((data) => {});

    
  }

  crearCodigoAleatorio(): string {
    const caracteres =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    for (let i = 0; i < 6; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indice);
    }
    return codigo;
  }

  asignarImagenAleatoria(): string {
    let numeroImagen : number = Math.floor(Math.random() * 4) + 1
    let imagen: string = '../../../assets/' +numeroImagen.toString() + '.jpg';
    return imagen;
  }

  navigateVistaCursos(){
    this.router.navigate(['../vistaCursos', Number(this.loginService.getToken())]);
  }
}
