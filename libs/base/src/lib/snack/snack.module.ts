import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnackBuilder} from './snack-builder';
import {MessageService, ToastModule} from "primeng";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastModule
  ],
  exports: [
    ToastModule
  ],
  providers: [SnackBuilder, MessageService]
})
export class SnackModule { }
