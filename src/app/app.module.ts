import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { PipeComponent } from './page/pipe/pipe.component';
import { MultByPipe } from './pipes/mult-by.pipe';
import { PostFilterComponent } from './page/basis/post-filter/post-filter.component';
import { FilterPostPipe } from './pipes/filter-post.pipe';
import { FormComponent } from './page/form/form.component';


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
    PipeComponent,
    MultByPipe,
    PostFilterComponent,
    FilterPostPipe,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModules,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

