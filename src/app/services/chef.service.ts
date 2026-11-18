import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chef } from '../chefs/chef';

@Injectable({ providedIn: 'root' })
export class ChefService {
  private readonly http = inject(HttpClient);
  private readonly url = 'https://chat-4b282-default-rtdb.europe-west1.firebasedatabase.app/chefs.json';

  getChefs(): Observable<Chef[]> {
    return this.http.get<Chef[]>(this.url);
  }
}
