import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { TeamsGameResultsComponent } from './components/teams-game-results/teams-game-results.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsListComponent,
    HeaderMenuComponent,
    TeamsGameResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
