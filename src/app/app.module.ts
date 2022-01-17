import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChemistryComponent } from './chemistry/chemistry.component';
import { FlagsComponent } from './flags/flags.component';
import { StarwarsComponent } from './starwars/starwars.component';
import { FlagsChildComponent } from './flags/flags-child/flags-child.component';

import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChemistryComponent,
    FlagsComponent,
    StarwarsComponent,
    FlagsChildComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
