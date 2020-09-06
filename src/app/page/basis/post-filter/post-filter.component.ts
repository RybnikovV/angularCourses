import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../../../services/post.service';

@Component({
  selector: 'app-post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.styl']
})
export class PostFilterComponent {
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  filterValue: string;

  constructor() { }

  changeSearchString() {
    this.searchEvent.emit(this.filterValue);
  }
}
