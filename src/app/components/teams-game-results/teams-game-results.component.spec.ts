import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsGameResultsComponent } from './teams-game-results.component';

describe('TeamsGameResultsComponent', () => {
  let component: TeamsGameResultsComponent;
  let fixture: ComponentFixture<TeamsGameResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsGameResultsComponent]
    });
    fixture = TestBed.createComponent(TeamsGameResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
