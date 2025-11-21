import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsTableComponent } from './teams-table.component';

describe('TeamsComponent', () => {
  let component: TeamsTableComponent;
  let fixture: ComponentFixture<TeamsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
