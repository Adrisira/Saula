import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RegistrerService } from '../../_services/registrer.service';
import { RouterLink, Router } from '@angular/router';
import { Usuario } from '../../_interfaces/usuario';


@Component({
  selector: 'app-registrer',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registrer.component.html',
  styleUrl: './registrer.component.css'
})
export default class RegistrerComponent implements Usuario {
  
  id: number = 0;
  email: string = ""
  password: string = ""
  confirmPassword : string = ""
  nombre: string = ""
  apellidos: string = ""
  edad: number = 0
  dirImg: string = ""

  constructor(public registerService: RegistrerService, private router: Router) {}

  

  register() {
    const user = { email: this.email, password: this.password, nombre: this.nombre, apellidos: this.apellidos, edad: this.edad};
    this.registerService.register(user).subscribe((data) => {
      this.registerService.setToken(data.id)
      this.id = data.id
      this.nombre = data.nombre
      this.router.navigate(['../vistaCursos'])
    })
  }
}
