import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeoPoint, Timestamp } from '@angular/fire/firestore';
import { ChipComponent } from '../chip/chip.component';
import { DatePipe } from '@angular/common';
import { EventCardComponent } from './event-card.component';
import { EventCardImageComponent } from '../event-card-image/event-card-image.component';
import { SportEvent } from '../../models/sport-event';

describe('EventCardComponent', () => {
  let component: EventCardComponent;
  let fixture: ComponentFixture<EventCardComponent>;

  const se: SportEvent = {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    location: new GeoPoint(1, 1),
    tags: ['tag'],
    startTime: new Timestamp(0, 0),
    endTime: new Timestamp(0, 0),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EventCardComponent,
        EventCardImageComponent,
        ChipComponent,
      ],
      providers: [DatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(EventCardComponent);
    component = fixture.componentInstance;
    component.sportEvent = se;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
