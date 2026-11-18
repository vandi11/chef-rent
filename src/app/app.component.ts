import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ChefsComponent } from './chefs/chefs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ChefsComponent],
  template: `
    <app-navbar />
    <main>
      <app-chefs />
    </main>
  `
})
export class AppComponent {}
