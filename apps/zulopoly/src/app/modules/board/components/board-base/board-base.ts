import {OnDestroy} from "@angular/core";
import {Subject} from "rxjs";
import {BoardFacade} from "../../+state/board.facade";

export abstract class BoardBase implements OnDestroy {

  protected ngDestroyed$ = new Subject();

  constructor(
    protected boardFacade: BoardFacade
  ) {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next();
    this.ngDestroyed$.complete();
  }

  protected abstract loadData();

}
