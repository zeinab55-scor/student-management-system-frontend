import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/public-layout/public-layout').then(m => m.PublicLayout),
    children: [
      { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
      { path: 'courses/:id', loadComponent: () => import('./courses/course-details/course-details').then(m => m.CourseDetails) }
    ]
  },
  { path: 'login', loadComponent: () => import('./auth/login/login').then(m => m.Login) },
  { path: 'register', loadComponent: () => import('./auth/register/register').then(m => m.Register) },
  { path: '**', redirectTo: '' }
];