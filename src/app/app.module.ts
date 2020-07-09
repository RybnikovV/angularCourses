import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import { SharedModules } from './shared/shared.module';
import { WatchScrollDirective } from './directives/watch-scroll.directive';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    SidebarComponent,
    WatchScrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModules,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

