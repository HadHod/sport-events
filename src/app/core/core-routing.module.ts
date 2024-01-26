import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{ path: '', component: IndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
