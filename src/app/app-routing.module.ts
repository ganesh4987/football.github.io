import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TeamsGameResultsComponent } from './components/teams-game-results/teams-game-results.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'leagues/England/39', pathMatch: 'full'},
  {path: 'leagues/:country/:leagueId', component: TeamsListComponent},
  {path: 'game-results/:leagueId/:teamsId/:season', component: TeamsGameResultsComponent},

  {path: '**', component: PageNotFoundComponent, pathMatch: 'full', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
