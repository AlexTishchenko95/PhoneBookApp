import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Store, createSelector, select } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { DeleteNumber, FavoriteNumber } from '../redux/phones.action';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface PhoneList {
  surname: string;
  name: string;
  patronName: string;
  telephone: string;
}

const selectPhone = (state: AppState) => state.PhonePage;
const selectPhoneList = createSelector(
  selectPhone,
  (PhonePage) => PhonePage
);

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneListComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject<void>();


  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) { }
  displayedColumns = ['favorite', 'surname', 'name', 'patronName', 'telephone', 'delete'];
  dataSource = [];

  ngOnInit() {
    this.store.pipe(select(selectPhoneList))
      .pipe(takeUntil(this.destroy$))
      .subscribe(list => {
        this.dataSource = list.phoneList;
        this.cd.markForCheck();
      });
  }

  onDelete(pos) {
    this.store.dispatch(new DeleteNumber({ id: pos }));
  }

  onFavorite(pos) {
    this.store.dispatch(new FavoriteNumber({ id: pos }));
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
