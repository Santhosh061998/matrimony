import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagelistComponent } from './imagelist.component';

const routes: Routes = [
  {
    path:'',
    component:ImagelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagelistRoutingModule { }
