import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PhonesComponent } from './phones/phones.component';
import { TabletsComponent } from './tablets/tablets.component';
import { RoutingSetupComponent } from './routing-setup/routing-setup.component';
import { SandboxComponent } from './sandbox/sandbox.component';


const availableRoutes: Routes = [
  { path: '', redirectTo: '/landingPage', pathMatch: 'full' }, // Default path
  { path: 'landingPage', component: LandingPageComponent},
  { path: 'phones', component: PhonesComponent },
  { path: 'tablets', component: TabletsComponent },
  { path: 'routingSetup', component: RoutingSetupComponent },
  { path: 'sandbox', component: SandboxComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(availableRoutes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
