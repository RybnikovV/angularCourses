import { Component, OnInit } from '@angular/core';
import {LocalCounterService} from '../../../services/local-counter.service';
import {CounterPostService} from '../../../services/counter.service';

@Component({
  selector: 'app-children-service-component',
  templateUrl: './children-service-component.component.html',
  styleUrls: ['./children-service-component.component.styl'],
  providers: [LocalCounterService]
})
export class ChildrenServiceComponentComponent implements OnInit {

  constructor(
    private counterPostService: CounterPostService,
    private localCounterService: LocalCounterService
  ) { }

  ngOnInit() {
  }

}
