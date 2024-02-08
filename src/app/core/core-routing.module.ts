import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { SportEventDetailsComponent } from './sport-event-details/sport-event-details.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'details/:id', component: SportEventDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
