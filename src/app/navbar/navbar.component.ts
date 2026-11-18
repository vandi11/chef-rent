import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand fw-bold" href="/">ChefRent</a>
        <span class="navbar-text">Szakácsok bérlése</span>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
