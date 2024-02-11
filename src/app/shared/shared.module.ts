import {
  ChipComponent,
  EventCardComponent,
  EventCardImageComponent,
  FilterPanelComponent,
  LoaderComponent,
  NavigationComponent,
} from './components';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const EXPORTED_COMPONENTS = [
  ChipComponent,
  EventCardComponent,
  FilterPanelComponent,
  LoaderComponent,
  NavigationComponent,
];

const PRIVATE_COMPONENTS = [EventCardImageComponent];

@NgModule({
  declarations: [EXPORTED_COMPONENTS, PRIVATE_COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [EXPORTED_COMPONENTS, FormsModule, CommonModule],
  providers: [DatePipe],
})
export class SharedModule {}
