import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AutoCompleteModule,
    InputTextModule,
    ButtonModule
=======
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AutocompleteTemplateDemo } from './component/currency.convert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteTemplateDemo
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule
>>>>>>> refs/remotes/origin/main
  ],
  providers: [],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule { }
=======
export class AppModule {}
>>>>>>> refs/remotes/origin/main
