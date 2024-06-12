import { Component, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../_services/login.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { Usuario } from '../../_interfaces/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent implements Usuario {
  id: number = 0;
  email: string = '';
  password: string = '';
  nombre: string = '';
  apellidos: string = '';
  edad: number = 0;
  dirImg: string = '';
  @Output() usuario = new EventEmitter<number>();

  constructor(
    public loginService: LoginService,
    private router: Router,
    private matSancBar: MatSnackBar
  ) {}
  async login() {
    const user = { email: this.email, password: this.password };

    this.loginService.login(user).subscribe(
      (data) => {
        this.id = data.id;
        this.nombre = data.nombre;
        this.loginService.setToken(data.id);
        if(this.email === "admin"){
          this.navigateVistaUsuario()
        } else {
          this.navigateVistaCurso();
        }
        
      },
      (error) => {
        this.matSancBar.open(
          'Prueba a introducir los datos de nuevo',
          'Cerrar'
        );
      }
    );
  }

  navigateVistaCurso() {
    this.usuario.emit(this.id);
    this.router.navigate(['../vistaCursos', this.id]);
  }

  navigateRegister(){
    this.router.navigate(['../register'])
  }

  navigateVistaUsuario(){
    this.usuario.emit(this.id);
    this.router.navigate(['../vistaUsuarios', this.id]);
  }
}
