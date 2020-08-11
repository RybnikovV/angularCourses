import {ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Post} from '../../../services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent implements OnInit, OnDestroy {
  @ContentChild('Content', {static: true}) postContentChild: ElementRef;
  @Output() onRemove = new EventEmitter<number>();
  // @ViewChild('postViewChild', {static: true}) postViewChild: ElementRef;
  changeColorOnMouseEnter = true;

  @Input()
  post: Post;

  constructor() {}

  deleteCard() {
    this.onRemove.emit(this.post.id);
  }
  ngOnInit() {
    console.log(this.postContentChild.nativeElement);
    // console.log(this.postViewChild);
    if ( this.post.id === 3 ) {
      this.changeColorOnMouseEnter = false;
    }
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
