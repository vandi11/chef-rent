import { Component, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Chef } from './chef';
import { ChefService } from '../services/chef.service';

@Component({
  selector: 'app-chefs',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.css'
})
export class ChefsComponent {
  private readonly chefService = inject(ChefService);
  readonly chefs = signal<Chef[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');

  constructor() {
    this.chefService.getChefs().subscribe({
      next: (chefs) => {
        this.chefs.set(chefs ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Nem sikerült betölteni a szakácsokat. Próbáld újra később.');
        this.loading.set(false);
      }
    });
  }

  berel(chef: Chef): void {
    alert(`Kiválasztott szakács: ${chef.name}`);
  }
}
