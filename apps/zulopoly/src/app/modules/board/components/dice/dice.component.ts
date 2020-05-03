import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BoardBase } from "../board-base/board-base";
import { BoardFacade } from "../../+state/board.facade";
import { DiceStateModel } from "../../models/dice-state.model";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: 'zulopoly-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent extends BoardBase implements OnInit {

  @ViewChildren("diceList") diceList: QueryList<ElementRef>;

  diceState$: Observable<DiceStateModel>;

  constructor(
    protected boardFacade: BoardFacade,
  ) {
    super(boardFacade);
  }

  ngOnInit(): void {

  }

  getDiceNumbers(number: number) {
    return Array(number).fill(1).map((x, i) => i + 1);
  }

  rollDice() {
    this.boardFacade.rollDice();
  }

  protected loadData() {


    this.diceState$ = this.boardFacade.dice$.pipe(tap(() => this.toggleClasses()));
  }

  private toggleClasses() {
    const dice: HTMLElement[] = this.diceList?.map((el: ElementRef) => el.nativeElement);

    dice?.forEach(d => {
      d.classList.toggle("odd-roll");
      d.classList.toggle("even-roll");
    });
  }

}
