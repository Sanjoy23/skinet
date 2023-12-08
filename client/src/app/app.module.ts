import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatList, MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
