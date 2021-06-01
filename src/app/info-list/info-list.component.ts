import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css']
})
export class InfoListComponent implements OnInit {
  info = [{
    name: "John",
    age: 35,
    hairColor: "Brown"
  }, {
    name: "Sarah",
    age: 42,
    hairColor: "Blonde"
  }, {
    name: "Mike",
    age: 63,
    hairColor: "Black"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
