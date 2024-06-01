import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginService } from './_services/login.service';
import { RegistrerService } from './_services/registrer.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    public loginService: LoginService,
    public registerService: RegistrerService
  ) {}
  sesionIniciada: Boolean = false;

  sesisionIniciada(): Boolean {
    var estadoSesion: Boolean = this.sesionIniciada;
    if (
      this.loginService.getToken().length > 0 ||
      this.registerService.getToken().length > 0
    ) {
      estadoSesion = true;
    }
    return estadoSesion;
  }

  cerrarSesion(){
    this.loginService.setToken("")
    this.sesionIniciada = false
  }
  navigateToExternalUrl(): void {
    window.location.href = 'http://localhost:4200';
  }
}
