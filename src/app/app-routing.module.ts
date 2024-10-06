import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'imagelist',
    loadChildren:()=>import('./features/imagelist/imagelist.module').then(m=>m.ImagelistModule)
  },
  {
   path:'',
   redirectTo:'imagelist',
   pathMatch:'full'
  },

  {
    path:'imagedetail',
    loadChildren:()=>import('./features/imagedetails/imagedetails.module').then(m=>m.ImagedetailsModule)
  },
  {
    path:'**',
    redirectTo:'/imagelist'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
