import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { InfoListComponent } from './info-list/info-list.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    InfoListComponent,
    EventHandlingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
