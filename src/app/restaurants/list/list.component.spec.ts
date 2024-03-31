import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

import { FirestoreService } from '../firestore.service';
import { of } from 'rxjs';


describe('ListRestaurantsComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  const FirestoreServiceStub: Partial<FirestoreService> = {
    getRestaurants() {
        return of()
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [{ provide: FirestoreService, useValue: FirestoreServiceStub }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
