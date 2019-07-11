import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/components/shared/shared.module';

import { CommonModule } from '@angular/common';
import { BeersComponent } from './beers.component';
import { BeersRoutingModule } from './beers-routing.module';

@NgModule({
  declarations: [BeersComponent],
  imports: [BeersRoutingModule, CommonModule, SharedModule],
  exports: []
})
export class BeersModule {}
