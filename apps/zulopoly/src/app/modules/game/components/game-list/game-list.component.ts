import { Component, OnInit } from '@angular/core';
import { GameFacade } from "../../+state/game.facade";
import { Observable } from "rxjs";
import { GameStateModel } from "../../../../../../../../libs/api-interfaces/src/lib/models/game-state.model";

@Component({
  selector: 'zulopoly-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games$: Observable<GameStateModel[]>;

  constructor(
    private gameFacade: GameFacade
  ) {
  }

  ngOnInit(): void {
    this.games$ = this.gameFacade.allGames$;
  }

  createGame(playerName: string) {
    this.gameFacade.createGame(playerName);
  }

  joinToGame(gameId: string, playerName: string) {
    this.gameFacade.joinToGame(gameId, playerName);
  }

  backToGame(playerName: string) {
    this.gameFacade.backToGame(playerName);
  }

  startGame() {
    this.gameFacade.startGame();
  }

  removePlayer(playerId: string) {
    this.gameFacade.removePlayer(playerId);
  }

}
