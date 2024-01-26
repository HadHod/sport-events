import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { Routes } from '@angular/router';
import { routes as coreRoutes } from './core/core-routing.module';

export const routes: Routes = [
  ...coreRoutes,
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  { path: '**', component: PageNotFoundComponent },
];
