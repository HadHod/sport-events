import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './event-card/event-card.component';
import { NavigationComponent } from './navigation/navigation.component';

const COMPONENTS = [EventCardComponent, NavigationComponent];

@NgModule({
  declarations: [],
  imports: [
    COMPONENTS,
    CommonModule,
  ],
  exports: [
    COMPONENTS,
  ],
})
export class SharedModule { }
