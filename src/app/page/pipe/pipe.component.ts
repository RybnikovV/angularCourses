import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.styl']
})
export class PipeComponent implements OnInit {

  constructor() { }

  pi: number = Math.PI;
  str = 'hello first str pipe';
  date: Date = new Date();
  obj: object = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3
      }
    }
  };

  promise: Promise<string> = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve('String throw promise(Timeout)'), 3000);
  });

  dateObservable: Observable<Date> = new Observable<Date>( obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  ngOnInit() {
  }

}
