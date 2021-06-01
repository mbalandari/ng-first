import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first';

  doSomething(): void {
    alert("Doing something...");
  }

  doAnotherThing(): void {
    alert("Doing another thing...");
  }

  doSomethingElse(): void {
    alert("Doing something else...");
  }

}
