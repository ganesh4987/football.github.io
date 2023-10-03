export interface leaguesMenu {
  id: number,
  name: string
}

export interface StandingObject {
  get: string;
  parameters: param;
  errors: errorObject[];
  results: number;
  paging: Paging;
  response: StandingResponse[];
}

export interface StandingResponse {
  league: League;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Standing[][];
}

export interface Standing {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description?: string;
  all: All;
  home: All;
  away: All;
  update: string;
}

export interface All {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface Goals {
  for: number;
  against: number;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface Paging {
  current: number;
  total: number;
}

export interface param {
  league: string;
  season: string;
}

export interface FixtureObject {
  get: string;
  parameters: FixtureParameters;
  errors: errorObject[];
  results: number;
  paging: Paging;
  response: fixtureResponse[];
}

export interface errorObject {
  time: string,
  bug: string,
  reprot: string
}

export interface fixtureResponse {
  fixture: Fixture;
  league: FixtureLeague;
  teams: Teams;
  goals: fixtureGoals;
  score: Score;
}

export interface Score {
  halftime: fixtureGoals;
  fulltime: Fulltime;
  extratime: Fulltime;
  penalty: Fulltime;
}

export interface Fulltime {
  home?: number;
  away?: number;
}

export interface fixtureGoals {
  home: number;
  away: number;
}

export interface Teams {
  home: Home;
  away: Home;
}

export interface Home {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
}

export interface FixtureLeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

export interface Fixture {
  id: number;
  referee?: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

export interface Status {
  long: string;
  short: string;
  elapsed: number;
}

export interface Venue {
  id: number;
  name: string;
  city: string;
}

export interface Periods {
  first: number;
  second?: number;
}

export interface FixtureParameters {
  live: string;
}