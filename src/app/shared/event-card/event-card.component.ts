import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SportEvent } from '../models/sport-event';

@Component({
  selector: 'app-event-card',
  standalone: false,
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardComponent {
  @Input() sportEvent!: SportEvent;
}
