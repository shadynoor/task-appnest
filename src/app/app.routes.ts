import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./views/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'subjects',
    loadComponent: () =>
      import('./views/subjects/subjects.component').then(
        (c) => c.SubjectsComponent
      ),
  },
];
