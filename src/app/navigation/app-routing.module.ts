import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from '../page/start-page/start-page.component';
import {PostComponent} from '../page/basis/post/post.component';
import {ServiceComponent} from '../page/service/service.component';
import {PipeComponent} from '../page/pipe/pipe.component';
import {FormComponent} from '../page/form/form.component';

const appRoutes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'basis', component: PostComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'form', component: FormComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
