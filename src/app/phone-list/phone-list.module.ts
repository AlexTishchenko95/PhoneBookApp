import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneListComponent } from './phone-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PhoneListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [PhoneListComponent]
})
export class PhoneListModule { }
