import { Component } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, RouterModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(public loginService: LoginService) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.loginService.login(user).subscribe((data) => {
      this.loginService.setToken(data)
    });
  }
}
