import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';

export const routes: Routes = [
    {path : 'login', component : LoginComponent},
    {path : 'register', component : RegistrerComponent}
];
