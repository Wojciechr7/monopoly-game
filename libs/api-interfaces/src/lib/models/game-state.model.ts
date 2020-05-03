import { PlayerModel } from "./player.model";
import { PropertyCardModel } from "./property-card.model";

export interface GameStateModel {
  gameStarted: boolean;
  currentPlayer: number;
  players: PlayerModel[];
  leftDice: number;
  rightDice: number;
  availablePropertyCards: PropertyCardModel[];
  chanceCards: number[];
  communityChestCards: number[];
}
