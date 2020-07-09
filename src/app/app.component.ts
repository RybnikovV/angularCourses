import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit{
  posts: Post[] = [
    {
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


  addNewPost(e) {
    e.id = ++this.postLastId;
    this.posts.unshift(e);
  };

  ngOnInit(): void {
    this.postLastId = this.posts.length;
    console.log('call ngOnInitAppComponent');
    //how work changeDetectionStrategry
    setTimeout(() => {
      this.posts[0].title = "chage title after 4s"
    },4000)
  }

  scrollEvent(e) {
    // console.log(e);
  }
  deletePost(e) {
    this.posts = this.posts.filter(item => item.id !== e);
  }
}
