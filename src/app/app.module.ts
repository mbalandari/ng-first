import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { InfoListComponent } from './info-list/info-list.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { GongratMessageComponent } from './gongrat-message/gongrat-message.component';
import { CounterButtonPageComponent } from './counter-button-page/counter-button-page.component';
import { ParamsExampleComponent } from './params-example/params-example.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { ButtonComponent } from './button/button.component';
import { DangerButtonComponent } from './danger-button/danger-button.component';
import { SuccessButtonComponent } from './success-button/success-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    InfoListComponent,
    EventHandlingComponent,
    MultipleChoiceComponent,
    CounterButtonComponent,
    GongratMessageComponent,
    CounterButtonPageComponent,
    ParamsExampleComponent,
    NotFoundPageComponent,
    UserInfoFormComponent,
    NavBarComponent,
    UserDisplayComponent,
    ButtonComponent,
    DangerButtonComponent,
    SuccessButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
