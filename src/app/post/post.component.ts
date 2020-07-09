import {ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit, OnDestroy {
  @ContentChild('Content', {static: true}) postContentChild: ElementRef;
  @Output() onRemove = new EventEmitter<number>();
  // @ViewChild('postViewChild', {static: true}) postViewChild: ElementRef;

  @Input()
  post: Post;

  constructor() {}

  deleteCard() {
    this.onRemove.emit(this.post.id);
  }
  ngOnInit() {
    console.log(this.postContentChild.nativeElement);
    // console.log(this.postViewChild);
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
