import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackModule } from './snack/snack.module';
import { DialogModule } from './dialog/dialog.module';
import { MessageService } from 'primeng';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [CommonModule],
  exports: [
    SnackModule,
    DialogModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class BaseModule {}
