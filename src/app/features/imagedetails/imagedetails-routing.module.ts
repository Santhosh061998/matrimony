import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagedetailsComponent } from './imagedetails.component';

const routes: Routes = [
  {
    path:'fulldetails/:id',
    component:ImagedetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagedetailsRoutingModule { }
