import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, CommonModule, SharedModule],
  exports: []
})
export class LoginModule {}
