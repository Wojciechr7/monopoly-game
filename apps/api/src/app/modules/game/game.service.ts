import { Injectable } from '@nestjs/common';
import { GameStateModel } from "../../../../../../libs/api-interfaces/src/lib/models/game-state.model";
import { getRandomNumber } from "../../../../../../libs/base/src/lib/helpers/get-random-number";
import { PlayerModel } from "../../../../../../libs/api-interfaces/src/lib/models/player.model";

@Injectable()
export class GameService {

  private games: GameStateModel[] = [];

  get Games() {
    return this.games;
  }

  createNewGame(playerId: string, playerName: string) {
    const newGame: GameStateModel = {
      gameStarted: false,
      availablePropertyCards: undefined,
      chanceCards: [],
      communityChestCards: [],
      currentPlayer: 0,
      leftDice: 1,
      players: [{ id: playerId, isConnected: true, name: playerName, position: 0 }],
      rightDice: 3
    }

    this.games.push(newGame);
  }

  rollDice() {
    const leftDice = getRandomNumber(1, 6);
    const rightDice = getRandomNumber(1, 6);

    //this.games.push(newGame);
  }

  joinToGame(gameIndex: number, playerId: string, playerName: string): boolean {
    if (!this.gameExist(gameIndex)) {
      return false;
    }

    if (this.foundDuplicatedPlayerName(gameIndex, playerName)) {
      return false;
    }

    const newPlayer: PlayerModel = {
      id: playerId, isConnected: true, name: playerName, position: 0
    };

    this.games[gameIndex].players.push(newPlayer);

    return true;
  }

  handleDisconnectedPlayer(playerId: string) {
    this.games.forEach((game: GameStateModel, index: number) => {
      const foundPlayer = game.players.find((player: PlayerModel) => player.id === playerId);

      if (foundPlayer) {
        foundPlayer.isConnected = false;
      }

      if (!game.players.some((player: PlayerModel) => player.isConnected)) {
        this.games = this.games.filter((g: GameStateModel, i: number) => i !== index);
      }
    });
  }

  private gameExist(gameIndex: number): boolean {
    return !!this.games[gameIndex];
  }

  private foundDuplicatedPlayerName(gameIndex: number, playerName: string): boolean {
    return this.games[gameIndex].players.some((player: PlayerModel) => player.name === playerName);
  }

}
