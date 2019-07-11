import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [RegisterRoutingModule, CommonModule, SharedModule],
  exports: []
})
export class RegisterModule {}
