import { Injectable } from '@angular/core';
import { SocketGame } from "../app.module";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private socket: SocketGame
  ) {
  }

}
