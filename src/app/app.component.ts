import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import packageJson from '../../package.json';
import { AsyncPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [MatSidenavContainer, MatSidenav, MatToolbar, MatNavList, MatListItem, RouterLink, RouterLinkActive, MatSidenavContent, MatIconButton, MatIcon, RouterOutlet, AsyncPipe]
})
export class AppComponent {
  private breakpointObserver = inject(BreakpointObserver);
  version = packageJson.version;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
