import {Component, Input} from '@angular/core';
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() pokemon: Pokemon = {} as Pokemon;
  isContentVisible: boolean = true;

  onArrowClick() {
    this.isContentVisible = !this.isContentVisible;

  }
}
