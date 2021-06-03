import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  isLoading: boolean = true;
  info: any = {};
  constructor(
    private userInfo: UserInfoService,
  ) { }

  ngOnInit(): void {
    this.userInfo.loadData()
      .subscribe(data => {
        console.log(data.results[0]);
        this.info = data.results[0];
        this.isLoading = false;
      });
  }

}
