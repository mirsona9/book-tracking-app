import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { UpdatebookComponent } from './components/updatebook/updatebook.component';
import { ViewbooksComponent } from './components/viewbooks/viewbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    UpdatebookComponent,
    ViewbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
