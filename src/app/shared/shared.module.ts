import { ChipComponent } from './chip/chip.component';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './event-card/event-card.component';
import { EventCardImageComponent } from './event-card-image/event-card-image.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const EXPORTED_COMPONENTS = [
  EventCardComponent,
  NavigationComponent,
  ChipComponent,
];

const PRIVATE_COMPONENTS = [EventCardImageComponent];

@NgModule({
  declarations: [EXPORTED_COMPONENTS, PRIVATE_COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [EXPORTED_COMPONENTS, FormsModule],
})
export class SharedModule {}
