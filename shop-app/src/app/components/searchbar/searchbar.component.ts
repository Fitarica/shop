import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit, OnDestroy{
  @Output() searchTextChanged = new EventEmitter<string>();
  searchForm: FormGroup;

  private sub$: Subscription[] = [];

  searchText: string = '';

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchText: ['']
    });
  }
  ngOnInit(): void {
    const inputCtrl = this.searchForm.get('searchText'); 
    if(!inputCtrl?.value) return; 

    this.sub$.push(inputCtrl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(text => {
      this.searchTextChanged.emit(text);
    }))
  }

  ngOnDestroy(): void {
    this.sub$.forEach(s => s.unsubscribe());
  }
}
