import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
import { FixtureObject, StandingObject, leaguesMenu } from '../models/football.model';
import { leagueList } from '../models/menu.mock';

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {

  private headers = {};
  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    
    this.apiUrl = 'https://v3.football.api-sports.io/';
    this.headers = new Headers({
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '9e1f96f62a678510c2abe7e0483bcddc'
    })
  }

  /**
   * Get Countries
   * @returns returns countires header menus
   */
  getCountries(): leaguesMenu[] {
    return leagueList;
  }

  /**
   * Get League Standings function
   * @param leagueId pass leagueId param
   * @returns It retruns standings by leagueId
   */
  getLeagueStandings(leagueId: number): Observable<StandingObject> {
    return this.httpClient.get<StandingObject>(`${this.apiUrl}standings?league=${leagueId}&season=2023`, { headers: this.headers });
  }

  /**
   * Get Games Result function
   * @param leagueId leagueId
   * @param teamsId teamsId
   * @param season season
   * @returns It returns the last 10 games results.
   */
  getGamesResult(leagueId: number,teamsId: number,season: number = 2023): Observable<FixtureObject> {
    return this.httpClient.get<FixtureObject>(`${this.apiUrl}fixtures?league=${leagueId}&season=${season}&team=${teamsId}&last=10`, { headers: this.headers });
  }
}
