import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  Date;
  date='';
  errDate=false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit(form: NgForm){
    if(form.value.date != ''){ 
      this.errDate = false ;
      this.router.navigate(['/result', form.value.date]);
    }else{
      this.errDate = true;
    }
  }

}
