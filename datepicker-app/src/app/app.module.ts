import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { PhoneIntlPrexixPipe } from './pipes/phone-intl-prexix.pipe';
import { DatePickerDialogComponent } from './components/date-picker-dialog/date-picker-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PublicHolidaysService } from './service/holiday-service/holiday.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    CardComponent,
    PhoneIntlPrexixPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatDialogModule, 
    DatePickerDialogComponent, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
