import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SnackModule} from "./snack/snack.module";
import {DialogModule} from "./dialog/dialog.module";
import { ButtonModule } from 'primeng';

const baseModules = [
  CommonModule,
  FormsModule,
  FlexLayoutModule,
  SnackModule,
  DialogModule,
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
