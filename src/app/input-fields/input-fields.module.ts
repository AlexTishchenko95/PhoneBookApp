import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldsComponent } from './input-fields.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [InputFieldsComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [InputFieldsComponent]
})
export class InputFieldsModule { }
