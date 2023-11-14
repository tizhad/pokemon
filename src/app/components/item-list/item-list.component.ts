import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {ApiService} from "../../service/api.service";
import {ExtractorServiceService} from "../../service/extractor-service.service";
import {ActivatedRoute, Data} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this.route.data.subscribe({
      next: data => this.handlePokemonData(data),
      error: error => this.handleError(error)
    })
  }

  constructor(private apiService: ApiService,
              private extractorService: ExtractorServiceService,
              private route: ActivatedRoute) {
  }

  handlePokemonData(data: Data) {
    this.pokemons = data['pokemons'].results.map((pokemon: Pokemon) => {
      pokemon.id = this.extractorService.extractItemId(pokemon.url);
      pokemon.imageUrl = this.getPokemonImage(pokemon.id);
      return pokemon;
    });
  }

  handleError(error: HttpErrorResponse) {
    this.errorMessage = error.message;
  }

  getPokemonImage(pokemonId: number) {
    return this.apiService.getPokemonImage(pokemonId);
  }

}
