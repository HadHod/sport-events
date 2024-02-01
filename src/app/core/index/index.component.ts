import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Observable } from 'rxjs';
import { SportEvent } from '../../shared/models/sport-event';

@Component({
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent implements OnInit {
  public sportEvents: Observable<SportEvent[]> = new Observable();

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.sportEvents = this.eventsService.getEvents();
  }
}
