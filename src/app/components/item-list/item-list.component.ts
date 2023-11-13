import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {ApiService} from "../../service/api.service";
import {ExtractorServiceService} from "../../service/extractor-service.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  ngOnInit(): void {
    this.getPokemonsData();
  }

  constructor(private apiService: ApiService,
              private extractorService: ExtractorServiceService) {
  }

  getPokemonsData() {
    this.apiService.getPokemons()
      .subscribe((data: any) => {
        data.results.map((pokemon: any) => {
          pokemon.id = this.extractorService.extractItemId(pokemon.url);
          pokemon.imageUrl = this.getPokemonImage(pokemon.id);
          this.pokemons.push(pokemon);
        })
      });
  }

  getPokemonImage(pokemonId: number) {
    return this.apiService.getPokemonImage(pokemonId);
  }

}
