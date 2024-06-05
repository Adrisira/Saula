import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../../_interfaces/usuario';
import { LoginService } from '../../_services/login.service';

@Component({
  selector: 'app-registrer',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registrer.component.html',
  styleUrl: './registrer.component.css',
})
export default class RegistrerComponent implements Usuario {
  id: number = 0;
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  nombre: string = '';
  apellidos: string = '';
  edad: number = 0;
  dirImg: string = '';
  @Output() usuario = new EventEmitter<number>();

  constructor(public loginService: LoginService, private router: Router) {}

  register() {
    const user = {
      email: this.email,
      password: this.password,
      nombre: this.nombre,
      apellidos: this.apellidos,
      edad: this.edad,
    };
    this.loginService.register(user).subscribe((data) => {
      this.id = data.id;
      this.nombre = data.nombre;
      this.loginService.setToken(data.id);
      this.usuario.emit(this.id);
      this.navigateVistaCurso()
    });
    
  }


  navigateVistaCurso(){
    this.usuario.emit(this.id);
      this.router.navigate(['../vistaCursos', this.id]);
  }
}
