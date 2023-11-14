import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "../../models/pokemon";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-about',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  private pokemonId: number = 0;
  pokemon: Pokemon = {} as Pokemon;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe(params => {
      this.pokemonId = parseInt(params['id']);
      if (this.pokemonId) {
        this.pokemon.imageUrl = this.apiService.getPokemonImage(this.pokemonId);
        this.getPokemonData();
      }
    });

  }

  getPokemonData() {

    this.apiService.getPokemon(this.pokemonId).subscribe(data => {
      this.pokemon.name = data.name;
    })
  }

}
