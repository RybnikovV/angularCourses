import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './navigation/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostItemComponent } from './page/basis/post-item/post-item.component';
import { PostFormComponent } from './page/basis/post-form/post-form.component';
import { PostComponent } from './page/basis/post/post.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import { SharedModules } from './shared/shared.module';
import { WatchScrollDirective } from './directives/watch-scroll.directive';
import { StyleDirective } from './directives/style.directive';
import { ExampleStructureDerDirective } from './directives/example-structure-der.directive';
import { StartPageComponent } from './page/start-page/start-page.component';
import { ServiceComponent } from './page/service/service.component';
import { ChildrenServiceComponentComponent } from './page/service/children-service-component/children-service-component.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    PostItemComponent,
    SidebarComponent,
    WatchScrollDirective,
    StyleDirective,
    ExampleStructureDerDirective,
    StartPageComponent,
    ServiceComponent,
    ChildrenServiceComponentComponent,
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

