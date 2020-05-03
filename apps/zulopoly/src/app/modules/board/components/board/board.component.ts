import { Component, OnInit } from '@angular/core';
import { BoardFacade, OrderedFields } from "../../+state/board.facade";
import { BoardBase } from "../board-base/board-base";
import { Observable } from "rxjs";
import { SnackBuilder } from "../../../../../../../../libs/base/src/lib/snack/snack-builder";

@Component({
  selector: 'zulopoly-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent extends BoardBase implements OnInit {

  boardFields$: Observable<OrderedFields>;

  constructor(
    protected boardFacade: BoardFacade,
    private snack: SnackBuilder
  ) {
    super(boardFacade);
  }

  ngOnInit(): void {
  }

  protected loadData() {
    this.boardFields$ = this.boardFacade.boardFields$;
  }

}
