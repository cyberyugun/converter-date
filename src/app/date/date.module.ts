import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date.component';
import { DateRoutingModule } from './date-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialAppModule } from '../ngmaterial.module';

@NgModule({
  imports: [
    CommonModule,
    DateRoutingModule,
    MaterialAppModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DateComponent]
})
export class DateModule {}
