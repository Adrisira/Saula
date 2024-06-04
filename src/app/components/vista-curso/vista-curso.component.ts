import { Component , OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { MatriculaService } from '../../_services/matricula.service';
import { LoginService } from '../../_services/login.service';
import { CursoService } from '../../_services/curso.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-curso',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './vista-curso.component.html',
  styleUrl: './vista-curso.component.css'
})
export class VistaCursoComponent implements OnInit {

  cursoId : number = 0;
  nombre? : string
  codigo?: string
  imagen? : string
  descripcion? : string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matriculaService: MatriculaService,
    private loginService: LoginService,
    private CursoService : CursoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cursoId = +params['id'];
    });
     this.obtieneCurso(this.cursoId)
  }

  async todos(){
    
    await this.modificaCurso()
    this.router.navigate(['../vistaCursos'])
  }

  async obtieneCurso(id : number){
    this.CursoService.getCurso(id).subscribe((data) => {
      this.codigo = data.codigo
      this.imagen = data.imagen
    })
  }


  async modificaCurso(){
    const curso = {
      id: this.cursoId,
      nombre : this.nombre,
      codigo : this.codigo,
      descripcion : this.descripcion,
      imagen : this.imagen

    }
    this.CursoService.modifyCurso(this.cursoId, curso).subscribe((data) => {

    })
  }
}
