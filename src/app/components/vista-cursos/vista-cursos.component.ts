import { Component, OnInit } from '@angular/core';
import { MatriculaService } from '../../_services/matricula.service';
import { LoginService } from '../../_services/login.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vista-cursos',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './vista-cursos.component.html',
  styleUrl: './vista-cursos.component.css'
})
export class VistaCursosComponent implements OnInit{

  cursos: any[] = [];
  constructor (private matriculaService: MatriculaService, private loginService : LoginService) {}

  ngOnInit(): void {
      this.matriculaService.getCursosUsuario(Number(this.loginService.getToken())).subscribe((data : any) => {
        this.cursos = data
      })
  }

}
