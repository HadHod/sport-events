import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
export class IndexComponent implements OnInit {
  public sportEvents: Observable<SportEvent[]> = new Observable();

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.sportEvents = this.eventsService.getEvents();
  }
}
