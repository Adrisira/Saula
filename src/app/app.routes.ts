import { Routes } from '@angular/router';
import LoginComponent from './components/login/login.component';
import HomeComponent from './components/home/home.component';
import RegistrerComponent from './components/registrer/registrer.component';
import { CursoComponent } from './components/curso/curso.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { VistaContenidosComponent } from './components/vista-contenidos/vista-contenidos.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrerComponent },
  { path: 'home', component: HomeComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'contenido/:id', component: ContenidoComponent },
  { path: 'vistaContenidos/:id', component: VistaContenidosComponent },
];
