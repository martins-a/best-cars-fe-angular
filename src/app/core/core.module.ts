import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AngularMaterialModule } from '../modules/external/material.module';

import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [
    HeaderMenuComponent,
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  declarations: [HeaderMenuComponent],
  providers: [],
})
export class CoreModule { }
