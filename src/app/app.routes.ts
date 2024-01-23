import { Routes } from '@angular/router';
import { IndexComponent } from './core/index/index.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  { path: '**', component: PageNotFoundComponent },
];
