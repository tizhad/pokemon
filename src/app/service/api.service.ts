import {Injectable} from '@angular/core';
import {environment} from "../environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = environment.baseUrl;
  private defaultLimit: number = 1000;

  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<any> {
    const url: string = `${this.baseUrl}?limit=${this.defaultLimit}`;
    return this.http.get(url);
  }

  getPokemonImage(pokemonId: number) {
    return `${environment.imageApiUrl}/${pokemonId}.png`;
  }

  getPokemon(pokemonId: number): Observable<any> {
    const url: string = `${this.baseUrl}/${pokemonId}`;
    return this.http.get(url);
  }
}
