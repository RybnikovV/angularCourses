import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterPostService {
  counter = 0;
  increase() {
    this.counter++;
  }
  decrease() {
    this.counter--;
  }

  constructor() { }
}
