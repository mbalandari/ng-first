import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first';
  count: number = 0;

  incrementCount(): void {
    this.count += 1;
  }

}
