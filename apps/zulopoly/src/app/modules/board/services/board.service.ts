import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { FieldsLoadedModel } from "../../../../../../../libs/api-interfaces/src/lib/models/fields-loaded.model";
import { TEMP_FIELDS } from "../../game/helpers/game-settings";
import { SocketGame } from "../../../app.module";
import { GameStateModel } from "../../../../../../../libs/api-interfaces/src/lib/models/game-state.model";
import {
  GameServerEmitActions,
  GameServerListenActions
} from "../../../../../../../libs/base/src/lib/helpers/socket-game-actions";
import { DiceRolledModel } from "../../../../../../../libs/api-interfaces/src/lib/models/dice-rolled.model";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private http: HttpClient,
    private socket: SocketGame
  ) {
  }

  getBoardFields(): Observable<FieldsLoadedModel> {
    return of(TEMP_FIELDS);
  }

  getGameState(): Observable<GameStateModel> {
    return this.socket.fromEvent<GameStateModel>(GameServerEmitActions.GetGameState);
  }

  rollDice() {
    return this.socket.emit(GameServerListenActions.RollDice);
  }

  leaveGame() {
    return this.socket.emit(GameServerListenActions.LeaveGame);
  }

  getDiceRolled(): Observable<DiceRolledModel> {
    return this.socket.fromEvent<DiceRolledModel>(GameServerEmitActions.DiceRolled);
  }

}
