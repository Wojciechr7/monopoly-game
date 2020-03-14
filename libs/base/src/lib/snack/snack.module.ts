import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBuilder } from './snack-builder';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers:[SnackBuilder]
})
export class SnackModule { }
