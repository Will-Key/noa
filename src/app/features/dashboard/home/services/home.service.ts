import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Stats } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  dummyData: Stats[] = [
    { title: 'Adherent', count: 12 },
    { title: 'Ayant Droit', count: 21 },
    { title: 'Sinistre', count: 7 }
  ]
  constructor() { }

  getStats() {
    return of(this.dummyData)
  }
}
