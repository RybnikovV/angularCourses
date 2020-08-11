import {Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.styl']
})
export class PostFormComponent implements OnInit {
  title = '';
  text = '';
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>();

  // Взаимозаменяемы?
  @ViewChild('Form', {static: true}) formRef: ElementRef;
  // @ContentChild('Form', {static: false}) formRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  focusOnForm() {
    console.log(this.formRef);
    this.formRef.nativeElement.focus();
  }

  addPost() {
    if (this.title.trim() !== '' && this.text.trim() !== '') {
      const post: Post = {
        title: this.title,
        text: this.text,
      };
      this.onAddPost.emit(post);
      this.title = this.text = '';
    }
  }
}
