import { Component, OnInit } from '@angular/core';
import {CounterPostService} from '../../services/counter.service';
import {LocalCounterService} from '../../services/local-counter.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.styl'],
  providers: [LocalCounterService]
})
export class ServiceComponent implements OnInit {

  constructor(
    private counterPostService: CounterPostService,
    private localCounterService: LocalCounterService
  ) { }

  ngOnInit() {
  }

}
