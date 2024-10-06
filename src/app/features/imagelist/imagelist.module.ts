import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagelistRoutingModule } from './imagelist-routing.module';
import { ImagelistComponent } from './imagelist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    ImagelistComponent
  ],
  imports: [
    CommonModule,
    ImagelistRoutingModule,
    SharedModule,CoreModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ImagelistModule { }
