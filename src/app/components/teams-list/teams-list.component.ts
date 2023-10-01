import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Standing, StandingObject, fixtureResponse } from 'src/app/shared/models/football.model';
import { FootballApiService } from 'src/app/shared/services/football-api.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  // Declared variables
  public selectedMenu: string | null;
  tableData: Standing[] = [];
  public leagueId!: number;
  public showSpinner: boolean = false;
  public NoData: boolean;
  public resultData: fixtureResponse[] = [];

  // Injected services
  constructor(private footballApiService: FootballApiService, private activeRoute: ActivatedRoute,  private router: Router) {
    
    this.selectedMenu = '';
    this.tableData.length = 0;
    this.NoData = false;
  }

  ngOnInit() {
    // Subscribe to ActivatedRoute params
    this.activeRoute.params.subscribe((param) => {
      this.leagueId = parseInt(param['leagueId'] || 39);
      this.tableData.length = 0;
      this.NoData = false;
      this.loadTableData(this.leagueId);
      this.selectedMenu = param['country'];
    });
  }

  /**
   * Load legauge data into table
   * @param leagueId league id 
   */
  loadTableData(leagueId: number) {
    this.showSpinner = true;
    // Get football data 
    this.footballApiService.getLeagueStandings(leagueId).subscribe((data: StandingObject) => {
      if(data && data.response.length > 0) {
        this.tableData = data.response[0]?.league?.standings[0];
        this.NoData = false;
      } else {
        this.NoData = true;
      }
      this.showSpinner = false;
    });
  }

  /**
   * Navigate to teams game result page.
   * @param teamId navigate to teams game results by teamId, leagueId, season
   */
  getTeamGamesResult(teamId: number) {
    this.router.navigate(['game-results/', this.leagueId, teamId, 2023]);
  }
}
