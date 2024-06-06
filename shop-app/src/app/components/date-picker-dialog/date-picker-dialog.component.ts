import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


export interface DialogData {
  title: string 
}

@Component({
  selector: 'app-date-picker-dialog',
  templateUrl: './date-picker-dialog.component.html',
  styleUrls: ['./date-picker-dialog.component.scss'], 
  standalone: true, 
  imports: [
    MatDialogModule, 
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ], 
  providers: [MatDialogConfig],
})

export class DatePickerDialogComponent implements OnInit{

  public dialogData: DialogData = {
    title: 'string' 
  }
  public dateControl!: FormControl;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DatePickerDialogComponent>,
    public dialogConfig: MatDialogConfig,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
  ) {
    this.dialogData = { ...this.dialogData, ...data };
  }
  ngOnInit(): void {
    const today = new Date();
    this.dateControl = this.fb.control(today) 
  }

}
