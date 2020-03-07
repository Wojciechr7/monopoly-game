import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {RouterModule} from '@angular/router';
import {LayoutModule} from './modules/layout/layout.module';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './+state/app.effects';
import {NxModule} from '@nrwl/angular';
import {appReducer, initialState as appInitialState} from './+state/app.reducer';
import {environment} from '../environments/environment';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      {router: routerReducer, app: appReducer}, {
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
    LayoutModule,
    StoreRouterConnectingModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
