import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SportEvent } from '../../models/sport-event';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-event-card',
  standalone: false,
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardComponent {
  @Input() sportEvent!: SportEvent;

  constructor(private datePipe: DatePipe) {}

  public get price(): string {
    const priceVariations = ['Free', 'PLN 50', 'PLN 20 - 40'];
    return priceVariations[Math.floor(Math.random() * priceVariations.length)];
  }

  // TODO make pipe
  public displayDate(start: Timestamp, end: Timestamp): string {
    const startDate: Date = start.toDate();
    const endDate: Date = end.toDate();

    const isTheSameDay: boolean =
      startDate.getFullYear() === endDate.getFullYear() &&
      startDate.getMonth() === endDate.getMonth() &&
      startDate.getDate() === endDate.getDate();

    if (isTheSameDay) {
      const day: string =
        this.datePipe.transform(startDate, 'YYYY.MM.dd') || '';
      const timeStart: string =
        this.datePipe.transform(startDate, 'h:mm') || '';
      const timeEnd: string = this.datePipe.transform(endDate, 'h:mm') || '';
      return `${day} ${timeStart} => ${timeEnd}`;
    }

    return `${this.datePipe.transform(startDate, 'YYYY.MM.dd h:mm') || ''} => ${this.datePipe.transform(endDate, 'YYYY.MM.dd h:mm') || ''}`;
  }
}
