import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-event-card-image',
  standalone: false,
  templateUrl: './event-card-image.component.html',
  styleUrl: './event-card-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCardImageComponent {

}
