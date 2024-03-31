import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { FirestoreService } from '../firestore.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddDishesComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let FirestoreStub: Partial<FirestoreService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddComponent, BrowserAnimationsModule],
      providers: [{ provide: FirestoreService, useValue: FirestoreStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
