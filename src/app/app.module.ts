import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BirthdayComponent } from './birthday/birthday.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    BirthdayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
