import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private calendarVisibleSource = new BehaviorSubject<boolean>(false);
  calendarVisible$ = this.calendarVisibleSource.asObservable();

  toggleCalendar() {
    this.calendarVisibleSource.next(!this.calendarVisibleSource.value);
  }

  closeCalendar() {
    this.calendarVisibleSource.next(false);
  }
}
