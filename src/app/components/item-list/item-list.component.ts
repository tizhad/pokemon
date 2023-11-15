import {Component, HostListener, OnInit} from '@angular/core';
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
  private pokemonsData: Pokemon[] = [];
  errorMessage: string = '';
  start: number = 0;
  pokemonPerPage: number = 5;
  pokemons: Pokemon[] = [];
  max: number = 0;
  isLoading: boolean = true;

  ngOnInit(): void {
    this.isLoading = true;
    this.route.data.subscribe({
      next: data =>
        this.handlePokemonData(data),
      error: error => this.handleError(error)
    });
    this.loadMorePokemons();
  }

  constructor(private apiService: ApiService,
              private extractorService: ExtractorServiceService,
              private route: ActivatedRoute) {
  }

  handlePokemonData(data: Data) {
    this.pokemonsData = data['pokemons'].results.map((pokemon: Pokemon) => {
      pokemon.id = this.extractorService.extractItemId(pokemon.url);
      pokemon.imageUrl = this.getPokemonImage(pokemon.id);
      return pokemon;
    });
    this.max = this.pokemonsData.length;
    if (this.pokemonsData.length === 0) {
      this.errorMessage = 'No pokemons found!';
      return;
    }

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    let maxScrollPosition: number = document.documentElement.scrollHeight - window.innerHeight;
    let currentScrollPosition: number = window.scrollY;

    if (currentScrollPosition >= maxScrollPosition && !this.isLoading) {
      this.loadMorePokemons();
    }
  }

  loadMorePokemons() {
    this.isLoading = true;

    setTimeout(() => {
      this.start += this.pokemonPerPage;
      this.pokemons = this.pokemonsData.slice(0, this.start + this.pokemonPerPage);
      this.isLoading = false;
    }, 500);
  }

  handleError(error: HttpErrorResponse) {
    this.errorMessage = error.message;
  }

  getPokemonImage(pokemonId: number) {
    return this.apiService.getPokemonImage(pokemonId);
  }
}
