import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { FieldsLoadedModel } from "../../../../../../../libs/api-interfaces/src/lib/models/fields-loaded.model";
import { TEMP_FIELDS } from "../../game/helpers/game-settings";
import { SocketGame } from "../../../app.module";
import { GameStateModel } from "../../../../../../../libs/api-interfaces/src/lib/models/game-state.model";

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
    return this.socket.fromEvent<GameStateModel>('getGameState');
  }

  rollDice() {
    return this.socket.emit('rollDice', { gameIndex: 2 });
  }

  createGame(playerName: string) {
    return this.socket.emit('createGame', { playerName });
  }

}
