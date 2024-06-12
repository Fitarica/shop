import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicHolidaysService {

  private apiUrl = 'https://date.nager.at/api/v3/PublicHolidays';

  constructor(private http: HttpClient) { }

  getPublicHolidays(year: number, countryCode: string): Observable<any> {
    const url = `${this.apiUrl}/${year}/${countryCode}`;
    return this.http.get(url);
  }
}
