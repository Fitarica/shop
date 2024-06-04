import { Component, OnDestroy, OnInit } from '@angular/core';
import { EstateItem } from '../model/estate.model';
import { EstateService } from 'src/app/service/estate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy{
  public houses: EstateItem[] = [];

  private subs$ : Subscription[] = []

  constructor(private estateService: EstateService){}

  ngOnInit(): void {
    this.subs$.push(this.estateService.estateData$.subscribe(estateItems => {
      this.houses = estateItems;
    }))
  }

  ngOnDestroy(): void {
    this.subs$.forEach(sub => sub.unsubscribe());
  }

}
