import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gongrat-message',
  templateUrl: './gongrat-message.component.html',
  styleUrls: ['./gongrat-message.component.css']
})
export class GongratMessageComponent implements OnInit {
  @Input() count = 0;
  @Input() threshold = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
