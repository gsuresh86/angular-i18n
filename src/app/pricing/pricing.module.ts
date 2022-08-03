import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import {RouterModule} from '@angular/router';
import {NzCardModule} from 'ng-zorro-antd/card';

@NgModule({
  declarations: [PricingComponent],
  imports: [
    CommonModule,
    NzCardModule,
    RouterModule.forChild([{ path: '', component: PricingComponent}])
  ]
})
export class PricingModule { }
