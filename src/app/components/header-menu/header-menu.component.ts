import { Component } from '@angular/core';
import { FootballApiService } from '../../shared/services/football-api.service';
import { ActivatedRoute } from '@angular/router';
import { leaguesMenu } from 'src/app/shared/models/football.model';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {

  title = 'football-league';
  public selectedMenu: string;
  public countryList: leaguesMenu[];

  constructor(private footballApiService: FootballApiService, private activeRoute: ActivatedRoute) {
    this.selectedMenu = '';
    this.countryList = [];
  }

  ngOnInit() {
    // get route params
    this.activeRoute.params.subscribe((param) => {
      this.selectedMenu = param['country'];
      this.setActiveMenuItem(this.selectedMenu || 'England');
    });
    this.countryList = this.footballApiService.getCountries();
  }

  /**
   * Set active menu selection
   * @param name selected menu name
   */
  setActiveMenuItem(name: string) {
    this.selectedMenu = name;
  }
}
