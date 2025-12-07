import { Component, OnDestroy } from '@angular/core';
import { interval, map, Observable, Subject, takeUntil } from 'rxjs';
import { TeamsTableComponent } from '../teams-table/teams-table.component';
import { MatchesTableComponent } from '../matches-table/matches-table.component';
import { PlayersTableComponent } from '../players-table/players-table.component';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    TeamsTableComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    UpperCasePipe,
    CommonModule,
    
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnDestroy {
  title = 'Admin Dashboard';

  private destroy$ = new Subject<void>();

  // ticking clock (emits new Date every second)
  actualDate$: Observable<Date> = interval(1_000).pipe(
    map(() => new Date()),
    takeUntil(this.destroy$)
  );

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
