import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SnackModule} from "./snack/snack.module";
import {ButtonModule} from 'primeng/button';
import { DynamicDialogModule } from 'primeng';

const baseModules = [
  CommonModule,
  FormsModule,
  FlexLayoutModule,
  SnackModule,
  DynamicDialogModule,
  ButtonModule
];

@NgModule({
  imports: [
    ...baseModules
  ],
  exports: [
    ...baseModules
  ],
  providers: []
})
export class BaseModule {}
