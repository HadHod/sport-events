import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SportEventDetailsComponent } from './sport-event-details/sport-event-details.component';

const COMPONENTS = [
  PageNotFoundComponent,
  IndexComponent,
  SportEventDetailsComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CoreRoutingModule, RouterModule, SharedModule, GoogleMapsModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. You should only import Core modules in the AppModule only.',
      );
    }
  }
}
