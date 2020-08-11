import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from '../page/start-page/start-page.component';
import {PostComponent} from '../page/basis/post/post.component';
import {ServiceComponent} from '../page/service/service.component';

const appRoutes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'basis', component: PostComponent},
  {path: 'service', component: ServiceComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
