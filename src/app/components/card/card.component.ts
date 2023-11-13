import {Component, Input} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() pokemon: Pokemon = {} as Pokemon;
  isContentVisible: boolean = true;

  constructor( private router: Router) {
  }
  onArrowClick() {
    this.isContentVisible = !this.isContentVisible;
  }

  onPokemonCardClicks() {
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }
}
