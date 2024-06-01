import { Component } from '@angular/core';
import { LoginService } from '../../_services/login.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { Usuario } from '../../_interfaces/usuario';

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

  constructor(public loginService: LoginService, private router: Router) {}
  login() {
    const user = { email: this.email, password: this.password };

    this.loginService.login(user).subscribe(
      (data) => {
        this.loginService.setToken(data.id);
        this.id = data.id;
        this.nombre = data.nombre;
        this.router.navigate(['../home'])
      },
      (error) => {
        console.error('Nos has podido inicar sesion', error);
      }
    );
  }
}
