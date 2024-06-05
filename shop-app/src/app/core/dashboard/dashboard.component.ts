import { Component, OnDestroy, OnInit } from '@angular/core';
import { EstateItem } from '../model/estate.model';
import { EstateService } from 'src/app/service/estate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public houses: EstateItem[] = [];
  public filteredHouses: EstateItem[] = [];
  public searchText: string = '';

  private subs$: Subscription[] = []

  constructor(private estateService: EstateService) { }

  ngOnInit(): void {
    this.subs$.push(this.estateService.estateData$.subscribe(estateItems => {
      this.houses = estateItems;
      this.filterHouses();
    }));

  }

  ngOnDestroy(): void {
    this.subs$.forEach(sub => sub.unsubscribe());
  }

  filterHouses() {
    const searchTextLower = this.searchText.toLowerCase();
    if (searchTextLower === '') {
      this.filteredHouses = [...this.houses]; // Restore original list
    } else {
      this.filteredHouses = this.houses.filter(house =>
        house.propertyName.toLowerCase().includes(this.searchText.toLowerCase()) ||
        house.location.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  onSearchTextChanged(searchText: string) {
    this.searchText = searchText;
    this.filterHouses()
  }


}
