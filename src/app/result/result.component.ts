import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
 id:any;
 date;
 Month;
 months=[];
 day;
 days;
 year;
 result;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.id = res['id'];
      this.date = new Date(this.id);
      this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      this.day = new Intl.DateTimeFormat('en-US', {
        weekday: 'long'
      }).format(this.date);
      this.days = this.date.getDay();
      this.year = this.date.getFullYear();
      this.result = this.day + ', ' + this.days + ' ' + this.months[this.date.getMonth()] + ' ' + this.year;
    });
  }

}
