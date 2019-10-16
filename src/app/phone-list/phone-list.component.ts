import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { DeleteNumber, FavoriteNumber } from '../redux/phones.action';

export interface PhoneList {
  surname: string;
  name: string;
  patronName: string;
  telephone: string;
}

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  displayedColumns: string[] = ['favorite', 'surname', 'name', 'patronName', 'telephone', 'delete'];
  dataSource = [];

  ngOnInit() {
    this.store.select('PhonePage').subscribe(list$ => {
      this.dataSource = list$.phoneList;
      console.log(list$);
    });
  }

  onDelete(pos) {
    this.store.dispatch(new DeleteNumber({ id: pos }));
  }

  onFavorite(pos) {
    this.store.dispatch(new FavoriteNumber({ id: pos }));
  }
}
