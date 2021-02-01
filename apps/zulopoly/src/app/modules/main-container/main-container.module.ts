import { NgModule } from '@angular/core';
import { MainContainerRoutingModule } from './main-container-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { BaseModule } from '@zulopoly/base';
import { MenubarModule, MenuModule } from 'primeng';
import { LoginComponent } from './components/login/login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMainContainer from './+state/main-container.reducer';
import { MainContainerEffects } from './+state/main-container.effects';
import { MainContainerFacade } from './+state/main-container.facade';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [LayoutComponent, LoginComponent, LoginFormComponent],
  exports: [LayoutComponent],
  imports: [
    BaseModule,
    MainContainerRoutingModule,
    MenubarModule,
    StoreModule.forFeature(
      fromMainContainer.MAINCONTAINER_FEATURE_KEY,
      fromMainContainer.reducer
    ),
    EffectsModule.forFeature([MainContainerEffects])
  ],
  providers: [MainContainerFacade]
})
export class MainContainerModule {}
