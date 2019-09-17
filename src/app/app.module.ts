import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"; //import module
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//primeNG
import { TableModule } from "primeng/table";
import { SliderModule } from "primeng/slider";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";

import { TableComponent } from "./table/table.component";
import { ToastModule } from "primeng/toast";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MultiSelectModule } from "primeng/multiselect";
import { CalendarModule } from "primeng/calendar";

import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";

import { DynamicDialogModule } from "primeng/dynamicdialog";
import { EditComponent } from "./edit/edit.component";

import { DialogModule } from "primeng/dialog";

@NgModule({
  declarations: [AppComponent, TableComponent, EditComponent],
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
    CalendarModule,
    MessagesModule,
    MessageModule,
    DynamicDialogModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
