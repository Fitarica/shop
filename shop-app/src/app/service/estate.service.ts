import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EstateItem } from '../core/model/estate.model';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  private mockUrl = 'assets/mockupdata.json'; // Path to mock data file

  private estateDataSubject = new BehaviorSubject<any[]>([]);
  estateData$ = this.estateDataSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchEstateList();
  }

  private fetchEstateList() {
    this.http.get<EstateItem[]>(this.mockUrl).subscribe({
      next: (data) => {
        this.estateDataSubject.next(data);
      },
      error: (error) => {
        console.error('Error fetching mock data:', error);
      }
    });
  }
}
