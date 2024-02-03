import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { IndexComponent } from './index.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { environment } from '../../../environments/environment';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexComponent, LoaderComponent],
      imports: [
        provideFirestore(() => getFirestore()),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
