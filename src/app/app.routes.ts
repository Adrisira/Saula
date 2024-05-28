import { Routes } from '@angular/router';
import LoginComponent from './login/login.component';
import HomeComponent from './home/home.component';
import RegistrerComponent from './registrer/registrer.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path : 'login' , component : LoginComponent},
    {path : 'register', component : RegistrerComponent},
    {path : 'home', component : HomeComponent},
    {path : 'main', component: AppComponent}
];
