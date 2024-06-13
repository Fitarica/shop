import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCalendarCellClassFunction, MatDatepicker, MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Subscription } from 'rxjs';
import { PublicHolidaysService } from 'src/app/service/holiday-service/holiday.service';
import { OverlayModule } from '@angular/cdk/overlay';

export interface DialogData {
  title: string
}

@Component({
  selector: 'app-date-picker-dialog',
  templateUrl: './date-picker-dialog.component.html',
  styleUrls: ['./date-picker-dialog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatTooltipModule,
    OverlayModule,
  ],
  providers: [],
})

export class DatePickerDialogComponent implements OnInit, OnDestroy {
  @ViewChild('datepicker', { static: true, read: ElementRef }) datepicker!: MatDatepicker<Date>;


  public dateControl!: FormControl;
  public publicHolidays!: any;
  public holidays!: Date[];
  public selectedDate!: Date;
  private sub$: Subscription[] = []

  constructor(
    private fb: FormBuilder,
    private publicHolidaysService: PublicHolidaysService
  ) {
  }
  
  ngOnInit(): void {
    this.getPublicHolidays();
    this.dateControl = this.fb.control(new Date());
    this.dateControl.valueChanges.subscribe((value)=> {
      console.log(value)
      this.selectedDate = value; 
    })

  }

  ngOnDestroy(): void {
    this.sub$.forEach(s => s.unsubscribe());
  }

  public dateFilter: (date: Date | null) => boolean =
    (date: Date | null) => {
      if (!date) {
        return false;
      }
      const day = date.getDay();
      return day !== 0 && day !== 6;
    };

  public dateClass: MatCalendarCellClassFunction<Date> = (cellDate) => {
    const isPublicHoliday = this.isPublicHoliday(cellDate)

    if (isPublicHoliday) {
      return 'highlight-date';
    }

    return "";
  }

  public tooltipText: MatCalendarCellClassFunction<Date> = (cellDate) => {
    const isPublicHoliday = this.isPublicHoliday(cellDate);

    if (isPublicHoliday) {
      return 'Public Holiday';
    }

    return '';
  };

  private getPublicHolidays(): void {
    const year = new Date().getFullYear();

    this.sub$.push(
      this.publicHolidaysService.getPublicHolidays(year, 'DE')
      .subscribe({
        next: (data => {
          this.publicHolidays = data;
          this.holidays = this.extractDates()
        }), error: (error) => {
          console.error(error);
        }
      }))
  }

  private isPublicHoliday(date: Date): boolean {
    return this.holidays.some(holiday => this.isSameDay(holiday, date));
  }

  private isSameDay(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear();
  }

  private extractDates(): Date[] {
    return this.publicHolidays.map((holiday: any) => new Date(holiday.date));
  }


}
