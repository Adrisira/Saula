import { Routes } from '@angular/router';

export const routes: Routes = [
    {path : 'login', loadComponent: () => import('./login/login.component')},
    {path : 'register', loadComponent: () => import('./registrer/registrer.component')},
    {path : 'home', loadComponent: () => import('./home/home.component')}
];
