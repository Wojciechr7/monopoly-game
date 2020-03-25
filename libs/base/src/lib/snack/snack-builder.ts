import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable()
export class SnackBuilder {

  constructor(
    private messageService: MessageService
  ) {
  }

  success() {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'})
  }

}
