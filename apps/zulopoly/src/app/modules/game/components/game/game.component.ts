import {Component, OnInit} from '@angular/core';
import { SnackBuilder } from '../../../../../../../../libs/base/src/lib/snack/snack-builder';
import { MessageService } from 'primeng';

@Component({
  selector: 'zulopoly-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {

  constructor(
    private snack: SnackBuilder,
  ) {
  }

  ngOnInit(): void {
    this.snack.success();
  }

}
