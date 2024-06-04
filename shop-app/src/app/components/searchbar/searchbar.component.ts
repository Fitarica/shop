import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit{
  public formGroup!: FormGroup; 

  @Input()
  public search!: (value: string) => void;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      inputSearch: new FormControl<string>('', [Validators.pattern('[a-zA-Z ]*')])
    });
  }

  public onChange(){
    this.search(this.formGroup.get('inputSearch')?.value);
  }
}
