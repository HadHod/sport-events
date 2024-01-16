import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardImageComponent } from './event-card-image.component';

describe('EventCardImageComponent', () => {
  let component: EventCardImageComponent;
  let fixture: ComponentFixture<EventCardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCardImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
