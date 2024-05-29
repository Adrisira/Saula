import { Routes } from '@angular/router';
import LoginComponent from './components/login/login.component';
import HomeComponent from './components/home/home.component';
import RegistrerComponent from './components/registrer/registrer.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path : 'login' , component : LoginComponent},
    {path : 'register', component : RegistrerComponent},
    {path : 'home', component : HomeComponent},
    {path : 'main', component: AppComponent}
];
