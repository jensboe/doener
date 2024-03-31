import { TestBed } from '@angular/core/testing';

import { FirestoreService } from './firestore.service';
import { Firestore } from '@angular/fire/firestore';

describe('DishFirestoreService', () => {
  let service: FirestoreService;
  const FireStoreStub = jasmine.createSpyObj('Firestore', ['dummy']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Firestore, useValue: FireStoreStub }],
    });
    service = TestBed.inject(FirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
