import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RegistrerService } from '../_services/registrer.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-registrer',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registrer.component.html',
  styleUrl: './registrer.component.css'
})
export default class RegistrerComponent{
  constructor(public registerService: RegistrerService) {}
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  passwordError: boolean = false;
  nombre: string = "";
  apellidos: string = "";
  edad: number = 0;

  

  register() {
    const user = { email: this.email, password: this.password, nombre: this.nombre, apellidos: this.apellidos, edad: this.edad};
    this.registerService.register(user).subscribe((data) => {
      this.registerService.setToken(data)
      console.log(data)
    })
  }
}
