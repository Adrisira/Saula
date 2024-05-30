import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { ContenidoService } from '../../_services/contenido.service';
import { LoginService } from '../../_services/login.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { VistaCursosComponent } from '../vista-cursos/vista-cursos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatButtonModule, MatGridListModule, NgIf, NgFor, VistaCursosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit{

  constructor(public contenidoService : ContenidoService, public loginService : LoginService) {}

  ngOnInit(): void {
      
  }


}
