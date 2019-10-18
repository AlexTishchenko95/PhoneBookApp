import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { DeleteNumber, FavoriteNumber } from '../redux/phones.action';
import { Observable } from 'rxjs';
import { PhonePosition } from '../phone-position.model';

export interface PhoneList {
  surname: string;
  name: string;
  patronName: string;
  telephone: string;
}

const selectPhone = (state: AppState) => state.PhonePage;
const selectPhoneList = createSelector(
  selectPhone,
  (PhonePage) => PhonePage.phoneList
);

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  displayedColumns = ['favorite', 'surname', 'name', 'patronName', 'telephone', 'delete'];
  data$: Observable<PhonePosition[]>;

  ngOnInit() {
    this.data$ = this.store.select(selectPhoneList);
  }

  onDelete(pos) {
    this.store.dispatch(new DeleteNumber({ id: pos }));
  }

  onFavorite(pos) {
    this.store.dispatch(new FavoriteNumber({ id: pos }));
  }
}
