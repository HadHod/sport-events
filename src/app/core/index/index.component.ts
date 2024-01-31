import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from '../services/events.service';
import { Observable } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';
import { SportEvent } from '../../shared/models/sport-event';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent {
  public sportEvents: Observable<SportEvent[]>;

  constructor(eventsService: EventsService) {
    this.sportEvents = eventsService.getEvents();
  }
}
