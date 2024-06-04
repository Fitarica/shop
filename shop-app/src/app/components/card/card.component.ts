import { Component, Input } from '@angular/core';
import { EstateItem } from 'src/app/core/model/estate.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input() estateItem!: EstateItem;
}
