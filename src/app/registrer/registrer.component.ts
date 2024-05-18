import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RegistrerService } from '../_services/registrer.service';


@Component({
  selector: 'app-registrer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registrer.component.html',
  styleUrl: './registrer.component.css'
})
export class RegistrerComponent {
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  passwordError: boolean = false;
  nombre: string = "";
  apellidos: string = "";
  edad: number = 0;

  constructor(public registerService: RegistrerService) {}

  register() {
    const user = { email: this.email, password: this.password, nombre: this.nombre, apellidos: this.apellidos, edad: this.edad};
    this.registerService.register(user).subscribe((data) => {
      console.log(data);
    })
  }
}
