import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { PhonesComponent } from './phones/phones.component';
import { TabletsComponent } from './tablets/tablets.component';
import { AppRoutingModule } from './/app-routing.module';
import { RoutingSetupComponent } from './routing-setup/routing-setup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    PhonesComponent,
    TabletsComponent,
    RoutingSetupComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
