import {Component, OnInit} from '@angular/core';
import {BOARD_SIZE} from "../../../game/helpers/game-settings";
import {BoardFacade} from "../../+state/board.facade";
import {BoardFieldModel} from "../../models/board-field.model";

@Component({
  selector: 'zulopoly-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  readonly boardSize: number = BOARD_SIZE;

  constructor(
    private boardFacade: BoardFacade
  ) {
  }

  ngOnInit(): void {
    this.boardFacade.boardFields$.subscribe((boardFields: BoardFieldModel[][]) => {
      console.log(boardFields);
    })
  }

}
