import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import { ResultRoutingModule } from './result-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ResultRoutingModule
  ],
  declarations: [ResultComponent]
})
export class ResultModule { }
