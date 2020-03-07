import {Component, OnInit} from '@angular/core';
import {BOARD_SIZE} from "../../../game/helpers/game-settings";

@Component({
  selector: 'zulopoly-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  readonly boardSize: number = BOARD_SIZE;

  constructor() {
  }

  ngOnInit(): void {

  }

}
