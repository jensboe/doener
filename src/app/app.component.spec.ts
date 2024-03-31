import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { RouterModule, provideRouter } from '@angular/router';
import { AuthService } from './auth.service';
import { of } from 'rxjs';



describe('BaseComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const  AuthServiceStub: Partial<AuthService> = {
    loggedIn$: of(true)
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [
        NoopAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterModule,
        AppComponent,
    ],
    providers: [
        provideRouter([{ path: '', component: AppComponent }]),
        { provide: AuthService, useValue: AuthServiceStub }
    ]
}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
