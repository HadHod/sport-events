import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sport-event-details',
  standalone: false,
  templateUrl: './sport-event-details.component.html',
  styleUrl: './sport-event-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SportEventDetailsComponent implements AfterViewInit {
  public id?: string = undefined;
  public options = {
    center: { lat: 54.372158, lng: 18.638306 },
    zoom: 15,
  };

  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
  ) {}

  public ngAfterViewInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.id = id;
      this.cd.detectChanges();
    });
  }
}
