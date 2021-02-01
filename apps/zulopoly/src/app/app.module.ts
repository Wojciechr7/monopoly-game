import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { MainContainerModule } from './modules/main-container/main-container.module';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './+state/app.effects';
import { NxModule } from '@nrwl/angular';
import { appReducer, initialState as appInitialState } from './+state/app.reducer';
import { environment } from '../environments/environment';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Socket, SocketIoModule } from "ngx-socket-io";
import { AppRoutingModule } from './app-routing.module';

@Injectable()
export class SocketChat extends Socket {

  constructor() {
    super({ url: `${ environment.baseUrl }:3333`, options: {} });
  }

}

@Injectable()
export class SocketGame extends Socket {

  constructor() {
    super({ url: `${ environment.baseUrl }:4001`, options: {} });
  }

}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      { router: routerReducer, app: appReducer }, {
        /*      runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
              },*/
        initialState: {
          router: {
            state: {
              url: '/',
              params: {},
              queryParams: {}
            },
            navigationId: 0
          },
          app: appInitialState
        }
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RouterModule,
    MainContainerModule,
    StoreRouterConnectingModule.forRoot(),
    SocketIoModule,
    AppRoutingModule
  ],
  providers: [SocketChat, SocketGame],
  bootstrap: [AppComponent]
})
export class AppModule {}
