import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {ApiService} from "../service/api.service";

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

  constructor(private apiService: ApiService) {
  }

  getPokemonsData() {
    this.apiService.getPokemons()
      .subscribe((data: any) => {
        data.results.map((pokemon: Pokemon) => {
          this.pokemons.push(pokemon);
        })
      });
  }

}
