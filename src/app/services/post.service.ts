import { Injectable } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
    {
      title: 'General text',
      text: 'Secondary text!',
      id: 1,
    }, {
      title: 'Title1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, reprehenderit!',
      id: 1,
    }, {
      title: 'Title2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      id: 2,
    }, {
      title: 'Title3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, reprehenderit!',
      id: 3,
    }, {
      title: 'Title1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, reprehenderit!',
      id: 4,
    }, {
      title: 'Title2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      id: 5,
    }, {
      title: 'Title3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, reprehenderit!',
      id: 6,
    }
  ];
  postLastId;

  deletePost(e) {
    this.posts = this.posts.filter(item => item.id !== e);
  }

  addNewPost(e) {
    e.id = ++this.postLastId;
    this.posts.unshift(e);
  }
  constructor() { }
}
