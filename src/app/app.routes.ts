import { Routes } from '@angular/router';
import LoginComponent from './components/login/login.component';
import RegistrerComponent from './components/registrer/registrer.component';
import { CursoComponent } from './components/curso/curso.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { VistaContenidosComponent } from './components/vista-contenidos/vista-contenidos.component';
import { VistaCursosComponent } from './components/vista-cursos/vista-cursos.component';
import { VistaCursoComponent } from './components/vista-curso/vista-curso.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { VistaContenidoComponent } from './components/vista-contenido/vista-contenido.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrerComponent },
  {path : 'vistaCursos', component : VistaCursosComponent},
  { path: 'curso', component: CursoComponent },
  { path: 'contenido/:id', component: ContenidoComponent },
  { path: 'vistaContenidos/:id', component: VistaContenidosComponent },
  {path : 'vistaCurso/:id', component : VistaCursoComponent},
  {path : 'UnirMatricula', component : MatriculaComponent},
  {path : 'vistaContenido/:id', component : VistaContenidoComponent}
];
