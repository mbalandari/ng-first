import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.component.html',
  styleUrls: ['./event-handling.component.css']
})
export class EventHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doSomething(): void {
    alert("Hello!");
  }

  sayBye(): void {
    alert("Goodie bye!!");
  }

}
