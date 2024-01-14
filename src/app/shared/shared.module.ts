import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './event-card/event-card.component';

@NgModule({
  declarations: [],
  imports: [
    EventCardComponent,
    CommonModule,
  ],
  exports: [EventCardComponent],
})
export class SharedModule { }
