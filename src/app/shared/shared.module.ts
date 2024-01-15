import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './event-card/event-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  EventCardComponent,
  NavigationComponent,
];

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    COMPONENTS,
    FormsModule,
  ],
})
export class SharedModule { }
