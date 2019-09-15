import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"; //import module
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//primeNG
import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/slider'
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';

import { TableComponent } from './table/table.component';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ////primeNG
    TableModule,
    SliderModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
