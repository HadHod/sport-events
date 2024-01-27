import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [PageNotFoundComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, CoreRoutingModule, RouterModule],
})
export class CoreModule {}
