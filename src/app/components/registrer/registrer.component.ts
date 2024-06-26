import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../../_interfaces/usuario';
import { LoginService } from '../../_services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  edad!: number;
  dirImg: string = '';
  @Output() usuario = new EventEmitter<number>();

  constructor(public loginService: LoginService, private router: Router, private matSancBar: MatSnackBar) {}

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
      if(this.email === "admin"){
        this.navigateVistaUsuario()
      } else {
        this.navigateVistaCurso();
      }
    });
    
  }

  comprobarPassword(){
    if(this.password === this.confirmPassword){
      this.register()
    } else {
      this.matSancBar.open(
        'Las contraseñas no coinciden',
        'Cerrar'
      );
    }
  }

  comprobarEmail(){
    const email = {
      email : this.email
    }
    this.loginService.comprobarEmail(email).subscribe((data) => {
      console.log(data)
      if(data === false){
        this.comprobarPassword()
      } else {
        this.matSancBar.open(
          'Este Email ya existe',
          'Cerrar'
        );
      }
    })
  }


  navigateVistaCurso(){
    this.usuario.emit(this.id);
      this.router.navigate(['../vistaCursos', this.id]);
  }

  navigateLogin(){
    this.router.navigate(['../login'])
  }
  navigateVistaUsuario(){
    this.usuario.emit(this.id);
    this.router.navigate(['../vistaUsuarios', this.id]);
  }
}
