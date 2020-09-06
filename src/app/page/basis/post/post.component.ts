import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.styl']
})
export class PostComponent {
  filterValue = '';
  constructor(private postService: PostService) { }

  searchEventHandler(e) {
    this.filterValue = e;
  }
}
