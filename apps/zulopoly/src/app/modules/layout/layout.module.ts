import {NgModule} from '@angular/core';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './components/layout/layout.component';
import {BaseModule} from "@zulopoly/base";

@NgModule({
  declarations: [LayoutComponent],
  exports: [
    LayoutComponent
  ],
  imports: [
    BaseModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule {
}
