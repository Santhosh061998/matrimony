import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagedetailsRoutingModule } from './imagedetails-routing.module';
import { ImagedetailsComponent } from './imagedetails.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
@NgModule({
  declarations: [
    ImagedetailsComponent
  ],
  imports: [
    CommonModule,SharedModule,
    ImagedetailsRoutingModule,CoreModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ImagedetailsModule { }
