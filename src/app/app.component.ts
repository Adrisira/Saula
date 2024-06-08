import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginService } from './_services/login.service';
import { NgIf } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    NgIf,
    MainPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  constructor(
    public loginService: LoginService,
    private router: Router
  ) {}
  sesionIniciada: Boolean = false;


  ngOnInit(): void {
      this.navigateMain()
  }
  sesisionIniciada(): Boolean {
    var estadoSesion: Boolean = this.sesionIniciada;
    if (
      this.loginService.getToken().length > 0 
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

  navigatePaginaPrincipal() : void {
    this.router.navigate(['../vistaCursos', Number(this.loginService.getToken().length)])
  }

  navigateLogin () : void {
    this.router.navigate(['../login'])
  }

  navigateRegister() : void {
    this.router.navigate(['../register'])
  }
  navigateMain() : void {
    this.router.navigate(['../mainPage'])
  }
}
