import { Component } from '@angular/core';
import { FootballApiService } from '../../shared/services/football-api.service';
import { FixtureObject, fixtureResponse } from '../../shared/models/football.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teams-game-results',
  templateUrl: './teams-game-results.component.html',
  styleUrls: ['./teams-game-results.component.scss']
})
export class TeamsGameResultsComponent {

  resultData: fixtureResponse[] = [];
  public leagueId!: number;
  public NoData!: boolean;
  public showSpinner!: boolean;

  constructor(private footballApiService: FootballApiService, private activeRoute: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    //get route params
    this.activeRoute.params.subscribe((param) => {
      console.log(param['leagueId']);
      this.leagueId = parseInt(param['leagueId'] || 39);
      this.getTeamsGameRecords(this.leagueId, parseInt(param['teamsId']), parseInt(param['season']));
    });
  }

  /**
   * Get Teams Game Records
   * @param leagueId league Id
   * @param teamsId  Teams Id
   * @param season Seson
   */
  getTeamsGameRecords(leagueId: number, teamsId: number, season: number = 2023) {
    this.showSpinner = true;
    this.footballApiService.getGamesResult(leagueId, teamsId, season).subscribe((data: FixtureObject) => {
      data.response ? this.resultData = data.response : this.NoData = true;
      this.showSpinner = false;
    })
  }

  // go back to list page.
  goBack() {
    this.location.back();
  }
}
