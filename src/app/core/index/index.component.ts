import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EventsService } from '../services/events.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent {
  constructor(eventsService: EventsService) {
    eventsService.getEvents().subscribe(data => console.log(data));
  }
}
