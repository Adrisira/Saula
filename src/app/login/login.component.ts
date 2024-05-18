import { Component } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(public loginService: LoginService) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.loginService.login(user).subscribe((data) => {
      console.log(data);
    });
  }
}
