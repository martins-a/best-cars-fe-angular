import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../modules/external/material.module';

import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  imports: [AngularMaterialModule],
  exports: [HeaderMenuComponent],
  declarations: [HeaderMenuComponent],
  providers: [],
})
export class CoreModule { }
