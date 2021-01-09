import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from "./components/game/game.component";
import { ChatComponent } from "./components/chat/chat.component";

const routes: Routes = [
  { path: '', redirectTo: 'game', pathMatch: 'full' },
  {
    path: 'game',
    component: GameComponent,
    loadChildren: () => import('../board/board.module').then(m => m.BoardModule)
  },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {
}
