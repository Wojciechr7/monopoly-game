import { PlayerModel } from "./player.model";
import { PropertyCardModel } from "./property-card.model";

export interface GameStateModel {
  id?: string;
  gameStarted: boolean;
  currentPlayer: string;
  players: PlayerModel[];
  leftDice: number;
  rightDice: number;
  diceRolled: boolean;
  availablePropertyCards: PropertyCardModel[];
  chanceCards: number[];
  communityChestCards: number[];
}
