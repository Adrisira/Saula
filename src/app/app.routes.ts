import { Routes } from '@angular/router';
import LoginComponent from './components/login/login.component';
import HomeComponent from './components/home/home.component';
import RegistrerComponent from './components/registrer/registrer.component';
import { AppComponent } from './app.component';
import { CursoComponent } from './components/curso/curso.component';

export const routes: Routes = [
    {path : 'login' , component : LoginComponent},
    {path : 'register', component : RegistrerComponent},
    {path : 'home', component : HomeComponent},
    {path : 'curso', component : CursoComponent}

];
