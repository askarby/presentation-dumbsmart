import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarService } from './car.service';
import { PeopleService } from './people.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    CarService,
    PeopleService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
