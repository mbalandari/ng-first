import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CounterButtonPageComponent} from './counter-button-page/counter-button-page.component';
import {EventHandlingComponent} from './event-handling/event-handling.component';
import {ExampleComponent} from './example/example.component';
import {MultipleChoiceComponent} from './multiple-choice/multiple-choice.component';
import {InfoListComponent} from './info-list/info-list.component';
import {ParamsExampleComponent} from './params-example/params-example.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import { UserDisplayComponent } from './user-display/user-display.component';

const routes: Routes = [
  {path: "counter-button", component: CounterButtonPageComponent},
  {path: "event-handling", component: EventHandlingComponent},
  {path: "example", component: ExampleComponent},
  {path: "multiple-choice", component: MultipleChoiceComponent},
  {path: "info-list", component: InfoListComponent},
  {path: "params-example/:urlParam/:anotherParam", component: ParamsExampleComponent},
  {path: "user-info-form", component: UserInfoFormComponent},
  {path: "user-display", component: UserDisplayComponent},
  {path: "", redirectTo: "/info-list", pathMatch: "full"},
  {path: "**", component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
