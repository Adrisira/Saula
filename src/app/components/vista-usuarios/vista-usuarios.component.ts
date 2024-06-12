import { Component, OnInit } from '@angular/core';
import { MatriculaService } from '../../_services/matricula.service';
import { LoginService } from '../../_services/login.service';
import { NgIf, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../_interfaces/usuario';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-vista-usuarios',
  standalone: true,
  imports: [NgIf, NgFor, MatIconModule],
  templateUrl: './vista-usuarios.component.html',
  styleUrl: './vista-usuarios.component.css'
})
export class VistaUsuariosComponent implements OnInit{
  usuarios : any[] = []
  matriculas : any[] = []
  usuarioId: number = 0;
  constructor(private matriculaService: MatriculaService,
    private loginService: LoginService,
    private route: ActivatedRoute,) {}
    ngOnInit(): void {
        this.route.params.subscribe((params) => {
          this.usuarioId= +params['id'];
        })
        this.cargarUsuarios()
    }

    cargarUsuarios() {
      this.loginService.getAlluser().subscribe((data) => {
        this.usuarios = data
      })
    }

    deleteUsuario(id : number){
      this.matriculaService.getCursosUsuario(id).subscribe((data) => {
        this.matriculas = data
        for(let matricula of this.matriculas){
          this.matriculaService.deteleMatricula(matricula.id).subscribe((data) => {

          })
        }
      })
      this.loginService.deleteUsuario(id).subscribe((data) => {
        this.cargarUsuarios()
      })
    }


  }
