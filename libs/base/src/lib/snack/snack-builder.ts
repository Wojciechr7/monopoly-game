import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';
import { SnackModule } from './snack.module';

@Injectable()
export class SnackBuilder {

  constructor(private messageService: MessageService) {
  }

  success() {
    console.log('success');
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'})
  }

}
