import {NgModule} from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

@NgModule({
  exports:[
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
  ]
})
export class SharedModules { }
