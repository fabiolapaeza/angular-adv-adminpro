import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  { path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'grafica1', component: Grafica1Component},
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NotpagefoundComponent},
];
