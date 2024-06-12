import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EstateItem } from 'src/app/core/model/estate.model';
import { DatePickerDialogComponent, DialogData } from '../date-picker-dialog/date-picker-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input() estateItem!: EstateItem;

constructor(private dialog: MatDialog) {}

public openDatePickerDialog(){
  const dialogConfig: MatDialogConfig<DialogData> = {
    maxHeight: '90%',
    maxWidth: '80rem',
    data : {title: 'Select a Date'}
  }
 const dialogRef = this.dialog.open(DatePickerDialogComponent, dialogConfig);

 dialogRef.afterClosed().subscribe((result: any) => {

 })
}
}
