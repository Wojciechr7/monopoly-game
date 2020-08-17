import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GameStateModel } from "../../../../../../../libs/api-interfaces/src/lib/models/game-state.model";
import { SocketGame } from "../../../app.module";
import {
  GameServerEmitActions,
  GameServerListenActions
} from "../../../../../../../libs/base/src/lib/helpers/socket-game-actions";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private socket: SocketGame
  ) {
  }

  joinToGame(gameId: string, playerName: string) {
    return this.socket.emit(GameServerListenActions.JoinToGame, { gameId, playerName });
  }

  createGame(playerName: string) {
    return this.socket.emit(GameServerListenActions.CreateGame, { playerName });
  }

  backToGame(playerName: string) {
    return this.socket.emit(GameServerListenActions.BackToGame, { playerName });
  }

  startGame() {
    return this.socket.emit(GameServerListenActions.StartGame);
  }

  getGameList(): Observable<GameStateModel[]> {
    return this.socket.fromEvent<GameStateModel[]>(GameServerEmitActions.GetGameList);
  }

  getGameErrors(): Observable<string> {
    return this.socket.fromEvent<string>(GameServerEmitActions.Error);
  }

  removePlayer(playerId: string) {
    return this.socket.emit(GameServerListenActions.RemovePlayer, { playerId });
  }

  getClientId(): Observable<string> {
    return this.socket.fromEvent<string>(GameServerEmitActions.GetClientId);
  }

}
