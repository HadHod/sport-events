import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './event-card/event-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { ChipComponent } from './chip/chip.component';
import { EventCardImageComponent } from './event-card-image/event-card-image.component';

const COMPONENTS = [
  EventCardComponent,
  NavigationComponent,
  ChipComponent,
];

@NgModule({
  declarations: [
    COMPONENTS,
    EventCardImageComponent,
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
