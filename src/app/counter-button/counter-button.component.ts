import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
  @Input() count: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }
}
