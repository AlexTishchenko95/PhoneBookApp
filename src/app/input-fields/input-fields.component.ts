import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { PhonePosition } from '../phone-position.model';
import { AddNumber } from '../redux/phones.action';

function phoneValidator(control: FormControl): ValidationErrors {
  if (control.value && control.value.length >= 9) {
    return null;
  }
  return { phoneWarning: 'Неверный регион, либо формат номера' };
}

@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFieldsComponent {
  formCreate: FormGroup;

  constructor(private store: Store<AppState>) {
    this.formCreate = new FormGroup({
      surname: new FormControl('', Validators.required),
      name: new FormControl(''),
      patronName: new FormControl(''),
      telephone: new FormControl('', phoneValidator)
    });
  }

  onCreateItem() {
    const { surname, name, patronName, telephone } = this.formCreate.value;
    const newPosition = new PhonePosition(surname, name, patronName, '+375 ' + telephone);
    this.store.dispatch(new AddNumber(newPosition));
  }
}
