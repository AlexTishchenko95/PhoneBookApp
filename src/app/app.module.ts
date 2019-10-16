import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { InputFieldsModule } from './input-fields/input-fields.module';
import { PhoneListModule } from './phone-list/phone-list.module';
import { StoreModule } from '@ngrx/store';
import { phonesReducer } from './redux/phones.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    InputFieldsModule,
    PhoneListModule,
    StoreModule.forRoot({ PhonePage: phonesReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
